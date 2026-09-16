import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center", minHeight: "50vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div className="container">
        <div className="mono-label" style={{ justifyContent: "center", display: "flex", marginBottom: 12 }}>ERROR 404</div>
        <h1>Page Not Found</h1>
        <p style={{ margin: "0 auto 24px" }}>The page you're looking for doesn't exist or has been moved.</p>
        <NavLink to="/" className="btn btn--primary">Back to Home <ArrowRight /></NavLink>
      </div>
    </section>
  );
}
  /* Direct image placeholder */
  <section className="page-direct-image">
    <img src="/placeholder.jpg" alt="Placeholder illustration" style={{ width: "100%", height: "auto" }} />
  </section>
