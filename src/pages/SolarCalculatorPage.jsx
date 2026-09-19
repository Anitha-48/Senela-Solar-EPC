import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/solarcalculator.css";

/* =========================================================================
   TARIFF DATA
   -------------------------------------------------------------------------
   Slabs are TELESCOPIC (i.e. each rate applies only to the units that fall
   inside that band, same as an actual TANGEDCO / BESCOM / Puducherry ED
   bill). Each entry is [cumulativeUnitsUpTo, ratePerUnitInRs].

   These figures are representative 2025 rates built from published DISCOM
   tariff orders. Real bills also include fixed/demand charges, meter rent,
   electricity duty, FPPCA/fuel surcharges, and (for Tamil Nadu) run on a
   bi-monthly cycle with subsidy schemes that change from time to time.
   Treat this as a sizing estimator, not a bill replica — swap in the exact
   current order from your DISCOM before quoting a customer.
   ========================================================================= */
const TARIFF_DATA = {
  tamilnadu: {
    label: "Tamil Nadu",
    discom: "TANGEDCO",
    // kWh generated per kWp per day, state-wide average
    genFactor: 4.8,
    residential: [
      [100, 0],
      [200, 2.35],
      [400, 4.7],
      [500, 6.3],
      [600, 8.0],
      [800, 9.0],
      [1000, 10.0],
      [Infinity, 11.0],
    ],
    industrial: [
      [100, 2.5],
      [500, 5.5],
      [1000, 6.5],
      [Infinity, 7.5],
    ],
  },
  karnataka: {
    label: "Karnataka",
    discom: "BESCOM",
    genFactor: 4.6,
    residential: [
      [50, 4.75],
      [200, 7.1],
      [Infinity, 8.0],
    ],
    industrial: [[Infinity, 7.6]],
  },
  pondicherry: {
    label: "Pondicherry",
    discom: "Electricity Dept., Puducherry",
    genFactor: 4.7,
    residential: [
      [100, 2.25],
      [200, 3.25],
      [300, 5.4],
      [Infinity, 6.8],
    ],
    industrial: [
      [100, 5.0],
      [250, 6.0],
      [Infinity, 6.6],
    ],
  },
};

// Rooftop footprint assumption: industrial arrays need extra walkway /
// shading-clearance spacing compared to a tightly packed home rooftop.
const SPACE_SQFT_PER_KW = { residential: 90, industrial: 110 };

// India grid average CO2 intensity (kg CO2 per kWh), approx CEA baseline.
const CO2_FACTOR_KG_PER_KWH = 0.82;

/* =========================================================================
   CALCULATION HELPERS
   ========================================================================= */

// Cost of consuming `units` under a telescopic slab table.
function billFromUnits(units, slabs) {
  let cost = 0;
  let prevUpto = 0;
  for (const [upto, rate] of slabs) {
    const bandUnits = Math.min(units, upto) - prevUpto;
    if (bandUnits > 0) cost += bandUnits * rate;
    prevUpto = upto;
    if (units <= upto) break;
  }
  return cost;
}

// Inverse of the above: given a bill amount, work out how many units were
// consumed, by walking the same slab table and solving within the band the
// bill amount actually falls into.
function unitsFromBill(bill, slabs) {
  let prevUpto = 0;
  let cumCost = 0;
  for (const [upto, rate] of slabs) {
    const bandWidth = upto === Infinity ? Infinity : upto - prevUpto;
    const bandCost = bandWidth === Infinity ? Infinity : bandWidth * rate;
    const reachesHere = bandWidth === Infinity || bill <= cumCost + bandCost;
    if (reachesHere) {
      const remaining = bill - cumCost;
      const units = prevUpto + (rate > 0 ? remaining / rate : 0);
      return Math.max(0, units);
    }
    cumCost += bandCost;
    prevUpto = upto;
  }
  return 0;
}

function runCalculation(stateKey, category, monthlyBill) {
  const stateData = TARIFF_DATA[stateKey];
  const slabs = stateData[category];
  const genFactor = stateData.genFactor;

  const units = unitsFromBill(monthlyBill, slabs);
  if (units <= 0) return null;

  const rawCapacity = units / (genFactor * 30);
  const suggestedCapacity = Math.max(1, Math.round(rawCapacity * 2) / 2);

  const monthlyGenUnits = suggestedCapacity * genFactor * 30;
  const monthlySavingKWh = Math.round(monthlyGenUnits);

  const netUnitsAfterSolar = Math.max(0, units - monthlySavingKWh);
  const billWithoutSolar = billFromUnits(units, slabs);
  const billWithSolar = billFromUnits(netUnitsAfterSolar, slabs);
  const monthlySavingINR = Math.max(
    0,
    Math.round(billWithoutSolar - billWithSolar)
  );

  const spaceRate = SPACE_SQFT_PER_KW[category];
  const requiredSpace = Math.round(suggestedCapacity * spaceRate);

  const co2KgPerYear = Math.round(monthlySavingKWh * 12 * CO2_FACTOR_KG_PER_KWH);

  return {
    estimatedUnits: Math.round(units),
    suggestedCapacity,
    monthlySavingKWh,
    monthlySavingINR,
    requiredSpace,
    co2KgPerYear,
    co2TonsPerYear: (co2KgPerYear / 1000).toFixed(2),
    discom: stateData.discom,
  };
}

/* =========================================================================
   ICONS  (tiny inline SVGs — no icon library dependency)
   ========================================================================= */
