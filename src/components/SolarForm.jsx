import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const billOptions = [
  "Less than ₹1500",
  "₹1500 - ₹2500",
  "₹2500 - ₹4000",
  "₹4000 - ₹8000",
  "More than ₹8000",
];

export default function SolarForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    whatsappNumber: "",
    electricityBill: "Less than ₹1500",
    pinCode: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `New solar consultation enquiry from ${formData.fullName}`
    );

    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\n` +
      `WhatsApp Number: ${formData.whatsappNumber}\n` +
      `Monthly Electricity Bill: ${formData.electricityBill}\n` +
      `PIN Code: ${formData.pinCode}\n\n` +
      `Please contact me regarding my solar consultation.`
    );

    const mailtoUrl =
      `mailto:info@senelainternational.com` +
      `?subject=${subject}` +
      `&body=${body}`;

    window.location.href = mailtoUrl;

    setFormData({
      fullName: "",
      whatsappNumber: "",
      electricityBill: "Less than ₹1500",
      pinCode: "",
    });

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="solar-form-card">
        <div className="solar-form-header">
          <h3>{t("solarForm.thankYou")}</h3>

          <p>
            {t("solarForm.mailOpened")}
          </p>
        </div>

        <button
          type="button"
          className="submit-btn"
          onClick={() => setIsSubmitted(false)}
        >
          {t("solarForm.submitAnother")}
        </button>
      </div>
    );
  }

  return (
    <div className="solar-form-card">

      <div className="solar-form-header">
        <h3>{t("solarForm.consultationTitle")}</h3>

        <p>
          {t("solarForm.consultationDescription")}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="solar-form-body">

        <input
          type="text"
          name="fullName"
          placeholder={t("solarForm.fullName")}
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="whatsappNumber"
          placeholder={t("solarForm.whatsappNumber")}
          value={formData.whatsappNumber}
          onChange={handleChange}
          required
        />

        <div className="form-group">
          <label>{t("solarForm.monthlyElectricityBill")}</label>

          <div className="bill-options">
            {billOptions.map((option, index) => (
              <button
                key={option}
                type="button"
                className={
                  formData.electricityBill === option
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    electricityBill: option,
                  }))
                }
              >
                {t("solarForm.billOptions", { returnObjects: true })[index]}
              </button>
            ))}
          </div>
        </div>

        <input
          type="text"
          name="pinCode"
          placeholder={t("solarForm.pinCode")}
          value={formData.pinCode}
          onChange={handleChange}
          required
        />

        <div className="checkbox-group">
          <input
            type="checkbox"
            id="terms"
            required
          />

          <label htmlFor="terms">
            {t("solarForm.terms")}
          </label>
        </div>

        <button type="submit" className="submit-btn">
          {t("solarForm.submit")}
        </button>

      </form>
    </div>
  );
}