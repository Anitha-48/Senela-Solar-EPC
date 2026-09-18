import SolarForm from "./SolarForm";
import BgImage from "../assets/images/solar-bg.jpeg";

export default function Hero() {
  return (
    <section className="hero hero--split">
      <div className="hero__inner">
        <div className="hero__content-wrapper">

          {/* LEFT - IMAGE */}
          <div className="hero__image-panel">
            <img
              src={BgImage}
              alt="Solar powered home"
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