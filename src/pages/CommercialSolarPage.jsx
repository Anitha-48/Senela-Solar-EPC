import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollReveal from "../components/ScrollReveal";
import SectionTitle from "../components/SectionTitle";

import "../styles/serviceLanding.css";
import "../styles/commercial.css";

const projectImages = [
  {
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85",
    key: "industrialRooftop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85",
    key: "factorySolar",
  },
  {
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=85",
    key: "commercialBuilding",
  },
  {
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=85",
    key: "warehouseSolar",
  },
  {
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85",
    key: "industrialEnergy",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509390144018-eeaf65052242?auto=format&fit=crop&w=1200&q=85",
    key: "businessSolar",
  },
];

function CommercialIndustrialSolarPage() {
  const { t } = useTranslation();

  const source = t("solarServicePages.commercial", {
    returnObjects: true,
  });

  const page = {
    hero: {
      eyebrow: source.eyebrow,
      title: source.title,
      titleHighlight: "",
      description1: source.description?.[0],
      description2: source.description?.[1],
      primaryButton: source.cta?.primary,
      secondaryButton: source.cta?.secondary,
      imageAlt: source.imageAlt,
      badgeTitle: source.badgeTitle,
      badgeText: source.badgeText,
    },
    solutions: source.highlights?.map((item, index) => ({
      number: String(index + 1).padStart(2, "0"),
      title: item.title,
      text: item.description,
    })) || [],
    components: source.processSteps?.map((item, index) => ({
      number: String(index + 1).padStart(2, "0"),
      title: item.title,
      text: item.description,
    })) || [],
    faqs: source.faqs || [],
    projects: Object.fromEntries(
      (source.highlights || []).map((item, index) => [
        projectImages[index]?.key,
        { title: item.title, text: item.description },
      ])
    ),
    solutionsSection: {
      eyebrow: source.sectionTitles?.highlights,
      title: source.sectionTitles?.highlightsTitle,
      description: source.sectionTitles?.highlightsDescription,
    },
    systemSection: {
      eyebrow: source.sectionTitles?.process,
      title: source.sectionTitles?.processTitle,
      description: source.sectionTitles?.processDescription,
      imageAlt: source.systemImageAlt,
    },
    projectsSection: {
      eyebrow: source.sectionTitles?.benefits,
      title: source.sectionTitles?.benefitsTitle,
      description: source.sectionTitles?.benefitsDescription,
    },
    epc: {
      eyebrow: source.epc.eyebrow,
      title: source.epc.title,
      description1: source.cta?.description,
      description2: source.processSteps?.[0]?.description,
      button: source.cta?.primary,
      imageAlt: source.epc.imageAlt,
    },
    faqSection: {
      eyebrow: source.sectionTitles?.faq,
      title: source.sectionTitles?.faqTitle,
      description: source.sectionTitles?.faqDescription,
    },
    cta: {
      eyebrow: source.cta?.eyebrow,
      title: source.cta?.title,
      description: source.cta?.description,
      button: source.cta?.primary,
    },
  };

  const { solutions, components, faqs, projects } = page;

  return (
    <main className="service-landing-page commercial-industrial-page">

      {/* ================= HERO ================= */}
      <section className="commercial-industrial-hero">
        <div className="commercial-industrial-hero__container">

          <div className="commercial-industrial-hero__content">

            <span className="commercial-industrial-hero__eyebrow">
              {page.hero.eyebrow}
            </span>

            <h1>
              {page.hero.title}
              <span>{page.hero.titleHighlight}</span>
            </h1>

            <p>{page.hero.description1}</p>

            <p>{page.hero.description2}</p>

            <div className="commercial-industrial-hero__actions">

              <Link
                to="/contact"
                className="service-btn service-btn--primary"
              >
                {page.hero.primaryButton}
              </Link>

              <a
                href="#solutions"
                className="service-btn service-btn--secondary"
              >
                {page.hero.secondaryButton}
              </a>

            </div>
          </div>

          <div className="commercial-industrial-hero__image">

            <img
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1400&q=85"
              alt={page.hero.imageAlt}
            />

            <div className="commercial-industrial-hero__badge">
              <strong>{page.hero.badgeTitle}</strong>
              <span>{page.hero.badgeText}</span>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section
        className="service-section commercial-industrial-intro"
        id="solutions"
      >
        <div className="service-container">

          <ScrollReveal>
            <SectionTitle
              eyebrow={page.solutionsSection.eyebrow}
              title={page.solutionsSection.title}
              description={page.solutionsSection.description}
            />
          </ScrollReveal>

          <div className="commercial-industrial-solution-grid">

            {solutions.map((solution, index) => (
              <ScrollReveal
                key={solution.number}
                delay={index * 70}
              >
                <article className="commercial-industrial-solution-card">

                  <span>{solution.number}</span>

                  <h3>{solution.title}</h3>

                  <p>{solution.text}</p>

                </article>
              </ScrollReveal>
            ))}

          </div>
        </div>
      </section>

      {/* ================= SOLAR SYSTEM ================= */}
      <section className="service-section industrial-system-section">
        <div className="service-container">

          <ScrollReveal>
            <SectionTitle
              eyebrow={page.systemSection.eyebrow}
              title={page.systemSection.title}
              description={page.systemSection.description}
            />
          </ScrollReveal>

          <div className="industrial-system-layout">

            <ScrollReveal>
              <div className="industrial-system-image">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85"
                  alt={page.systemSection.imageAlt}
                />
              </div>
            </ScrollReveal>

            <div className="industrial-system-components">

              {components.map((component, index) => (
                <ScrollReveal
                  key={component.number}
                  delay={index * 70}
                >
                  <article className="industrial-component-card">

                    <span className="industrial-component-number">
                      {component.number}
                    </span>

                    <div>
                      <h3>{component.title}</h3>
                      <p>{component.text}</p>
                    </div>

                  </article>
                </ScrollReveal>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        className="service-section commercial-industrial-projects"
        id="projects"
      >
        <div className="service-container">

          <ScrollReveal>
            <SectionTitle
              eyebrow={page.projectsSection.eyebrow}
              title={page.projectsSection.title}
              description={page.projectsSection.description}
            />
          </ScrollReveal>

          <div className="commercial-industrial-project-grid">

            {projectImages.map((project, index) => {

              const projectData = projects[project.key] || {
                title: source.projectFallbackTitle,
                text: source.projectFallbackText,
              };

              return (
                <ScrollReveal
                  key={project.key}
                  delay={index * 70}
                >
                  <article className="commercial-industrial-project-card">

                    <div className="commercial-industrial-project-image">

                      <img
                        src={project.image}
                        alt={projectData.title}
                      />

                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>

                    <div className="commercial-industrial-project-content">

                      <h3>{projectData.title}</h3>

                      <p>{projectData.text}</p>

                    </div>

                  </article>
                </ScrollReveal>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= EPC ================= */}
      <section className="service-section commercial-industrial-epc">
        <div className="service-container">

          <div className="commercial-industrial-epc-box">

            <ScrollReveal>
              <div className="commercial-industrial-epc-content">

                <span className="commercial-industrial-hero__eyebrow">
                  {page.epc.eyebrow}
                </span>

                <h2>{page.epc.title}</h2>

                <p>{page.epc.description1}</p>

                <p>{page.epc.description2}</p>

                <Link
                  to="/services/epc"
                  className="service-btn service-btn--primary"
                >
                  {page.epc.button}
                </Link>

              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="commercial-industrial-epc-image">

                <img
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=85"
                  alt={page.epc.imageAlt}
                />

              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="service-section commercial-industrial-faq">
        <div className="service-container">

          <ScrollReveal>
            <SectionTitle
              eyebrow={page.faqSection.eyebrow}
              title={page.faqSection.title}
              description={page.faqSection.description}
            />
          </ScrollReveal>

          <div className="commercial-industrial-faq-list">

            {faqs.map((faq, index) => (
              <ScrollReveal
                key={faq.question}
                delay={index * 60}
              >
                <details className="commercial-industrial-faq-item">

                  <summary>
                    <span>{faq.question}</span>
                    <b>+</b>
                  </summary>

                  <p>{faq.answer}</p>

                </details>
              </ScrollReveal>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="commercial-industrial-cta">

        <div className="service-container">

          <div className="commercial-industrial-cta__inner">

            <div>

              <span className="commercial-industrial-hero__eyebrow">
                {page.cta.eyebrow}
              </span>

              <h2>{page.cta.title}</h2>

              <p>{page.cta.description}</p>

            </div>

            <Link
              to="/contact"
              className="service-btn service-btn--light"
            >
              {page.cta.button}
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default CommercialIndustrialSolarPage;