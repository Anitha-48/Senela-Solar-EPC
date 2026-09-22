// Drives the Navbar and mobile menu. Edit here to change site-wide navigation.
export const navigation = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "EPC", path: "/epc" },
  {
    label: "Solar Solutions",
    path: "/solar-solutions",
    children: [
      { label: "Residential Solar", path: "/solar-solutions/residential" },
      { label: "Commercial Solar", path: "/solar-solutions/commercial" },
      { label: "Utility-Scale & Integrated EPC Projects", path: "/solar-solutions/utility-scale" },
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
