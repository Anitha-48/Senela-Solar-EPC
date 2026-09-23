import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { navigation } from "../config/navigation";

export default function Footer() {
  const { t } = useTranslation();
  const solutions = navigation.find((n) => n.label === "Solar Solutions").children;
  const services = navigation.find((n) => n.label === "Services").children;
  const labelKeys = {
    "/about": "nav.about",
    "/about#vision-mission": "footer.visionMission",
    "/#projects": "footer.projects",
    "/contact": "footer.contact",
    "/solar-solutions/residential": "nav.residentialSolar",
    "/solar-solutions/commercial": "nav.commercialSolar",
    "/solar-solutions/utility-scale": "nav.utilityScaleSolar",
    "/solar-calculator": "footer.solarCalculator",
    "/services/power-distribution-transmission": "nav.powerDistributionTransmission",
    "/services/ehv-substation": "nav.ehvSubstation",
    "/services/htls-reconductoring": "nav.htlsReconductoring",
    "/services/railway-electrification": "nav.railwayElectrification",
    "/services/solar-power-projects": "nav.solarPowerProjects",
    "/services/water-management": "nav.waterManagement",
  };
  const label = (path, fallback) => t(labelKeys[path] || "", fallback);

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid"> 
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-mark"></span>
              <strong>{siteConfig.companyName}</strong>
            </div>
            <p>
              {t("footer.description", { tagline: siteConfig.tagline })}
            </p>
            <div className="footer__social">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label={t("accessibility.linkedin")}><Linkedin /></a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" aria-label={t("accessibility.facebook")}><Facebook /></a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" aria-label={t("accessibility.instagram")}><Instagram /></a>
                          </div>
          </div>

          <div className="footer__col">
            <h4>{t("footer.company")}</h4>
            <ul>
              <li><NavLink to="/about">{label("/about", "About")}</NavLink></li>
              <li><NavLink to="/about#vision-mission">{label("/about#vision-mission", "Vision & Mission")}</NavLink></li>
              <li><NavLink to="/#projects">{label("/#projects", "Projects")}</NavLink></li>
              <li><NavLink to="/contact">{label("/contact", "Contact")}</NavLink></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>{t("footer.solarSolutions")}</h4>
            <ul>
              {solutions.map((s) => <li key={s.path}><NavLink to={s.path}>{label(s.path, s.label)}</NavLink></li>)}
              <li><NavLink to="/#projects">{t("footer.solarPowerProjects")}</NavLink></li>
              <li><NavLink to="/solar-calculator">{t("footer.solarCalculator")}</NavLink></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>{t("footer.contact")}</h4>
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
             
              <span>{siteConfig.workingHours}</span>
            </div>
          </div>

          <div className="footer__col footer__services-col">
            <h4>{t("footer.services")}</h4>
            <ul>
              {services.map((s) => (
                <li key={s.path}>
                  <NavLink to={s.path}>{label(s.path, s.label)}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} {siteConfig.companyName}. {t("footer.allRightsReserved")}</span>
        <div className="footer__bottom-links">
          
        </div>
      </div>
    </footer>
  );
}
