import { Phone, ShieldCheck, Zap } from "lucide-react";
import SolarForm from "./SolarForm";
import BgImage from "../assets/images/solar-bg.jpeg";

export default function Hero() {
  return (
    <section className="hero hero--split">
      <div className="hero__inner">
        <div className="hero__content-wrapper hero__content-wrapper--overlay">
          <div className="hero__image-panel">
            <img src={BgImage} alt="Solar powered home" />

            <div className="hero__overlay">
              <div className="hero__text-panel">
                <h1 className="hero__headline">
                  <span>Power Your Home with</span>
                  <span>Solar.</span>
                  <span>Save More Every Month.</span>
                </h1>

                <div className="hero__price-line">
                  Get a 3 kW Solar System Starting at <span>₹1,99,000</span>
                </div>

                <p className="hero__subtext">
                  Reduce your electricity bills with a professionally designed solar power system.
                </p>

                <div className="hero__feature-row">
                  <div className="hero__feature-pill">
                    <span className="hero__feature-icon">✦</span>
                    Subsidy Support
                  </div>
                  <div className="hero__feature-pill">
                    <Zap size={16} />
                    Quick Installation
                  </div>
                  <div className="hero__feature-pill">
                    <ShieldCheck size={16} />
                    Long-Term Warranty
                  </div>
                </div>

                <a href="tel:9585901999" className="hero__contact-btn">
                  <Phone size={18} />
                  Call Now: 9585901999
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