import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Sun,
  Home,
  Building2,
  Factory,
  PanelsTopLeft,
  Settings,
  CheckCircle2,
} from "lucide-react";

import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";

import "../styles/solarsolutions.css";

const solutionCards = [
  {
    id: "residential",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    path: "/solar-solutions/residential",
  },
  {
    id: "commercial",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200&auto=format&fit=crop",
    path: "/solar-solutions/commercial-industrial",
  },
  {
    id: "industrial",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop",
    path: "/solar-solutions/commercial-industrial",
  },
  {
    id: "utility",
    icon: PanelsTopLeft,
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop",
    path: "/solar-solutions/utility-scale",
  },
];

const integratedEpc = [
  {
    id: "engineering",
    number: "01",
    icon: Settings,
  },
  {
    id: "procurement",
    number: "02",
    icon: Building2,
  },
  {
    id: "installation",
    number: "03",
    icon: Factory,
  },
  {
    id: "commissioning",
    number: "04",
    icon: CheckCircle2,
  },
];

const projectHighlights = [
  {
    id: "utility",
    capacity: "91 MWp",
  },
  {
    id: "factory",
    capacity: "30 KWp",
  },
  {
    id: "openAccess",
    capacity: "12 MWp",
  },
  {
    id: "rooftop",
    capacity: "3 KWp",
  },
  {
    id: "financed",
    capacity: "12 KWp",
  },
  {
    id: "zeroUpfront",
    capacity: "100 KWp",
  },
];

