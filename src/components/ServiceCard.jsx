import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

export default function ServiceCard({ icon: Icon, title, description, path, delay = 0 }) {
  return (
    <ScrollReveal delay={delay}>
      <NavLink to={path} className="service-card">
        <span className="service-card__icon"><Icon size={22} /></span>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="service-card__link">Learn more <ArrowRight /></span>
      </NavLink>
    </ScrollReveal>
  );
}
