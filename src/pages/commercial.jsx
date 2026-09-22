import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollReveal from "../components/ScrollReveal";
import SectionTitle from "../components/SectionTitle";

import "../styles/serviceLanding.css";
import "../styles/utilityscale.css";

const projectImages = [
  {
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85",
    title: "Commercial Rooftop Solar",
    text: "A rooftop solar solution designed to support the daily electricity requirements of commercial buildings.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85",
    title: "Office Building Solar",
    text: "Solar power designed for offices and business facilities looking to reduce conventional electricity consumption.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85",
    title: "Industrial Rooftop Installation",
    text: "A larger rooftop installation planned around available roof space and operational energy demand.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1545208942-e1e9d8f6f3a5?auto=format&fit=crop&w=1200&q=85",
    title: "Warehouse Solar Project",
    text: "A practical solar solution for warehouses and facilities with large roof areas and significant daytime loads.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1200&q=85",
    title: "Business Solar Installation",
    text: "Commercial solar designed to support predictable energy generation and better long-term electricity planning.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=85",
    title: "Large-Scale Rooftop System",
    text: "A scalable rooftop solar installation designed for businesses with higher electricity requirements.",
  },
];

const commercialSolutions = [
  {
    number: "01",
    title: "Office Buildings",
    text: "Solar systems designed around office electricity consumption, working hours and available rooftop space.",
  },
  {
    number: "02",
    title: "Retail & Commercial Spaces",
    text: "Energy solutions for retail stores, commercial complexes and business premises with regular daytime electricity demand.",
  },
  {
    number: "03",
    title: "Warehouses",
    text: "Large rooftop areas can be utilised for solar generation to support warehouse operations and facility loads.",
  },
  {
    number: "04",
    title: "Hotels & Institutions",
    text: "Solar solutions for hotels, schools, colleges and institutions with consistent electricity requirements.",
  },
  {
    number: "05",
    title: "Industrial Facilities",
    text: "Higher-capacity solar systems designed around industrial operating schedules and electricity consumption patterns.",
  },
  {
    number: "06",
    title: "Business Campuses",
    text: "Scalable solar installations for multi-building campuses and commercial facilities with growing energy needs.",
  },
];

const solarComponents = [
  {
    number: "01",
    title: "Solar PV Modules",
    text: "High-quality photovoltaic modules convert available sunlight into electrical energy for commercial use.",
  },
  {
    number: "02",
    title: "Solar Inverter",
    text: "The inverter converts DC electricity from the solar modules into usable AC electricity for the facility.",
  },
  {
    number: "03",
    title: "Mounting Structure",
    text: "Engineered mounting structures securely support the solar modules while maintaining the required orientation.",
  },
  {
    number: "04",
    title: "Electrical Protection",
    text: "Protection systems help safeguard the solar plant, electrical equipment and connected commercial loads.",
  },
  {
    number: "05",
    title: "Monitoring System",
    text: "Monitoring systems provide visibility into solar generation, plant performance and system operation.",
  },
  {
    number: "06",
    title: "Grid Integration",
    text: "Grid-connected systems allow generated solar power to work alongside the facility's existing electrical supply.",
  },
];

const faqs = [
  {
    question: "What is commercial solar?",
    answer:
      "Commercial solar refers to solar power systems designed for businesses, offices, retail buildings, warehouses, institutions and other commercial facilities.",
  },
  {
    question: "Can solar reduce electricity costs for a business?",
    answer:
      "Solar generation can reduce the amount of electricity a business needs to purchase from the grid. The actual savings depend on system size, electricity consumption, tariff structure, solar generation and applicable regulations.",
  },
  {
    question: "How large can a commercial solar system be?",
    answer:
      "The appropriate capacity depends on the facility's electricity consumption, available roof or land area, electrical infrastructure, project objectives and applicable technical requirements.",
  },
  {
    question: "Can solar be installed on an existing commercial building?",
    answer:
      "Yes. Existing commercial buildings can be assessed for rooftop solar based on structural condition, roof area, electricity usage, electrical infrastructure and installation requirements.",
  },
  {
    question: "Can commercial solar generation be monitored?",
    answer:
      "Yes. Modern commercial solar systems can include monitoring platforms that provide information about energy generation, system performance and equipment status.",
  },
];

