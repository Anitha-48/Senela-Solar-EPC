// src/config/calculatorConfig.js
// All values are editable. Verify tariff slabs and subsidy with your DISCOM
// (e.g. TNPDCL for Tamil Nadu) because they change every year.

export const calculatorConfig = {
  systemTypes: [
    { id: "residential" },
    { id: "commercial" },
    { id: "industrial" },
  ],

  // ---- Billing cycle -------------------------------------------------------
  // Tamil Nadu bills every two months. 365 / 6 = 60.83 days per cycle.
  billingCyclesPerYear: 6,
  daysPerYear: 365,

  // ---- Tariff --------------------------------------------------------------
  // "slab"  -> bill is converted to units using the slab table below (residential)
  // "flat"  -> bill is divided by the flat rate the user types in
  slabTariffTypes: ["residential"],
  defaultTariff: 6.5, // ₹/kWh average, used for flat mode and for savings on commercial/industrial

  // Bi-monthly slabs (units per 2 months). ratePerKwh in ₹.
  // Example values only: replace with your latest approved tariff order.
  residentialSlabs: [
    { upTo: 100, rate: 0 }, // free units under state subsidy
    { upTo: 200, rate: 2.35 },
    { upTo: 400, rate: 4.7 },
    { upTo: 500, rate: 6.3 },
    { upTo: 600, rate: 8.4 },
    { upTo: 800, rate: 9.45 },
    { upTo: 1000, rate: 10.5 },
    { upTo: Infinity, rate: 11.55 },
  ],
  // Fixed charge + electricity tax are not offset by solar. Removed before
  // converting bill -> units. ₹ per bi-monthly bill.
  fixedChargePerBill: { residential: 60, commercial: 150, industrial: 500 },
  electricityTaxPercent: 5, // % of energy charge (set 0 if not applicable)

  // ---- Solar generation ----------------------------------------------------
  // Chennai averages ~4.5 to 5.2 peak sun hours. Use your site value.
  peakSunHoursPerDay: 4.8,
  // System losses: soiling, temperature, wiring, inverter, mismatch.
  performanceRatio: 0.78,
  // Yearly panel degradation (used for 25-year figures).
  degradationPerYear: 0.005,

  // Share of annual generation falling in each bi-monthly bill cycle.
  // Order: Jan-Feb, Mar-Apr, May-Jun, Jul-Aug, Sep-Oct, Nov-Dec (Tamil Nadu).
  seasonalShare: [0.175, 0.19, 0.17, 0.16, 0.145, 0.16],
  cycleLabels: ["Jan–Feb", "Mar–Apr", "May–Jun", "Jul–Aug", "Sep–Oct", "Nov–Dec"],

  // ---- Sizing --------------------------------------------------------------
  panelWattage: 540,
  roofAreaPerKw: 100, // sq ft per kW (shadow-free area, includes walkway)
  minKw: 1,
  // Size to cover this share of consumption (1 = 100%). Net-metering rules
  // in many states cap this around 90–100% of annual use.
  targetOffset: 0.9,

  // ---- Cost (₹ per kW, installed) -----------------------------------------
  costPerKw: {
    residential: 60000,
    commercial: 52000,
    industrial: 46000,
  },
  // Annual O&M as a share of system cost.
  omPercent: 0.01,

  // ---- Subsidy (PM Surya Ghar, residential only) --------------------------
  // ₹30,000/kW for first 2 kW, ₹18,000 for 3rd kW, capped at ₹78,000.
  subsidy: {
    residential: { first2KwPerKw: 30000, thirdKw: 18000, max: 78000 },
  },

  // ---- Savings -------------------------------------------------------------
  // Yearly rise in grid tariff (used for lifetime savings).
  tariffEscalationPerYear: 0.03,

  // ---- Emissions -----------------------------------------------------------
  co2FactorKgPerKwh: 0.71, // India grid average (CEA)
};