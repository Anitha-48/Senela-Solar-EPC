import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, Sun, BatteryCharging, CheckCircle2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import "../styles/solarsolutions.css";

const solutions = [
  {
    id: "on-grid",
    title: "On-grid Solar Systems",
    description: "Ideal for commercial and industrial facilities looking to reduce electricity bills. Surplus energy is fed back into the utility grid through net-metering.",
    points: [
      "Lower electricity bills through offset generation",
      "Net metering and grid integration handled end-to-end",
      "No battery storage required, lower upfront cost"
    ],
    icon: Sun,
    image: "https://5.imimg.com/data5/SELLER/Default/2025/11/561181140/VF/UO/FX/17639025/10-kw-grid-solar-power-park.jpg",
    path: "/solar-solutions/on-grid"
  },
  {
    id: "off-grid",
    title: "Off-grid Solar Systems",
    description: "Perfect for remote locations or critical backup needs. Combines solar generation with advanced battery storage for complete energy independence.",
    points: [
      "Reliable power in remote and rural locations",
      "Battery storage sized for backup requirements",
      "Energy independence from grid outages"
    ],
    icon: BatteryCharging,
    image: "https://www.klkindia.com/wp-content/uploads/2025/09/solar-off-grid.webp",
    path: "/solar-solutions/off-grid"
  }
];

const projectHighlights = [
  { title: "Utility Scale", capacity: "91 MWp", description: "Large-scale power generation designed for maximum efficiency and grid stability." },
  { title: "Solar for Factory", capacity: "30 KWp", description: "Optimized energy solutions for industrial units to lower operational costs." },
  { title: "Green Energy OA", capacity: "12 MWp", description: "Sustainable energy projects focused on open-access power delivery." },
  { title: "Home Roof-top Solar", capacity: "3 KWp", description: "Clean, renewable energy for residential homes to achieve energy independence." },
  { title: "Financed Solar Plant", capacity: "12 KWp", description: "Accessible solar installations with flexible financing options for businesses." },
  { title: "Zero Upfront", capacity: "100 KWp", description: "Innovative zero-investment models to transition to green energy immediately." },
];

export default function SolarSolutionsPage() {
  const { t } = useTranslation();
  const translatedSolutions = t("solutions.items", { returnObjects: true });
  const translatedHighlights = t("solutions.projectHighlights", { returnObjects: true });

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="split-section">
            <ScrollReveal className="split-section__media">
              <img src="https://sunapecopower.com/wp-content/uploads/2024/08/choose-and-install-solar-panels.png" alt={t("accessibility.solarInstallation")} />
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="eyebrow-line">{t("solutions.specialization")}</div>
              <h2>{t("solutions.title")}</h2>
              <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', fontWeight: '500' }}>
                  <span style={{ color: 'var(--pro-blue)', fontWeight: 'bold' }}>1.</span> On-grid Solar System
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', fontWeight: '500' }}>
                  <span style={{ color: 'var(--pro-blue)', fontWeight: 'bold' }}>2.</span> Off-grid Solar System
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle 
            eyebrow={t("solutions.offerings")} 
            title={t("solutions.chooseSystemTitle")} 
            description={t("solutions.chooseSystemDescription")}
          />
          
          <div className="detailed-solutions-grid">
            {solutions.map((s, i) => {
              const translated = translatedSolutions[i];
              return (
              <ScrollReveal key={s.id} delay={i}>
                <div
                  className={`detailed-solution-card ${i % 2 !== 0 ? "is-reversed" : ""}`}
                >
                  <div className="detailed-solution-card__media">
                    <img src={s.image} alt={translated.title} />
                  </div>

                  <div className="detailed-solution-card__body">
                    <span className="detailed-solution-card__icon">
                      <s.icon size={22} />
                    </span>

                    <h3>{translated.title}</h3>

                    <p>{translated.description}</p>

                    <div className="detailed-solution-points">
                      {translated.points.map((point, idx) => (
                        <div key={idx} className="detailed-solution-point">
                          <CheckCircle2 size={16} />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <NavLink
                      to={s.path}
                      className="btn btn--outline-blue btn--sm"
                    >
                      {t("solutions.viewMore")}
                      <ArrowRight
                        size={16}
                        style={{
                          transform: i !== 0 ? "rotate(180deg)" : "none"
                        }}
                      />
                    </NavLink>
                  </div>
                </div>
              </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle 
            eyebrow={t("solutions.milestones")} 
            title={t("solutions.trackRecordTitle")} 
            description={t("solutions.trackRecordDescription")}
          />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
            {projectHighlights.map((project, i) => (
              <ScrollReveal key={i} delay={i % 3}>
                <div className="why-card" style={{ height: '100%' }}>
                  <div className="why-card__icon">
                    <Sun size={24} />
                  </div>
                  <div className="why-card__content">
                    <h3 style={{ marginBottom: '5px', fontSize: '1.2rem' }}>{translatedHighlights[i].title} - {translatedHighlights[i].capacity}</h3>
                    <p>{translatedHighlights[i].description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}