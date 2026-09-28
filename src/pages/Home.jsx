import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowRight, CheckCircle2, ShieldCheck, Users, Cpu, Leaf, Clock, Award,
  Zap, Sun, BatteryCharging, Phone, MessageCircle, Mail,
} from "lucide-react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import StatCounter from "../components/StatCounter";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import ProcessTimeline from "../components/ProcessTimeline";
import { siteConfig } from "../config/siteConfig";
import { services } from "../config/services";
import { projects } from "../config/projects";
import epcOneImage from "../assets/images/epc-1.jpg";
import solarOverviewImage from "../assets/images/solar1.bg.jpg";
import "../styles/sections.css";


const featuredProject = {
  title: "500 kWp Rooftop Solar Project",
  category: "COMMERCIAL SOLAR",
  location: "Chennai, Tamil Nadu",
  capacity: "500 kWp",
  type: "On-grid Solar",
  status: "Progress",
  image: epcOneImage,
  scope: ["Engineering", "Installation", "Commissioning"],
  path: "/projects/featured-solar"
};

const whyChooseUs = [
  { icon: ShieldCheck, title: "End-to-End EPC Execution", desc: "Single point of accountability from design through commissioning." },
  { icon: Cpu, title: "Engineering Expertise", desc: "In-house electrical and structural engineering teams for every project." },
  { icon: Award, title: "Quality & Safety", desc: "Projects executed to IEC, CEA and state utility standards." },
  { icon: Clock, title: "Reliable Project Delivery", desc: "Track record of on-schedule commissioning across project types." },
  { icon: Zap, title: "Advanced Technology", desc: "HTLS conductors, SCADA integration and performance monitoring systems." },
  { icon: Leaf, title: "Sustainable Solutions", desc: "Solar-first thinking applied wherever it reduces long-term operating cost." },
  { icon: Users, title: "Experienced Team", desc: "Crews trained across railway, utility and industrial safety protocols." },
  { icon: CheckCircle2, title: "Long-Term Support", desc: "O&M packages and monitoring available after commissioning." },
];

const projectImages = [
  "https://images.unsplash.com/photo-1592833167665-ebf29ec563bb?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591189863430-ab87e120f312?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?q=80&w=900&auto=format&fit=crop",
];

