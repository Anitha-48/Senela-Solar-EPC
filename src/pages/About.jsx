
import { NavLink } from "react-router-dom";

import {
  ArrowRight,
  Target,
  Eye,
  ShieldCheck,
  Leaf,
  Award,
  Cpu,
  Sun,
  Wrench,
  Zap,
  TrendingUp,
  BadgeCheck,
  Globe2,
  CircleCheck,
} from "lucide-react";

import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import StatCounter from "../components/StatCounter";
import { siteConfig } from "../config/siteConfig";

export default function About() {
  return (
    <div className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <PageHero
        
      />

      {/* =====================================================
          COMPANY OVERVIEW
      ===================================================== */}
      <section className="section">
        <div className="container split-section">

          <ScrollReveal className="split-section__media">
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop"
              alt="Solar panels generating clean energy"
            />
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className="eyebrow-line">
              COMPANY OVERVIEW
            </div>

            <h2>
              Engineering Solar. Powering a Sustainable Future.
            </h2>

            <p>
              {siteConfig.companyName} is a solar energy and engineering
              company committed to delivering reliable, efficient and
              sustainable solar power solutions for residential, commercial,
              industrial and institutional customers.
            </p>

            <p>
              From site assessment and system design to installation,
              commissioning and ongoing maintenance, we provide end-to-end
              solar solutions designed around our customers' energy
              requirements and long-term goals.
            </p>

            <p>
              With a focus on quality, engineering excellence and professional
              execution, we help our customers reduce energy costs, improve
              energy independence and move towards a cleaner energy future.
            </p>
          </ScrollReveal>

        </div>
      </section>


      {/* =====================================================
          WHY SENELA
      ===================================================== */}
      <section className="section why-senela">

        <div className="container">

          <SectionTitle
            eyebrow="WHY SENELA"
            title="Why Choose Senela for Your Solar Journey?"
            description="We combine engineering expertise, quality technology and professional execution to deliver solar solutions built for long-term performance."
          />

          <div className="why-senela__wrapper">

            {/* LEFT IMAGE */}
            <ScrollReveal className="why-senela__image">

              <div className="why-senela__image-wrap">

                <img
                  src="https://cdn.pixabay.com/photo/2017/09/12/13/21/photovoltaic-system-2742302_640.jpg"
                  alt="Senela solar energy installation"
                />

                {/* Floating Card */}
                <div className="why-senela__floating-card">

                  <Sun size={26} />

                  <div>
                    <strong>Clean Energy</strong>
                    <span>
                      Powering a brighter future
                    </span>
                  </div>

                </div>

              </div>

            </ScrollReveal>


            {/* RIGHT CONTENT */}
            <div className="why-senela__content">

              {/* ITEM 1 */}
              <ScrollReveal delay={0}>

                <div className="why-senela__item">

                  <div className="why-senela__icon">
                    <Zap size={25} />
                  </div>

                  <div>
                    <h3>
                      Reliable Solar Solutions
                    </h3>

                    <p>
                      Efficient and dependable solar systems engineered
                      to deliver consistent energy performance.
                    </p>
                  </div>

                </div>

              </ScrollReveal>


              {/* ITEM 2 */}
              <ScrollReveal delay={1}>

                <div className="why-senela__item">

                  <div className="why-senela__icon">
                    <BadgeCheck size={25} />
                  </div>

                  <div>
                    <h3>
                      Quality First Approach
                    </h3>

                    <p>
                      We focus on quality components, careful installation
                      and structured project execution from start to finish.
                    </p>
                  </div>

                </div>

              </ScrollReveal>


              {/* ITEM 3 */}
              <ScrollReveal delay={2}>

                <div className="why-senela__item">

                  <div className="why-senela__icon">
                    <TrendingUp size={25} />
                  </div>

                  <div>
                    <h3>
                      Built for Long-Term Value
                    </h3>

                    <p>
                      Our solar solutions are designed to reduce energy
                      costs and provide sustainable value for years to come.
                    </p>
                  </div>

                </div>

              </ScrollReveal>


              {/* ITEM 4 */}
              <ScrollReveal delay={3}>

                <div className="why-senela__item">

                  <div className="why-senela__icon">
                    <Globe2 size={25} />
                  </div>

                  <div>
                    <h3>
                      End-to-End Expertise
                    </h3>

                    <p>
                      From consultation and design to installation,
                      commissioning and maintenance, we manage the complete
                      solar journey.
                    </p>
                  </div>

                </div>

              </ScrollReveal>

            </div>

          </div>


          {/* WHY SENELA HIGHLIGHTS */}

          <div className="why-senela__highlights">

            <ScrollReveal delay={0}>
              <div className="why-highlight">
                <CircleCheck size={20} />
                <span>Professional Execution</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className="why-highlight">
                <CircleCheck size={20} />
                <span>Energy-Efficient Systems</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="why-highlight">
                <CircleCheck size={20} />
                <span>Customer-Focused Service</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div className="why-highlight">
                <CircleCheck size={20} />
                <span>Sustainable Future</span>
              </div>
            </ScrollReveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          VISION & MISSION
      ===================================================== */}
      <section
        className="section section--light"
        id="vision-mission"
      >

        <div className="container">

          <div className="card-grid card-grid--2">

            {/* VISION */}

            <ScrollReveal>

              <div
                className="bracket-frame"
                style={{ height: "100%" }}
              >

                <span className="solution-card__icon">
                  <Eye size={22} />
                </span>

                <h3>
                  Our Vision
                </h3>

                <p>
                  To become a trusted solar energy partner by accelerating
                  the adoption of clean, reliable and affordable renewable
                  energy across India.
                </p>

              </div>

            </ScrollReveal>


            {/* MISSION */}

            <ScrollReveal delay={1}>

              <div
                className="bracket-frame"
                style={{ height: "100%" }}
              >

                <span className="solution-card__icon">
                  <Target size={22} />
                </span>

                <h3>
                  Our Mission
                </h3>

                <p>
                  To deliver high-quality solar energy solutions through
                  engineering excellence, reliable technology, professional
                  execution and dedicated customer support.
                </p>

              </div>

            </ScrollReveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR WORK / GALLERY
      ===================================================== */}
      <section className="section section--light">

        <div className="container">

          <SectionTitle
            eyebrow="OUR WORK"
            title="Built on real projects, real impact and real expertise"
            description="We bring engineering discipline, field experience and a long-term view to every solar installation we deliver."
          />


          <div className="about-gallery">

            {[
              {
                image:
                  "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200&auto=format&fit=crop",
                title: "Project Delivery",
                text:
                  "From feasibility to commissioning, our team manages solar projects with precision and accountability.",
              },

              {
                image:
                  "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop",
                title: "Engineering Insight",
                text:
                  "We design systems around site conditions, load profiles and long-term performance goals.",
              },

              {
                image:
                  "https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=",
                title: "Cleaner Energy",
                text:
                  "Every project helps customers lower energy costs while building a more sustainable future.",
              },
            ].map((item, index) => (

              <ScrollReveal
                key={item.title}
                delay={index}
                className="about-gallery__card"
              >

                <div className="about-gallery__media">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                </div>

                <div className="about-gallery__body">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

              </ScrollReveal>

            ))}

          </div>

        </div>

      </section>


      
{/* =====================================================
    OUR EXPERTISE - CIRCLE IMAGE + ANIMATED ICONS
===================================================== */}

