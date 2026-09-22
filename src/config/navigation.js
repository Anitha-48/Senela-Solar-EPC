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
      { label: "On-grid Solar", path: "/solar-solutions/on-grid" },
      { label: "Off-grid Solar", path: "/solar-solutions/off-grid" },
      { label: "Hybrid Grid Solar", path: "/solar-solutions/hybrid-grid" },
    ],
  },
  { label: "Solar Calculator", path: "/solar-calculator" },
  { label: "Contact Us", path: "/contact" },
];
