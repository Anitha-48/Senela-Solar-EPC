import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollReveal from "../components/ScrollReveal";
import SectionTitle from "../components/SectionTitle";

import "../styles/serviceLanding.css";
import "../styles/commercial.css";

const projectImages = [
  "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85",
];

export default function CommercialSolarPage() {
  const { t } = useTranslation();
  const page = t("solarServicePages.commercial", { returnObjects: true });

  return (
    <main className="service-landing-page commercial-page">
      <section className="commercial-hero">
        <div className="commercial-hero__container">
          <div className="commercial-hero__content">
            <span className="commercial-eyebrow">{page.eyebrow}</span>
            <h1>
              {page.title}
              <span>{page.titleHighlight}</span>
            </h1>
            <p>{page.description[0]}</p>
            <p>{page.description[1]}</p>
            <div className="commercial-actions">
              <Link to="/contact" className="commercial-btn commercial-btn--primary">
                {page.cta.primary}
              </Link>
              <a href="#solutions" className="commercial-btn commercial-btn--secondary">
                {page.cta.secondary}
              </a>
            </div>
          </div>

          <div className="commercial-hero__image">
            <img src={projectImages[0]} alt={page.imageAlt} />
            <div className="commercial-hero__badge">
              <strong>{page.badgeTitle}</strong>
              <span>{page.badgeText}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="commercial-section" id="solutions">
        <div className="commercial-container">
          <ScrollReveal>
            <SectionTitle
              eyebrow={page.sectionTitles.solutions}
              title={page.sectionTitles.solutionsTitle}
              description={page.sectionTitles.solutionsDescription}
            />
          </ScrollReveal>

          <div className="commercial-grid">
            {page.solutions.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 70}>
                <article className="commercial-card">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="commercial-section commercial-section--alt">
        <div className="commercial-container commercial-split">
          <div className="commercial-split__image">
            <img src={projectImages[1]} alt="Commercial solar system" />
          </div>
          <div className="commercial-split__content">
            <ScrollReveal>
              <SectionTitle
                eyebrow={page.sectionTitles.benefits}
                title={page.sectionTitles.benefitsTitle}
                description={page.sectionTitles.benefitsDescription}
              />
            </ScrollReveal>
            <ul className="commercial-benefits">
              {page.benefits.map((benefit, index) => (
                <ScrollReveal key={benefit} delay={index * 40}>
                  <li>{benefit}</li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="commercial-section">
        <div className="commercial-container">
          <ScrollReveal>
            <SectionTitle
              eyebrow={page.sectionTitles.process}
              title={page.sectionTitles.processTitle}
              description={page.sectionTitles.processDescription}
            />
          </ScrollReveal>

          <div className="commercial-process">
            {page.process.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 60}>
                <article className="commercial-step">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="commercial-cta">
        <div className="commercial-container commercial-cta__inner">
          <div>
            <span className="commercial-eyebrow">{page.cta.eyebrow}</span>
            <h2>{page.cta.title}</h2>
            <p>{page.cta.description}</p>
          </div>
          <Link to="/contact" className="commercial-btn commercial-btn--light">
            {page.cta.primary}
          </Link>
        </div>
      </section>

      <section className="commercial-section commercial-section--faq">
        <div className="commercial-container">
          <ScrollReveal>
            <SectionTitle
              eyebrow={page.sectionTitles.faq}
              title={page.sectionTitles.faqTitle}
              description={page.sectionTitles.faqDescription}
            />
          </ScrollReveal>

          <div className="commercial-faq__list">
            {page.faqs.map((faq) => (
              <details className="commercial-faq__item" key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <b>+</b>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