export default function Home() {
  const { t } = useTranslation();
  const whyItems = t("home.whyChooseUsItems", { returnObjects: true });
  const serviceKeyMap = {
    "power-distribution-transmission": "powerDistributionTransmission",
    "ehv-substation": "ehvSubstation",
    "htls-reconductoring": "htlsReconductoring",
    "railway-electrification": "railwayElectrification",
    "solar-power-projects": "solarPowerProjects",
    "water-management": "waterManagement",
  };

  return (
    <>
      <Hero />     
      {/* About / Company introduction */}
      <section className="section">
        <div className="container split-section">
          <ScrollReveal className="split-section__media">
            <img
              src="https://enerparc.in/wp-content/uploads/2025/05/Solar-Energy-Company-in-India.webp"
              alt={t("home.companyOverviewAlt")}
            />
          </ScrollReveal>
          <ScrollReveal delay={1}>
            
            <div className="eyebrow-line">{t("home.whoWeAre")}</div>
            <h2>{t("home.aboutTitle")}</h2>
            <p>
              {t("home.aboutDescriptionOne", { companyName: siteConfig.companyName })}
            </p>
            <p>
             {t("home.aboutDescriptionTwo")}
            </p>
            <NavLink to="/about" className="btn btn--primary">
              {t("home.aboutButton")} <ArrowRight />
            </NavLink>
                      </ScrollReveal>
        </div>
      </section>

 {/* =============================
    SOLAR SOLUTIONS-Types
======================================= */}

<section className="home-solutions-section">
  <div className="home-solutions-container">

    {/* Section Header */}
    <div className="home-solutions-header">
      <span className="home-solutions-tag">
        {t("home.solutionsTag")}
      </span>

      <h2>
        {t("home.solutionsTitle")}
        <span>{t("home.solutionsTitleAccent")}</span>
      </h2>

      <p>
        {t("home.solutionsDescription")}
      </p>
    </div>

    {/* Solution Cards */}
    <div className="home-solutions-grid">

      {/* Residential */}
      <div className="home-solution-card">
        <div className="home-solution-media">
          <img
            src="https://www.jkcement.com/wp-content/uploads/2025/12/197.png"
            alt={t("home.residentialAlt")}
          />
        </div>

        <div className="home-solution-content">
          <span className="home-solution-number">01</span>
          <h3>{t("home.residentialTitle")}</h3>
          <p>{t("home.residentialDescription")}</p>
          <ul>
            <li>{t("home.residentialListOne")}</li>
            <li>{t("home.residentialListTwo")}</li>
            <li>{t("home.residentialListThree")}</li>
            <li>{t("home.residentialListFour")}</li>
          </ul>

          <Link
            to="/solar-solutions/residential"
            className="home-solution-btn"
          >
            {t("home.moreDetails")}
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Commercial & Industrial */}
      <div className="home-solution-card">
        <div className="home-solution-media">
          <img
            src="https://goldisolar.com/wp-content/uploads/2023/09/The-Benefits-Of-Installing-Solar-Panels-On-A-Commercial-Building2-scaled.jpg"
            alt={t("home.commercialAlt")}
          />
        </div>

        <div className="home-solution-content">
          <span className="home-solution-number">02</span>
          <h3>{t("home.commercialTitle")}</h3>
          <p>{t("home.commercialDescription")}</p>

          <ul>
            <li>{t("home.commercialListOne")}</li>
            <li>{t("home.commercialListTwo")}</li>
            <li>{t("home.commercialListThree")}</li>
            <li>{t("home.commercialListFour")}</li>
          </ul>

          <Link
            to="/solar-solutions/industrial"
            className="home-solution-btn"
          >
            {t("home.moreDetails")}
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Integrated EPC */}
      <div className="home-solution-card">
        <div className="home-solution-media">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20240702/pngtree-solar-panels-with-blue-sky-and-clouds-image_15846273.jpg"
            alt={t("home.utilityAlt")}/>
        </div>
        <div className="home-solution-content">
          <span className="home-solution-number">03</span>
          <h3>{t("home.utilityTitle")}</h3>
          <p>{t("home.utilityDescription")}</p>
          <ul>
            <li>{t("home.utilityListOne")}</li>
            <li>{t("home.utilityListTwo")}</li>
            <li>{t("home.utilityListThree")}</li>
            <li>{t("home.utilityListFour")}</li>
          </ul>
          <Link
            to="/solar-solutions/utility-scale"
            className="home-solution-btn"
          >
            {t("home.moreDetails")}
            <span>→</span>
          </Link>
        </div>
      </div>

    </div>

  </div>
</section>





      {/* SOLAR SYSTEMS */}
