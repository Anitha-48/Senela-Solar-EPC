import { useTranslation } from "react-i18next";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import "../styles/ongrid.css";

export default function HybridGridSolar() {
  const { t } = useTranslation();
  const overview = t("hybridGrid.overviewParagraphs", { returnObjects: true });
  const howItWorks = t("hybridGrid.howItWorksItems", { returnObjects: true });
  const applications = t("hybridGrid.applicationItems", { returnObjects: true });
  const engineering = t("hybridGrid.engineeringItems", { returnObjects: true });

  return (
    <div className="on-grid-page hybrid-grid-page">
      <section className="section">
        <div className="container split-section">
          <ScrollReveal className="split-section__media">
            <img src="https://sunapecopower.com/wp-content/uploads/2026/03/What-Makes-a-Hybrid-System.png?wsrp" alt="Hybrid solar system integrating rooftop solar with battery storage and grid" />
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className="eyebrow-line">{t("hybridGrid.overview")}</div>
            <h2>{t("hybridGrid.overviewTitle")}</h2>
            {overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </ScrollReveal>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow={t("hybridGrid.howItWorks")} title={t("hybridGrid.howItWorksTitle")} description={t("hybridGrid.howItWorksDescription")} />
          <div className="card-grid card-grid--3">
            {howItWorks.map((item, index) => (
              <ScrollReveal key={item.title} delay={index}>
                <div className="bracket-frame how-it-works-card">
                  <div className="how-it-works-card__media">
                    <img src={["https://image.made-in-china.com/2f0j00CeEhcbPdAUkq/off-Grid-Solar-System-20kw-Roop-Top-Solar-Wind-Hybrid-System-Generator.webp", "https://www.aforenergy.com/wp-content/uploads/2025/12/5-10.webp", "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=1200"][index]} alt={item.title} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow={t("hybridGrid.benefits")} title={t("hybridGrid.benefitsTitle")} description={t("hybridGrid.benefitsDescription")} />
          <ul className="two-col-list">
            {t("hybridGrid.benefitItems", { returnObjects: true }).map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow={t("hybridGrid.applications")} title={t("hybridGrid.applicationsTitle")} description={t("hybridGrid.applicationsDescription")} />
          <div className="card-grid card-grid--3">
            {applications.map((item, index) => (
              <ScrollReveal key={item.title} delay={index}>
                <div className="bracket-frame application-card">
                  <div className="application-card__media">
                    <img src={["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YUFGmOHQKZ6XJa4FyStGyDK7B5-NlzrEkuA9m7sqi6JhM1xKAumiy35z&s=10", "https://elecimech.co.in/assets/img/Industrial.png", "https://www.tatapower.com/adobe/dynamicmedia/deliver/dm-p-oid--xoiKJFyY4kqwBXocriZrmRglbhyjMgNeoZG4whF-UwrRwMKccPcsDJ-OoCe9x0BA3MOy8_FdN0QieFcTr5u8FLE_F-cxPcWagn9LgsigoIQph4t25X1qAtQJH2xPclrPyytECNNoNe8F-IK5hEYLDQ/body-002.png?quality=85&preferwebp=true"][index]} alt={item.title} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow={t("hybridGrid.engineering")} title={t("hybridGrid.engineeringTitle")} description={t("hybridGrid.engineeringDescription")} />
          <div className="card-grid card-grid--3">
            {engineering.map((item, index) => (
              <ScrollReveal key={item.title} delay={index}>
                <div className="bracket-frame"><h3>{item.title}</h3><p>{item.description}</p></div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
