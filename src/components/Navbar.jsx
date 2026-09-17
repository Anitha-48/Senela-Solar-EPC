import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Zap, ArrowRight } from "lucide-react";
import { navigation } from "../config/navigation";
import { siteConfig } from "../config/siteConfig";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);
  const location = useLocation();

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
      <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
        <div className="navbar__inner">
          <NavLink to="/" className="navbar__logo">
            <img src="/src/assets/images/logo.jpeg" alt="Senela International Ventures" className="navbar__logo-img" />
          </NavLink>

          <nav className="navbar__links" aria-label="Primary">
            {navigation.map((item) => (
              <div className="navbar__item" key={item.label}>
                <NavLink to={item.path} className={({ isActive }) => `navbar__link ${isActive ? "is-active" : ""}`} end={item.path === "/"}>
                  {item.label} {item.children && <ChevronDown className="chev" size={15} />}
                </NavLink>
                {item.children && (
                  <div className="navbar__dropdown">
                    {item.children.map((child) => (
                      <NavLink key={child.path} to={child.path}>{child.label}</NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <NavLink to="/contact" className="btn btn--primary btn--sm navbar__cta">
            Get Solar Estimate <ArrowRight size={16} />
          </NavLink>

          <button className="navbar__hamburger menu-toggle" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu size={26} />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${mobileOpen ? "is-open" : ""}`} role="dialog" aria-modal="true">
        <div className="mobile-menu__header">
          <span className="navbar__logo">
            <img src="/src/assets/images/logo.jpeg" alt="Senela International Ventures" className="navbar__logo-img" />
          </span>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu" style={{ background: "none", border: "none", color: "var(--deep-blue)" }}>
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
                    {item.label}
                    <ChevronDown size={18} style={{ transform: openSub === item.label ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                  </button>
                  <div className={`mobile-menu__sub ${openSub === item.label ? "is-open" : ""}`}>
                    {item.children.map((child) => (
                      <NavLink key={child.path} to={child.path}>{child.label}</NavLink>
                    ))}
                  </div>
                </>
              ) : (
                <NavLink to={item.path} className="mobile-menu__link" end={item.path === "/"}>
                  {item.label}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
