
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import SectionTitle from "../components/SectionTitle";

import "../styles/serviceLanding.css";
import "../styles/industrialSolar.css";

/* =========================================================
   INDUSTRIAL SOLAR PROJECTS
   ========================================================= */

const projectImages = [
  {
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85",
    title: "Manufacturing Plant Solar",
    text:
      "Large-scale rooftop solar designed to support the high electricity requirements of manufacturing facilities.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85",
    title: "Industrial Rooftop Solar",
    text:
      "Efficient rooftop solar systems planned around available industrial roof space and energy consumption.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85",
    title: "Factory Energy Solution",
    text:
      "Solar power solutions helping industrial facilities reduce conventional electricity dependence.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=85",
    title: "Warehouse Solar Project",
    text:
      "Rooftop solar planned for warehouses, logistics centres and large commercial-industrial buildings.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85",
    title: "Industrial Power Generation",
    text:
      "A scalable solar generation system designed for long-term industrial energy requirements.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85",
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
  return (
    <main className="service-landing-page industrial-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="industrial-hero">
        <div className="industrial-hero__container">

          <div className="industrial-hero__content">

            <span className="industrial-hero__eyebrow">
              INDUSTRIAL SOLAR
            </span>

            <h1>
              Power Your Industry
              <span> With Reliable Solar Energy</span>
            </h1>

            <p>
              Transform your industrial facility into a smarter energy
              operation with a solar power system designed around your
              electricity consumption, available space and operating needs.
            </p>

            <p>
              From manufacturing plants and factories to warehouses and
              large industrial facilities, we design and deliver scalable
              solar solutions that support long-term energy management.
            </p>

            <div className="industrial-hero__actions">

              <Link
                to="/contact"
                className="service-btn service-btn--primary"
              >
                Discuss Your Project
              </Link>

              <a
                href="#projects"
                className="service-btn service-btn--secondary"
              >
                View Projects
              </a>

            </div>

          </div>

          <div className="industrial-hero__image">

            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85"
              alt="Industrial solar power installation"
            />

            <div className="industrial-hero__badge">
              <strong>Industrial Energy</strong>
              <span>Designed for high-demand facilities</span>
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
              eyebrow="SOLAR FOR INDUSTRIES"
              title="Designed Around Your Industrial Energy Requirements"
              description="Every industrial facility has different operating schedules, electricity loads and available installation areas. Our solar solutions are planned around your facility's specific energy requirements."
            />

          </ScrollReveal>


          <div className="industrial-highlight-grid">

            <ScrollReveal>
              <div className="industrial-highlight-card">

                <span>01</span>

                <h3>Manufacturing Plants</h3>

                <p>
                  Solar power systems designed for manufacturing units with
                  continuous or high electricity consumption.
                </p>

              </div>
            </ScrollReveal>


            <ScrollReveal>
              <div className="industrial-highlight-card">

                <span>02</span>

                <h3>Factories & Industrial Units</h3>

                <p>
                  Scalable solar solutions planned around factory operations,
                  roof availability and electrical infrastructure.
                </p>

              </div>
            </ScrollReveal>


            <ScrollReveal>
              <div className="industrial-highlight-card">

                <span>03</span>

                <h3>Warehouses & Large Facilities</h3>

                <p>
                  Efficient rooftop solar systems for warehouses,
                  logistics facilities and large industrial buildings.
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
              eyebrow="INDUSTRIAL SOLAR SYSTEM"
              title="Inside an Industrial Solar Power System"
              description="An industrial solar plant combines generation, electrical infrastructure, protection, monitoring and energy management systems to deliver reliable solar power for large facilities."
            />

          </ScrollReveal>


          <div className="industrial-system-layout">

            <ScrollReveal>

              <div className="industrial-system-image">

                <img
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85"
                  alt="Industrial solar panels"
                />

              </div>

            </ScrollReveal>


            <div className="industrial-system-components">

              {solarComponents.map((component, index) => (

                <ScrollReveal
                  key={component.number}
                  delay={index * 80}
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

                    <h3>{project.title}</h3>

                    <p>{project.text}</p>

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
                  INDUSTRIAL ENERGY MANAGEMENT
                </span>

                <h2>
                  Turn Your Facility's Roof Into a Productive Energy Asset
                </h2>

                <p>
                  Industrial solar can help facilities generate clean
                  electricity from available rooftop or project areas while
                  supporting better long-term energy management.
                </p>

                <p>
                  Our team can evaluate your facility's electricity
                  consumption, available installation area and technical
                  requirements to develop a solar solution suited to your
                  project.
                </p>

                <Link
                  to="/contact"
                  className="service-btn service-btn--primary"
                >
                  Plan Your Industrial Project
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
              eyebrow="WHY INDUSTRIAL SOLAR"
              title="Built Around Industrial Energy Needs"
              description="A properly planned industrial solar project considers electricity consumption, operating schedules, available space and electrical infrastructure."
            />

          </ScrollReveal>


          <div className="industrial-benefit-grid">

            <ScrollReveal>
              <div className="industrial-benefit-card">

                <span>01</span>

                <h3>Lower Grid Dependence</h3>

                <p>
                  Generate a portion of your facility's electricity through
                  on-site solar power.
                </p>

              </div>
            </ScrollReveal>


            <ScrollReveal>
              <div className="industrial-benefit-card">

                <span>02</span>

                <h3>Large-Scale Generation</h3>

                <p>
                  Solar plants can be designed for facilities with
                  substantial electricity requirements.
                </p>

              </div>
            </ScrollReveal>


            <ScrollReveal>
              <div className="industrial-benefit-card">

                <span>03</span>

                <h3>Better Roof Utilisation</h3>

                <p>
                  Make productive use of suitable factory and warehouse
                  rooftop areas for solar generation.
                </p>

              </div>
            </ScrollReveal>


            <ScrollReveal>
              <div className="industrial-benefit-card">

                <span>04</span>

                <h3>Energy Monitoring</h3>

                <p>
                  Monitor plant generation and system performance through
                  modern digital monitoring solutions.
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
                INDUSTRIAL SOLAR SOLUTIONS
              </span>

              <h2>
                Build a Smarter Energy Future for Your Industry
              </h2>

              <p>
                Talk to our team about your factory, manufacturing plant,
                warehouse or industrial solar project.
              </p>

            </div>


            <Link
              to="/contact"
              className="service-btn service-btn--light"
            >
              Request a Consultation
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
              eyebrow="FAQ"
              title="Industrial Solar FAQs"
              description="Quick answers to common questions about solar power for industrial facilities."
            />

          </ScrollReveal>


          <div className="industrial-faq-list">

            {faqs.map((faq, index) => (

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