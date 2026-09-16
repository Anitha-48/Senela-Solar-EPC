import { NavLink } from "react-router-dom";
import { Zap, MapPin, Phone, Mail, Clock, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { navigation } from "../config/navigation";

export default function Footer() {
  const solutions = navigation.find((n) => n.label === "Solar Solutions").children;
  const services = navigation.find((n) => n.label === "Services").children;

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid"> 
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-mark"><Zap size={18} /></span>
              <strong>{siteConfig.companyName}</strong>
            </div>
            <p>
              {siteConfig.tagline} We deliver solar EPC and electrical infrastructure
              projects engineered for long-term reliability across India.
            </p>
            <div className="footer__social">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook /></a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube /></a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/about#vision-mission">Vision &amp; Mission</NavLink></li>
              <li><NavLink to="/#projects">Projects</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Solar Solutions</h4>
            <ul>
              {solutions.map((s) => <li key={s.path}><NavLink to={s.path}>{s.label}</NavLink></li>)}
              <li><NavLink to="/#projects">Solar Power Projects</NavLink></li>
              <li><NavLink to="/solar-calculator">Solar Calculator</NavLink></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <div className="footer__contact-item">
              <MapPin />
              <span>{siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.country}</span>
            </div>
            <div className="footer__contact-item">
              <Phone />
              <span>{siteConfig.phone}</span>
            </div>
            <div className="footer__contact-item">
              <Mail />
              <span>{siteConfig.email}</span>
            </div>
            <div className="footer__contact-item">
              <Clock />
              <span>{siteConfig.workingHours}</span>
            </div>
          </div>
        </div>

        <div className="container" style={{ marginTop: 8 }}>
          <h4 style={{ color: "var(--site)", fontSize: "0.92rem", marginBottom: 18 }}>Services</h4>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexWrap: "wrap", gap: "12px 28px" }}>
            {services.map((s) => (
              <li key={s.path}>
                <NavLink to={s.path} style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.65)" }}>{s.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} {siteConfig.companyName}. All Rights Reserved.</span>
        <div className="footer__bottom-links">
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          <NavLink to="/terms-conditions">Terms &amp; Conditions</NavLink>
        </div>
      </div>
    </footer>
  );
}
