import { useTranslation } from "react-i18next";
import { Phone, ShieldCheck, Zap } from "lucide-react";
import SolarForm from "./SolarForm";
import BgImage from "../assets/images/solar-bg.jpeg";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero hero--split">
      <div className="hero__inner">
        <div className="hero__content-wrapper hero__content-wrapper--overlay">
          <div className="hero__image-panel">
            <img
              src={BgImage}
              alt={t("hero.alt")}
            />

            <div className="hero__overlay">
              <div className="hero__text-panel">
                <h1 className="hero__headline">
                  <span>{t("hero.titleLine1")}</span>
                  <span>{t("hero.titleLine2")}</span>
                  <span>{t("hero.titleLine3")}</span>
                </h1>

                <div className="hero__price-line">
                  {t("hero.priceLine")} <span>₹1,99,000</span>
                </div>

                <p className="hero__subtext">
                  {t("hero.subtext")}
                </p>

                <div className="hero__feature-row">
                  <div className="hero__feature-pill">
                    <span className="hero__feature-icon">✦</span>
                    {t("hero.subsidy")}
                  </div>
                  <div className="hero__feature-pill">
                    <Zap size={16} />
                    {t("hero.quickInstallation")}
                  </div>
                  <div className="hero__feature-pill">
                    <ShieldCheck size={16} />
                    {t("hero.longTermWarranty")}
                  </div>
                </div>

                <a href="tel:9585901999" className="hero__contact-btn">
                  <Phone size={18} />
                  {t("hero.callNow")}: 9585901999
                </a>
              </div>

              <div className="hero__form-floating">
                <SolarForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 