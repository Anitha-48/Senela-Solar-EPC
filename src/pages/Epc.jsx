import {
  Activity,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Car,
  CheckCircle2,
  Factory,
  FileText,
  Gauge,
  HardHat,
  LandPlot,
  Ruler,
  Settings2,
  ShieldCheck,
  Sun,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import ScrollReveal from "../components/ScrollReveal";
import "../styles/epc.css";

const offerings = [
  {
    number: "01",
    title: "Project Development",
    shortTitle: "Development",
    description: "From project conceptualization and site evaluation to planning and financial assessment, we create a strong foundation for every solar project.",
    features: ["Project Conceptualization", "Land & Site Evaluation", "Project Planning"],
    icon: LandPlot,
    image: "https://maxofix.in/assets/solar-ground-BCytnT7s.jpg",
  },
  {
    number: "02",
    title: "Solar EPC",
    shortTitle: "Engineering • Procurement • Construction",
    description: "Complete engineering, procurement and construction solutions designed for reliable performance, efficient execution and long-term value.",
    features: ["Solar System Design", "Engineering & Procurement", "Construction & Execution"],
    icon: Sun,
    image: "https://suntap.in/wp-content/uploads/2022/11/Untitled-design-2025-03-16T151819.337-1019x1024.png.webp",
    featured: true,
  },
  {
    number: "03",
    title: "Asset Management",
    shortTitle: "Operations & Maintenance",
    description: "Professional monitoring and O&M support to maintain system performance, reliability and efficiency throughout the project lifecycle.",
    features: ["Operations & Maintenance", "Performance Monitoring", "Technical Support"],
    icon: Activity,
    image: "https://intello.co.in/wp-content/uploads/2024/07/Mask-group-98-1.webp",
  },
];

const processSteps = [
  ["01", "Site Assessment", "Evaluate site conditions, energy requirements and project feasibility.", LandPlot],
  ["02", "System Design", "Develop optimized solar layouts and detailed engineering specifications.", Ruler],
  ["03", "Procurement", "Source reliable equipment and components meeting project requirements.", Settings2],
  ["04", "Construction", "Execute installation with coordinated engineering and site teams.", HardHat],
  ["05", "Commissioning", "Test, validate and commission the completed solar system.", Zap],
  ["06", "O&M Support", "Monitor performance and provide ongoing technical assistance.", ShieldCheck],
];

const benefits = [
  ["End-to-End Execution", "One integrated approach from project planning through commissioning.", CheckCircle2],
  ["Engineering Precision", "Project-specific designs focused on efficiency and reliability.", Ruler],
  ["Performance Focus", "Continuous monitoring and technical support for dependable output.", Gauge],
  ["Long-Term Support", "Professional maintenance and technical assistance after installation.", Users],
];

const projectTypes = [
  ["Ground Solar Power Plant", "Large-scale solar solutions designed for suitable land areas and utility applications.", "https://navienergy.in/wp-content/uploads/2025/12/Ground-Mounted-Solar-Plant.webp", Sun],
  ["Commercial Rooftop Solar", "Efficient rooftop systems designed for offices, commercial buildings and institutions.", "https://www.solarsysgreentech.in/images/industrial-solar-img.webp", Building2],
  ["Industrial Solar", "High-performance solar installations for factories and industrial facilities.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5gHZbRy05mRd076d8-huR4DZVE3pAAsygmebBpybf9Q&s=10", Factory],
  ["Solar Carports", "Solar structures that combine vehicle parking with renewable energy generation.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST4BPoR78BzRB94l1BZ5ZD2xHiYm5JYVZ6jA1sthYJC5s9_dtjexwfYC8n&s=10", Car],
];

export default function Epc() {
  const { t } = useTranslation();
  const translatedOfferings = t("epc.offerings", { returnObjects: true });
  const translatedProcessSteps = t("epc.processSteps", { returnObjects: true });
  const translatedBenefits = t("epc.benefits", { returnObjects: true });
  const translatedProjectTypes = t("epc.projectTypes", { returnObjects: true });

  return (
    <main className="epc-page">
      <section className="epc-hero">
        <div className="epc-hero__overlay" />
        <div className="container epc-hero__content">
          <ScrollReveal>
            <div className="epc-hero__eyebrow"><span />{t("epc.eyebrow")}</div>
            <h1><span className="epc-hero__title-word">{t("epc.titleFirst")}</span> <span className="epc-hero__title-word">{t("epc.titleMiddle")}</span> <span className="epc-hero__title-accent">{t("epc.titleAccent")}</span></h1>
            <p>{t("epc.description")}</p>
            <div className="epc-hero__buttons">
              <a href="/contact" className="epc-btn epc-btn--primary">{t("epc.startProject")} <ArrowUpRight size={19} /></a>
              <a href="#epc-services" className="epc-btn epc-btn--outline">{t("epc.exploreSolutions")}</a>
            </div>
          </ScrollReveal>
        </div>
        <div className="epc-hero__bottom">
          <div><strong>30+</strong><span>{t("epc.yearsExperience")}</span></div>
          <div><strong>100+</strong><span>{t("epc.projects")}</span></div>
          <div><strong>360°</strong><span>{t("epc.epcSolutions")}</span></div>
        </div>
      </section>

      <section className="section epc-intro">
        <div className="container epc-intro__grid">
          <ScrollReveal>
            <div className="epc-intro__content">
              <p className="eyebrow">{t("epc.introEyebrow")}</p>
              <h2>{t("epc.introTitle").split(". ")[0]}. <span>{t("epc.introTitle").split(". ").slice(1).join(". ")}</span></h2>
              <p className="epc-intro__description">{t("epc.introDescriptionOne")}</p>
              <p>{t("epc.introDescriptionTwo")}</p>
              <div className="epc-mini-points">
                {t("epc.introPoints", { returnObjects: true }).map((point) => <div key={point}><BadgeCheck size={20} /><span>{point}</span></div>)}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="epc-intro__image">
              <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1400&q=85" alt={t("accessibility.solarInstallation")} />
              <div className="epc-image-badge"><Sun size={21} /><div><strong>{t("epc.cleanEnergy")}</strong><span>{t("epc.builtForTomorrow")}</span></div></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section epc-services" id="epc-services">
        <div className="container">
          <SectionHeading eyebrow={t("epc.whatWeDeliver")} title={t("epc.servicesTitle")} description={t("epc.servicesDescription")} />
          <div className="epc-services__grid">
            {offerings.map((item, index) => {
              const translated = translatedOfferings[index];
              const Icon = item.icon;
              return <ScrollReveal key={item.number}><article className={`epc-service-card ${item.featured ? "epc-service-card--featured" : ""}`}>
                <div className="epc-service-card__image"><img src={item.image} alt={item.title} /><div className="epc-service-card__number">{item.number}</div></div>
                <div className="epc-service-card__body"><div className="epc-service-card__icon"><Icon size={28} /></div><p className="epc-service-card__label">{translated.shortTitle}</p><h3>{translated.title}</h3><p className="epc-service-card__description">{translated.description}</p><div className="epc-card-features">{translated.features.map((feature) => <div key={feature}><CheckCircle2 size={16} /><span>{feature}</span></div>)}</div></div>
              </article></ScrollReveal>;
            })}
          </div>
        </div>
      </section>

      <section className="section epc-process"><div className="epc-process__overlay" /><div className="container epc-process__container"><SectionHeading eyebrow={t("epc.ourProcess")} title={t("epc.processTitle")} description={t("epc.processDescription")} /><div className="epc-process__grid">{processSteps.map(([number, title, description, Icon], index) => <ScrollReveal key={number}><div className="epc-process-card"><div className="epc-process-card__top"><span>{number}</span><div className="epc-process-card__icon"><Icon size={24} /></div></div><h3>{translatedProcessSteps[index].title}</h3><p>{translatedProcessSteps[index].description}</p></div></ScrollReveal>)}</div></div></section>

      <section className="section epc-benefits"><div className="container"><SectionHeading eyebrow={t("epc.whyOurApproach")} title={t("epc.performanceTitle")} description={t("epc.performanceDescription")} /><div className="epc-benefits__grid">{benefits.map(([title, description, Icon], index) => <ScrollReveal key={title}><div className="epc-benefit-card"><span className="epc-benefit-card__number">0{index + 1}</span><div className="epc-benefit-card__icon"><Icon size={26} /></div><h3>{translatedBenefits[index].title}</h3><p>{translatedBenefits[index].description}</p></div></ScrollReveal>)}</div></div></section>

      <section className="section epc-projects"><div className="container"><SectionHeading eyebrow={t("epc.projectApplications")} title={t("epc.solutionsTitle")} description={t("epc.solutionsDescription")} /><div className="epc-projects__grid">{projectTypes.map(([title, description, image, Icon], index) => <ScrollReveal key={title}><article className="epc-project-card"><div className="epc-project-card__image"><img src={image} alt={translatedProjectTypes[index].title} /><div className="epc-project-card__icon"><Icon size={22} /></div></div><div className="epc-project-card__content"><h3>{translatedProjectTypes[index].title}</h3><p>{translatedProjectTypes[index].description}</p><a href="/contact">{t("epc.discussProject", "Discuss Your Project")} <ArrowUpRight size={17} /></a></div></article></ScrollReveal>)}</div></div></section>

      <section className="epc-capability"><div className="container epc-capability__grid"><ScrollReveal><div className="epc-capability__image"><img src="https://media.licdn.com/dms/image/v2/D5612AQFd0X4B-peq4A/article-cover_image-shrink_720_1280/B56ZTl59uMHEAI-/0/1739023967771?e=2147483647&v=beta&t=I7A97nAVhQeHO6zE7_5eNZyTyaEduQOUFW3hwvnnwrI" alt={t("accessibility.solarPanelsCleanEnergy")} /></div></ScrollReveal><ScrollReveal><div className="epc-capability__content"><p className="eyebrow">{t("epc.engineeredForPerformance")}</p><h2>{t("epc.capabilityTitle")}</h2><p>{t("epc.capabilityDescription")}</p><div className="epc-capability__list">{t("epc.capabilityPoints", { returnObjects: true }).map((point) => <div key={point}><Zap size={20} /><span>{point}</span></div>)}</div></div></ScrollReveal></div></section>

         </main>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return <ScrollReveal><div className="section-heading epc-section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div><p>{description}</p></div></ScrollReveal>;
}
