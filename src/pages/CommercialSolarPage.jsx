import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollReveal from "../components/ScrollReveal";
import SectionTitle from "../components/SectionTitle";
import "../styles/serviceLanding.css";

export default function CommercialSolarPage() {
  const { t } = useTranslation();
  const page = t("solarServicePages.commercial", { returnObjects: true });
  const highlights = t("solarServicePages.commercial.highlights", { returnObjects: true });
  const advantages = t("solarServicePages.commercial.advantages", { returnObjects: true });
  const processSteps = t("solarServicePages.commercial.processSteps", { returnObjects: true });
  const faqs = t("solarServicePages.commercial.faqs", { returnObjects: true });

  return (
    <div className="service-landing-page">
      <section className="service-landing-section">
        <div className="container service-landing-hero">
          <ScrollReveal className="service-landing-hero__media">
            <img
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200&auto=format&fit=crop"
              alt={page.title}
            />
          </ScrollReveal>

          <ScrollReveal delay={1} className="service-landing-hero__content">
            <div className="service-landing-breadcrumb">{page.breadcrumb}</div>
            <div className="service-landing-eyebrow">{page.eyebrow}</div>
            <h2>{page.title}</h2>
            {page.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </ScrollReveal>
        </div>
      </section>

      

      <section className="service-landing-section">
        <div className="container">
          <SectionTitle
            eyebrow={page.sectionTitles.benefits}
            title={page.sectionTitles.benefitsTitle}
            description={page.sectionTitles.benefitsDescription}
          />
          <ul className="service-landing-list">
            {advantages.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="service-landing-section service-landing-section--light" >
        <div className="container">
          <SectionTitle
            eyebrow={page.sectionTitles.process}
            title={page.sectionTitles.processTitle}
            description={page.sectionTitles.processDescription}
          />

          <div className="service-landing-grid service-landing-grid--3">
            {processSteps.map((item, index) => (
              <ScrollReveal key={item.title} delay={index}>
                <div className="service-landing-feature">
                  <div className="service-landing-feature__body">
                    <div className="service-landing-eyebrow">0{index + 1}</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="service-landing-section">
        <div className="container">
          <SectionTitle
            eyebrow={page.sectionTitles.faq}
            title={page.sectionTitles.faqTitle}
            description={page.sectionTitles.faqDescription}
          />

          <div className="service-landing-grid service-landing-grid--3">
            {faqs.map((item, index) => (
              <ScrollReveal key={item.question} delay={index}>
                <div className="service-landing-faq">
                  <div className="service-landing-faq__body">
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="service-landing-section">
        <div className="container">
          <div className="service-landing-cta">
            <div className="service-landing-eyebrow" style={{ background: "rgba(255,255,255,0.12)", color: "#fff" }}>{page.cta.eyebrow}</div>
            <h2>{page.cta.title}</h2>
            <p>{page.cta.description}</p>
            <div className="service-landing-actions">
              <Link to="/contact" className="service-landing-btn service-landing-btn--primary">{page.cta.primary}</Link>
              <a href="tel:+919876543210" className="service-landing-btn service-landing-btn--secondary">{page.cta.secondary}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