function CommercialSolarPage() {
  const { t } = useTranslation();

  const page = t("solarServicePages.commercial", {
    returnObjects: true,
  });

  return (
    <main className="service-landing-page commercial-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="commercial-hero">
        <div className="commercial-hero__container">

          <div className="commercial-hero__content">

            <span className="commercial-hero__eyebrow">
              {page.eyebrow}
            </span>

            <h1>
              {page.title}
            </h1>

            <p>
              {page.description?.[0]}
            </p>

            <p>
              {page.description?.[1]}
            </p>

            <div className="commercial-hero__actions">

              <Link
                to="/contact"
                className="service-btn service-btn--primary"
              >
                {page.cta?.primary}
              </Link>

              <a
                href="#projects"
                className="service-btn service-btn--secondary"
              >
                {page.cta?.secondary}
              </a>

            </div>

          </div>

          <div className="commercial-hero__image">

            <img
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1400&q=85"
              alt={page.imageAlt}
            />

            <div className="commercial-hero__badge">
              <strong>{page.badgeTitle}</strong>
              <span>{page.badgeText}</span>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          {page.sectionTitles?.highlights}
      ===================================================== */}

      <section className="service-section commercial-intro">

        <div className="service-container">

          <ScrollReveal>
            <SectionTitle
              eyebrow="SOLAR FOR BUSINESS"
              title={page.sectionTitles?.highlightsTitle}
              description={page.sectionTitles?.highlightsDescription}
            />
          </ScrollReveal>

          <div className="commercial-highlight-grid">

            {(page.highlights || commercialSolutions).map((solution, index) => (
              <ScrollReveal
                key={solution.number}
                delay={index * 70}
              >
                <article className="commercial-highlight-card">

                  <span>{solution.number}</span>

                  <h3>{solution.title}</h3>

                  <p>{solution.text || solution.description}</p>

                </article>
              </ScrollReveal>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          COMMERCIAL SOLAR SYSTEM
      ===================================================== */}

      <section className="service-section commercial-system-section">

        <div className="service-container">

          <ScrollReveal>
            <SectionTitle
              eyebrow={page.sectionTitles?.process}
              title={page.sectionTitles?.processTitle}
              description={page.sectionTitles?.processDescription}
            />
          </ScrollReveal>

          <div className="commercial-system-layout">

            <ScrollReveal>

              <div className="commercial-system-image">

                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85"
                  alt="Commercial solar panels"
                />

              </div>

            </ScrollReveal>

            <div className="commercial-system-components">

              {(page.processSteps || solarComponents).map((component, index) => (
                <ScrollReveal
                  key={component.number}
                  delay={index * 80}
                >
                  <article className="commercial-component-card">

                    <span className="commercial-component-number">
                      {component.number}
                    </span>

                    <div>

                      <h3>{component.title}</h3>

                      <p>{component.text || component.description}</p>

                    </div>

                  </article>
                </ScrollReveal>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BUSINESS BENEFITS
      ===================================================== */}

      <section className="service-section commercial-benefits">

        <div className="service-container">

          <ScrollReveal>
            <SectionTitle
              eyebrow={page.sectionTitles?.benefits}
              title={page.sectionTitles?.benefitsTitle}
              description={page.sectionTitles?.benefitsDescription}
            />
          </ScrollReveal>

          <div className="commercial-benefit-grid">

            <ScrollReveal>
              <article className="commercial-benefit-card">
                <span>01</span>
                <h3>Reduce Grid Dependence</h3>
                <p>
                  Generate a portion of your facility's electricity through
                  on-site solar power.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal>
              <article className="commercial-benefit-card">
                <span>02</span>
                <h3>Use Rooftop Space</h3>
                <p>
                  Convert suitable commercial rooftop areas into productive
                  solar generation space.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal>
              <article className="commercial-benefit-card">
                <span>03</span>
                <h3>Support Daytime Loads</h3>
                <p>
                  Solar generation can align well with businesses that have
                  significant daytime electricity consumption.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal>
              <article className="commercial-benefit-card">
                <span>04</span>
                <h3>Improve Energy Planning</h3>
                <p>
                  Monitor solar generation and incorporate renewable energy
                  into your facility's long-term electricity planning.
                </p>
              </article>
            </ScrollReveal>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        className="service-section commercial-projects"
        id="projects"
      >

        <div className="service-container">

          <ScrollReveal>
            <SectionTitle
              eyebrow={page.sectionTitles?.benefits}
              title={page.sectionTitles?.benefitsTitle}
              description={page.sectionTitles?.benefitsDescription}
            />
          </ScrollReveal>

          <div className="commercial-project-grid">

            {projectImages.map((project, index) => (
              <ScrollReveal
                key={project.title}
                delay={index * 70}
              >
                <article className="commercial-project-card">

                  <div className="commercial-project-image">

                    <img
                      src={project.image}
                      alt={project.title}
                    />

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  <div className="commercial-project-content">

                    <h3>{page.highlights?.[index]?.title || project.title}</h3>

                    <p>{page.highlights?.[index]?.description || project.text}</p>

                  </div>

                </article>
              </ScrollReveal>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          COMMERCIAL SUPPORT
      ===================================================== */}

      <section className="service-section commercial-support">

        <div className="service-container">

          <div className="commercial-support-box">

            <ScrollReveal>

              <div className="commercial-support-content">

                <span className="commercial-hero__eyebrow">
                  {page.epc?.eyebrow || page.cta?.eyebrow}
                </span>

                <h2>
                  {page.epc?.title || page.cta?.title}
                </h2>

                <p>
                  {page.cta?.description}
                </p>

                <p>
                  {page.cta?.description}
                </p>

                <Link
                  to="/contact"
                  className="service-btn service-btn--primary"
                >
                  {page.cta?.primary}
                </Link>

              </div>

            </ScrollReveal>

            <ScrollReveal>

              <div className="commercial-support-image">

                <img
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1400&q=85"
                  alt="Commercial solar panels on building"
                />

              </div>

            </ScrollReveal>

          </div>

        </div>

      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="service-section commercial-faq">

        <div className="service-container">

          <ScrollReveal>

            <SectionTitle
              eyebrow={page.sectionTitles?.faq}
              title={page.sectionTitles?.faqTitle}
              description={page.sectionTitles?.faqDescription}
            />

          </ScrollReveal>

          <div className="commercial-faq-list">

            {(page.faqs || faqs).map((faq, index) => (
              <ScrollReveal
                key={faq.question}
                delay={index * 60}
              >
                <details className="commercial-faq-item">

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

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="commercial-cta">

        <div className="service-container">

          <div className="commercial-cta__inner">

            <div>

              <span className="commercial-hero__eyebrow">
                {page.cta?.eyebrow}
              </span>

              <h2>
                {page.cta?.title}
              </h2>

              <p>
                {page.cta?.description}
              </p>

            </div>

            <Link
              to="/contact"
              className="service-btn service-btn--light"
            >
              {page.cta?.primary}
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default CommercialSolarPage;