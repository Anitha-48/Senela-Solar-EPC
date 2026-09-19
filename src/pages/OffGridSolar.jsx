import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Home, Wifi, Factory, Hospital, Lightbulb, Tractor, MapPinOff } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import "../styles/offgrid.css";

const icons = [Home, Tractor, Wifi, Factory, Hospital, Lightbulb];
const applicationImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YUFGmOHQKZ6XJa4FyStGyDK7B5-NlzrEkuA9m7sqi6JhM1xKAumiy35z&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8XN0gQjFrsjeyQ6OnJ2UVbVGkYSeXnmEN2UzOKNnM6A&s=10",
  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=900&auto=format&fit=crop",
];

export default function OffGridSolar() {
  const { t } = useTranslation();
  const overview = t("offGrid.overviewParagraphs", { returnObjects: true });
  const howItWorks = t("offGrid.howItWorksItems", { returnObjects: true });
  const applications = t("offGrid.applicationItems", { returnObjects: true });
  const whereFits = t("offGrid.whereFitsItems", { returnObjects: true });
  const benefits = t("offGrid.benefitItems", { returnObjects: true });

  return (
    <div className="off-grid-page">
      <motion.section className="section" initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }}>
        <div className="container split-section">
          <motion.div className="split-section__media" initial={{ opacity: 0, scale: 0.85, rotate: -3 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: false, amount: 0.3 }}>
            <motion.img src="https://dexterenergy.in/wp-content/uploads/2026/01/online-off-grid-solar-system-price.jpg" alt="Off-grid solar system with battery storage in a remote location" animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }}>
            <div className="eyebrow-line">{t("offGrid.overview")}</div>
            <h2>{t("offGrid.overviewTitle")}</h2>
            {overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </motion.div>
        </div>
      </motion.section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow={t("offGrid.howItWorks")} title={t("offGrid.howItWorksTitle")} />
          <div className="card-grid card-grid--3">
            {howItWorks.map((item) => (
              <ScrollReveal key={item.title}>
                <motion.div className="bracket-frame" whileHover={{ y: -10, scale: 1.02 }}>
                  <div className="how-it-works-card__media"><img src={["https://canalsolar.com.br/wp-content/uploads/2022/07/sistema-off-grid-1200x675.webp", "https://eu.oukitel.com/cdn/shop/articles/7c42a71a568bb3eaff73fc009d5beee7.jpg?v=1784604428", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIYPn_1YYlFFKNArqWhUYf3TcnSpB6Y83cWCXrfGt-phN2v1BIqBNibVg&s=10"][howItWorks.indexOf(item)]} alt={item.title} /></div>
                  <h3>{item.title}</h3><p>{item.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow={t("offGrid.applications")} title={t("offGrid.applicationsTitle")} />
          <div className="card-grid card-grid--3">
            {applications.map((item, index) => { const Icon = icons[index]; return <ScrollReveal key={item.title}><motion.div className="bracket-frame" whileHover={{ y: -12, scale: 1.03 }}><Icon className="solution-card__icon" size={22} /><h3>{item.title}</h3><p>{item.description}</p></motion.div></ScrollReveal>; })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow={t("offGrid.benefits")} title={t("offGrid.benefitsTitle")} description={t("offGrid.benefitsDescription")} />
          <ul className="two-col-list">{benefits.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow={t("offGrid.whereFits")} title={t("offGrid.whereFitsTitle")} />
          <div className="card-grid card-grid--3">
            {whereFits.map((item, index) => <ScrollReveal key={item.title}><motion.div className="bracket-frame" whileHover={{ y: -12, scale: 1.03 }}><div className="application-card__media"><img src={applicationImages[index]} alt={item.title} /></div><MapPinOff className="solution-card__icon" size={22} /><h3>{item.title}</h3><p>{item.description}</p></motion.div></ScrollReveal>)}
          </div>
        </div>
      </section>
    </div>
  );
}
