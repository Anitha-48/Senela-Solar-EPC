import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/about.css";
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
  const { t } = useTranslation();
  const whyItems = t("about.whyItems", { returnObjects: true });
  const highlights = t("about.highlights", { returnObjects: true });
  const gallery = t("about.gallery", { returnObjects: true });
  const expertiseItems = t("about.expertiseItems", { returnObjects: true });
  const galleryImages = [
    "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop",
    "https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=",
  ];

  return (
    <div className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      {/* =====================================================
          COMPANY OVERVIEW
      ===================================================== */}
      <section className="section">
        <div className="container split-section">

          <ScrollReveal className="split-section__media">
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop"
              alt={t("accessibility.solarPanelsCleanEnergy")}
            />
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className="eyebrow-line">
              {t("about.companyOverview")}
            </div>

            <h2>
              {t("about.overviewTitle")}
            </h2>

            <p>
              {t("about.overviewParagraphOne", { companyName: siteConfig.companyName })}
            </p>

            <p>
              {t("about.overviewParagraphTwo")}
            </p>

            <p>
              {t("about.overviewParagraphThree")}
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
            eyebrow={t("about.whySenela")}
            title={t("about.whySenelaTitle")}
            description={t("about.whySenelaDescription")}
          />

          <div className="why-senela__wrapper">

            {/* LEFT IMAGE */}
            <ScrollReveal className="why-senela__image">

              <div className="why-senela__image-wrap">

                <img
                  src="https://cdn.pixabay.com/photo/2017/09/12/13/21/photovoltaic-system-2742302_640.jpg"
                  alt={t("accessibility.senelaInstallation")}
                />

                {/* Floating Card */}
                <div className="why-senela__floating-card">

                  <Sun size={26} />

                  <div>
                    <strong>{t("about.cleanEnergy")}</strong>
                    <span>{t("about.brighterFuture")}</span>
                  </div>
                </div>
              </div>

            </ScrollReveal>
            {/* RIGHT CONTENT */}
            <div className="why-senela__content">

              {whyItems.map((item, index) => <ScrollReveal key={item.title} delay={index}>

                <div className="why-senela__item">

                  <div className="why-senela__icon">
                    <Zap size={25} />
                  </div>

                  <div>
                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.description}
                    </p>
                  </div>

                </div>

              </ScrollReveal>)}

            </div>

          </div>


          {/* WHY SENELA HIGHLIGHTS */}

          <div className="why-senela__highlights">

            {highlights.map((highlight, index) => <ScrollReveal key={highlight} delay={index}>
              <div className="why-highlight"><CircleCheck size={20} /><span>{highlight}</span></div>
            </ScrollReveal>)}

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
                  {t("about.visionTitle")}
                </h3>

                <p>
                  {t("about.visionDescription")}
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
                  {t("about.missionTitle")}
                </h3>

                <p>
                  {t("about.missionDescription")}
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
            eyebrow={t("about.ourWork")}
            title={t("about.ourWorkTitle")}
            description={t("about.ourWorkDescription")}
          />


          <div className="about-gallery">

            {gallery.map((item, index) => (
              <ScrollReveal
                key={item.title}
                delay={index}
                className="about-gallery__card"
              >

                <div className="about-gallery__media">

                  <img
                    src={galleryImages[index]}
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
      eyebrow={t("about.expertise")}
      title={t("about.expertiseTitle")}
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
              <strong>{expertiseItems[0]}</strong>
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
              <strong>{expertiseItems[1]}</strong>
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
              <strong>{expertiseItems[2]}</strong>
            </div>
          </div>
        </ScrollReveal>

      </div>


      {/* ================= CENTER ================= */}

      <ScrollReveal>

        <div className="expertise-circle-image">

          <img
            src="https://solarcrowncommercial.com/wp-content/uploads/2024/03/AdobeStock_557346755-scaled.jpeg"
            alt={t("about.solarEnergyAlt")}
          />

          <div className="expertise-circle-overlay"></div>

          <div className="expertise-circle-badge">
            <Sun size={30} />
            <strong>{t("about.solar")}</strong>
            <small>{t("about.energy")}</small>
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
              <strong>{expertiseItems[3]}</strong>
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
              <strong>{expertiseItems[4]}</strong>
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
              <strong>{expertiseItems[5]}</strong>
            </div>
          </div>
        </ScrollReveal>

      </div>

    </div>

  </div>


  

</section>


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
                {t("about.qualityTitle")}
              </h3>

              <p>
                {t("about.qualityDescription")}
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
                {t("about.engineeringExcellenceTitle")}
              </h3>

              <p>
                {t("about.engineeringExcellenceDescription")}
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
                {t("about.sustainabilityTitle")}
              </h3>

              <p>
                {t("about.sustainabilityDescription")}
              </p>

            </div>

          </ScrollReveal>

        </div>

      </section>


      



    </div>
  );
}

