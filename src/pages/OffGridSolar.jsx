import { NavLink } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  MapPinOff,
  Tractor,
  Building2,
  Home,
  Wifi,
  Factory,
  Hospital,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";

import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import ProcessTimeline from "../components/ProcessTimeline";

import "../styles/offgrid.css";

const steps = [
  {
    title: "Load Assessment",
    description:
      "Detailed study of power requirements and backup duration needed.",
  },
  {
    title: "System Sizing",
    description:
      "Panel and battery bank sizing for reliable independent operation.",
  },
  {
    title: "Installation",
    description:
      "Panel, battery storage and inverter installation.",
  },
  {
    title: "Testing",
    description:
      "Load testing to confirm autonomy and performance under real conditions.",
  },
  {
    title: "Handover",
    description:
      "Commissioning with operating guidelines and maintenance schedule.",
  },
];

/* =========================================================
   PAGE ANIMATION VARIANTS
========================================================= */

const sectionReveal = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const imageReveal = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    rotate: -3,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const listReveal = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.08,
      ease: "easeOut",
    },
  }),
};

export default function OffGridSolar() {
  return (
    <div className="off-grid-page">

      {/* =====================================================
          PAGE HERO
      ===================================================== */}

      <PageHero />

      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <motion.section
        className="section"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="container split-section">

          <motion.div
            className="split-section__media"
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.img
              src="https://dexterenergy.in/wp-content/uploads/2026/01/online-off-grid-solar-system-price.jpg"
              alt="Off-grid solar system with battery storage in a remote location"
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="eyebrow-line">OVERVIEW</div>

            <h2>Power Independent of the Grid</h2>

            <p>
              Off-grid solar systems combine solar panels with battery storage
              to provide a fully independent power supply — no grid connection
              required. They're engineered for remote sites, backup power
              needs, and locations where extending grid infrastructure is
              impractical or costly.
            </p>

            <p>
              We size each system around actual load profiles and required
              backup duration, so the system performs reliably rather than
              being oversized or undersized for the application.
            </p>
          </motion.div>

        </div>
      </motion.section>

      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <motion.section
        className="section section--light"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
      >
        <div className="container">

          <SectionTitle
            eyebrow="HOW IT WORKS"
            title="Generation, Storage, Supply"
          />

          <motion.div
            className="card-grid card-grid--3"
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
          >

            {/* Generate & Store */}

            <motion.div variants={cardReveal}>
              <motion.div
                className="bracket-frame"
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
              >

                <motion.div
                  className="how-it-works-card__media"
                  whileHover={{ scale: 1.04 }}
                >
                  <img
                    src="https://canalsolar.com.br/wp-content/uploads/2022/07/sistema-off-grid-1200x675.webp"
                    alt="Solar panels charging battery storage"
                  />
                </motion.div>

                <motion.span
                  className="solution-card__icon"
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                />

                <h3>Generate &amp; Store</h3>

                <p>
                  Solar panels charge a battery bank sized for your daily load
                  and required backup duration.
                </p>

              </motion.div>
            </motion.div>

            {/* Manage */}

            <motion.div variants={cardReveal}>
              <motion.div
                className="bracket-frame"
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
              >

                <motion.div
                  className="how-it-works-card__media"
                  whileHover={{ scale: 1.04 }}
                >
                  <img
                    src="https://eu.oukitel.com/cdn/shop/articles/7c42a71a568bb3eaff73fc009d5beee7.jpg?v=1784604428"
                    alt="Charge controller and inverter managing power flow"
                  />
                </motion.div>

                <motion.span
                  className="solution-card__icon"
                  animate={{
                    rotate: [0, 8, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

                <h3>Manage</h3>

                <p>
                  A charge controller and inverter manage power flow and
                  protect the battery bank from over-discharge.
                </p>

              </motion.div>
            </motion.div>

            {/* Supply */}

            <motion.div variants={cardReveal}>
              <motion.div
                className="bracket-frame"
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
              >

                <motion.div
                  className="how-it-works-card__media"
                  whileHover={{ scale: 1.04 }}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIYPn_1YYlFFKNArqWhUYf3TcnSpB6Y83cWCXrfGt-phN2v1BIqBNibVg&s=10"
                    alt="Off-grid solar system supplying power"
                  />
                </motion.div>

                <motion.span
                  className="solution-card__icon"
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                <h3>Supply</h3>

                <p>
                  Stored energy powers your site independently of grid
                  availability, day or night.
                </p>

              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </motion.section>

      {/* =====================================================
          APPLICATIONS
      ===================================================== */}

      <motion.section
        className="section"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
      >
        <div className="container">

          <SectionTitle
            eyebrow="APPLICATIONS"
            title="Off-Grid Solar for Every Energy Requirement"
          />

          <motion.div
            className="card-grid card-grid--3"
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
          >

            {/* Remote Homes */}

            <motion.div variants={cardReveal}>
              <motion.div
                className="bracket-frame"
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
              >

                <motion.span
                  className="solution-card__icon"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                >
                  <Home size={22} />
                </motion.span>

                <h3>Remote Homes</h3>

                <p>
                  Reliable solar power for homes in areas without grid
                  connectivity.
                </p>

              </motion.div>
            </motion.div>

            {/* Rural */}

            <motion.div variants={cardReveal}>
              <motion.div
                className="bracket-frame"
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
              >

                <motion.span
                  className="solution-card__icon"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <Tractor size={22} />
                </motion.span>

                <h3>Rural &amp; Agricultural</h3>

                <p>
                  Power for farms, irrigation systems, agricultural equipment,
                  and rural facilities.
                </p>

              </motion.div>
            </motion.div>

            {/* Telecom */}

            <motion.div variants={cardReveal}>
              <motion.div
                className="bracket-frame"
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
              >

                <motion.span
                  className="solution-card__icon"
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Wifi size={22} />
                </motion.span>

                <h3>Telecom Towers</h3>

                <p>
                  Reliable independent power for telecom and communication
                  infrastructure.
                </p>

              </motion.div>
            </motion.div>

            {/* Remote Industries */}

            <motion.div variants={cardReveal}>
              <motion.div
                className="bracket-frame"
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
              >

                <motion.span
                  className="solution-card__icon"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                  }}
                >
                  <Factory size={22} />
                </motion.span>

                <h3>Remote Industries</h3>

                <p>
                  Energy solutions for construction sites, mining areas, and
                  remote industrial locations.
                </p>

              </motion.div>
            </motion.div>

            {/* Schools */}

            <motion.div variants={cardReveal}>
              <motion.div
                className="bracket-frame"
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
              >

                <motion.span
                  className="solution-card__icon"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                  }}
                >
                  <Hospital size={22} />
                </motion.span>

                <h3>Schools &amp; Healthcare</h3>

                <p>
                  Dependable electricity for schools, clinics, hospitals, and
                  community facilities.
                </p>

              </motion.div>
            </motion.div>

            {/* Lighting */}

            <motion.div variants={cardReveal}>
              <motion.div
                className="bracket-frame"
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
              >

                <motion.span
                  className="solution-card__icon"
                  animate={{
                    scale: [1, 1.15, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                >
                  <Lightbulb size={22} />
                </motion.span>

                <h3>Street Lighting</h3>

                <p>
                  Standalone solar-powered lighting for roads, campuses,
                  villages, and public spaces.
                </p>

              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </motion.section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <motion.section
        className="section section--light"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
      >
        <div className="container">

          <SectionTitle
            eyebrow="BENEFITS"
            title="Why Off-grid Solar Makes Sense"
          />

          <motion.ul className="two-col-list">

            {[
              "Reliable power in remote and rural locations",
              "Independence from grid outages and instability",
              "No ongoing grid connection or transmission costs",
              "Battery backup sized to your operational needs",
              "Scalable for homes, telecom sites or facilities",
              "Reduced dependence on diesel generator backup",
            ].map((item, index) => (

              <motion.li
                key={item}
                custom={index}
                variants={listReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
              >

                <motion.span
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  <CheckCircle2 />
                </motion.span>

                {item}

              </motion.li>

            ))}

          </motion.ul>

        </div>
      </motion.section>

      {/* =====================================================
          WHERE OFF-GRID SOLAR FITS
      ===================================================== */}

      <motion.section
        className="section"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
      >
        <div className="container">

          <SectionTitle
            eyebrow="APPLICATIONS"
            title="Where Off-grid Solar Fits"
          />

          <motion.div
            className="card-grid card-grid--3"
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
          >

            {/* Remote Sites */}

            <motion.div variants={cardReveal}>
              <motion.div
                className="bracket-frame"
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
              >

                <motion.div
                  className="application-card__media"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YUFGmOHQKZ6XJa4FyStGyDK7B5-NlzrEkuA9m7sqi6JhM1xKAumiy35z&s=10"
                    alt="Remote off-grid solar site"
                  />
                </motion.div>

                <motion.span
                  className="solution-card__icon"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                >
                  <MapPinOff size={22} />
                </motion.span>

                <h3>Remote Sites</h3>

                <p>
                  Locations without practical access to grid infrastructure.
                </p>

              </motion.div>
            </motion.div>

            {/* Rural Infrastructure */}

            <motion.div variants={cardReveal}>
              <motion.div
                className="bracket-frame"
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
              >

                <motion.div
                  className="application-card__media"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8XN0gQjFrsjeyQ6OnJ2UVbVGkYSeXnmEN2UzOKNnM6A&s=10"
                    alt="Rural infrastructure solar installation"
                  />
                </motion.div>

                <motion.span
                  className="solution-card__icon"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <Tractor size={22} />
                </motion.span>

                <h3>Rural Infrastructure</h3>

                <p>
                  Agricultural and rural facilities needing independent power
                  supply.
                </p>

              </motion.div>
            </motion.div>

            {/* Critical Backup */}

            <motion.div variants={cardReveal}>
              <motion.div
                className="bracket-frame"
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
              >

                <motion.div
                  className="application-card__media"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=900&auto=format&fit=crop"
                    alt="Critical backup off-grid solar system"
                  />
                </motion.div>

                <motion.span
                  className="solution-card__icon"
                  animate={{
                    scale: [1, 1.12, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Building2 size={22} />
                </motion.span>

                <h3>Critical Backup</h3>

                <p>
                  Facilities requiring guaranteed backup power independent of
                  grid reliability.
                </p>

              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </motion.section>

     
      
    </div>
  );
}