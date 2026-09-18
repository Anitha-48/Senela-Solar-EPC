import SolarForm from "./SolarForm";
import BgImage from "../assets/images/solar.jpeg";

export default function Hero() {
  return (
    <section className="hero hero--split">
      <div className="hero__inner">
        <div className="hero__content-wrapper">
          <div className="hero__image-panel">
            <img src={BgImage} alt="Happy family standing beside a solar powered home" />
          </div>

          <div className="hero__content-panel">
            <div className="hero__text-section">
              <div className="hero__badges">
                <div className="hero__badge" />
                <div className="hero__badge" />
              </div>

              <h1 className="hero__title">
                Power Your Home with Solar. <br />
                Save More Every Month.
              </h1>

              <h2 className="hero__offer">
                Get a 3 kW Solar System Starting at ₹1,99,000
              </h2>

              <p className="hero__description">
                Reduce your electricity bills with a professionally designed and installed
                solar power system built for long-term savings.
              </p>

              <div className="hero__footer-tags">
                <span className="hero__tag">☀ Subsidy Support Available</span>
                <span className="hero__tag">⚡ Quick Installation</span>
                <span className="hero__tag">🛡 Long-Term Warranty</span>
              </div>

              <div className="hero__call-now">📞 Call Now: 9585901999</div>
            </div>

            <div className="hero__form-section">
              <SolarForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}