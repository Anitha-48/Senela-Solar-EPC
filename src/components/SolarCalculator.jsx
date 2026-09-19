import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Zap, Sun, PanelsTopLeft, Ruler, Wallet, TrendingUp, Leaf, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { calculatorConfig as cfg } from "../config/calculatorConfig";

export default function SolarCalculator() {
  const { t } = useTranslation();
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
          <div className="mono-label" style={{ marginBottom: 14 }}>{t("calculator.stepDetails")}</div>
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
            <label htmlFor="monthlyBill">{t("calculator.averageMonthlyBill")}</label>
            <div className="field-input-wrap">
              <input
                id="monthlyBill"
                type="number"
                min="0"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
              />
              <span className="field-unit">{t("calculator.monthlyUnit")}</span>
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="tariff">{t("calculator.electricityTariff")}</label>
            <div className="field-input-wrap">
              <input
                id="tariff"
                type="number"
                min="1"
                step="0.1"
                value={tariff}
                onChange={(e) => setTariff(Number(e.target.value))}
              />
              <span className="field-unit">{t("calculator.tariffUnit")}</span>
            </div>
            <div className="field-hint">{t("calculator.latestBillHint")}</div>
          </div>

          <div className="field-group">
            <label htmlFor="roofArea">{t("calculator.availableRooftopArea")}</label>
            <div className="field-input-wrap">
              <input
                id="roofArea"
                type="number"
                min="50"
                value={roofArea}
                onChange={(e) => setRoofArea(Number(e.target.value))}
              />
              <span className="field-unit">{t("calculator.roofUnit")}</span>
            </div>
          </div>

          <div className="calc-disclaimer">
            {t("calculator.calculatorDisclaimer")}
          </div>
        </div>

        <div className="calculator__results">
          <div className="result-headline">
            <div className="mono-label">{t("calculator.recommendedCapacity")}</div>
            <span className="result-headline__value">{results.recommendedKw}</span>
            <span className="result-headline__unit">kW</span>
          </div>

          <div className="result-cards">
            <div className="result-card">
              <Sun className="result-card__icon" size={20} />
              <div className="result-card__value">{results.monthlyGeneration.toLocaleString("en-IN")} kWh</div>
              <div className="result-card__label">{t("calculator.estimatedMonthlyGeneration")}</div>
            </div>
            <div className="result-card">
              <Zap className="result-card__icon" size={20} />
              <div className="result-card__value">{results.annualGeneration.toLocaleString("en-IN")} kWh</div>
              <div className="result-card__label">{t("calculator.estimatedAnnualGeneration")}</div>
            </div>
            <div className="result-card">
              <PanelsTopLeft className="result-card__icon" size={20} />
              <div className="result-card__value">{results.panelCount} {t("calculator.panels")}</div>
              <div className="result-card__label">{t("calculator.approximatePanelCount", { wattage: cfg.panelWattage })}</div>
            </div>
            <div className="result-card">
              <Ruler className="result-card__icon" size={20} />
              <div className="result-card__value">{results.requiredRoofArea} sq. ft</div>
              <div className="result-card__label">{t("calculator.requiredRoofArea")}</div>
            </div>
            <div className="result-card">
              <Wallet className="result-card__icon" size={20} />
              <div className="result-card__value">₹{results.annualSavings.toLocaleString("en-IN")}</div>
              <div className="result-card__label">{t("calculator.estimatedAnnualSavings")}</div>
            </div>
            <div className="result-card">
              <TrendingUp className="result-card__icon" size={20} />
              <div className="result-card__value">{results.paybackYears} {t("calculator.years")}</div>
              <div className="result-card__label">{t("calculator.approximatePayback")}</div>
            </div>
          </div>

          <div className="result-card" style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 14 }}>
            <Leaf className="result-card__icon" size={22} style={{ marginBottom: 0 }} />
            <div>
              <div className="result-card__value">{results.co2ReductionTonnes} {t("calculator.tonnesPerYear")}</div>
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