export default function SolarSolutionsPage() {
  const { t } = useTranslation();

  const solutions = t("solarSolutionsPage.solutions", {
    returnObjects: true,
  });

  const epcProjects = t("solarSolutionsPage.integratedEpc.projects", {
    returnObjects: true,
  });

  const highlights = t("solarSolutionsPage.projectHighlights", {
    returnObjects: true,
  });

  const solutionItems = Array.isArray(solutions) ? solutions : [];
  const utilityPoints = t("solarSolutionsPage.utilitySection.points", {
    returnObjects: true,
  });
  const utilityItems = Array.isArray(utilityPoints) ? utilityPoints : [];

  return (
    <main className="solar-solutions-page">

      {/* =====================================================
          HERO / INTRODUCTION
      ===================================================== */}

      <section className="solar-solutions-hero">
        <div className="container">
          <div className="solar-solutions-hero__grid">

            <ScrollReveal className="solar-solutions-hero__content">
              <span className="solar-solutions-hero__eyebrow">
                {t("solarSolutionsPage.hero.eyebrow")}
              </span>

              <h1>
                {t("solarSolutionsPage.hero.title")}
                <span>
                  {t("solarSolutionsPage.hero.titleHighlight")}
                </span>
              </h1>

              <p>
                {t("solarSolutionsPage.hero.description")}
              </p>

              <div className="solar-solutions-hero__actions">
                <NavLink
                  to="/contact"
                  className="btn btn--primary"
                >
                  {t("solarSolutionsPage.hero.primaryButton")}
                  <ArrowRight size={17} />
                </NavLink>

                <NavLink
                  to="#solar-solutions"
                  className="btn btn--outline-blue"
                >
                  {t("solarSolutionsPage.hero.secondaryButton")}
                </NavLink>
              </div>
            </ScrollReveal>

            <ScrollReveal
              delay={1}
              className="solar-solutions-hero__media"
            >
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1400&auto=format&fit=crop"
                alt={t("solarSolutionsPage.hero.imageAlt")}
              />

              <div className="solar-solutions-hero__badge">
                <Sun size={24} />

                <div>
                  <strong>
                    {t("solarSolutionsPage.hero.badgeTitle")}
                  </strong>

                  <span>
                    {t("solarSolutionsPage.hero.badgeText")}
                  </span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>


      {/* =====================================================
          SOLAR SOLUTION TYPES
      ===================================================== */}

      <section
        id="solar-solutions"
        className="section section--light solar-solution-types"
      >
        <div className="container">

          <SectionTitle
            eyebrow={t("solarSolutionsPage.solutionsSection.eyebrow")}
            title={t("solarSolutionsPage.solutionsSection.title")}
            description={t(
              "solarSolutionsPage.solutionsSection.description"
            )}
          />

          <div className="solar-solution-grid">

            {solutionCards.map((card, index) => {
              const solution = solutions?.[card.id];

              if (!solution) return null;

              const Icon = card.icon;

              return (
                <ScrollReveal
                  key={card.id}
                  delay={index}
                >
                  <article className="solar-solution-card">

                    <div className="solar-solution-card__image">
                      <img
                        src={card.image}
                        alt={solution.imageAlt || solution.title}
                      />

                      <span className="solar-solution-card__number">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="solar-solution-card__body">

                      <div className="solar-solution-card__icon">
                        <Icon size={23} />
                      </div>

                      <h3>{solution.title}</h3>

                      <p>{solution.description}</p>

                      <div className="solar-solution-card__points">

                        {solution.points?.map((point, pointIndex) => (
                          <div
                            key={pointIndex}
                            className="solar-solution-card__point"
                          >
                            <CheckCircle2 size={16} />

                            <span>{point}</span>
                          </div>
                        ))}

                      </div>

                      <NavLink
                        to={card.path}
                        className="solar-solution-card__link"
                      >
                        {t("solarSolutionsPage.viewDetails")}

                        <ArrowRight size={16} />
                      </NavLink>

                    </div>
                  </article>
                </ScrollReveal>
              );
            })}

          </div>
        </div>
      </section>


      {/* =====================================================
          UTILITY SCALE SOLAR
      ===================================================== */}

      <section className="solar-utility-section">
        <div className="container">

          <div className="solar-utility-layout">

            <ScrollReveal className="solar-utility-image">
              <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1400&auto=format&fit=crop"
                alt={t(
                  "solarSolutionsPage.utilitySection.imageAlt"
                )}
              />
            </ScrollReveal>

            <ScrollReveal
              delay={1}
              className="solar-utility-content"
            >
              <span className="solar-section-eyebrow">
                {t("solarSolutionsPage.utilitySection.eyebrow")}
              </span>

              <h2>
                {t("solarSolutionsPage.utilitySection.title")}
              </h2>

              <p>
                {t("solarSolutionsPage.utilitySection.description")}
              </p>

              <div className="solar-utility-points">

                {utilityItems.map((point, index) => (
                  <div
                    key={index}
                    className="solar-utility-point"
                  >
                    <span>{point.number}</span>

                    <div>
                      <h3>{point.title}</h3>
                      <p>{point.text}</p>
                    </div>
                  </div>
                ))}

              </div>

              <NavLink
                to="/solar-solutions/utility-scale"
                className="btn btn--primary"
              >
                {t("solarSolutionsPage.utilitySection.button")}
                <ArrowRight size={17} />
              </NavLink>

            </ScrollReveal>

          </div>
        </div>
      </section>


      {/* =====================================================
          INTEGRATED EPC
      ===================================================== */}

      <section className="solar-integrated-epc">
        <div className="container">

          <SectionTitle
            eyebrow={t(
              "solarSolutionsPage.integratedEpc.eyebrow"
            )}
            title={t(
              "solarSolutionsPage.integratedEpc.title"
            )}
            description={t(
              "solarSolutionsPage.integratedEpc.description"
            )}
          />

          <div className="solar-epc-grid">

            {integratedEpc.map((item, index) => {
              const project = epcProjects?.[item.id];

              if (!project) return null;

              const Icon = item.icon;

              return (
                <ScrollReveal
                  key={item.id}
                  delay={index}
                >
                  <article className="solar-epc-card">

                    <div className="solar-epc-card__number">
                      {item.number}
                    </div>

                    <div className="solar-epc-card__icon">
                      <Icon size={22} />
                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.text}</p>

                    <div className="solar-epc-card__line" />

                  </article>
                </ScrollReveal>
              );
            })}

          </div>

          <div className="solar-integrated-epc__button">
            <NavLink
              to="/services/epc"
              className="btn btn--outline-blue"
            >
              {t("solarSolutionsPage.integratedEpc.button")}
              <ArrowRight size={17} />
            </NavLink>
          </div>

        </div>
      </section>


      {/* =====================================================
          PROJECT HIGHLIGHTS
      ===================================================== */}

      <section className="section solar-project-highlights">
        <div className="container">

          <SectionTitle
            eyebrow={t(
              "solarSolutionsPage.projectSection.eyebrow"
            )}
            title={t(
              "solarSolutionsPage.projectSection.title"
            )}
            description={t(
              "solarSolutionsPage.projectSection.description"
            )}
          />

          <div className="solar-project-grid">

            {projectHighlights.map((project, index) => {
              const highlight = highlights?.[project.id];

              if (!highlight) return null;

              return (
                <ScrollReveal
                  key={project.id}
                  delay={index % 3}
                >
                  <div className="solar-project-card">

                    <div className="solar-project-card__icon">
                      <Sun size={24} />
                    </div>

                    <div className="solar-project-card__content">

                      <span>
                        {project.capacity}
                      </span>

                      <h3>
                        {highlight.title}
                      </h3>

                      <p>
                        {highlight.description}
                      </p>

                    </div>

                  </div>
                </ScrollReveal>
              );
            })}

          </div>
        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="solar-solutions-cta">
        <div className="container">

          <ScrollReveal className="solar-solutions-cta__inner">

            <div>
              <span className="solar-section-eyebrow">
                {t("solarSolutionsPage.cta.eyebrow")}
              </span>

              <h2>
                {t("solarSolutionsPage.cta.title")}
              </h2>

              <p>
                {t("solarSolutionsPage.cta.description")}
              </p>
            </div>

            <NavLink
              to="/contact"
              className="btn btn--primary"
            >
              {t("solarSolutionsPage.cta.button")}
              <ArrowRight size={17} />
            </NavLink>

          </ScrollReveal>

        </div>
      </section>

    </main>
  );
}