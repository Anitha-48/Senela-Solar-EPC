import { useTranslation } from "react-i18next";
import SolarForm from "./SolarForm";
import BgImage from "../assets/images/solar-bg.jpeg";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero hero--split">
      <div className="hero__inner">
        <div className="hero__content-wrapper">

          {/* LEFT - IMAGE */}
          <div className="hero__image-panel">
            <img
              src={BgImage}
              alt={t("hero.alt")}
            />
          </div>

          {/* RIGHT - FORM */}
          <div className="hero__content-panel">
            <div className="hero__form-section">
              <SolarForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}