// Drives the Navbar and mobile menu. Edit here to change site-wide navigation.
export const navigation = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "EPC", path: "/epc" },
  {
    label: "Solar Solutions",
    path: "/solar-solutions",
    children: [
      { label: "On-grid Solar", path: "/solar-solutions/on-grid" },
      { label: "Off-grid Solar", path: "/solar-solutions/off-grid" },
    ],
  },
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "Power Distribution & Transmission", path: "/services/power-distribution-transmission" },
      { label: "EHV Substation", path: "/services/ehv-substation" },
      { label: "Re-conductoring with HTLS Conductors", path: "/services/htls-reconductoring" },
      { label: "Railway Electrification", path: "/services/railway-electrification" },
      { label: "Solar Power Projects", path: "/services/solar-power-projects" },
      { label: "Water Management", path: "/services/water-management" },
    ],
  },
  { label: "Solar Calculator", path: "/solar-calculator" },
  { label: "Contact Us", path: "/contact" },
];