const IconCapacity = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" strokeLinejoin="round" strokeLinecap="round" />
  </svg>
);
const IconEnergy = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="12" r="4.5" />
    <path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1M18.4 18.4l-2.1-2.1M7.7 7.7 5.6 5.6" strokeLinecap="round" />
  </svg>
);
const IconRupee = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M6 4h11M6 9h11M6 4c4 0 6.5 1.5 6.5 4.5S16 13 12 13H6l8 8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconSpace = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3.5" y="3.5" width="17" height="17" rx="1" />
    <path d="M3.5 9h17M9 20.5v-11" />
  </svg>
);
const IconLeaf = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M20 4c.6 8-3 15-14 15C6 10 12 4.5 20 4Z" strokeLinejoin="round" />
    <path d="M6 20c1-5 4-9 12-13" strokeLinecap="round" />
  </svg>
);

/* =========================================================================
   COMPONENT
   ========================================================================= */
export default function SolarCalculator() {
  const { t } = useTranslation();
  const [stateKey, setStateKey] = useState("tamilnadu");
  const [category, setCategory] = useState("residential");
  const [bill, setBill] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const billNum = parseFloat(bill);

    if (!billNum || billNum <= 0) {
      setError(t("calculator.errorRequired"));
      setResult(null);
      return;
    }

    const output = runCalculation(stateKey, category, billNum);
    if (!output) {
      setError(t("calculator.errorTooLow"));
      setResult(null);
      return;
    }

    setError("");
    setResult(output);
  };

  const fmtNum = (n) => new Intl.NumberFormat("en-IN").format(n);
  const fmtINR = (n) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <div className="scal">
      <header className="scal__header">
        <p className="scal__eyebrow"></p>
        <h1 className="scal__title">{t("calculator.title")}</h1>
        <p className="scal__subtitle">
          {t("calculator.subtitle")}
        </p>
      </header>

      <div className="scal__grid">
        {/* ---------------- FORM PANEL ---------------- */}
        <form className="scal__form" onSubmit={handleSubmit}>
          <label className="scal__field">
            <span className="scal__label">{t("calculator.state")}</span>
            <select
              className="scal__select"
              value={stateKey}
              onChange={(e) => setStateKey(e.target.value)}
            >
              <option value="tamilnadu">{t("calculator.tamilNadu")}</option>
              <option value="pondicherry">{t("calculator.pondicherry")}</option>
              <option value="karnataka">{t("calculator.karnataka")}</option>
            </select>
          </label>

          <div className="scal__field">
            <span className="scal__label">{t("calculator.category")}</span>
            <div className="scal__toggle" role="radiogroup" aria-label={t("calculator.category")}>
              {["residential", "industrial"].map((c) => (
                <button
                  type="button"
                  key={c}
                  className={`scal__toggleBtn ${category === c ? "is-active" : ""}`}
                  onClick={() => setCategory(c)}
                  aria-pressed={category === c}
                >
                  {c === "residential" ? t("calculator.residential") : t("calculator.industrial")}
                </button>
              ))}
            </div>
          </div>

          <label className="scal__field">
            <span className="scal__label">{t("calculator.monthlyBill")}</span>
            <input
              className="scal__input"
              type="number"
              inputMode="decimal"
              min="0"
              placeholder={t("calculator.monthlyBillPlaceholder")}
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />
          </label>

          {error && <p className="scal__error">{error}</p>}

          <button type="submit" className="scal__submit">
            {t("calculator.calculate")}
          </button>

          <p className="scal__disclaimer">
            {t("calculator.disclaimer", { discom: TARIFF_DATA[stateKey].discom })}
          </p>
        </form>

        {/* ---------------- RESULTS PANEL ---------------- */}
        <section className="scal__results" aria-live="polite">
          {!result ? (
            <div className="scal__placeholder">
              <p>
                {t("calculator.fillForm")}
              </p>
            </div>
          ) : (
            <>
              <div className="scal__basis">
                {t("calculator.estimatedUnits", { units: fmtNum(result.estimatedUnits), discom: result.discom, category: category === "residential" ? t("calculator.residential") : t("calculator.industrial") })}
              </div>

              <div className="scal__hero">
                <IconCapacity />
                <div>
                  <p className="scal__heroLabel">{t("calculator.suggestedCapacity")}</p>
                  <p className="scal__heroValue">
                    {result.suggestedCapacity} <span>kW</span>
                  </p>
                </div>
              </div>

              <div className="scal__meterList">
                <div className="scal__meterRow">
                  <div className="scal__meterIcon">
                    <IconEnergy />
                  </div>
                  <span className="scal__meterLabel">{t("calculator.monthlySaving")}</span>
                  <span className="scal__meterValue">
                    {fmtNum(result.monthlySavingKWh)} kWh
                  </span>
                </div>

                <div className="scal__meterRow">
                  <div className="scal__meterIcon">
                    <IconRupee />
                  </div>
                  <span className="scal__meterLabel">{t("calculator.monthlySaving")}</span>
                  <span className="scal__meterValue">
                    {fmtINR(result.monthlySavingINR)}
                  </span>
                </div>

                <div className="scal__meterRow">
                  <div className="scal__meterIcon">
                    <IconSpace />
                  </div>
                  <span className="scal__meterLabel">{t("calculator.requiredSpace")}</span>
                  <span className="scal__meterValue">
                    {fmtNum(result.requiredSpace)} sq.ft
                  </span>
                </div>

                <div className="scal__meterRow">
                  <div className="scal__meterIcon">
                    <IconLeaf />
                  </div>
                  <span className="scal__meterLabel">{t("calculator.co2Reduction")}</span>
                  <span className="scal__meterValue">
                    {fmtNum(result.co2KgPerYear)} kg
                    <small> ({result.co2TonsPerYear} t)</small>
                  </span>
                </div>
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
}
