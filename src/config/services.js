// Content model for the six engineering services. Consumed by the generic ServicePage.
import {
  Zap, Building2, CableCar, TrainFront, SunMedium, Droplets,
} from "lucide-react";

export const services = {
  "power-distribution-transmission": {
    icon: Zap,
    title: "Power Distribution & Transmission",
    shortTitle: "Distribution & Transmission",
    image: "https://media.licdn.com/dms/image/v2/D4D12AQEoLwW1QUr_dQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1655288452163?e=2147483647&v=beta&t=dsuSWSLoRkjuTRgdtJPZqcLsoMLOq5u-Fpql5P4QRFM",
    heroSubtitle:
      "Engineering, construction and maintenance of distribution and transmission networks that keep power moving reliably from source to substation.",
    overview:
      "We plan, build and maintain distribution and transmission infrastructure across voltage classes — from 11 kV feeders to high-voltage transmission corridors. Our teams handle route survey, tower foundation design, conductor stringing, and line commissioning under strict safety and quality protocols.",
    capabilities: [
      "Overhead line route survey and engineering design",
      "Tower foundation and erection",
      "Conductor stringing and sagging",
      "Underground cabling for urban distribution",
      "Protection and metering system integration",
      "Emergency line restoration and maintenance contracts",
    ],
    process: [
      { title: "Route Survey", description: "Ground and LiDAR survey to finalise the most efficient, low-impact corridor." },
      { title: "Design & Approvals", description: "Structural and electrical design, statutory clearances and right-of-way coordination." },
      { title: "Construction", description: "Foundation casting, tower erection, and conductor stringing by certified crews." },
      { title: "Testing & Energisation", description: "Insulation, resistance and load testing before safe energisation." },
    ],
    applications: [
      "State and central transmission utilities",
      "Industrial captive power evacuation",
      "Renewable energy grid integration",
      "Urban and semi-urban distribution upgrades",
    ],
    benefits: [
      "Reduced transmission losses through optimised design",
      "Faster restoration with dedicated maintenance crews",
      "Compliance with CEA and state utility standards",
      "Single point of accountability from design to commissioning",
    ],
    projectExample: {
      title: "132 kV Line Extension, Tiruvallur",
      description: "18 km double-circuit transmission line connecting an industrial cluster to the regional grid, completed with zero lost-time incidents.",
    },
  },
  "ehv-substation": {
    icon: Building2,
    title: "EHV Substation",
    shortTitle: "EHV Substation",
    image: "https://www.electricaltechnology.org/wp-content/uploads/2018/02/Equipment-layout-in-an-AIS-substation1.jpg",
    heroSubtitle:
      "Extra-high-voltage substation engineering, erection, testing and commissioning for utilities and large industrial consumers.",
    overview:
      "Our substation division delivers turnkey EHV substations — from civil works and structure erection to switchgear installation, protection coordination and SCADA integration. We work across AIS and GIS configurations to match site constraints and client specifications.",
    capabilities: [
      "Substation civil and structural works",
      "Power transformer and switchgear installation",
      "Protection, control and SCADA integration",
      "Bus bar and isolator erection",
      "Earthing and lightning protection systems",
      "Pre-commissioning testing and statutory inspection support",
    ],
    process: [
      { title: "Basic & Detail Engineering", description: "Single-line diagrams, layout drawings and equipment specification." },
      { title: "Procurement", description: "Sourcing transformers, switchgear and protection systems from approved vendors." },
      { title: "Erection", description: "Structural, electrical and control system installation on site." },
      { title: "Testing & Commissioning", description: "Primary and secondary injection testing, protection coordination checks, and energisation." },
    ],
    applications: [
      "Utility transmission and distribution substations",
      "Industrial receiving substations",
      "Renewable energy pooling substations",
      "Railway traction substations",
    ],
    benefits: [
      "Turnkey execution reduces interface risk between contractors",
      "Experienced protection engineering team",
      "Adherence to IEC and CEA safety codes",
      "Post-commissioning O&M support available",
    ],
    projectExample: {
      title: "220/33 kV Pooling Substation, Ramanathapuram",
      description: "Built to evacuate power from a cluster of wind and solar generators into the state grid, commissioned ahead of schedule.",
    },
  },
  "htls-reconductoring": {
    icon: CableCar,
    title: "Re-conductoring with HTLS Conductors",
    shortTitle: "HTLS Re-conductoring",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/-8zspuv1c.jpg",
    heroSubtitle:
      "Upgrading existing transmission corridors with High Temperature Low Sag conductors to raise capacity without new right-of-way.",
    overview:
      "Where acquiring new transmission corridors is slow or costly, re-conductoring existing lines with HTLS conductors is often the faster path to more capacity. We assess existing towers, design the conductor changeover, and execute the swap with minimal outage windows.",
    capabilities: [
      "Existing line and tower capacity assessment",
      "HTLS conductor selection and sag-tension studies",
      "Live-line and planned-outage re-conductoring",
      "Tower reinforcement where required",
      "Thermal rating verification post-upgrade",
    ],
    process: [
      { title: "Feasibility Study", description: "Tower loading and clearance analysis to confirm the corridor can support HTLS conductors." },
      { title: "Engineering", description: "Sag-tension and thermal rating calculations for the new conductor profile." },
      { title: "Execution", description: "Phase-wise conductor replacement with coordinated outage planning." },
      { title: "Verification", description: "Post-upgrade testing to confirm the target capacity increase." },
    ],
    applications: [
      "Congested transmission corridors near urban centres",
      "Utilities needing capacity increases without new land acquisition",
      "Grid strengthening for renewable energy evacuation",
    ],
    benefits: [
      "Up to 2x thermal capacity increase on existing towers in typical cases",
      "Avoids lengthy right-of-way and land acquisition processes",
      "Lower sag characteristics improve ground clearance margins",
      "Faster project timelines compared to new line construction",
    ],
    projectExample: {
      title: "66 kV Corridor Upgrade, Coimbatore Industrial Belt",
      description: "Re-conductored 24 km of an ageing 66 kV line with HTLS conductors, increasing transfer capacity to meet growing industrial demand.",
    },
  },
  "railway-electrification": {
    icon: TrainFront,
    title: "Railway Electrification",
    shortTitle: "Railway Electrification",
    image: "https://www.ibef.org/uploads/blog/1688387927_ecd059744f3d9fbd5cab.png",
    heroSubtitle:
      "Overhead equipment, traction power supply and electrical infrastructure for railway electrification projects.",
    overview:
      "We support railway electrification programmes with overhead equipment (OHE) installation, traction substation works, and associated signalling power supply. Our crews are trained for track-side work under railway safety protocols and possession schedules.",
    capabilities: [
      "OHE mast foundation and erection",
      "Catenary and contact wire stringing",
      "Traction substation electrical works",
      "Signalling and telecom power supply integration",
      "Track-side cabling and earthing",
    ],
    process: [
      { title: "Survey & Design", description: "Track alignment survey and OHE structure design per railway standards." },
      { title: "Material Mobilisation", description: "Procurement and staging of masts, conductors and fittings." },
      { title: "Installation", description: "Mast erection and wire stringing during scheduled traffic blocks." },
      { title: "Testing & Handover", description: "Electrical clearance testing and handover to railway operations." },
    ],
    applications: [
      "Mainline electrification projects",
      "Suburban and metro rail corridors",
      "Traction substation upgrades",
    ],
    benefits: [
      "Crews trained on railway safety and possession discipline",
      "Coordination with railway engineering departments",
      "Experience working within constrained track-side access",
    ],
    projectExample: {
      title: "OHE Installation, Southern Rail Corridor Section",
      description: "42 route-km of overhead equipment installation completed within scheduled traffic block windows.",
    },
  },
  "solar-power-projects": {
    icon: SunMedium,
    title: "Solar Power Projects",
    shortTitle: "Solar Power Projects",
    image: "https://green.org/wp-content/uploads/2024/01/Solar-Energy-and-the-Future-of-Water-Treatmentss.jpg",
    heroSubtitle:
      "Utility-scale and commercial solar EPC — from land assessment and design through construction and grid commissioning.",
    overview:
      "Our solar EPC team delivers ground-mount utility-scale plants, commercial rooftop and carport installations, and industrial captive solar projects. We manage the full lifecycle: site assessment, engineering, procurement, civil and electrical construction, and grid commissioning.",
    capabilities: [
      "Utility-scale ground-mount solar plants",
      "Commercial and industrial rooftop solar",
      "Solar carports and elevated structures",
      "DC and AC electrical balance-of-system design",
      "Grid synchronisation and net-metering commissioning",
      "Performance monitoring system integration",
    ],
    process: [
      { title: "Site Assessment", description: "Shadow analysis, soil study and grid connectivity feasibility." },
      { title: "Engineering & Design", description: "Array layout, structural and electrical design optimised for site conditions." },
      { title: "Procurement", description: "Sourcing modules, inverters and balance-of-system components from qualified suppliers." },
      { title: "Construction & Commissioning", description: "Civil, mechanical and electrical construction followed by grid synchronisation." },
    ],
    applications: [
      "Utility-scale solar parks",
      "Commercial and industrial rooftops",
      "Captive power for manufacturing facilities",
      "Solar carports for institutional campuses",
    ],
    benefits: [
      "Full EPC accountability under one contract",
      "Performance-optimised array design for site-specific yield",
      "Experience with net-metering and open-access compliance",
      "Post-commissioning O&M packages available",
    ],
    projectExample: {
      title: "12 MW Ground-Mount Plant, Virudhunagar",
      description: "Ground-mount utility-scale plant delivered from site assessment to grid synchronisation in under seven months.",
    },
  },
  "water-management": {
    icon: Droplets,
    title: "Water Management",
    shortTitle: "Water Management",
    image: "https://media.licdn.com/dms/image/v2/D5612AQECuFs55UGtiA/article-cover_image-shrink_720_1280/B56Z.xWWtRGQAQ-/0/1785386857887?e=2147483647&v=beta&t=ZL_Z6eklvzKMFyGvOuSuTAlmbiaxtr-hZN05Fzd7YLY",
    heroSubtitle:
      "Solar-powered pumping and sustainable water infrastructure for agricultural, municipal and industrial applications.",
    overview:
      "We design and build water infrastructure that pairs efficient pumping systems with solar power where it reduces operating cost and improves reliability — particularly for agricultural irrigation and rural water supply where grid access is limited or expensive.",
    capabilities: [
      "Solar-powered irrigation pumping systems",
      "Municipal water supply pumping infrastructure",
      "Borewell and open-well pump installation",
      "Water storage and distribution network design",
      "Hybrid grid-solar pumping configurations",
    ],
    process: [
      { title: "Water Source Assessment", description: "Yield testing and demand analysis to size the pumping system correctly." },
      { title: "System Design", description: "Pump, motor and (where applicable) solar array sizing for the application." },
      { title: "Installation", description: "Pump, piping and electrical or solar system installation." },
      { title: "Commissioning", description: "Flow testing and handover with operating guidelines." },
    ],
    applications: [
      "Agricultural irrigation schemes",
      "Rural and semi-urban water supply",
      "Industrial process water pumping",
      "Institutional campus water systems",
    ],
    benefits: [
      "Lower operating cost with solar-powered pumping",
      "Reduced dependence on unreliable grid supply in rural areas",
      "Right-sized systems based on actual water source yield",
    ],
    projectExample: {
      title: "Solar Irrigation Scheme, Dindigul District",
      description: "Solar-powered pumping infrastructure serving a farmer cooperative across 180 acres of irrigated land.",
    },
  },
};
