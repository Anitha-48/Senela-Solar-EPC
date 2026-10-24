import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Zap, Sun, PanelsTopLeft, Ruler, Wallet, TrendingUp, Leaf, ArrowRight, Receipt, PiggyBank,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { calculatorConfig as cfg } from "../config/calculatorConfig";

/* ------------------------------------------------------------------ */
/*  Pure calculation helpers (exported so they can be unit tested)     */
/* ------------------------------------------------------------------ */

const safe = (v, min = 0) => {
  const n = Number(v);
  return Number.isFinite(n) ? Math.max(n, min) : min;
};

const useSlabs = (systemType) => cfg.slabTariffTypes.includes(systemType);

// Energy charge (₹) for a number of units in ONE bi-monthly bill, incl. electricity tax.
export function energyCostForUnits(units, systemType, flatTariff) {
  const taxMult = 1 + cfg.electricityTaxPercent / 100;
  if (!useSlabs(systemType)) return units * flatTariff * taxMult;

  let remaining = units;
  let prevLimit = 0;
  let cost = 0;
  for (const slab of cfg.residentialSlabs) {
    if (remaining <= 0) break;
    const slabUnits = Math.min(remaining, slab.upTo - prevLimit);
    cost += slabUnits * slab.rate;
    remaining -= slabUnits;
    prevLimit = slab.upTo;
  }
  return cost * taxMult;
}

// Reverse: bi-monthly bill amount (₹) -> units consumed in the 2-month cycle.
export function unitsFromBill(bill, systemType, flatTariff) {
  const fixed = cfg.fixedChargePerBill[systemType] ?? 0;
  const energyBudget = Math.max(bill - fixed, 0);
  if (energyBudget === 0) return 0;

  if (!useSlabs(systemType)) {
    const taxMult = 1 + cfg.electricityTaxPercent / 100;
    return flatTariff > 0 ? energyBudget / taxMult / flatTariff : 0;
  }

  // Walk the slabs, spending the budget slab by slab.
  const taxMult = 1 + cfg.electricityTaxPercent / 100;
  let budget = energyBudget / taxMult;
  let units = 0;
  let prevLimit = 0;
  for (const slab of cfg.residentialSlabs) {
    const slabCap = slab.upTo - prevLimit;
    const slabCost = slabCap * slab.rate;
    if (slab.rate === 0) {
      units += slabCap;
    } else if (budget >= slabCost && Number.isFinite(slabCap)) {
      budget -= slabCost;
      units += slabCap;
    } else {
      units += budget / slab.rate;
      break;
    }
    prevLimit = slab.upTo;
  }
  return units;
}

