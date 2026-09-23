
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollReveal from "../components/ScrollReveal";
import SectionTitle from "../components/SectionTitle";

import "../styles/serviceLanding.css";
import "../styles/industrial.css";

/* =========================================================
   INDUSTRIAL SOLAR PROJECTS
   ========================================================= */

const projectImages = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQygqKx3l98dIMtHid1hFttH6u9f99fP680lnXJT9MOUUf-Smj8gpHoMP0&s=10",
    title: "Manufacturing Plant Solar",
    text:
      "Large-scale rooftop solar designed to support the high electricity requirements of manufacturing facilities.",
  },
  {
    image:
      "https://enerparc.in/wp-content/uploads/2025/11/industrial-solar-rooftop-reduce-power-bills.jpg",
    title: "Industrial Rooftop Solar",
    text:
      "Efficient rooftop solar systems planned around available industrial roof space and energy consumption.",
  },
  {
    image:
      "https://www.servotech.in/blog/wp-content/uploads/2026/03/WhatsApp-Image-2025-02-27-at-12.44.36.jpeg",
    title: "Factory Energy Solution",
    text:
      "Solar power solutions helping industrial facilities reduce conventional electricity dependence.",
  },
  {
    image:
      " https://sistinesolar.com/wp-content/uploads/2023/08/Solar-for-Warehouses5.jpg",
    title: "Warehouse Solar Project",
    text:
      "Rooftop solar planned for warehouses, logistics centres and large commercial-industrial buildings.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7wKW7g2yLIiMUEuHpJbWESK7S5e3g_YNfi1EC81vU_5_vsYooNCB339X&s=10",
    title: "Industrial Power Generation",
    text:
      "A scalable solar generation system designed for long-term industrial energy requirements.",
  },
  {
    image:
      "https://cdn-cabda.nitrocdn.com/SVdFqKwAXGPztepQaAFhkCIrtwXjYdmL/assets/images/optimized/rev-04530b3/visolindia.com/wp-content/uploads/2020/03/industrial-solar-power-plant-500x500-2.jpg",
    title: "High-Capacity Solar Plant",
    text:
      "A high-capacity solar installation designed around facility load, available space and operating patterns.",
  },
];

/* =========================================================
   INDUSTRIAL SOLAR COMPONENTS
   ========================================================= */

const solarComponents = [
  {
    number: "01",
    title: "High-Efficiency Solar Panels",
    text:
      "High-performance solar modules convert available sunlight into electricity for industrial operations.",
  },
  {
    number: "02",
    title: "Industrial Solar Inverter",
    text:
      "Industrial-grade inverters convert solar power into usable electricity and support reliable system operation.",
  },
  {
    number: "03",
    title: "Rooftop Mounting Structure",
    text:
      "Engineered mounting structures securely position solar modules according to the building and roof conditions.",
  },
  {
    number: "04",
    title: "HT / LT Electrical System",
    text:
      "Electrical infrastructure connects the solar generation system with the facility's existing power network.",
  },
  {
    number: "05",
    title: "Protection & Safety",
    text:
      "Protection equipment helps safeguard the solar plant, electrical network and connected industrial loads.",
  },
  {
    number: "06",
    title: "Monitoring & Energy Management",
    text:
      "Digital monitoring helps track generation, system performance and energy usage across the facility.",
  },
];

/* =========================================================
   INDUSTRIAL SOLAR FAQ
   ========================================================= */

const faqs = [
  {
    question: "Why should industries install solar power?",
    answer:
      "Industrial facilities often have significant electricity requirements. Solar can help generate part of the facility's electricity demand and reduce dependence on conventional grid power.",
  },
  {
    question: "Can solar be installed on an existing factory?",
    answer:
      "Yes. Existing factories and industrial buildings can be evaluated for rooftop solar based on roof condition, available area, electrical infrastructure, energy consumption and structural requirements.",
  },
  {
    question: "Can solar support high industrial electricity consumption?",
    answer:
      "Solar systems can be designed at different capacities based on the facility's electricity consumption, available installation area, operating schedule and project requirements.",
  },
  {
    question: "Can industrial solar be installed on warehouse roofs?",
    answer:
      "Yes. Large warehouse and industrial roofs can provide useful installation space for rooftop solar after structural and technical evaluation.",
  },
  {
    question: "How can industrial solar performance be monitored?",
    answer:
      "Modern solar plants can use monitoring systems to track electricity generation, inverter performance, system status and other operating parameters.",
  },
];

