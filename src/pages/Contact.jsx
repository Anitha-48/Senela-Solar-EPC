import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import { siteConfig } from "../config/siteConfig";
import "../styles/contact.css";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contact-page">

            {/* Contact Section */}
      <section className="section contact-section">
        <div className="container contact-layout">

          {/* Contact Information */} 
          <div className="contact-info">

            <div className="eyebrow-line">
              {t("contact.information")}
            </div>

            <h2>{t("contact.reachTeam")}</h2>

            <p className="contact-intro">
              {t("contact.intro")}
            </p>

            <div className="contact-details">

              {/* Address */}
              <div className="contact-item">
                <div className="contact-item__icon">
                  <MapPin size={20} />
                </div>

                <div>
                  <span className="contact-item__label">
                    {t("contact.address")}
                  </span>

                  <span className="contact-item__text">
                    {siteConfig.address.line1},{" "}
                    {siteConfig.address.line2},{" "}
                    {siteConfig.address.country}
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-item">
                <div className="contact-item__icon">
                  <Phone size={20} />
                </div>

                <div>
                  <span className="contact-item__label">
                    {t("contact.phone")}
                  </span>

                  <span className="contact-item__text">
                    {siteConfig.phone}
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="contact-item">
                <div className="contact-item__icon">
                  <Mail size={20} />
                </div>

                <div>
                  <span className="contact-item__label">
                    {t("contact.email")}
                  </span>

                  <span className="contact-item__text">
                    {siteConfig.email}
                  </span>
                </div>
              </div>

              {/* Working Hours */}
              

            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <ContactForm />
          </div>

        </div>
      </section>

         </div>
  );
}

