import { NavLink } from "react-router-dom";
import { ArrowRight, Calculator } from "lucide-react";
import bgVideo from "../assets/videos/bg-video.mp4";

export default function Hero() {
  return (
    <section className="hero">
      <video
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        className="hero__video-bg"
      />
      <div className="hero__grid-overlay" />
      <div className="hero__glow" />
      <span className="hero__line hero__line--1" />
      <span className="hero__line hero__line--2" />
      <div className="hero__inner">
        <div>
          
          <h1>Powering Progress Through Solar &amp; Engineering Excellence</h1>
          <p className="hero__sub">
            We design, build and commission solar power plants, transmission
            networks and electrical infrastructure — engineered for
            performance and built to operate for decades.
          </p>
          <div className="hero__ctas">
            <NavLink to="/services" className="btn btn--primary">
              Explore Solutions <ArrowRight />
            </NavLink>
            <NavLink to="/solar-calculator" className="btn btn--outline">
              Get Solar Estimate <Calculator size={18} />
            </NavLink>
          </div>
        </div>
        
      </div>
    </section>
  );
}