<section className="section expertise-circle-section">

  <div className="container">

    <SectionTitle
      eyebrow="OUR EXPERTISE"
      title="Powering a Smarter Future"
    />

    <div className="expertise-circle-layout">

      {/* ================= LEFT ================= */}

      <div className="expertise-circle-side expertise-circle-left">

        <ScrollReveal>
          <div className="expertise-item">
            <div className="expertise-icon">
              <Sun size={23} />
            </div>
            <div>
              <span>01</span>
              <strong>Solar EPC</strong>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <div className="expertise-item">
            <div className="expertise-icon">
              <ShieldCheck size={23} />
            </div>
            <div>
              <span>02</span>
              <strong>Rooftop Solar</strong>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <div className="expertise-item">
            <div className="expertise-icon">
              <Cpu size={23} />
            </div>
            <div>
              <span>03</span>
              <strong>Industrial Solar</strong>
            </div>
          </div>
        </ScrollReveal>

      </div>


      {/* ================= CENTER ================= */}

      <ScrollReveal>

        <div className="expertise-circle-image">

          <img
            src="https://solarcrowncommercial.com/wp-content/uploads/2024/03/AdobeStock_557346755-scaled.jpeg"
            alt="Solar Energy"
          />

          <div className="expertise-circle-overlay"></div>

          <div className="expertise-circle-badge">
            <Sun size={30} />
            <strong>SOLAR</strong>
            <small>ENERGY</small>
          </div>

          {/* Rotating ring */}

          <div className="expertise-ring expertise-ring-one"></div>
          <div className="expertise-ring expertise-ring-two"></div>

        </div>

      </ScrollReveal>


      {/* ================= RIGHT ================= */}

      <div className="expertise-circle-side expertise-circle-right">

        <ScrollReveal delay={1}>
          <div className="expertise-item">
            <div className="expertise-icon">
              <Award size={23} />
            </div>
            <div>
              <span>04</span>
              <strong>Commercial Solar</strong>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <div className="expertise-item">
            <div className="expertise-icon">
              <Globe2 size={23} />
            </div>
            <div>
              <span>05</span>
              <strong>Ground Mounted</strong>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={3}>
          <div className="expertise-item">
            <div className="expertise-icon">
              <Wrench size={23} />
            </div>
            <div>
              <span>06</span>
              <strong>O&M Services</strong>
            </div>
          </div>
        </ScrollReveal>

      </div>

    </div>

  </div>


  <style>
    {`

      /* ===============================
         MAIN LAYOUT
      =============================== */

      .expertise-circle-section {
        overflow: hidden;
        background: #faf9f6;
      }

      .expertise-circle-layout {
        display: grid;
        grid-template-columns: 1fr 430px 1fr;
        align-items: center;
        gap: 65px;
        margin-top: 75px;
      }


      /* ===============================
         SIDE CONTENT
      =============================== */

      .expertise-circle-side {
        display: flex;
        flex-direction: column;
        gap: 55px;
      }

      .expertise-circle-left {
        align-items: flex-end;
      }

      .expertise-circle-right {
        align-items: flex-start;
      }


      /* ===============================
         ITEM
      =============================== */

      .expertise-item {
        display: flex;
        align-items: center;
        gap: 15px;
        cursor: pointer;
        transition: all .45s ease;
      }

      .expertise-circle-left .expertise-item {
        flex-direction: row-reverse;
        text-align: right;
      }


      /* ===============================
         ICON
      =============================== */

      .expertise-icon {
        width: 58px;
        height: 58px;
        min-width: 58px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;

        background: rgba(200,139,24,.08);
        border: 1px solid rgba(200,139,24,.25);

        color: #c88b18;

        transition:
          transform .45s ease,
          background .45s ease,
          box-shadow .45s ease;
      }


      /* ===============================
         NUMBER
      =============================== */

      .expertise-item span {
        display: block;

        font-size: 10px;
        letter-spacing: 2px;

        color: #c88b18;

        margin-bottom: 4px;

        opacity: .7;
      }


      /* ===============================
         TEXT
      =============================== */

      .expertise-item strong {
        display: block;

        font-size: 19px;
        font-weight: 600;

        color: #222;

        white-space: nowrap;

        transition:
          transform .45s ease,
          color .45s ease;
      }


      /* ===============================
         HOVER ANIMATION
      =============================== */

      .expertise-item:hover .expertise-icon {
        transform: scale(1.15) rotate(12deg);

        background: #c88b18;

        color: white;

        box-shadow:
          0 10px 25px rgba(200,139,24,.3);
      }

      .expertise-item:hover strong {
        color: #c88b18;
      }

      .expertise-circle-left
      .expertise-item:hover strong {
        transform: translateX(-10px);
      }

      .expertise-circle-right
      .expertise-item:hover strong {
        transform: translateX(10px);
      }


      /* ===============================
         CENTER CIRCLE IMAGE
      =============================== */

      .expertise-circle-image {
        position: relative;

        width: 400px;
        height: 400px;

        margin: auto;

        border-radius: 50%;

        overflow: visible;

        animation:
          expertiseImageFloat 5s ease-in-out infinite;
      }


      .expertise-circle-image img {
        width: 100%;
        height: 100%;

        object-fit: cover;

        border-radius: 50%;

        display: block;

        border: 8px solid white;

        box-shadow:
          0 25px 70px rgba(0,0,0,.2);

        transition:
          transform 1s ease;
      }

      .expertise-circle-image:hover img {
        transform: scale(1.06);
      }


      /* ===============================
         IMAGE OVERLAY
      =============================== */

      .expertise-circle-overlay {
        position: absolute;

        inset: 8px;

        border-radius: 50%;

        background:
          linear-gradient(
            to bottom,
            transparent 40%,
            rgba(0,0,0,.55)
          );

        pointer-events: none;
      }


      /* ===============================
         CENTER BADGE
      =============================== */

      .expertise-circle-badge {
        position: absolute;

        left: 50%;
        bottom: 30px;

        transform: translateX(-50%);

        width: 105px;
        height: 105px;

        border-radius: 50%;

        background: rgba(255,255,255,.95);

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;

        box-shadow:
          0 12px 35px rgba(0,0,0,.22);

        z-index: 4;

        animation:
          badgeFloat 3s ease-in-out infinite;
      }

      .expertise-circle-badge svg {
        color: #c88b18;

        margin-bottom: 5px;
      }

      .expertise-circle-badge strong {
        font-size: 13px;
        letter-spacing: 2px;
      }

      .expertise-circle-badge small {
        font-size: 7px;
        letter-spacing: 2px;

        opacity: .55;
      }


      /* ===============================
         ROTATING RINGS
      =============================== */

      .expertise-ring {
        position: absolute;

        border-radius: 50%;

        pointer-events: none;
      }

      .expertise-ring-one {
        inset: -20px;

        border:
          1px dashed
          rgba(200,139,24,.4);

        animation:
          expertiseRotate 18s linear infinite;
      }

      .expertise-ring-two {
        inset: -35px;

        border:
          1px solid
          rgba(200,139,24,.08);

        animation:
          expertiseRotateReverse 25s linear infinite;
      }


      /* ===============================
         ANIMATIONS
      =============================== */

      @keyframes expertiseImageFloat {

        0%, 100% {
          transform: translateY(0);
        }

        50% {
          transform: translateY(-8px);
        }

      }


      @keyframes badgeFloat {

        0%, 100% {
          transform:
            translateX(-50%)
            translateY(0);
        }

        50% {
          transform:
            translateX(-50%)
            translateY(-8px);
        }

      }


      @keyframes expertiseRotate {

        from {
          transform: rotate(0deg);
        }

        to {
          transform: rotate(360deg);
        }

      }


      @keyframes expertiseRotateReverse {

        from {
          transform: rotate(360deg);
        }

        to {
          transform: rotate(0deg);
        }

      }


      /* ===============================
         TABLET
      =============================== */

      @media (max-width: 1000px) {

        .expertise-circle-layout {
          grid-template-columns:
            1fr 350px 1fr;

          gap: 30px;
        }

        .expertise-circle-image {
          width: 340px;
          height: 340px;
        }

        .expertise-item strong {
          font-size: 16px;
        }

      }


      /* ===============================
         MOBILE
      =============================== */

      @media (max-width: 800px) {

        .expertise-circle-layout {
          display: flex;
          flex-direction: column;

          gap: 45px;
        }

        .expertise-circle-image {
          order: -1;

          width: 320px;
          height: 320px;
        }

        .expertise-circle-side {
          width: 100%;

          gap: 25px;

          align-items: center;
        }

        .expertise-circle-left
        .expertise-item {
          flex-direction: row;

          text-align: left;
        }

        .expertise-circle-left
        .expertise-item:hover strong {
          transform: translateX(8px);
        }

      }


      @media (max-width: 450px) {

        .expertise-circle-image {
          width: 270px;
          height: 270px;
        }

        .expertise-circle-badge {
          width: 85px;
          height: 85px;
        }

        .expertise-circle-badge svg {
          width: 22px;
        }

        .expertise-circle-badge strong {
          font-size: 11px;
        }

        .expertise-item strong {
          font-size: 15px;
        }

        .expertise-icon {
          width: 48px;
          height: 48px;
          min-width: 48px;
        }

      }

    `}
  </style>

