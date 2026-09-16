// Configurable assumptions for the Solar Calculator. Adjust as tariffs, panel
// specs, or regional generation factors change — nothing here is hard-coded
// in the calculator component itself.
export const calculatorConfig = {
  // Average full-sun-hours-equivalent generation per kW of installed capacity, per day.
  // This varies by region/irradiance; a blended national average is used as default.
  avgGenerationFactorPerKwPerDay: 4.2,

  // Standard panel wattage used to estimate panel count.
  panelWattage: 550, // Wp

  // Roof area required per kW of installed capacity (sq. ft), including spacing/walkways.
  roofAreaPerKw: 90,

  // Approximate installed cost per kW by system type (₹), used for payback estimation.
  costPerKw: {
    residential: 55000,
    commercial: 48000,
    industrial: 42000,
  },

  // CO2 offset in kg per kWh of solar generation (grid emission factor approximation).
  co2FactorKgPerKwh: 0.82,

  // Degradation and system loss factor applied to gross generation.
  systemEfficiencyFactor: 0.87,

  // Default electricity tariff (₹/kWh) if the user does not override it.
  defaultTariff: 8.5,

  systemTypes: [
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "industrial", label: "Industrial" },
  ],
};