export function calculateSolar({ systemType, bimonthlyBill, flatTariff, roofArea }) {
  const bill = safe(bimonthlyBill);
  const tariff = safe(flatTariff, 0.1);
  const roof = safe(roofArea);
  const fixed = cfg.fixedChargePerBill[systemType] ?? 0;

  // 1) Consumption per two-month bill and per year
  const unitsPerCycle = unitsFromBill(bill, systemType, tariff);
  const annualUnits = unitsPerCycle * cfg.billingCyclesPerYear;

  // 2) Generation per kW per year (real-world: sun hours x performance ratio)
  const kwhPerKwYear = cfg.peakSunHoursPerDay * cfg.performanceRatio * cfg.daysPerYear;

  // 3) System size: cover target % of consumption, limited by roof, floor at minKw
  const wantedKw = (annualUnits * cfg.targetOffset) / kwhPerKwYear;
  const maxKwByRoof = roof / cfg.roofAreaPerKw;
  const roofLimited = wantedKw > maxKwByRoof;
  let kw = Math.min(wantedKw, maxKwByRoof);
  kw = Math.max(kw, cfg.minKw);
  kw = Math.round(kw * 10) / 10;

  const roofTooSmall = kw * cfg.roofAreaPerKw > roof;

  // 4) Generation, split by bi-monthly billing cycle with seasonal weighting
  const annualGeneration = kw * kwhPerKwYear;
  const cycles = cfg.cycleLabels.map((label, i) => {
    const generation = annualGeneration * cfg.seasonalShare[i];
    const offsetUnits = Math.min(generation, unitsPerCycle); // cannot save more than you use
    const billBefore = energyCostForUnits(unitsPerCycle, systemType, tariff) + fixed;
    const billAfter =
      energyCostForUnits(unitsPerCycle - offsetUnits, systemType, tariff) + fixed;
    return {
      label,
      generation: Math.round(generation),
      billBefore: Math.round(billBefore),
      billAfter: Math.round(billAfter),
      saving: Math.round(billBefore - billAfter),
    };
  });

  const avgBiMonthlyGeneration = Math.round(annualGeneration / cfg.billingCyclesPerYear);
  const annualSavings = cycles.reduce((s, c) => s + c.saving, 0);

  // 5) Cost, subsidy, O&M
  const grossCost = kw * cfg.costPerKw[systemType];
  const sub = cfg.subsidy[systemType];
  const subsidy = sub
    ? Math.min(
        Math.min(kw, 2) * sub.first2KwPerKw + Math.max(Math.min(kw, 3) - 2, 0) * sub.thirdKw,
        sub.max
      )
    : 0;
  const netCost = grossCost - subsidy;
  const annualOm = grossCost * cfg.omPercent;

  // 6) Payback & 25-year savings with tariff escalation and panel degradation
  let cumulative = -netCost;
  let paybackYears = null;
  let lifetimeSavings = 0;
  for (let year = 1; year <= 25; year++) {
    const net =
      annualSavings *
        Math.pow(1 + cfg.tariffEscalationPerYear, year - 1) *
        Math.pow(1 - cfg.degradationPerYear, year - 1) -
      annualOm;
    const before = cumulative;
    cumulative += net;
    lifetimeSavings += net;
    if (paybackYears === null && cumulative >= 0 && net > 0) {
      paybackYears = year - 1 + (0 - before) / net;
    }
  }

  // 7) Environment
  const co2Tonnes = (annualGeneration * cfg.co2FactorKgPerKwh) / 1000;

  return {
    unitsPerCycle: Math.round(unitsPerCycle),
    kw,
    roofLimited,
    roofTooSmall,
    avgBiMonthlyGeneration,
    annualGeneration: Math.round(annualGeneration),
    panelCount: Math.ceil((kw * 1000) / cfg.panelWattage),
    requiredRoofArea: Math.round(kw * cfg.roofAreaPerKw),
    grossCost: Math.round(grossCost),
    subsidy: Math.round(subsidy),
    netCost: Math.round(netCost),
    annualSavings: Math.round(annualSavings),
    lifetimeSavings: Math.round(lifetimeSavings),
    paybackYears: paybackYears === null ? null : paybackYears.toFixed(1),
    co2Tonnes: co2Tonnes.toFixed(1),
    cycles,
  };
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const inr = (n) => `₹${n.toLocaleString("en-IN")}`;

export default function SolarCalculator() {
  const { t } = useTranslation();
  const [systemType, setSystemType] = useState("residential");
  // Inputs are kept as strings so the user can clear the field while typing.
  const [bimonthlyBill, setBimonthlyBill] = useState("4000");
  const [tariff, setTariff] = useState(String(cfg.defaultTariff));
  const [roofArea, setRoofArea] = useState("500");

  const results = useMemo(
    () =>
      calculateSolar({
        systemType,
        bimonthlyBill,
        flatTariff: tariff,
        roofArea,
      }),
    [systemType, bimonthlyBill, tariff, roofArea]
  );

  const slabMode = cfg.slabTariffTypes.includes(systemType);

  return (
    <div className="calculator bracket-frame" style={{ padding: 0 }}>
      <div className="calculator__grid">
        {/* ---------------- Form ---------------- */}
        <div className="calculator__form">
          <div className="mono-label" style={{ marginBottom: 14 }}>
            {t("calculator.stepDetails")}
          </div>

          <div className="calc-tabs">
            {cfg.systemTypes.map((system) => (
              <button
                key={system.id}
                className={`calc-tab ${systemType === system.id ? "is-active" : ""}`}
                onClick={() => setSystemType(system.id)}
                type="button"
              >
                {t(`calculator.${system.id}`)}
              </button>
            ))}
          </div>

          <div className="field-group">
            <label htmlFor="bimonthlyBill">
              {t("calculator.averageBimonthlyBill", {
                defaultValue: "Average electricity bill (every 2 months)",
              })}
            </label>
            <div className="field-input-wrap">
              <input
                id="bimonthlyBill"
                type="number"
                inputMode="decimal"
                min="0"
                value={bimonthlyBill}
                onChange={(e) => setBimonthlyBill(e.target.value)}
              />
              <span className="field-unit">
                {t("calculator.bimonthlyUnit", { defaultValue: "₹ / 2 months" })}
              </span>
            </div>
            <div className="field-hint">
              {t("calculator.bimonthlyHint", {
                defaultValue: "Enter the total on one bill, not a monthly figure.",
              })}
            </div>
          </div>

          {!slabMode && (
            <div className="field-group">
              <label htmlFor="tariff">{t("calculator.electricityTariff")}</label>
              <div className="field-input-wrap">
                <input
                  id="tariff"
                  type="number"
                  inputMode="decimal"
                  min="1"
                  step="0.1"
                  value={tariff}
                  onChange={(e) => setTariff(e.target.value)}
                />
                <span className="field-unit">{t("calculator.tariffUnit")}</span>
              </div>
              <div className="field-hint">{t("calculator.latestBillHint")}</div>
            </div>
          )}

          <div className="field-group">
            <label htmlFor="roofArea">{t("calculator.availableRooftopArea")}</label>
            <div className="field-input-wrap">
              <input
                id="roofArea"
                type="number"
                inputMode="decimal"
                min="50"
                value={roofArea}
                onChange={(e) => setRoofArea(e.target.value)}
              />
              <span className="field-unit">{t("calculator.roofUnit")}</span>
            </div>
          </div>

          <div className="calc-disclaimer">{t("calculator.calculatorDisclaimer")}</div>
        </div>

        {/* ---------------- Results ---------------- */}
        <div className="calculator__results">
          <div className="result-headline">
            <div className="mono-label">{t("calculator.recommendedCapacity")}</div>
            <span className="result-headline__value">{results.kw}</span>
            <span className="result-headline__unit">kW</span>
          </div>

          {results.roofTooSmall && (
            <div className="field-hint" role="alert" style={{ marginBottom: 12 }}>
              {t("calculator.roofWarning", {
                defaultValue:
                  "Your rooftop is smaller than the minimum system needs. A site visit can confirm options.",
              })}
            </div>
          )}
          {results.roofLimited && !results.roofTooSmall && (
            <div className="field-hint" style={{ marginBottom: 12 }}>
              {t("calculator.roofLimitedNote", {
                defaultValue: "System size is limited by your roof area.",
              })}
            </div>
          )}

          <div className="result-cards">
            <div className="result-card">
              <Receipt className="result-card__icon" size={20} />
              <div className="result-card__value">
                {results.unitsPerCycle.toLocaleString("en-IN")} kWh
              </div>
              <div className="result-card__label">
                {t("calculator.unitsPerBill", { defaultValue: "Your usage per 2-month bill" })}
              </div>
            </div>
            <div className="result-card">
              <Sun className="result-card__icon" size={20} />
              <div className="result-card__value">
                {results.avgBiMonthlyGeneration.toLocaleString("en-IN")} kWh
              </div>
              <div className="result-card__label">
                {t("calculator.estimatedBimonthlyGeneration", {
                  defaultValue: "Average generation per 2 months",
                })}
              </div>
            </div>
            <div className="result-card">
              <Zap className="result-card__icon" size={20} />
              <div className="result-card__value">
                {results.annualGeneration.toLocaleString("en-IN")} kWh
              </div>
              <div className="result-card__label">{t("calculator.estimatedAnnualGeneration")}</div>
            </div>
            <div className="result-card">
              <PanelsTopLeft className="result-card__icon" size={20} />
              <div className="result-card__value">
                {results.panelCount} {t("calculator.panels")}
              </div>
              <div className="result-card__label">
                {t("calculator.approximatePanelCount", { wattage: cfg.panelWattage })}
              </div>
            </div>
            <div className="result-card">
              <Ruler className="result-card__icon" size={20} />
              <div className="result-card__value">{results.requiredRoofArea} sq. ft</div>
              <div className="result-card__label">{t("calculator.requiredRoofArea")}</div>
            </div>
            <div className="result-card">
              <Wallet className="result-card__icon" size={20} />
              <div className="result-card__value">{inr(results.annualSavings)}</div>
              <div className="result-card__label">{t("calculator.estimatedAnnualSavings")}</div>
            </div>
            <div className="result-card">
              <PiggyBank className="result-card__icon" size={20} />
              <div className="result-card__value">{inr(results.netCost)}</div>
              <div className="result-card__label">
                {results.subsidy > 0
                  ? t("calculator.costAfterSubsidy", {
                      defaultValue: `Cost after ${inr(results.subsidy)} subsidy`,
                      amount: inr(results.subsidy),
                    })
                  : t("calculator.estimatedCost", { defaultValue: "Estimated system cost" })}
              </div>
            </div>
            <div className="result-card">
              <TrendingUp className="result-card__icon" size={20} />
              <div className="result-card__value">
                {results.paybackYears ?? "25+"} {t("calculator.years")}
              </div>
              <div className="result-card__label">{t("calculator.approximatePayback")}</div>
            </div>
          </div>

          {/* Bi-monthly bill breakdown */}
          <div className="result-card" style={{ marginTop: 14, overflowX: "auto" }}>
            <div className="result-card__label" style={{ marginBottom: 8 }}>
              {t("calculator.bimonthlyBreakdown", {
                defaultValue: "Your six bills in a year: before and after solar",
              })}
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ textAlign: "left" }}>
                  <th>{t("calculator.period", { defaultValue: "Period" })}</th>
                  <th>{t("calculator.generation", { defaultValue: "Solar (kWh)" })}</th>
                  <th>{t("calculator.billBefore", { defaultValue: "Bill before" })}</th>
                  <th>{t("calculator.billAfter", { defaultValue: "Bill after" })}</th>
                </tr>
              </thead>
              <tbody>
                {results.cycles.map((c) => (
                  <tr key={c.label}>
                    <td>{c.label}</td>
                    <td>{c.generation.toLocaleString("en-IN")}</td>
                    <td>{inr(c.billBefore)}</td>
                    <td>{inr(c.billAfter)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            className="result-card"
            style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 14 }}
          >
            <Leaf className="result-card__icon" size={22} style={{ marginBottom: 0 }} />
            <div>
              <div className="result-card__value">
                {results.co2Tonnes} {t("calculator.tonnesPerYear")}
              </div>
              <div className="result-card__label">{t("calculator.estimatedCo2Reduction")}</div>
            </div>
          </div>

          <div className="result-cta">
            <NavLink to="/contact" className="btn btn--primary">
              {t("calculator.detailedQuote")} <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
