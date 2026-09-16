import { MapPin, Gauge } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ProjectCard({ project, image, delay = 0 }) {
  return (
    <ScrollReveal delay={delay}>
      <article className="project-card">
        <div className="project-card__media">
          <img src={image} alt={project.title} loading="lazy" />
          <span className="project-card__tag">{project.category}</span>
        </div>
        <div className="project-card__body">
          <h3 style={{ fontSize: "1.05rem", marginBottom: 4 }}>{project.title}</h3>
          <div className="project-card__meta">
            <span><MapPin /> {project.location}</span>
            <span><Gauge /> {project.scope}</span>
          </div>
          <p style={{ fontSize: "0.9rem", margin: 0 }}>{project.description}</p>
        </div>
      </article>
    </ScrollReveal>
  );
}
