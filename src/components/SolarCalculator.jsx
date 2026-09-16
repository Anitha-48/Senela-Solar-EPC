import { useMemo, useState } from "react";
import { Zap, Sun, PanelsTopLeft, Ruler, Wallet, TrendingUp, Leaf, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { calculatorConfig as cfg } from "../config/calculatorConfig";

export default function SolarCalculator() {
  const [systemType, setSystemType] = useState("residential");
  const [monthlyBill, setMonthlyBill] = useState(4000);
  const [tariff, setTariff] = useState(cfg.defaultTariff);
  const [roofArea, setRoofArea] = useState(500);

  const results = useMemo(() => {
    // Monthly consumption derived from bill and tariff.
    const monthlyConsumptionKwh = tariff > 0 ? monthlyBill / tariff : 0;
    const dailyConsumptionKwh = monthlyConsumptionKwh / 30;

    // Recommended system capacity to offset consumption, bounded by roof area.
    const generationFactor = cfg.avgGenerationFactorPerKwPerDay * cfg.systemEfficiencyFactor;
    let recommendedKw = generationFactor > 0 ? dailyConsumptionKwh / generationFactor : 0;

    const maxKwByRoof = roofArea / cfg.roofAreaPerKw;
    recommendedKw = Math.min(recommendedKw, maxKwByRoof);
    recommendedKw = Math.max(recommendedKw, 1);
    recommendedKw = Math.round(recommendedKw * 10) / 10;

    const dailyGeneration = recommendedKw * generationFactor;
    const monthlyGeneration = dailyGeneration * 30;
    const annualGeneration = dailyGeneration * 365;

    const panelCount = Math.ceil((recommendedKw * 1000) / cfg.panelWattage);
    const requiredRoofArea = Math.round(recommendedKw * cfg.roofAreaPerKw);

    const systemCost = recommendedKw * cfg.costPerKw[systemType];
    const annualSavings = annualGeneration * tariff;
    const paybackYears = annualSavings > 0 ? systemCost / annualSavings : 0;

    const co2ReductionKg = annualGeneration * cfg.co2FactorKgPerKwh;
    const co2ReductionTonnes = co2ReductionKg / 1000;

    return {
      recommendedKw,
      monthlyGeneration: Math.round(monthlyGeneration),
      annualGeneration: Math.round(annualGeneration),
      panelCount,
      requiredRoofArea,
      annualSavings: Math.round(annualSavings),
      paybackYears: paybackYears.toFixed(1),
      co2ReductionTonnes: co2ReductionTonnes.toFixed(1),
    };
  }, [monthlyBill, tariff, roofArea, systemType]);

  return (
    <div className="calculator bracket-frame" style={{ padding: 0 }}>
      <div className="calculator__grid">
        <div className="calculator__form">
          <div className="mono-label" style={{ marginBottom: 14 }}>STEP 01 — SYSTEM DETAILS</div>
          <div className="calc-tabs">
            {cfg.systemTypes.map((t) => (
              <button
                key={t.id}
                className={`calc-tab ${systemType === t.id ? "is-active" : ""}`}
                onClick={() => setSystemType(t.id)}
                type="button"
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="field-group">
            <label htmlFor="monthlyBill">Average Monthly Electricity Bill</label>
            <div className="field-input-wrap">
              <input
                id="monthlyBill"
                type="number"
                min="0"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
              />
              <span className="field-unit">₹ / month</span>
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="tariff">Electricity Tariff</label>
            <div className="field-input-wrap">
              <input
                id="tariff"
                type="number"
                min="1"
                step="0.1"
                value={tariff}
                onChange={(e) => setTariff(Number(e.target.value))}
              />
              <span className="field-unit">₹ / kWh</span>
            </div>
            <div className="field-hint">Check your latest electricity bill for the exact per-unit rate.</div>
          </div>

          <div className="field-group">
            <label htmlFor="roofArea">Available Rooftop Area</label>
            <div className="field-input-wrap">
              <input
                id="roofArea"
                type="number"
                min="50"
                value={roofArea}
                onChange={(e) => setRoofArea(Number(e.target.value))}
              />
              <span className="field-unit">sq. ft</span>
            </div>
          </div>

          <div className="calc-disclaimer">
            This calculator provides an approximate estimate. Actual system sizing and
            savings depend on site conditions, location, tariff, shadow analysis, system
            design and other technical factors.
          </div>
        </div>

        <div className="calculator__results">
          <div className="result-headline">
            <div className="mono-label">RECOMMENDED SYSTEM CAPACITY</div>
            <span className="result-headline__value">{results.recommendedKw}</span>
            <span className="result-headline__unit">kW</span>
          </div>

          <div className="result-cards">
            <div className="result-card">
              <Sun className="result-card__icon" size={20} />
              <div className="result-card__value">{results.monthlyGeneration.toLocaleString("en-IN")} kWh</div>
              <div className="result-card__label">Est. Monthly Generation</div>
            </div>
            <div className="result-card">
              <Zap className="result-card__icon" size={20} />
              <div className="result-card__value">{results.annualGeneration.toLocaleString("en-IN")} kWh</div>
              <div className="result-card__label">Est. Annual Generation</div>
            </div>
            <div className="result-card">
              <PanelsTopLeft className="result-card__icon" size={20} />
              <div className="result-card__value">{results.panelCount} panels</div>
              <div className="result-card__label">Approx. Panel Count ({cfg.panelWattage} Wp)</div>
            </div>
            <div className="result-card">
              <Ruler className="result-card__icon" size={20} />
              <div className="result-card__value">{results.requiredRoofArea} sq. ft</div>
              <div className="result-card__label">Required Roof Area</div>
            </div>
            <div className="result-card">
              <Wallet className="result-card__icon" size={20} />
              <div className="result-card__value">₹{results.annualSavings.toLocaleString("en-IN")}</div>
              <div className="result-card__label">Est. Annual Savings</div>
            </div>
            <div className="result-card">
              <TrendingUp className="result-card__icon" size={20} />
              <div className="result-card__value">{results.paybackYears} yrs</div>
              <div className="result-card__label">Approx. Payback Period</div>
            </div>
          </div>

          <div className="result-card" style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 14 }}>
            <Leaf className="result-card__icon" size={22} style={{ marginBottom: 0 }} />
            <div>
              <div className="result-card__value">{results.co2ReductionTonnes} tonnes/year</div>
              <div className="result-card__label">Estimated CO₂ Reduction</div>
            </div>
          </div>

          <div className="result-cta">
            <NavLink to="/contact" className="btn btn--primary">
              Get a Detailed Solar Quote <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