<section className="section section--light">
  <div className="container">

    <SectionTitle
      eyebrow={t("hero.solarSolutions")}
      title={t("hero.solarSystemEngineered")}
      description={t("hero.solarSolutionsDescription")}
    />

    <div className="home-solutions-list">

      {/* ON GRID */}
      <ScrollReveal>
        <div className="home-solution-card">
          <div className="home-solution-card__media">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2025/11/561181140/VF/UO/FX/17639025/10-kw-grid-solar-power-park.jpg"
              alt={t("home.onGridAlt")}
            />
          </div>

          <div className="home-solution-card__body">
            <span className="home-solution-card__icon">
              <Sun size={22} />
            </span>

            <h3>{t("home.onGridTitle")}</h3>

            <p>{t("home.onGridDescription")}</p>

            <ul className="home-solution-benefits">
              {t("home.onGridBenefits", {
                returnObjects: true,
              }).map((item) => (
                <li key={item}>
                  <CheckCircle2 size={16} />
                  {item}
                </li>
              ))}
            </ul>

            <NavLink
              to="/solar-solutions/on-grid"
              className="btn btn--outline-blue btn--sm"
            >
              {t("home.learnMore")}
              <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>
      </ScrollReveal>

      {/* OFF GRID */}
      <ScrollReveal delay={1}>
        <div className="home-solution-card is-reversed">
          <div className="home-solution-card__media">
            <img
              src="https://www.klkindia.com/wp-content/uploads/2025/09/solar-off-grid.webp"
              alt={t("home.offGridAlt")}
            />
          </div>

          <div className="home-solution-card__body">
            <span className="home-solution-card__icon">
              <BatteryCharging size={22} />
            </span>

            <h3>{t("home.offGridTitle")}</h3>

            <p>{t("home.offGridDescription")}</p>

            <ul className="home-solution-benefits">
              {t("home.offGridBenefits", {
                returnObjects: true,
              }).map((item) => (
                <li key={item}>
                  <CheckCircle2 size={16} />
                  {item}
                </li>
              ))}
            </ul>

            <NavLink
              to="/solar-solutions/off-grid"
              className="btn btn--outline-blue btn--sm"
            >
              {t("home.learnMore")}
              <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>
      </ScrollReveal>

      {/* HYBRID */}
      <ScrollReveal delay={2}>
        <div className="home-solution-card home-solution-card--hybrid">

          <div className="home-solution-card__media">
            <img
              src="https://www.pvmars.com/wp-content/uploads/2024/05/wind-solar-hybrid-system.webp"
              alt={t("home.hybridAlt")}
            />
          </div>

          <div className="home-solution-card__body">

            <span className="home-solution-card__icon home-solution-card__icon--hybrid">
              <Sun size={22} />
            </span>

            <h3>{t("home.hybridTitle")}</h3>

            <p>{t("home.hybridDescription")}</p>

            <ul className="home-solution-benefits">
              {t("home.hybridBenefits", {
                returnObjects: true,
              }).map((item) => (
                <li key={item}>
                  <CheckCircle2 size={16} />
                  {item}
                </li>
              ))}
            </ul>

            <NavLink
              to="/solar-solutions/hybrid"
              className="btn btn--outline-blue btn--sm"
            >
              {t("home.learnMore")}
              <ArrowRight size={16} />
            </NavLink>

          </div>
        </div>
      </ScrollReveal>

    </div>
  </div>
</section>


      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow={t("home.whyChooseUs")} title={t("home.lifecycleTitle")} center />
          <div className="card-grid card-grid--2" style={{ maxWidth: 980, margin: "0 auto" }}>
            {whyChooseUs.map((w, i) => (
              <ScrollReveal key={w.title} delay={(i % 4) + 1}>
                <div className="why-card">
                  <span className="why-card__icon"><w.icon size={19} /></span>
                  <div>
                    <h3>{whyItems[i].title}</h3>
                    <p>{whyItems[i].description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>




      {/* EPC Process */}
      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow={t("home.epcApproach")} title={t("home.epcProcessTitle")} />
          <ProcessTimeline />
        </div>
      </section>




    




      {/* Sustainability / Impact */}
      <section className="impact-section">
        <div className="container">
          <div className="eyebrow-line" style={{ color: "var(--sky-blue)" }}>{t("home.sustainability")}</div>
          <h2>{t("home.sustainabilityTitle")}</h2>
          <p style={{ maxWidth: "60ch" }}>
            {t("home.sustainabilityDescription")}
          </p>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-card__value">340+ MW</div>
              <div className="impact-card__label">{t("home.impact.capacity")}</div>
            </div>
            <div className="impact-card">
              <div className="impact-card__value">~2.1 lakh</div>
              <div className="impact-card__label">{t("home.impact.emissions")}</div>
            </div>
            <div className="impact-card">
              <div className="impact-card__value">12 states</div>
              <div className="impact-card__label">{t("home.impact.states")}</div>
            </div>
          </div>
        </div>
      </section>




      {/* Contact CTA */}
      <section className="cta-band">
        <div className="container">
          <h2>{t("home.contactTitle")}</h2>
          <p style={{ margin: "0 auto 8px", maxWidth: 500 }}>
            {t("home.contactDescription")}
          </p>
          <NavLink to="/contact" className="btn btn--primary">
            {t("nav.contactUs")} <ArrowRight />
          </NavLink>
        </div>
      </section>
    </>
  );
}
