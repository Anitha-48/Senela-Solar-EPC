import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PageHero({ crumb, title, description }) {
  return (
    <section className="page-hero grid-bg">
      <div className="page-hero__inner">
        <div className="page-hero__crumb">
          <Link to="/" style={{ color: "var(--sky-blue)" }}>Home</Link>
          <ChevronRight size={14} />
          <span>{crumb}</span>
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