</section>
```


      {/* =====================================================
          QUALITY / ENGINEERING / SUSTAINABILITY
      ===================================================== */}
      <section className="section section--light">

        <div className="container card-grid card-grid--3">

          {/* QUALITY */}

          <ScrollReveal>

            <div className="bracket-frame">

              <span className="solution-card__icon">
                <Award size={22} />
              </span>

              <h3>
                Quality & Safety
              </h3>

              <p>
                We follow structured quality-control and safety practices
                throughout the project lifecycle, from installation to
                testing and commissioning.
              </p>

            </div>

          </ScrollReveal>


          {/* ENGINEERING */}

          <ScrollReveal delay={1}>

            <div className="bracket-frame">

              <span className="solution-card__icon">
                <Cpu size={22} />
              </span>

              <h3>
                Engineering Excellence
              </h3>

              <p>
                Our approach combines site assessment, energy analysis,
                system sizing and technical design to create efficient
                and practical solar solutions.
              </p>

            </div>

          </ScrollReveal>


          {/* SUSTAINABILITY */}

          <ScrollReveal delay={2}>

            <div className="bracket-frame">

              <span className="solution-card__icon">
                <Leaf size={22} />
              </span>

              <h3>
                Sustainability
              </h3>

              <p>
                We help customers reduce dependence on conventional energy,
                lower long-term electricity costs and contribute to a cleaner
                and more sustainable future.
              </p>

            </div>

          </ScrollReveal>

        </div>

      </section>


      



    </div>
  );
}

