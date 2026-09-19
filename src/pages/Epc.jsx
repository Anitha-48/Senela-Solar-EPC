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
  return (
    <main className="epc-page">
      <section className="epc-hero">
        <div className="epc-hero__overlay" />
        <div className="container epc-hero__content">
          <ScrollReveal>
            <div className="epc-hero__eyebrow"><span />SOLAR EPC</div>
            <h1>Solar EPC <span>Projects</span></h1>
            <p>Engineering reliable solar solutions from concept to commissioning and beyond.</p>
            <div className="epc-hero__buttons">
              <a href="/contact" className="epc-btn epc-btn--primary">Start Your Project <ArrowUpRight size={19} /></a>
              <a href="#epc-services" className="epc-btn epc-btn--outline">Explore Solutions</a>
            </div>
          </ScrollReveal>
        </div>
        <div className="epc-hero__bottom">
          <div><strong>30+</strong><span>Years Experience</span></div>
          <div><strong>100+</strong><span>Projects</span></div>
          <div><strong>360°</strong><span>EPC Solutions</span></div>
        </div>
      </section>

      <section className="section epc-intro">
        <div className="container epc-intro__grid">
          <ScrollReveal>
            <div className="epc-intro__content">
              <p className="eyebrow">SOLAR EPC EXPERTISE</p>
              <h2>Engineering Solar. <span>Delivering Power.</span></h2>
              <p className="epc-intro__description">We provide complete solar EPC solutions covering engineering, procurement, construction, commissioning and long-term technical support.</p>
              <p>Our integrated approach brings together engineering expertise, project management and field execution to deliver dependable renewable energy infrastructure.</p>
              <div className="epc-mini-points">
                <div><BadgeCheck size={20} /><span>Integrated EPC Execution</span></div>
                <div><BadgeCheck size={20} /><span>Quality-Focused Engineering</span></div>
                <div><BadgeCheck size={20} /><span>Long-Term Technical Support</span></div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="epc-intro__image">
              <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1400&q=85" alt="Solar power installation" />
              <div className="epc-image-badge"><Sun size={21} /><div><strong>Clean Energy</strong><span>Built for tomorrow</span></div></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section epc-services" id="epc-services">
        <div className="container">
          <SectionHeading eyebrow="WHAT WE DELIVER" title={<>Complete Solar <span>EPC Expertise</span></>} description="From early-stage development to construction and operations, our solutions cover the complete solar project lifecycle." />
          <div className="epc-services__grid">
            {offerings.map((item) => {
              const Icon = item.icon;
              return <ScrollReveal key={item.number}><article className={`epc-service-card ${item.featured ? "epc-service-card--featured" : ""}`}>
                <div className="epc-service-card__image"><img src={item.image} alt={item.title} /><div className="epc-service-card__number">{item.number}</div></div>
                <div className="epc-service-card__body"><div className="epc-service-card__icon"><Icon size={28} /></div><p className="epc-service-card__label">{item.shortTitle}</p><h3>{item.title}</h3><p className="epc-service-card__description">{item.description}</p><div className="epc-card-features">{item.features.map((feature) => <div key={feature}><CheckCircle2 size={16} /><span>{feature}</span></div>)}</div></div>
              </article></ScrollReveal>;
            })}
          </div>
        </div>
      </section>

      <section className="section epc-process"><div className="epc-process__overlay" /><div className="container epc-process__container"><SectionHeading eyebrow="OUR PROCESS" title={<>From Concept <span>To Commissioning</span></>} description="A structured EPC workflow designed to keep every stage of your solar project coordinated and efficient." /><div className="epc-process__grid">{processSteps.map(([number, title, description, Icon]) => <ScrollReveal key={number}><div className="epc-process-card"><div className="epc-process-card__top"><span>{number}</span><div className="epc-process-card__icon"><Icon size={24} /></div></div><h3>{title}</h3><p>{description}</p></div></ScrollReveal>)}</div></div></section>

      <section className="section epc-benefits"><div className="container"><SectionHeading eyebrow="WHY OUR APPROACH" title={<>Built Around <span>Performance</span></>} description="Every project is planned around quality, reliability, efficiency and long-term performance." /><div className="epc-benefits__grid">{benefits.map(([title, description, Icon], index) => <ScrollReveal key={title}><div className="epc-benefit-card"><span className="epc-benefit-card__number">0{index + 1}</span><div className="epc-benefit-card__icon"><Icon size={26} /></div><h3>{title}</h3><p>{description}</p></div></ScrollReveal>)}</div></div></section>

      <section className="section epc-projects"><div className="container"><SectionHeading eyebrow="PROJECT APPLICATIONS" title={<>Solar Solutions <span>For Every Space</span></>} description="Flexible solar EPC solutions for industrial, commercial and large-scale applications." /><div className="epc-projects__grid">{projectTypes.map(([title, description, image, Icon]) => <ScrollReveal key={title}><article className="epc-project-card"><div className="epc-project-card__image"><img src={image} alt={title} /><div className="epc-project-card__icon"><Icon size={22} /></div></div><div className="epc-project-card__content"><h3>{title}</h3><p>{description}</p><a href="/contact">Discuss Your Project <ArrowUpRight size={17} /></a></div></article></ScrollReveal>)}</div></div></section>

      <section className="epc-capability"><div className="container epc-capability__grid"><ScrollReveal><div className="epc-capability__image"><img src="https://media.licdn.com/dms/image/v2/D5612AQFd0X4B-peq4A/article-cover_image-shrink_720_1280/B56ZTl59uMHEAI-/0/1739023967771?e=2147483647&v=beta&t=I7A97nAVhQeHO6zE7_5eNZyTyaEduQOUFW3hwvnnwrI" alt="Solar panels and renewable energy" /></div></ScrollReveal><ScrollReveal><div className="epc-capability__content"><p className="eyebrow">ENGINEERED FOR PERFORMANCE</p><h2>Reliable Energy. <span>Responsible Future.</span></h2><p>We combine engineering knowledge, project execution and renewable energy technology to create dependable solar infrastructure for businesses and industries.</p><div className="epc-capability__list"><div><Zap size={20} /><span>Efficient Solar Systems</span></div><div><Wrench size={20} /><span>Professional Installation</span></div><div><ShieldCheck size={20} /><span>Quality & Safety Focus</span></div><div><Activity size={20} /><span>Long-Term Performance</span></div></div></div></ScrollReveal></div></section>

         </main>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return <ScrollReveal><div className="section-heading epc-section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div><p>{description}</p></div></ScrollReveal>;
}
