import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import SectionTitle from "../components/SectionTitle";

import "../styles/serviceLanding.css";
import "../styles/utilityscale.css";

const projectImages = [
  {
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85",
    title: "Utility-Scale Solar Plant",
    text: "Large-scale solar generation infrastructure engineered for efficient and reliable power production.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85",
    title: "Ground-Mounted Solar Project",
    text: "Ground-mounted photovoltaic systems planned around land conditions, generation targets and grid requirements.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85",
    title: "Solar Power Infrastructure",
    text: "Integrated solar infrastructure connecting generation assets with electrical distribution and transmission systems.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=85",
    title: "Large Solar EPC Project",
    text: "End-to-end EPC execution covering engineering, procurement, construction, testing and commissioning.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=85",
    title: "Grid-Connected Solar Plant",
    text: "Solar generation projects designed with the electrical infrastructure required for grid connectivity.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509390874180-6e7f2f9a0c2b?auto=format&fit=crop&w=1200&q=85",
    title: "Integrated Renewable Energy Project",
    text: "Coordinated renewable energy infrastructure developed for long-term generation and operational performance.",
  },
];

const utilityComponents = [
  {
    number: "01",
    title: "Solar PV Generation",
    text: "High-capacity photovoltaic arrays convert available solar radiation into electrical energy across the project site.",
  },
  {
    number: "02",
    title: "Power Evacuation",
    text: "Electrical evacuation infrastructure transfers generated power from the solar plant toward the designated grid connection point.",
  },
  {
    number: "03",
    title: "Substation Infrastructure",
    text: "Transformers, switchgear and substation systems support voltage transformation, protection and controlled power flow.",
  },
  {
    number: "04",
    title: "Transmission Systems",
    text: "Transmission and interconnection infrastructure is integrated according to the project's grid requirements.",
  },
  {
    number: "05",
    title: "SCADA & Monitoring",
    text: "Centralized monitoring and control systems provide visibility into generation, equipment status and plant performance.",
  },
  {
    number: "06",
    title: "Testing & Commissioning",
    text: "Electrical and functional testing is carried out before commissioning and handing over the completed project.",
  },
];

const projectStages = [
  {
    number: "01",
    title: "Project Engineering",
    text: "Site assessment, feasibility studies, electrical design, layout planning and detailed engineering establish the project foundation.",
  },
  {
    number: "02",
    title: "Procurement",
    text: "Major project equipment and materials are coordinated according to technical specifications, project schedules and quality requirements.",
  },
  {
    number: "03",
    title: "Construction",
    text: "Civil, structural and electrical installation activities are coordinated across the solar generation and power evacuation infrastructure.",
  },
  {
    number: "04",
    title: "Grid Integration",
    text: "Substation, protection, transmission and interconnection systems are integrated to support the required power evacuation arrangement.",
  },
  {
    number: "05",
    title: "Commissioning",
    text: "Testing, synchronization, performance checks and commissioning activities prepare the plant for operational use.",
  },
  {
    number: "06",
    title: "O&M Support",
    text: "Operational support, preventive maintenance and performance monitoring help maintain reliable long-term plant operation.",
  },
];

const faqs = [
  {
    question: "What is a utility-scale solar project?",
    answer:
      "A utility-scale solar project is a large photovoltaic power generation facility designed to generate electricity at a scale suitable for supplying power to the electrical grid or large power consumers.",
  },
  {
    question: "What does an integrated solar EPC project include?",
    answer:
      "An integrated solar EPC project can include engineering, procurement, civil and structural works, solar PV installation, electrical systems, power evacuation, substations, grid interconnection, testing and commissioning.",
  },
  {
    question: "How is a utility solar project connected to the grid?",
    answer:
      "Generated electricity is collected through the plant electrical system and transferred through transformers, switchgear, substations and the required transmission or interconnection infrastructure to the designated grid connection point.",
  },
  {
    question: "What factors are considered when planning a utility solar plant?",
    answer:
      "Planning can consider solar resource, land characteristics, plant capacity, module layout, electrical design, evacuation requirements, grid connectivity, access infrastructure, environmental considerations and project timelines.",
  },
  {
    question: "Does utility solar EPC include substation and transmission work?",
    answer:
      "Depending on the project scope, integrated EPC execution can include substations, power evacuation systems, transmission infrastructure, protection systems and associated electrical works.",
  },
  {
    question: "Can utility solar projects include operation and maintenance?",
    answer:
      "Yes. Operation and maintenance services can include plant monitoring, preventive maintenance, inspections, troubleshooting and performance-related support.",
  },
];

