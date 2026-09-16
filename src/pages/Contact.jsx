import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import { siteConfig } from "../config/siteConfig";

export default function Contact() {
  return (
    <>
      <PageHero
        crumb="Contact Us"
        title="Get in Touch"
        
      />
      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48, alignItems: "start" }}>
          <div>
            <div className="eyebrow-line">CONTACT INFORMATION</div>
            <h2>Reach Our Team</h2>
            <div className="footer__contact-item" style={{ color: "#000000", marginTop: 24 }}>
              <MapPin color="var(--pro-blue)" />
              <span>{siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.country}</span>
            </div>
            <div className="footer__contact-item" style={{ color: "#000000" }}>
              <Phone color="var(--pro-blue)" />
              <span>{siteConfig.phone}</span>
            </div>
            <div className="footer__contact-item" style={{ color: "#000000" }}>
              <Mail color="var(--pro-blue)" />
              <span>{siteConfig.email}</span>
            </div>
            <div className="footer__contact-item" style={{ color: "#000000" }}>
              <Clock color="var(--pro-blue)" />
              <span>{siteConfig.workingHours}</span>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
    /* Direct image placeholder section added as per user request */
    <section className="page-direct-image">
      <img src="/placeholder.jpg" alt="Placeholder illustration"
           style={{ width: "100%", height: "auto" }} />
    </section>
