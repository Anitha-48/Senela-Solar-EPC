import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronDown, Menu, X, Zap, ArrowRight, Weight } from "lucide-react";
import { navigation } from "../config/navigation";
import { siteConfig } from "../config/siteConfig";

const navigationLabelKeys = {
  "/": "nav.home",
  "/about": "nav.about",
  "/epc": "nav.epc",
  "/solar-solutions": "nav.solarSolutions",
  "/solar-solutions/on-grid": "nav.onGridSolar",
  "/solar-solutions/off-grid": "nav.offGridSolar",
  "/services": "nav.services",
  "/services/power-distribution-transmission": "nav.powerDistributionTransmission",
  "/services/ehv-substation": "nav.ehvSubstation",
  "/services/htls-reconductoring": "nav.htlsReconductoring",
  "/services/railway-electrification": "nav.railwayElectrification",
  "/services/solar-power-projects": "nav.solarPowerProjects",
  "/services/water-management": "nav.waterManagement",
  "/solar-calculator": "nav.solarCalculator",
  "/contact": "nav.contactUs",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    void i18n.changeLanguage(language);
  };

  const getLabel = (path) => t(navigationLabelKeys[path]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenSub(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <header className={`navbar ${scrolled ? "is-scrolled" : ""} ${i18n.resolvedLanguage === "ta" ? "navbar--tamil" : ""}`}>
        <div className="navbar__inner">
          <NavLink to="/" className="navbar__logo">
            <img src="/src/assets/images/logo.jpeg" alt={t("accessibility.logo")} className="navbar__logo-img" />
          </NavLink>

          <nav className="navbar__links" aria-label={t("nav.primary")}>
            {navigation.map((item) => (
              <div className="navbar__item" key={item.label}>
                <NavLink to={item.path} className={({ isActive }) => `navbar__link ${isActive ? "is-active" : ""}`} end={item.path === "/"}>
                  {getLabel(item.path)} {item.children && <ChevronDown className="chev" size={15} />}
                </NavLink>
                {item.children && (
                  <div className="navbar__dropdown">
                    {item.children.map((child) => (
                      <NavLink key={child.path} to={child.path}>{getLabel(child.path)}</NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* <p style={{ fontFamily: "Inter", fontWeight: 700 }}>
            Call Us: 9585901999
          </p> */}

          <div className="navbar__language" role="group" aria-label={t("language.selector")}>
            <button type="button" className={i18n.resolvedLanguage === "en" ? "is-active" : ""} onClick={() => changeLanguage("en")} aria-pressed={i18n.resolvedLanguage === "en"}>
              {t("language.english")}
            </button>
            <button type="button" className={i18n.resolvedLanguage === "ta" ? "is-active" : ""} onClick={() => changeLanguage("ta")} aria-pressed={i18n.resolvedLanguage === "ta"}>
              {t("language.tamilNative")}
            </button>
          </div>

          <button className="navbar__hamburger menu-toggle" onClick={() => setMobileOpen(true)} aria-label={t("nav.openMenu")}>
            <Menu size={26} />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${mobileOpen ? "is-open" : ""}`} role="dialog" aria-modal="true">
        <div className="mobile-menu__header">
          <span className="navbar__logo">
            <img src="/src/assets/images/logo.jpeg" alt={t("accessibility.logo")} className="navbar__logo-img" />
          </span>
          <button onClick={() => setMobileOpen(false)} aria-label={t("nav.closeMenu")} style={{ background: "none", border: "none", color: "var(--deep-blue)" }}>
            <X size={26} />
          </button>
        </div>
        <div className="mobile-menu__body">
          {navigation.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    className="mobile-menu__link"
                    style={{ width: "100%", background: "none", border: "none", borderBottom: "1px solid var(--grey-100)" }}
                    onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                  >
                    {getLabel(item.path)}
                    <ChevronDown size={18} style={{ transform: openSub === item.label ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                  </button>
                  <div className={`mobile-menu__sub ${openSub === item.label ? "is-open" : ""}`}>
                    {item.children.map((child) => (
                      <NavLink key={child.path} to={child.path}>{getLabel(child.path)}</NavLink>
                    ))}
                  </div>
                </>
              ) : (
                <NavLink to={item.path} className="mobile-menu__link" end={item.path === "/"}>
                  {getLabel(item.path)}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
