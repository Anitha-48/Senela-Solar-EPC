import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollReveal from "../components/ScrollReveal";
import SectionTitle from "../components/SectionTitle";

import "../styles/serviceLanding.css";
import "../styles/utilityscale.css";

const projectImages = [
  {
    image:
      "https://www.sterlingandwilsonre.com/images/business-project/mobile/17-MWp-Solar-Power-Plant-Tamil-Nadu-India/17MWp_Solar_Power_Plant_Tamil_Nadu_India_slider3.jpg",
    title: "Utility-Scale Solar Plant",
    text: "Large-scale solar generation infrastructure engineered for efficient and reliable power production.",
  },
  {
    image:
      "https://www.sterlingandwilsonre.com/images/business-project/mobile/17-MWp-Solar-Power-Plant-Tamil-Nadu-India/17MWp_Solar_Power_Plant_Tamil_Nadu_India_slider2.jpg",
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
  const { t } = useTranslation();
  const page = t("solarServicePages.utilityScale", { returnObjects: true });

  return (
    <main className="service-landing-page utility-page">

      {/* ================= HERO ================= */}
      <section className="utility-hero">
        <div className="utility-hero__container">

          <div className="utility-hero__content">
            <span className="utility-hero__eyebrow">
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

            <div className="utility-hero__actions">
              <Link
                to="/contact"
                className="service-btn service-btn--primary"
              >
                {page.cta?.primary}
              </Link>

              <a
                href="#epc-scope"
                className="service-btn service-btn--secondary"
              >
                {page.sectionTitles?.scope}
              </a>
            </div>
          </div>

          <div className="utility-hero__image">
            <img
              src="https://d382rz2cea0pah.cloudfront.net/wp-content/uploads/2022/05/Statkraft-Commissions-55-MW-Open-Access-Solar-Project-in-Tamil-Nadu.png"
              alt={page.imageAlt}
            />

            <div className="utility-hero__badge">
              <strong>{page.badgeTitle}</strong>
              <span>{page.badgeText}</span>
            </div>
          </div>

        </div>
      </section>

      {/* ================= PROJECT SUITABILITY ================= */}
      <section className="service-section utility-intro">
        <div className="service-container">

          <ScrollReveal>
            <SectionTitle
              eyebrow={page.sectionTitles?.capabilities}
              title={page.sectionTitles?.capabilitiesTitle}
              description={page.sectionTitles?.capabilitiesDescription}
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
              eyebrow={page.sectionTitles?.benefits}
              title={page.sectionTitles?.benefitsTitle}
              description={page.sectionTitles?.benefitsDescription}
            />
          </ScrollReveal>

          <div className="utility-system-layout">

            <ScrollReveal>
              <div className="utility-system-image">
                <img
                  src="https://d382rz2cea0pah.cloudfront.net/wp-content/uploads/2021/09/TANGEDCO-to-Develop-a-4-GW-Solar-Park-With-Battery-Energy-Storage-in-Tamil-Nadu.jpg"
                  alt="Large scale solar power infrastructure"
                />
              </div>
            </ScrollReveal>

            <div className="utility-system-components">
              {(page.benefits || utilityComponents).map((component, index) => (
                <ScrollReveal
                  key={typeof component === "string" ? component : component.number}
                  delay={index * 80}
                >
                  <article className="utility-component-card">

                    <span className="utility-component-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      {typeof component === "string" ? (
                        <p>{component}</p>
                      ) : (
                        <>
                          <h3>{component.title}</h3>
                          <p>{component.text}</p>
                        </>
                      )}
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
              eyebrow={page.sectionTitles?.scope}
              title={page.sectionTitles?.scopeTitle}
              description={page.sectionTitles?.scopeDescription}
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
              eyebrow={page.sectionTitles?.scope}
              title={page.sectionTitles?.scopeTitle}
              description={page.sectionTitles?.scopeDescription}
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
              eyebrow={page.sectionTitles?.faq}
              title={page.sectionTitles?.faqTitle}
              description={page.sectionTitles?.faqDescription}
            />
          </ScrollReveal>

          <div className="utility-faq-list">

            {(page.faqs || faqs).map((faq, index) => (
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

export default UtilitySolarPage;