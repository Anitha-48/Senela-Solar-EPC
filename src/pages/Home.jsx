import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowRight, CheckCircle2, ShieldCheck, Users, Cpu, Leaf, Clock, Award,
  Zap, Sun, BatteryCharging, Phone, MessageCircle, Mail,
} from "lucide-react";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import StatCounter from "../components/StatCounter";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import ProcessTimeline from "../components/ProcessTimeline";
import { siteConfig } from "../config/siteConfig";
import { services } from "../config/services";
import { projects } from "../config/projects";


const featuredProject = {
  title: "500 kWp Rooftop Solar Project",
  category: "COMMERCIAL SOLAR",
  location: "Chennai, Tamil Nadu",
  capacity: "500 kWp",
  type: "On-grid Solar",
  status: "Progress",
  image: "/src/assets/images/Project2.JPG",
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
              src="https://sol-ark.com/wp-content/uploads/2025/07/commercial_solar_installations.jpeg"
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


      {/* Solar Solutions */}
      <section className="section section--light">
        <div className="container">
          <SectionTitle
            eyebrow={t("hero.solarSolutions")}
            title={t("hero.solarSystemEngineered")}
            description={t("hero.solarSolutionsDescription")}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <ScrollReveal>
              <div className="home-solution-card">
                <div className="home-solution-card__media">
                  <img src="https://5.imimg.com/data5/SELLER/Default/2025/11/561181140/VF/UO/FX/17639025/10-kw-grid-solar-power-park.jpg" alt={t("home.onGridAlt")} />
                </div>
                <div className="home-solution-card__body">
                  <span className="home-solution-card__icon"><Sun size={22} /></span>
                  <h3>{t("home.onGridTitle")}</h3>
                  <p>{t("home.onGridDescription")}</p>
                  <ul className="home-solution-benefits">
                    {t("home.onGridBenefits", { returnObjects: true }).map((item) => <li key={item}><CheckCircle2 size={16} /> {item}</li>)}
                  </ul>
                  <NavLink to="/solar-solutions/on-grid" className="btn btn--outline-blue btn--sm">{t("home.learnMore")} <ArrowRight size={16} /></NavLink>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="home-solution-card is-reversed">
                <div className="home-solution-card__media">
                  <img src="https://www.klkindia.com/wp-content/uploads/2025/09/solar-off-grid.webp" alt={t("home.offGridAlt")} />
                </div>
                <div className="home-solution-card__body">
                  <span className="home-solution-card__icon"><BatteryCharging size={22} /></span>
                  <h3>{t("home.offGridTitle")}</h3>
                  <p>{t("home.offGridDescription")}</p>
                  <ul className="home-solution-benefits">
                    {t("home.offGridBenefits", { returnObjects: true }).map((item) => <li key={item}><CheckCircle2 size={16} /> {item}</li>)}
                  </ul>
                  <NavLink to="/solar-solutions/off-grid" className="btn btn--outline-blue btn--sm">{t("home.learnMore")} <ArrowRight size={16} /></NavLink>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>





      {/* Engineering & EPC Services */}
      <section className="section" id="services">
        <div className="container">
          <SectionTitle
            eyebrow={t("home.servicesEyebrow")}
            title={t("home.infrastructureTitle")}
            description={t("home.infrastructureDescription")}
          />
          <div className="card-grid card-grid--3">
            {Object.entries(services).map(([slug, s], i) => {
              const translated = t(`serviceDetails.${serviceKeyMap[slug]}`, { returnObjects: true });
              return (
              <ServiceCard
                key={slug}
                icon={s.icon}
                title={translated.shortTitle}
                description={translated.heroSubtitle}
                path={`/services/${slug}`}
                delay={(i % 3) + 1}
              />
              );
            })}
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




      {/* Home contact CTA
      <section className="home-contact-cta">
        <div className="container">
          <h2>Power Your Home. Power Your Future.</h2>
          <p>Join thousands of customers who have already made the switch to solar.</p>
          <div className="home-contact-cta__actions" aria-label="Contact options">
            <a className="home-contact-cta__button home-contact-cta__button--phone" href="tel:+919962492612">
              <Phone size={21} aria-hidden="true" />
              <span>9585901999</span>
            </a>
            <a className="home-contact-cta__button" href="https://wa.me/9585901999" target="_blank" rel="noreferrer">
              <MessageCircle size={21} aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
            <a className="home-contact-cta__button" href="info@senelainternational.com">
              <Mail size={21} aria-hidden="true" />
              <span>info@senelainternational.com</span>
            </a>
          </div>
        </div>
      </section> */}





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