function UtilitySolarPage() {
  return (
    <main className="service-landing-page utility-page">

      {/* ================= HERO ================= */}
      <section className="utility-hero">
        <div className="utility-hero__container">

          <div className="utility-hero__content">
            <span className="utility-hero__eyebrow">
              UTILITY SOLAR EPC
            </span>

            <h1>
              Large-Scale Solar
              <span> Built for Grid-Connected Power</span>
            </h1>

            <p>
              Delivering integrated utility-scale solar EPC solutions that
              bring together renewable power generation, electrical
              infrastructure and grid connectivity.
            </p>

            <p>
              From project engineering and procurement to construction,
              substations, power evacuation, commissioning and operational
              support, our approach is built around coordinated execution
              across the complete solar power project.
            </p>

            <div className="utility-hero__actions">
              <Link
                to="/contact"
                className="service-btn service-btn--primary"
              >
                Discuss Your Project
              </Link>

              <a
                href="#epc-scope"
                className="service-btn service-btn--secondary"
              >
                Explore EPC Scope
              </a>
            </div>
          </div>

          <div className="utility-hero__image">
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85"
              alt="Utility scale solar power plant"
            />

            <div className="utility-hero__badge">
              <strong>Integrated EPC</strong>
              <span>
                Solar generation + electrical infrastructure
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ================= PROJECT SUITABILITY ================= */}
      <section className="service-section utility-intro">
        <div className="service-container">

          <ScrollReveal>
            <SectionTitle
              eyebrow="UTILITY SOLAR PROJECTS"
              title="Integrated Solar Infrastructure for Large-Scale Power Generation"
              description="Utility-scale solar projects require coordinated engineering across generation, electrical infrastructure and grid connectivity. Our EPC approach brings these project elements together within a structured execution framework."
            />
          </ScrollReveal>

          <div className="utility-highlight-grid">

            <ScrollReveal>
              <div className="utility-highlight-card">
                <span>01</span>
                <h3>Large-Scale Solar Plants</h3>
                <p>
                  Ground-mounted photovoltaic projects designed for
                  large-scale renewable electricity generation and grid
                  connectivity.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="utility-highlight-card">
                <span>02</span>
                <h3>Integrated EPC Execution</h3>
                <p>
                  Engineering, procurement, construction, testing and
                  commissioning coordinated across the complete project
                  lifecycle.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="utility-highlight-card">
                <span>03</span>
                <h3>Power Evacuation Infrastructure</h3>
                <p>
                  Solar generation integrated with substations, transmission,
                  protection and grid interconnection systems.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ================= INSIDE UTILITY SOLAR PROJECT ================= */}
      <section
        className="service-section utility-system-section"
        id="epc-scope"
      >
        <div className="service-container">

          <ScrollReveal>
            <SectionTitle
              eyebrow="PROJECT INFRASTRUCTURE"
              title="Inside an Integrated Utility Solar Project"
              description="A utility-scale solar plant combines multiple engineering and electrical systems. Each component has a defined role in generating, controlling, evacuating and monitoring renewable power."
            />
          </ScrollReveal>

          <div className="utility-system-layout">

            <ScrollReveal>
              <div className="utility-system-image">
                <img
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1400&q=85"
                  alt="Large scale solar power infrastructure"
                />
              </div>
            </ScrollReveal>

            <div className="utility-system-components">
              {utilityComponents.map((component, index) => (
                <ScrollReveal
                  key={component.number}
                  delay={index * 80}
                >
                  <article className="utility-component-card">

                    <span className="utility-component-number">
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

      {/* ================= EPC PROCESS ================= */}
      <section className="service-section utility-process-section">
        <div className="service-container">

          <ScrollReveal>
            <SectionTitle
              eyebrow="OUR EPC APPROACH"
              title="From Engineering to Energization"
              description="Integrated project execution requires coordination between engineering, procurement, construction and electrical infrastructure. Our EPC workflow is structured around each stage of the project."
            />
          </ScrollReveal>

          <div className="utility-process-grid">

            {projectStages.map((stage, index) => (
              <ScrollReveal
                key={stage.number}
                delay={index * 70}
              >
                <article className="utility-process-card">

                  <span className="utility-process-number">
                    {stage.number}
                  </span>

                  <h3>{stage.title}</h3>

                  <p>{stage.text}</p>

                </article>
              </ScrollReveal>
            ))}

          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        className="service-section utility-projects"
        id="projects"
      >
        <div className="service-container">

          <ScrollReveal>
            <SectionTitle
              eyebrow="UTILITY SOLAR PROJECTS"
              title="Solar Infrastructure Designed for Scale"
              description="Utility solar projects require carefully coordinated generation, electrical and grid infrastructure. Explore the types of large-scale solar environments our EPC approach is designed to support."
            />
          </ScrollReveal>

          <div className="utility-project-grid">

            {projectImages.map((project, index) => (
              <ScrollReveal
                key={project.title}
                delay={index * 70}
              >
                <article className="utility-project-card">

                  <div className="utility-project-image">
                    <img
                      src={project.image}
                      alt={project.title}
                    />

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="utility-project-content">
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                  </div>

                </article>
              </ScrollReveal>
            ))}

          </div>
        </div>
      </section>

      {/* ================= INTEGRATED EPC ================= */}
      <section className="service-section utility-integration">
        <div className="service-container">

          <div className="utility-integration-box">

            <ScrollReveal>
              <div className="utility-integration-content">

                <span className="utility-hero__eyebrow">
                  INTEGRATED EPC
                </span>

                <h2>
                  One Coordinated Approach for the Complete Solar Project
                </h2>

                <p>
                  Utility-scale solar projects involve multiple engineering
                  disciplines and interconnected infrastructure. Coordinating
                  these elements through an integrated EPC approach helps
                  maintain project continuity from design through
                  commissioning.
                </p>

                <p>
                  Our project scope can bring together solar generation,
                  electrical systems, substations, transmission, protection,
                  monitoring and commissioning requirements.
                </p>

                <Link
                  to="/contact"
                  className="service-btn service-btn--primary"
                >
                  Discuss Your EPC Requirement
                </Link>

              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="utility-integration-image">
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85"
                  alt="Solar electrical infrastructure"
                />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="service-section utility-faq">
        <div className="service-container">

          <ScrollReveal>
            <SectionTitle
              eyebrow="FAQ"
              title="Utility Solar EPC FAQs"
              description="Answers to common questions about large-scale solar power projects and integrated EPC execution."
            />
          </ScrollReveal>

          <div className="utility-faq-list">

            {faqs.map((faq, index) => (
              <ScrollReveal
                key={faq.question}
                delay={index * 60}
              >
                <details className="utility-faq-item">

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
      <section className="utility-cta">
        <div className="service-container">

          <div className="utility-cta__inner">

            <div>
              <span className="utility-hero__eyebrow">
                START YOUR PROJECT
              </span>

              <h2>
                Planning a Utility-Scale Solar Project?
              </h2>

              <p>
                Discuss your solar generation capacity, EPC scope, power
                evacuation and grid infrastructure requirements with our
                project team.
              </p>
            </div>

            <Link
              to="/contact"
              className="service-btn service-btn--light"
            >
              Contact Our Team
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default UtilitySolarPage;