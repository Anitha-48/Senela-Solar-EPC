import { useTranslation } from "react-i18next";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import "../styles/ongrid.css";

export default function OnGridSolar() {
  const { t } = useTranslation();
  const overview = t("onGrid.overviewParagraphs", { returnObjects: true });
  const howItWorks = t("onGrid.howItWorksItems", { returnObjects: true });
  const applications = t("onGrid.applicationItems", { returnObjects: true });
  const engineering = t("onGrid.engineeringItems", { returnObjects: true });

  return (
    <div className="on-grid-page">
      <section className="section">
        <div className="container split-section">
          <ScrollReveal className="split-section__media">
            <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000&auto=format&fit=crop" alt="On-grid rooftop solar installation" />
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className="eyebrow-line">{t("onGrid.overview")}</div>
            <h2>{t("onGrid.overviewTitle")}</h2>
            {overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </ScrollReveal>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow={t("onGrid.howItWorks")} title={t("onGrid.howItWorksTitle")} description={t("onGrid.howItWorksDescription")} />
          <div className="card-grid card-grid--3">
            {howItWorks.map((item, index) => (
              <ScrollReveal key={item.title} delay={index}>
                <div className="bracket-frame how-it-works-card">
                  <div className="how-it-works-card__media">
                    <img src={["https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=900&auto=format&fit=crop", "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=900&auto=format&fit=crop"][index]} alt={item.title} />
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
          <SectionTitle eyebrow={t("onGrid.benefits")} title={t("onGrid.benefitsTitle")} description={t("onGrid.benefitsDescription")} />
          <ul className="two-col-list">
            {t("onGrid.benefitItems", { returnObjects: true }).map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow={t("onGrid.applications")} title={t("onGrid.applicationsTitle")} description={t("onGrid.applicationsDescription")} />
          <div className="card-grid card-grid--3">
            {applications.map((item, index) => (
              <ScrollReveal key={item.title} delay={index}>
                <div className="bracket-frame application-card">
                  <div className="application-card__media">
                    <img src={["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YUFGmOHQKZ6XJa4FyStGyDK7B5-NlzrEkuA9m7sqi6JhM1xKAumiy35z&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8XN0gQjFrsjeyQ6OnJ2UVbVGkYSeXnmEN2UzOKNnM6A&s=10", "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=900&auto=format&fit=crop"][index]} alt={item.title} />
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
          <SectionTitle eyebrow={t("onGrid.engineering")} title={t("onGrid.engineeringTitle")} description={t("onGrid.engineeringDescription")} />
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
