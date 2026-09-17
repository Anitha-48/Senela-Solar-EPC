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


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        .service-page {
          width: 100%;
          background: #f5f9fc;
          color: #123b5a;
          overflow: hidden;
        }


        /* =========================================
           HERO
        ========================================= */

        .service-hero {
          position: relative;
          height: 570px;
          overflow: hidden;
          background: #062e4b;
        }

        .hero-image {
          position: absolute;
          inset: 0;
        }

        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(3, 34, 58, .96) 0%,
              rgba(4, 48, 78, .85) 40%,
              rgba(5, 55, 88, .45) 70%,
              rgba(4, 40, 65, .15) 100%
            );
        }

        .hero-content {
          position: relative;
          z-index: 3;

          width: 100%;
          max-width: 1250px;
          height: 100%;

          margin: auto;
          padding: 60px 6%;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }

        .hero-label,
        .section-label {
          display: flex;
          align-items: center;
          gap: 12px;

          color: #71c2eb;

          font-size: 10px;
          font-weight: 600;
          letter-spacing: 3px;
        }

        .hero-label span,
        .section-label span {
          width: 35px;
          height: 1px;
          background: #51add8;
        }

        .hero-label {
          margin-bottom: 20px;
        }

        .hero-content h1 {
          max-width: 800px;

          margin: 0 0 20px;

          color: white;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size:
            clamp(45px, 6vw, 78px);

          line-height: 1.02;
          font-weight: 400;
        }

        .hero-content p {
          max-width: 580px;

          margin: 0 0 30px;

          color: #d5e7f1;

          font-size: 15px;
          line-height: 1.8;
        }

        .hero-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;

          padding: 13px 22px;

          border: 1px solid rgba(116, 194, 231, .65);
          border-radius: 30px;

          color: white;
          background: rgba(24, 123, 170, .35);

          text-decoration: none;

          font-size: 12px;

          transition: .3s ease;
        }

        .hero-button:hover {
          background: #1682b8;
          transform: translateY(-3px);
        }

        .hero-shape {
          position: absolute;

          right: -180px;
          bottom: -220px;

          width: 500px;
          height: 500px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(49, 174, 225, .25),
              transparent 68%
            );
        }


        /* =========================================
           OVERVIEW
        ========================================= */

        .service-overview {
          padding: 90px 6%;

          background: #f7fafc;
        }

        .overview-container {
          max-width: 1200px;

          margin: auto;

          display: grid;
          grid-template-columns: .85fr 1.15fr;

          gap: 70px;

          align-items: center;
        }

        .section-label {
          margin-bottom: 18px;
          color: #1680b5;
        }

        .overview-content h2,
        .capability-heading h2,
        .approach-content h2 {
          margin: 0 0 22px;

          color: #123b5a;

          font-family: Georgia, serif;

          font-size:
            clamp(40px, 4.5vw, 60px);

          line-height: 1.05;

          font-weight: 400;
        }

        .overview-content h2 strong,
        .capability-heading h2 strong,
        .approach-content h2 strong {
          color: #1686bb;
          font-weight: 400;
        }

        .overview-content p,
        .capability-heading p,
        .approach-content > p {
          max-width: 520px;

          margin: 0;

          color: #687f8e;

          font-size: 14px;
          line-height: 1.9;
        }

        .overview-points {
          margin-top: 28px;

          display: flex;
          flex-wrap: wrap;

          gap: 20px;
        }

        .overview-points div {
          display: flex;
          align-items: center;
          gap: 7px;

          color: #315d76;

          font-size: 12px;
        }

        .overview-points svg {
          color: #1788ba;
        }

        .overview-image {
          position: relative;

          height: 400px;

          overflow: hidden;

          border-radius: 4px;

          box-shadow:
            0 25px 55px
            rgba(7, 57, 85, .12);
        }

        .overview-image img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          transition: transform 1s ease;
        }

        .overview-image:hover img {
          transform: scale(1.05);
        }

        .image-caption {
          position: absolute;

          left: 20px;
          bottom: 20px;

          padding: 8px 12px;

          color: white;

          background: rgba(5, 45, 70, .85);

          font-size: 8px;
          letter-spacing: 2px;
        }


        /* =========================================
           CAPABILITIES
        ========================================= */

        .capabilities {
          padding: 90px 6%;

          background:
            linear-gradient(
              135deg,
              #eaf5fa,
              #f8fbfd
            );
        }

        .capability-heading {
          max-width: 1200px;
          margin: auto auto 45px;
        }

        .capability-grid {
          max-width: 1200px;

          margin: auto;

          display: grid;
          grid-template-columns: repeat(3, 1fr);

          gap: 16px;
        }

        .capability-card {
          position: relative;

          min-height: 190px;

          padding: 28px;

          background: rgba(255,255,255,.9);

          border: 1px solid #d7e8f1;

          transition: .3s ease;
        }

        .capability-card:hover {
          border-color: #8fc9e3;

          box-shadow:
            0 18px 35px
            rgba(10, 83, 119, .10);
        }

        .card-number {
          position: absolute;

          right: 18px;
          top: 15px;

          color: #a5bfcd;

          font-size: 9px;
          letter-spacing: 2px;
        }

        .card-icon {
          width: 46px;
          height: 46px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 18px;

          border-radius: 50%;

          background: #e1f2fa;

          color: #1685b8;
        }

        .capability-card h3 {
          margin: 0 0 8px;

          color: #143e59;

          font-size: 15px;
          font-weight: 600;
        }

        .capability-card p {
          margin: 0;

          color: #718794;

          font-size: 12px;
          line-height: 1.6;
        }


        /* =========================================
           APPROACH
        ========================================= */

        .approach {
          max-width: 1250px;

          margin: auto;

          display: grid;
          grid-template-columns: 1fr 1fr;

          background: white;
        }

        .approach-image {
          position: relative;

          min-height: 550px;

          overflow: hidden;
        }

        .approach-image img {
          width: 100%;
          height: 100%;

          object-fit: cover;
        }

        .approach-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              0deg,
              rgba(3, 36, 60, .88),
              transparent 70%
            );
        }

        .approach-caption {
          position: absolute;

          left: 40px;
          bottom: 40px;

          color: white;
        }

        .approach-caption span {
          display: block;

          margin-bottom: 10px;

          color: #70c0e7;

          font-size: 9px;
          letter-spacing: 3px;
        }

        .approach-caption strong {
          font-family: Georgia, serif;

          font-size: 30px;
          font-weight: 400;

          line-height: 1.15;
        }

        .approach-content {
          padding: 75px 9%;

          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .steps {
          margin-top: 30px;
        }

        .step {
          display: flex;
          gap: 15px;

          padding: 17px 0;

          border-top: 1px solid #dce9ef;
        }

        .step-icon {
          width: 42px;
          height: 42px;
          min-width: 42px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #e8f5fa;

          color: #1685b7;
        }

        .step small {
          display: block;

          margin-bottom: 4px;

          color: #2996c3;

          font-size: 8px;
          letter-spacing: 2px;
        }

        .step h3 {
          margin: 0 0 5px;

          color: #163e59;

          font-size: 14px;
        }

        .step p {
          margin: 0;

          color: #718794;

          font-size: 11px;
          line-height: 1.5;
        }


        /* =========================================
           CTA
        ========================================= */

        .service-cta {
          position: relative;

          overflow: hidden;

          padding: 70px 6%;

          background:
            linear-gradient(
              120deg,
              #052f4e,
              #075b85,
              #087fae
            );
        }

        .cta-glow {
          position: absolute;

          width: 500px;
          height: 500px;

          right: -180px;
          top: -250px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(99, 205, 243, .25),
              transparent 70%
            );
        }

        .cta-content {
          position: relative;
          z-index: 2;

          max-width: 1200px;

          margin: auto;

          display: flex;

          align-items: center;
          justify-content: space-between;

          gap: 40px;
        }

        .cta-label {
          margin-bottom: 12px;

          color: #70c1e4;

          font-size: 9px;
          letter-spacing: 3px;
        }

        .cta-content h2 {
          margin: 0 0 10px;

          color: white;

          font-family: Georgia, serif;

          font-size:
            clamp(35px, 4vw, 50px);

          font-weight: 400;

          line-height: 1.1;
        }

        .cta-content h2 strong {
          color: #7fd0ee;
          font-weight: 400;
        }

        .cta-content p {
          margin: 0;

          color: #c5dce8;

          font-size: 13px;
        }

        .cta-button {
          display: inline-flex;

          align-items: center;
          gap: 10px;

          padding: 14px 23px;

          border: 1px solid rgba(255,255,255,.5);

          border-radius: 30px;

          color: white;

          text-decoration: none;

          font-size: 12px;

          transition: .3s ease;
        }

        .cta-button:hover {
          background: white;
          color: #075b85;

          transform: translateY(-3px);
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 900px) {

          .overview-container {
            grid-template-columns: 1fr;

            gap: 45px;
          }

          .capability-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .approach {
            grid-template-columns: 1fr;
          }

          .approach-image {
            min-height: 400px;
          }

          .cta-content {
            flex-direction: column;
            align-items: flex-start;
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {

          .service-hero {
            height: 500px;
          }

          .hero-content {
            padding: 35px 24px;
          }

          .hero-content h1 {
            font-size: 44px;
          }

          .hero-content p {
            font-size: 13px;
          }

          .service-overview {
            padding: 65px 24px;
          }

          .overview-image {
            height: 290px;
          }

          .capabilities {
            padding: 65px 24px;
          }

          .capability-grid {
            grid-template-columns: 1fr;
          }

          .capability-card {
            min-height: 165px;
          }

          .approach-image {
            min-height: 330px;
          }

          .approach-caption {
            left: 25px;
            bottom: 30px;
          }

          .approach-content {
            padding: 60px 24px;
          }

          .service-cta {
            padding: 60px 24px;
          }

          .cta-button {
            width: 100%;
            justify-content: center;
          }

        }

      `}</style>

    </main>
  );
}

