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
      { label: "Hybrid Grid Solar", path: "/solar-solutions/hybrid-grid" },
      { label: "Off-grid Solar", path: "/solar-solutions/off-grid" },
    ],
  },
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "Residential Solar", path: "/solar-solutions/residential" },
      { label: "Commercial & Industrial Solar", path: "/solar-solutions/industrial" },
      { label: "Utility-Scale & Integrated EPC Projects", path: "/solar-solutions/integrated-epc" },
    ],
  },
  { label: "Solar Calculator", path: "/solar-calculator" },
  { label: "Contact Us", path: "/contact" },
];
