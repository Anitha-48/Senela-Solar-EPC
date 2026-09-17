import { useParams, NavLink } from "react-router-dom";
import {
  ShieldCheck, Leaf, Zap, Clock3, ArrowRight, Building2, RadioTower,
  ClipboardCheck, CircleGauge, Search, PenTool, Settings, CheckCircle2,
  Cable, TrainFront, Sun, Droplets, Calculator, Mail, ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import { services } from "../config/services";

/* =====================================================
   MOTION VARIANTS
===================================================== */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

/* =====================================================
   FALLBACK CAPABILITIES (used only if a service has none)
===================================================== */

const defaultSpecifications = [
  "Civil and structural works",
  "Equipment installation and commissioning",
  "Protection, control and SCADA integration",
  "Erection and alignment",
  "Earthing and lightning protection",
  "Testing and statutory inspection support",
];

export default function ServicePage() {
  const { serviceSlug } = useParams();
  const [servicesOpen, setServicesOpen] = useState(true);

  const service =
    services[serviceSlug] || services["power-distribution-transmission"];

  const categories = Object.entries(services).map(([slug, item]) => ({
    slug,
    title: item.shortTitle || item.title,
    icon: item.icon,
  }));

  /* =====================================================
     FALLBACK IMAGES
  ===================================================== */

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

  const fallbackImages = serviceImages["power-distribution-transmission"];

  // service.images (from config/services.js) always takes priority.
  const images =
    (Array.isArray(service.images) && service.images.length && service.images) ||
    serviceImages[serviceSlug] ||
    fallbackImages;

  const heroImage =
    service.heroImage || images[0] || fallbackImages[0];
  const overviewImage =
    service.overviewImage || images[1] || images[0] || fallbackImages[1];
  const processImage =
    service.processImage || images[2] || images[0] || fallbackImages[2];

  const specifications =
    (Array.isArray(service.specifications) && service.specifications.length && service.specifications) ||
    (Array.isArray(service.capabilities) && service.capabilities.length && service.capabilities) ||
    defaultSpecifications;

  const iconList = [Building2, Zap, RadioTower, ShieldCheck, CircleGauge, ClipboardCheck];

  return (
    <>
      <main className="service-page">
        <div className="service-main">

            {/* HERO */}
            <section className="service-hero">
              <motion.div
                className="service-hero-image"
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
              >
                <img src={heroImage} alt={service.title} />
              </motion.div>

              <div className="service-hero-overlay" />

              <motion.div className="service-hero-content" initial="hidden" animate="visible" variants={staggerContainer}>
                <motion.div className="service-eyebrow" variants={fadeUp}>
                  <span />
                  SENELA INTERNATIONAL
                </motion.div>

                <motion.h1 variants={fadeUp}>{service.title}</motion.h1>

                <motion.p variants={fadeUp}>
                  Delivering dependable engineering solutions through precision, technology and international quality standards.
                </motion.p>

                <motion.div
                  className="hero-line"
                  initial={{ width: 0 }}
                  animate={{ width: 100 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </motion.div>

              <div className="hero-number">01</div>
            </section>

            {/* INTRO */}
            <section className="service-intro">
              <div className="service-intro-grid">

                <motion.div
                  className="service-intro-content"
                  variants={fadeLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <div className="blue-label">
                    <span />
                    {service.shortTitle || service.title}
                  </div>

                  <h2>Built for<br /><span>Performance.</span></h2>

                  <p>
                    {service.overview ||
                      "We provide dependable engineering solutions designed around quality, safety, precision and long-term performance."}
                  </p>

                  <div className="intro-line" />

                  <div className="intro-mini-points">
                    <div><CheckCircle2 /><span>Quality Driven</span></div>
                    <div><CheckCircle2 /><span>Global Standards</span></div>
                    <div><CheckCircle2 /><span>Reliable Delivery</span></div>
                  </div>
                </motion.div>

                <motion.div
                  className="service-intro-image"
                  variants={fadeRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <img src={overviewImage} alt={service.title} />
                  <div className="image-tag">SENELA INTERNATIONAL</div>
                </motion.div>

              </div>
            </section>

            {/* CAPABILITIES */}
            <section className="service-specification">
              <motion.div
                className="spec-header"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="blue-label">
                  <span />
                  OUR CAPABILITIES
                </div>

                <h2>Engineered for<br /><span>Excellence.</span></h2>

                <p>
                  Comprehensive capabilities backed by professional execution, advanced systems and strong quality standards.
                </p>
              </motion.div>

              <motion.div
                className="spec-grid"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
              >
                {specifications.map((item, index) => {
                  const Icon = iconList[index % iconList.length];
                  return (
                    <motion.div
                      className="spec-card"
                      key={`${item}-${index}`}
                      variants={fadeUp}
                      whileHover={{ y: -8 }}
                    >
                      <div className="spec-number">{String(index + 1).padStart(2, "0")}</div>

                      <motion.div className="spec-icon" whileHover={{ rotate: 8, scale: 1.1 }}>
                        <Icon size={23} />
                      </motion.div>

                      <div>
                        <h3>{item}</h3>
                        <p>Professional execution focused on quality, precision, safety and operational reliability.</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </section>

            {/* HOW WE WORK */}
            <section className="how-we-work">
              <div className="process-bg-number">03</div>

              <motion.div
                className="process-image"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1 }}
              >
                <img src={processImage} alt="Senela International process" />
                <div className="process-image-overlay" />
                <div className="process-image-text">
                  <span>OUR APPROACH</span>
                  <strong>Precision from<br />Concept to Completion.</strong>
                </div>
              </motion.div>

              <motion.div
                className="process-content"
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="blue-label">
                  <span />
                  HOW WE WORK
                </div>

                <h2>From Planning<br />to <span>Delivery.</span></h2>

                <p>
                  Our structured approach ensures every project moves efficiently from initial understanding to final delivery while maintaining quality, safety and performance.
                </p>

                <div className="process-steps">

                  <motion.div className="process-step" variants={fadeUp}>
                    <div className="step-icon"><Search /></div>
                    <div>
                      <small>01</small>
                      <h3>Understand</h3>
                      <p>We understand project requirements, technical needs and delivery objectives.</p>
                    </div>
                  </motion.div>

                  <motion.div className="process-step" variants={fadeUp}>
                    <div className="step-icon"><PenTool /></div>
                    <div>
                      <small>02</small>
                      <h3>Plan & Design</h3>
                      <p>Our team develops practical solutions with precision and engineering standards.</p>
                    </div>
                  </motion.div>

                  <motion.div className="process-step" variants={fadeUp}>
                    <div className="step-icon"><Settings /></div>
                    <div>
                      <small>03</small>
                      <h3>Execute</h3>
                      <p>Professional execution with continuous attention to safety and quality.</p>
                    </div>
                  </motion.div>

                  <motion.div className="process-step" variants={fadeUp}>
                    <div className="step-icon"><CheckCircle2 /></div>
                    <div>
                      <small>04</small>
                      <h3>Deliver</h3>
                      <p>Final delivery focused on reliability, performance and customer satisfaction.</p>
                    </div>
                  </motion.div>

                </div>
              </motion.div>
            </section>

            {/* CTA */}
            <section className="service-cta">
              <div className="service-cta-light" />

              <motion.div
                className="service-cta-content"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9 }}
              >
                <div>
                  <div className="cta-label">SENELA INTERNATIONAL</div>
                  <h2>Let's Build<br />Something Stronger.</h2>
                  <p>Discuss your project requirements with our team.</p>
                </div>

                <NavLink to="/contact" className="service-cta-button">
                  Contact / Enquiry
                  <ArrowRight size={18} />
                </NavLink>
              </motion.div>

              <motion.div
                className="cta-benefits"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div variants={fadeUp}>
                  <Zap />
                  <span>Reliable<br />Infrastructure</span>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <ShieldCheck />
                  <span>Quality<br />Assured</span>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <Leaf />
                  <span>Sustainable<br />Solutions</span>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <Clock3 />
                  <span>On-Time<br />Delivery</span>
                </motion.div>
              </motion.div>
            </section>

          </div>
      </main>

      {/* =====================================================
          COMPLETE CSS
      ===================================================== */}
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }

        .service-page {
          width: 100%;
          min-height: 100vh;
          background: #f4f8fb;
          color: #123b5a;
          overflow: hidden;
        }

        .service-main {
          min-width: 0;
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 10px 35px rgba(7, 48, 76, .04);
        }

        /* HERO */
        .service-hero { position: relative; height: 570px; overflow: hidden; background: #062d4b; }
        .service-hero-image { position: absolute; inset: 0; }
        .service-hero-image img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .service-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(4, 32, 55, .98) 0%,
            rgba(5, 45, 73, .86) 35%,
            rgba(5, 45, 73, .45) 67%,
            rgba(5, 45, 73, .08) 100%
          );
        }

        .service-hero-content {
          position: relative;
          z-index: 3;
          height: 100%;
          padding: 70px 7%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .service-eyebrow, .blue-label {
          display: flex;
          align-items: center;
          gap: 13px;
          color: #70b7df;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 21px;
        }

        .service-eyebrow span, .blue-label span { width: 38px; height: 1px; background: #5da9d0; }

        .service-hero h1 {
          max-width: 750px;
          margin: 0 0 24px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(46px, 5.5vw, 78px);
          line-height: 1;
          font-weight: 400;
          color: #ffffff;
        }

        .service-hero-content p { max-width: 550px; margin: 0; color: #d1e0e9; font-size: 16px; line-height: 1.8; }

        .hero-line { height: 2px; margin-top: 32px; background: #62afd5; }

        .hero-number {
          position: absolute;
          right: 30px; bottom: 15px;
          z-index: 3;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 130px;
          color: rgba(255,255,255,.06);
        }

        /* INTRO */
        .service-intro { padding: 100px 7%; background: #f7fafc; }
        .service-intro-grid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 65px; align-items: center; }

        .service-intro h2, .spec-header h2, .process-content h2 {
          margin: 0 0 25px;
          color: #123b5a;
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
          line-height: 1.05;
        }

        .service-intro h2 { font-size: clamp(42px, 4.5vw, 62px); }
        .service-intro h2 span, .spec-header h2 span, .process-content h2 span { color: #2386b7; }

        .service-intro p { max-width: 500px; margin: 0; color: #637989; font-size: 15px; line-height: 1.9; }

        .intro-line { width: 65px; height: 2px; margin: 25px 0; background: #2489ba; }

        .intro-mini-points { display: flex; flex-wrap: wrap; gap: 16px; }
        .intro-mini-points div { display: flex; align-items: center; gap: 7px; color: #244d67; font-size: 12px; }
        .intro-mini-points svg { width: 16px; color: #2588b8; }

        .service-intro-image {
          position: relative;
          height: 420px;
          overflow: hidden;
          border-radius: 3px;
          box-shadow: 0 25px 60px rgba(8, 45, 72, .13);
        }

        .service-intro-image img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 1s ease; }
        .service-intro-image:hover img { transform: scale(1.06); }

        .image-tag {
          position: absolute;
          left: 20px; bottom: 20px;
          padding: 9px 13px;
          background: rgba(5, 35, 58, .88);
          color: #d5e9f4;
          font-size: 8px;
          letter-spacing: 2px;
        }

        /* CAPABILITIES */
        .service-specification { padding: 95px 7%; background: linear-gradient(135deg, #e9f2f7, #f7fafc); }
        .spec-header { margin-bottom: 50px; }
        .spec-header h2 { font-size: clamp(42px, 4.5vw, 62px); }
        .spec-header p { max-width: 570px; margin: 0; color: #647a8b; font-size: 15px; line-height: 1.8; }

        .spec-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2px; background: #cbdde8; }

        .spec-card {
          position: relative;
          min-height: 155px;
          padding: 28px;
          display: flex;
          align-items: flex-start;
          gap: 19px;
          background: #fbfdff;
          transition: box-shadow .3s ease;
        }

        .spec-card:hover { box-shadow: 0 15px 40px rgba(8, 54, 82, .10); }
        .spec-number { position: absolute; top: 14px; right: 18px; color: #9bb3c2; font-size: 9px; letter-spacing: 2px; }

        .spec-icon {
          width: 50px; height: 50px; min-width: 50px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%;
          background: #e1f0f7;
          color: #2384b4;
        }

        .spec-card h3 { margin: 2px 0 8px; color: #123b5a; font-size: 16px; font-weight: 600; }
        .spec-card p { margin: 0; color: #718694; font-size: 13px; line-height: 1.6; }

        /* HOW WE WORK */
        .how-we-work {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 620px;
          background: #ffffff;
          overflow: hidden;
        }

        .process-bg-number {
          position: absolute;
          right: 15px; top: -35px;
          z-index: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 170px;
          color: rgba(27, 116, 159, .035);
        }

        .process-image { position: relative; min-height: 620px; overflow: hidden; }
        .process-image img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 1.2s ease; }
        .process-image:hover img { transform: scale(1.05); }

        .process-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(5, 37, 61, .90), rgba(5, 37, 61, .04) 70%);
        }

        .process-image-text { position: absolute; left: 45px; bottom: 45px; color: #ffffff; }
        .process-image-text span { display: block; margin-bottom: 10px; color: #71b9dd; font-size: 9px; letter-spacing: 3px; }
        .process-image-text strong {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 32px;
          font-weight: 400;
          line-height: 1.15;
        }

        .process-content {
          position: relative;
          z-index: 2;
          padding: 75px 9%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .process-content h2 { font-size: clamp(40px, 4vw, 57px); }
        .process-content > p { max-width: 510px; margin: 0 0 35px; color: #6a7f8e; font-size: 14px; line-height: 1.8; }

        .process-steps { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .process-step { padding: 17px 0; display: flex; gap: 12px; border-top: 1px solid #dce7ee; }

        .step-icon {
          width: 40px; height: 40px; min-width: 40px;
          display: flex; align-items: center; justify-content: center;
          background: #e8f3f8;
          color: #2385b5;
        }

        .step-icon svg { width: 18px; }
        .process-step small { display: block; margin-bottom: 3px; color: #5da5cb; font-size: 8px; letter-spacing: 2px; }
        .process-step h3 { margin: 0 0 5px; color: #123b5a; font-size: 14px; }
        .process-step p { margin: 0; color: #78909e; font-size: 11px; line-height: 1.55; }

        /* CTA */
        .service-cta {
          position: relative;
          min-height: 350px;
          padding: 75px 7%;
          overflow: hidden;
          background: linear-gradient(115deg, #062b48, #08466b 55%, #116d96);
        }

        .service-cta::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(3, 25, 43, .5), rgba(3, 25, 43, .05));
        }

        .service-cta-light {
          position: absolute;
          width: 600px; height: 600px;
          right: -200px; top: -300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(83,178,221,.25), transparent 68%);
          animation: glowMove 6s ease-in-out infinite alternate;
        }

        @keyframes glowMove {
          from { transform: translateY(0) scale(1); }
          to { transform: translateY(80px) scale(1.15); }
        }

        .service-cta-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .cta-label { margin-bottom: 16px; color: #73b9db; font-size: 9px; letter-spacing: 3px; }

        .service-cta h2 {
          margin: 0 0 15px;
          color: #ffffff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 4vw, 52px);
          font-weight: 400;
          line-height: 1.1;
        }

        .service-cta p { margin: 0; color: #c6dbe7; font-size: 14px; }

        .service-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 25px;
          border: 1px solid #68b3d5;
          border-radius: 40px;
          color: #ffffff;
          text-decoration: none;
          font-size: 13px;
          white-space: nowrap;
          transition: .3s ease;
        }

        .service-cta-button:hover {
          background: #258bb8;
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0,0,0,.25);
        }

        .cta-benefits {
          position: relative;
          z-index: 2;
          margin-top: 45px;
          padding-top: 23px;
          border-top: 1px solid rgba(255,255,255,.16);
          display: flex;
          justify-content: flex-end;
          gap: 40px;
        }

        .cta-benefits div { display: flex; align-items: center; gap: 10px; color: #d8e6ed; font-size: 11px; line-height: 1.4; }
        .cta-benefits svg { width: 20px; color: #70b8d8; }

        /* ERROR */
        .service-error {
          min-height: 600px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          background: #f4f8fb;
        }

        .service-error h1 { color: #123b5a; font-family: Georgia, "Times New Roman", serif; font-weight: 400; }
        .service-error a { color: #2385b5; }

        /* TABLET */
        @media (max-width: 1100px) {
          .service-intro-grid { gap: 40px; }
          .process-content { padding: 60px 6%; }
        }

        /* TABLET / MOBILE */
        @media (max-width: 850px) {
          .service-main { width: 100%; }
          .service-hero { height: 520px; }
          .service-intro-grid { grid-template-columns: 1fr; gap: 45px; }
          .service-intro-image { height: 380px; }
          .how-we-work { grid-template-columns: 1fr; }
          .process-image { min-height: 420px; }
          .process-content { padding: 70px 8%; }
          .service-cta-content { flex-direction: column; align-items: flex-start; }
          .cta-benefits { justify-content: flex-start; flex-wrap: wrap; }
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .service-hero { height: 510px; }
          .service-hero-content { padding: 40px 25px; }
          .service-hero h1 { font-size: 46px; }
          .service-hero-content p { font-size: 14px; }
          .hero-number { font-size: 90px; right: 10px; }
          .service-intro { padding: 70px 25px; }
          .service-intro h2 { font-size: 43px; }
          .service-intro-image { height: 290px; }
          .service-specification { padding: 70px 25px; }
          .spec-grid { grid-template-columns: 1fr; }
          .spec-card { padding: 23px; }
          .how-we-work { display: flex; flex-direction: column; }
          .process-image { min-height: 330px; }
          .process-image-text { left: 25px; bottom: 30px; }
          .process-image-text strong { font-size: 27px; }
          .process-content { padding: 65px 25px; }
          .process-steps { grid-template-columns: 1fr; }
          .service-cta { padding: 60px 25px; }
          .service-cta h2 { font-size: 38px; }
          .service-cta-button { width: 100%; }
          .cta-benefits { display: grid; grid-template-columns: 1fr; gap: 18px; }
        }
      `}</style>
    </>
  );
}