import { useParams, NavLink, Navigate } from "react-router-dom";
import {
  ShieldCheck,
  Zap,
  Building2,
  RadioTower,
  ClipboardCheck,
  CircleGauge,
  ArrowRight,
  Search,
  PenTool,
  Settings,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { services } from "../config/services";
import PageHero from "../components/PageHero";

/* =====================================================
   ANIMATIONS
===================================================== */

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* =====================================================
   FALLBACK IMAGES
===================================================== */

// Removed TypeScript type annotation for compatibility with JavaScript
const serviceImages = {
  "power-distribution-transmission": [
    "https://www.tatapower.com/adobe/dynamicmedia/deliver/dm-p-oid--xoiKJFyY4kqwBXocriZrmRglbhyjMgNeoZG4whF-UwrRwMKccPcsDJ-OoCe9x0BA3MOy8_FdN0QieFcTr5u8FH2nXxOjpKnwjHO0K_7iXTuZOOCkb5qAgSAlCjIAR13dpPfbzwQUHCy-LK_HaSPgNB-eY87N8XrR1aPb5iFQRio/body-img-01.png?preferwebp=true&quality=85",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbLUbza_NVO7OuCuYhHoNzDfZhjWgSWwucJL4t-Ll8LgWgoFA2uWzhUr0&s=10",
    "https://img.etimg.com/thumb/width-1200,height-900,imgsize-203516,resizemode-75,msid-133433235/prime/et-prime-special-bigger-better-or-both-understanding-business-to-figure-out-the-mystery-power-grid-corp-part-1.jpg",
  ],

  "ehv-substation": [
    "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=2000&q=90",
    "https://www.tpsdi.com/coursesimages/transmission-mobile.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHqLN99dwzU1pAcwy-dwSPxcjC5N6_OKt3mUE5kuDnKtz-a-s8RMfe-fk&s=10",
  ],

  "re-conductoring-htls-conductors": [
    "https://luminoindustries.com/wp-content/uploads/2024/04/htls-banner.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbMEwm4mEeYlP00LnzMGd8sg9bQ3YyAvfMCAHk_Mnkb9f1o9AX4kbF7_U&s=10",
    "https://apar.com/wp-content/uploads/2025/09/turn2-scaled.jpg.webp",
  ],

  "railway-electrification": [
    "https://powerline.net.in/wp-content/uploads/2017/08/46-1-678x381.jpg",
    "https://2.wlimg.com/product_images/bc-full/2020/6/5091148/railway-electrification-structure-1591765339-4644716.jpeg",
    "https://metrorailnews.in/wp-content/uploads/2025/11/image-37.png",
  ],

  "solar-power-projects": [
    "https://www.cincoland.com/wp-content/uploads/2024/04/Solar-Energy-3-1.png",
    "https://bsmedia.business-standard.com/_media/bs/img/article/2024-08/28/full/1724835314-5004.jpg",
    "https://comsite-s3.s3.ap-southeast-3.amazonaws.com/images/post/tb5dqVvqLGrkPU9EfA10E5zJ04urB2aaqT4aqyQ1.webp",
  ],

  "water-management": [
    "https://thumbs.dreamstime.com/b/solar-powered-water-pump-agricultural-field-operates-providing-efficient-irrigation-to-crops-harnessing-renewable-337695757.jpg",
    "https://australianpremiumsolar.co.in/wp-content/uploads/2024/09/Highly-Efficient-Solar-PV-Modules.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDBMxKlNjM2lSfzNbxcd7cBCe4Zpwuj7XcvUbDjAlS3nDeq4dwVJP5sJM&s=10",
  ],
};

const defaultImages = serviceImages["power-distribution-transmission"];

const defaultSpecifications = [
  "Engineering & Design",
  "Installation & Execution",
  "Testing & Commissioning",
  "Quality & Safety Management",
  "Project Coordination",
  "Technical Support",
];

export default function ServicePage() {
  const { serviceSlug } = useParams();
  const service = services[serviceSlug];

  if (!service) return <Navigate to="/services/power-distribution-transmission" replace />;

  const Icon = service.icon;

  /*
   * Images
   */
  const images =
    Array.isArray(service.images) && service.images.length
      ? service.images
      : serviceImages[serviceSlug || ""] || defaultImages;

  const heroImage =
    service.heroImage || images[0] || defaultImages[0];

  const overviewImage =
    service.overviewImage || images[1] || images[0] || defaultImages[1];

  const processImage =
    service.processImage || images[2] || images[0] || defaultImages[2];

  /*
   * Capabilities
   */
  const specifications =
    Array.isArray(service.specifications) &&
    service.specifications.length
      ? service.specifications
      : Array.isArray(service.capabilities) &&
          service.capabilities.length
        ? service.capabilities
        : defaultSpecifications;

  const icons = [
    Building2,
    Zap,
    RadioTower,
    ShieldCheck,
    CircleGauge,
    ClipboardCheck,
  ];

  return (
    <main className="service-page">
      <PageHero crumb={`Services / ${service.shortTitle}`} title={service.title} description={service.heroSubtitle} />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="service-hero">
        <motion.div
          className="hero-image"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={heroImage}
            alt={service.title}
          />
        </motion.div>

        <div className="hero-overlay" />

        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >

          <motion.div
            className="hero-label"
            variants={fadeUp}
          >
            <span />
            SENELA INTERNATIONAL
          </motion.div>

          <motion.h1 variants={fadeUp}>
            {service.title}
          </motion.h1>

          <motion.p variants={fadeUp}>
            {service.overview ||
              "Professional engineering solutions designed for quality, reliability and long-term performance."}
          </motion.p>

          <motion.div variants={fadeUp}>
            <NavLink
              to="/contact"
              className="hero-button"
            >
              Discuss Your Project
              <ArrowRight size={17} />
            </NavLink>
          </motion.div>

        </motion.div>

        <div className="hero-shape" />

      </section>


      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <section className="service-overview">

        <div className="overview-container">

          <motion.div
            className="overview-content"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >

            <div className="section-label">
              <span />
              ABOUT THE SERVICE
            </div>

            <h2>
              Built for
              <br />
              <strong>Performance.</strong>
            </h2>

            <p>
              {service.overview ||
                "We deliver dependable engineering solutions with a strong focus on quality, safety, precision and efficient project execution."}
            </p>

            <div className="overview-points">

              <div>
                <CheckCircle2 size={18} />
                <span>Quality Focused</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Safety Driven</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Reliable Delivery</span>
              </div>

            </div>

          </motion.div>


          <motion.div
            className="overview-image"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >

            <img
              src={overviewImage}
              alt={service.title}
            />

            <div className="image-caption">
              SENELA INTERNATIONAL
            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="capabilities">

        <motion.div
          className="capability-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          <div className="section-label">
            <span />
            OUR CAPABILITIES
          </div>

          <h2>
            What We
            <br />
            <strong>Deliver.</strong>
          </h2>

          <p>
            Practical engineering capabilities backed by
            professional execution and quality standards.
          </p>

        </motion.div>


        <motion.div
          className="capability-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >

          {specifications.slice(0, 6).map((item, index) => {

            const Icon = icons[index % icons.length];

            return (
              <motion.div
                className="capability-card"
                key={`${item}-${index}`}
                variants={fadeUp}
                whileHover={{
                  y: -7,
                  transition: { duration: 0.25 },
                }}
              >

                <div className="card-number">
                  0{index + 1}
                </div>

                <div className="card-icon">
                  <Icon size={22} />
                </div>

                <h3>{item}</h3>

                <p>
                  Professional execution focused on
                  quality, precision and reliability.
                </p>

              </motion.div>
            );
          })}

        </motion.div>

      </section>


      {/* =====================================================
          APPROACH
      ===================================================== */}

      <section className="approach">

        <motion.div
          className="approach-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <img
            src={processImage}
            alt="Senela International"
          />

          <div className="approach-overlay" />

          <div className="approach-caption">
            <span>OUR APPROACH</span>
            <strong>
              From Concept
              <br />
              to Completion.
            </strong>
          </div>

        </motion.div>


        <motion.div
          className="approach-content"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          <div className="section-label">
            <span />
            HOW WE WORK
          </div>

          <h2>
            Simple.
            <br />
            <strong>Precise.</strong>
          </h2>

          <p>
            We follow a structured process to ensure
            efficient execution and dependable project
            delivery.
          </p>


          <div className="steps">

            <div className="step">
              <div className="step-icon">
                <Search size={18} />
              </div>

              <div>
                <small>01</small>
                <h3>Understand</h3>
                <p>
                  Understand project requirements and
                  technical objectives.
                </p>
              </div>
            </div>


            <div className="step">
              <div className="step-icon">
                <PenTool size={18} />
              </div>

              <div>
                <small>02</small>
                <h3>Plan</h3>
                <p>
                  Develop practical solutions and
                  execution plans.
                </p>
              </div>
            </div>


            <div className="step">
              <div className="step-icon">
                <Settings size={18} />
              </div>

              <div>
                <small>03</small>
                <h3>Execute</h3>
                <p>
                  Execute with attention to quality,
                  safety and precision.
                </p>
              </div>
            </div>

          </div>

        </motion.div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="service-cta">

        <div className="cta-glow" />

        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div>

            <div className="cta-label">
              SENELA INTERNATIONAL
            </div>

            <h2>
              Have a Project
              <br />
              <strong>in Mind?</strong>
            </h2>

            <p>
              Let's discuss your engineering requirements.
            </p>

          </div>


          <NavLink
            to="/contact"
            className="cta-button"
          >
            Contact / Enquiry
            <ArrowRight size={18} />
          </NavLink>

        </motion.div>

      </section>


     


    </main>
  );
}

