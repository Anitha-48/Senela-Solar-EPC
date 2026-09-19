import { ArrowRight, Sun, Factory, Wrench, Building2, Wallet, Home } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import "../styles/servicemain.css";

const services = [
  {
    id: 1,
    title: "Solar Inverter Solutions",
    shortTitle: "Solar Inverter",
    description:
      "Reliable and efficient solar inverter solutions designed to convert solar energy into usable electricity with stable and optimized performance.",
    icon: Sun,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GD-2NBTpszopMhrOWZgNP4BsolnH_6u-QCwzB8S83HqycHSL10_BWJI&s=10",
    points: [
      "High-efficiency inverter systems",
      "Grid-connected and hybrid solutions",
      "Monitoring and performance optimization",
    ],
  },
  {
    id: 2,
    title: "Solar Manufacturing",
    shortTitle: "Manufacturing",
    description:
      "Quality-focused solar manufacturing solutions supported by modern technology, engineering expertise, and strict quality control.",
    icon: Factory,
    image: "https://www.arraycom.co.in/wp-content/uploads/2016/04/solar-panel-installation.jpg",
    points: [
      "Advanced manufacturing processes",
      "Quality-controlled production",
      "Reliable solar components",
    ],
  },
  {
    id: 3,
    title: "Operation & Maintenance",
    shortTitle: "O&M",
    description:
      "Comprehensive operation and maintenance services that help solar plants maintain reliable performance, efficiency, and long-term productivity.",
    icon: Wrench,
    image: "https://tiimg.tistatic.com/fp/1/005/417/solar-panel-installation-service-052.jpg",
    points: [
      "Preventive maintenance",
      "Plant monitoring and inspection",
      "Performance and fault analysis",
    ],
  },
  {
    id: 4,
    title: "Solar Parks",
    shortTitle: "Solar Parks",
    description:
      "End-to-end solar park development solutions covering planning, engineering, installation, commissioning, and infrastructure coordination.",
    icon: Building2,
    image: "https://synergysolar.in/wp-content/uploads/2025/09/Case-Studies-Successful-Solar-Parks-Built-Through-Land-Aggregation.webp",
    points: [
      "Large-scale solar development",
      "Engineering and project coordination",
      "Installation and commissioning",
    ],
  },
  {
    id: 5,
    title: "OPEX & CAPEX Solutions",
    shortTitle: "OPEX & CAPEX",
    description:
      "Flexible solar investment models designed to support businesses with different financial and operational requirements.",
    icon: Wallet,
    image: "https://backgroundimages.withfloats.com/actual/6a421c7bf54b7d9005fd4cf7.png",
    points: [
      "CAPEX project models",
      "OPEX-based solar solutions",
      "Flexible commercial structures",
    ],
  },
  {
    id: 6,
    title: "Residential Solar",
    shortTitle: "Residential Solar",
    description:
      "Smart rooftop solar solutions for homes designed to reduce electricity costs and provide dependable clean energy for everyday needs.",
    icon: Home,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/7/321790664/VW/XO/GG/112913145/residential-solar-panel-installation-service-500x500.jpg",
    points: [
      "Rooftop solar systems",
      "Customized residential design",
      "Energy cost reduction",
    ],
  },
];

export default function ServicePage() {
  const { t } = useTranslation();
  const translatedServices = t("services.items", { returnObjects: true });

  return (
    <div className="services-page">

      
      {/* INTRODUCTION */}
      <section className="services-intro section">
        <div className="container services-intro__grid">

          <ScrollReveal>
            <div className="services-intro__content">
              <span className="services-label">{t("services.whatWeDo")}</span>

              <h2>
                {t("services.introTitle").split(" From Concept to Energy")[0]}
                <span> From Concept to Energy</span>
              </h2>

              <p>
                {t("services.introDescriptionOne")}
              </p>

              <p>
                {t("services.introDescriptionTwo")}
              </p>

              <NavLink to="/contact" className="services-btn">
                {t("epc.discussProject")}
                <ArrowRight size={18} />
              </NavLink>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="services-intro__visual">
              <div className="services-intro__image-wrapper">
                <img
                  src="https://bharataawaz.com/wp-content/uploads/2026/06/ba_8c28b0541d432e79cbeca32301518b39.webp"
                        alt={t("accessibility.solarInstallation")}
                />

                <div className="services-intro__badge">
                  <strong>6+</strong>
                  <span>{t("services.serviceCount")}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* SERVICES */}
      <section className="services-list section">
        <div className="container">

          <ScrollReveal>
            <SectionTitle
              eyebrow={t("services.ourServices")}
              title={t("services.servicesTitle")}
              description={t("services.servicesDescription")}
            />
          </ScrollReveal>

          <div className="services-grid">

            {services.map((service, index) => {
              const translated = translatedServices[index];
              const Icon = service.icon;

              return (
                <ScrollReveal key={service.id} delay={index * 100}>

                  <article className="service-card">

                    {/* IMAGE */}
                    <div className="service-card__image">
                      <img
                        src={service.image}
                        alt={translated.title}
                      />

                      <div className="service-card__overlay" />

                      <div className="service-card__number">
                        0{service.id}
                      </div>

                      <div className="service-card__icon">
                        <Icon size={23} strokeWidth={1.8} />
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="service-card__content">

                      <span className="service-card__category">
                        {translated.shortTitle}
                      </span>

                      <h3>{translated.title}</h3>

                      <p>{translated.description}</p>

                      <ul>
                        {translated.points.map((point) => (
                          <li key={point}>
                            <span className="service-check">✓</span>
                            {point}
                          </li>
                        ))}
                      </ul>

                      <NavLink
                        to="/contact"
                        className="service-card__link"
                      >
                        {t("services.enquireNow")}
                        <ArrowRight size={17} />
                      </NavLink>

                    </div>

                  </article>

                </ScrollReveal>
              );
            })}

          </div>
        </div>
      </section>

      {/* PROCESS CTA */}
      <section className="services-cta section">
        <div className="container">

          <ScrollReveal>
            <div className="services-cta__box">

              <div>
                  <span className="services-label">
                  {t("services.readyToGoSolar")}
                </span>

                <h2>
                  {t("services.ctaTitle")}
                </h2>

                <p>
                  {t("services.ctaDescription")}
                </p>
              </div>

              <NavLink to="/contact" className="services-cta__button">
                {t("epc.startProject")}
                <ArrowRight size={18} />
              </NavLink>

            </div>
          </ScrollReveal>

        </div>
      </section>

    </div>
  );
}