/* =========================================================
   INDUSTRIAL SOLAR PAGE
   ========================================================= */

function IndustrialSolarPage() {
  const { t } = useTranslation();
  const page = t("solarServicePages.industrial", { returnObjects: true });

  return (
    <main className="service-landing-page industrial-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="industrial-hero">
        <div className="industrial-hero__container">

          <div className="industrial-hero__content">

            <span className="industrial-hero__eyebrow">
              {page.eyebrow}
            </span>

            <h1>
              {page.title}
              <span>{page.titleHighlight}</span>
            </h1>

            <p>
              {page.description?.[0]}
            </p>

            <p>
              {page.description?.[1]}
            </p>

            <div className="industrial-hero__actions">

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

          <div className="industrial-hero__image">

            <img
              src="https://gracerenew.com/images/solar-for-industrial.webp"
              alt={page.imageAlt}
            />

            <div className="industrial-hero__badge">
              <strong>{page.badgeTitle}</strong>
              <span>{page.badgeText}</span>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          INDUSTRIAL SUITABILITY
          ===================================================== */}

      <section className="service-section industrial-intro">

        <div className="service-container">

          <ScrollReveal>

            <SectionTitle
              eyebrow={page.sectionTitles?.highlights}
              title={page.sectionTitles?.highlightsTitle}
              description={page.sectionTitles?.highlightsDescription}
            />

          </ScrollReveal>


          <div className="industrial-highlight-grid">

            <ScrollReveal>
              <div className="industrial-highlight-card">

                <span>01</span>

                <h3>{page.highlights?.[0]?.title || "Manufacturing Plants"}</h3>

                <p>
                  {page.highlights?.[0]?.description || "Solar power systems designed for manufacturing units with continuous or high electricity consumption."}
                </p>

              </div>
            </ScrollReveal>


            <ScrollReveal>
              <div className="industrial-highlight-card">

                <span>02</span>

                <h3>{page.highlights?.[1]?.title || "Factories & Industrial Units"}</h3>

                <p>
                  {page.highlights?.[1]?.description || "Scalable solar solutions planned around factory operations, roof availability and electrical infrastructure."}
                </p>

              </div>
            </ScrollReveal>


            <ScrollReveal>
              <div className="industrial-highlight-card">

                <span>03</span>

                <h3>{page.highlights?.[2]?.title || "Warehouses & Large Facilities"}</h3>

                <p>
                  {page.highlights?.[2]?.description || "Efficient rooftop solar systems for warehouses, logistics facilities and large industrial buildings."}
                </p>

              </div>
            </ScrollReveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          INDUSTRIAL SOLAR SYSTEM
          ===================================================== */}

      <section className="service-section industrial-system-section">

        <div className="service-container">

          <ScrollReveal>

            <SectionTitle
              eyebrow={page.sectionTitles?.system}
              title={page.sectionTitles?.systemTitle}
              description={page.sectionTitles?.systemDescription}
            />

          </ScrollReveal>


          <div className="industrial-system-layout">

            <ScrollReveal>

              <div className="industrial-system-image">

                <img
                  src="https://namienergy.com/wp-content/uploads/2021/07/D%E1%BB%B1-%C3%A1n-Sonadezi-Ch%C3%A2u-%C4%90%E1%BB%A9c-e1626246215874.jpg"
                  alt="Industrial solar panels"
                />

              </div>

            </ScrollReveal>


            <div className="industrial-system-components">

              {(page.systemComponents || solarComponents).map((component, index) => (

                <ScrollReveal
                  key={component.number || component.title}
                  delay={index * 80}
                >

                  <article className="industrial-component-card">

                    <span className="industrial-component-number">
                      {component.number || String(index + 1).padStart(2, "0")}
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
          PROJECTS
          ===================================================== */}

      <section
        className="service-section industrial-projects"
        id="projects"
      >

        <div className="service-container">

          <ScrollReveal>

            <SectionTitle
              eyebrow="OUR PROJECTS"
              title="Solar Solutions for Industrial Facilities"
              description="Explore industrial solar applications designed for factories, manufacturing plants, warehouses and large electricity-consuming facilities."
            />

          </ScrollReveal>


          <div className="industrial-project-grid">

            {projectImages.map((project, index) => (

              <ScrollReveal
                key={project.title}
                delay={index * 70}
              >

                <article className="industrial-project-card">

                  <div className="industrial-project-image">

                    <img
                      src={project.image}
                      alt={project.title}
                    />

                    <span>
                      0{index + 1}
                    </span>

                  </div>


                  <div className="industrial-project-content">

                    <h3>{page.projects?.[index]?.title || project.title}</h3>

                    <p>{page.projects?.[index]?.description || project.text}</p>

                  </div>

                </article>

              </ScrollReveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          INDUSTRIAL ENERGY MANAGEMENT
          ===================================================== */}

      <section className="service-section industrial-support">

        <div className="service-container">

          <div className="industrial-support-box">

            <ScrollReveal>

              <div className="industrial-support-content">

                <span className="industrial-hero__eyebrow">
                  {page.support?.eyebrow}
                </span>

                <h2>
                  {page.support?.title}
                </h2>

                <p>
                  {page.support?.description?.[0]}
                </p>

                <p>
                  {page.support?.description?.[1]}
                </p>

                <Link
                  to="/contact"
                  className="service-btn service-btn--primary"
                >
                  {page.support?.button}
                </Link>

              </div>

            </ScrollReveal>


            <ScrollReveal>

              <div className="industrial-support-image">

                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85"
                  alt="Industrial solar energy facility"
                />

              </div>

            </ScrollReveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          BENEFITS
          ===================================================== */}

      <section className="service-section industrial-benefits">

        <div className="service-container">

          <ScrollReveal>

            <SectionTitle
              eyebrow={page.sectionTitles?.benefits}
              title={page.sectionTitles?.benefitsTitle}
              description={page.sectionTitles?.benefitsDescription}
            />

          </ScrollReveal>


          <div className="industrial-benefit-grid">

            <ScrollReveal>
              <div className="industrial-benefit-card">

                <span>01</span>

                <h3>{page.benefits?.[0]?.title || "Lower Grid Dependence"}</h3>

                <p>
                  {page.benefits?.[0]?.description || "Generate a portion of your facility's electricity through on-site solar power."}
                </p>

              </div>
            </ScrollReveal>


            <ScrollReveal>
              <div className="industrial-benefit-card">

                <span>02</span>

                <h3>{page.benefits?.[1]?.title || "Large-Scale Generation"}</h3>

                <p>
                  {page.benefits?.[1]?.description || "Solar plants can be designed for facilities with substantial electricity requirements."}
                </p>

              </div>
            </ScrollReveal>


            <ScrollReveal>
              <div className="industrial-benefit-card">

                <span>03</span>

                <h3>{page.benefits?.[2]?.title || "Better Roof Utilisation"}</h3>

                <p>
                  {page.benefits?.[2]?.description || "Make productive use of suitable factory and warehouse rooftop areas for solar generation."}
                </p>

              </div>
            </ScrollReveal>


            <ScrollReveal>
              <div className="industrial-benefit-card">

                <span>04</span>

                <h3>{page.benefits?.[3]?.title || "Energy Monitoring"}</h3>

                <p>
                  {page.benefits?.[3]?.description || "Monitor plant generation and system performance through modern digital monitoring solutions."}
                </p>

              </div>
            </ScrollReveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
          ===================================================== */}

      <section className="industrial-cta">

        <div className="service-container">

          <div className="industrial-cta__inner">

            <div>

              <span className="industrial-hero__eyebrow">
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


      {/* =====================================================
          FAQ
          ===================================================== */}

      <section className="service-section industrial-faq">

        <div className="service-container">

          <ScrollReveal>

            <SectionTitle
              eyebrow={page.sectionTitles?.faq}
              title={page.sectionTitles?.faqTitle}
              description={page.sectionTitles?.faqDescription}
            />

          </ScrollReveal>


          <div className="industrial-faq-list">

            {(page.faqs || faqs).map((faq, index) => (

              <ScrollReveal
                key={faq.question}
                delay={index * 60}
              >

                <details className="industrial-faq-item">

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

    </main>
  );
}

export default IndustrialSolarPage;