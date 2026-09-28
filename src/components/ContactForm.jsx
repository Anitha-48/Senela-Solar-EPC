import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Send, CheckCircle2 } from "lucide-react";

const serviceOptions = [
  "Solar EPC",
  "On-grid Solar",
  "Hybrid Grid Solar",
  "Off-grid Solar",
  "Solar Power Project",
  "Power Distribution & Transmission",
  "EHV Substation",
  "HTLS Re-conductoring",
  "Railway Electrification",
  "Water Management",
  "Other",
];

const initialState = {
  fullName: "", companyName: "", email: "", phone: "", country: "",
  interestedService: "", projectType: "", estimatedCapacity: "", message: "",
};

export default function ContactForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return undefined;
    const timeout = window.setTimeout(() => setToast(null), 5000);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = t("contact.validation.fullNameRequired");
    if (!form.email.trim()) errs.email = t("contact.validation.emailRequired");
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = t("contact.validation.emailInvalid");
    if (!form.phone.trim()) errs.phone = t("contact.validation.phoneRequired");
    if (!form.interestedService) errs.interestedService = t("contact.validation.serviceRequired");
    if (!form.message.trim()) errs.message = t("contact.validation.messageRequired");
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    setSubmitError("");
    if (Object.keys(errs).length > 0) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.message || "Contact form submission failed");
      }

      setToast({ type: "success", message: t("contact.successTitle") });
      setSubmitted(true);
      setForm(initialState);
    } catch (error) {
      const message = error instanceof Error && error.message
        ? error.message
        : t("contact.submissionFailed");
      setSubmitError(message);
      setToast({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        {toast && <div className={`contact-toast contact-toast--${toast.type}`} role="status">{toast.message}</div>}
        <div className="bracket-frame" style={{ textAlign: "center", padding: 48 }}>
          <CheckCircle2 size={40} color="var(--pro-blue)" style={{ marginBottom: 16 }} />
          <h3>{t("contact.successTitle")}</h3>
          <p>{t("contact.successDescription")}</p>
          <button className="btn btn--outline-blue" onClick={() => setSubmitted(false)}>{t("contact.submitAnother")}</button>
        </div>
      </>
    );
  }

  return (
    <>
    {toast && <div className={`contact-toast contact-toast--${toast.type}`} role="status">{toast.message}</div>}
    <form className="bracket-frame" onSubmit={handleSubmit} noValidate>
      <div className="two-col-list" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 24px", borderBottom: "none" }}>
        <div className="field-group">
          <label htmlFor="fullName">{t("contact.fullName")} *</label>
          <input id="fullName" value={form.fullName} onChange={update("fullName")} aria-invalid={!!errors.fullName} />
          {errors.fullName && <div className="field-hint" style={{ color: "#C0392B" }}>{errors.fullName}</div>}
        </div>
        <div className="field-group">
          <label htmlFor="companyName">{t("contact.companyName")}</label>
          <input id="companyName" value={form.companyName} onChange={update("companyName")} />
        </div>
        <div className="field-group">
          <label htmlFor="email">{t("contact.email")} *</label>
          <input id="email" type="email" value={form.email} onChange={update("email")} aria-invalid={!!errors.email} />
          {errors.email && <div className="field-hint" style={{ color: "#C0392B" }}>{errors.email}</div>}
        </div>
        <div className="field-group">
          <label htmlFor="phone">{t("contact.phone")} *</label>
          <input id="phone" type="tel" value={form.phone} onChange={update("phone")} aria-invalid={!!errors.phone} />
          {errors.phone && <div className="field-hint" style={{ color: "#C0392B" }}>{errors.phone}</div>}
        </div>
        <div className="field-group">
          <label htmlFor="country">{t("contact.country")}</label>
          <input id="country" value={form.country} onChange={update("country")} />
        </div>
        <div className="field-group">
          <label htmlFor="interestedService">{t("contact.interestedService")} *</label>
          <select id="interestedService" value={form.interestedService} onChange={update("interestedService")} aria-invalid={!!errors.interestedService}>
            <option value="">{t("contact.selectService")}</option>
            {serviceOptions.map((s, index) => <option key={s} value={s}>{t("contact.serviceOptions", { returnObjects: true })[index]}</option>)}
          </select>
          {errors.interestedService && <div className="field-hint" style={{ color: "#C0392B" }}>{errors.interestedService}</div>}
        </div>
        <div className="field-group">
          <label htmlFor="projectType">{t("contact.projectType")}</label>
          <input id="projectType" placeholder={t("contact.projectTypePlaceholder")} value={form.projectType} onChange={update("projectType")} />
        </div>
        <div className="field-group">
          <label htmlFor="estimatedCapacity">{t("contact.estimatedCapacity")}</label>
          <input id="estimatedCapacity" placeholder={t("contact.estimatedCapacityPlaceholder")} value={form.estimatedCapacity} onChange={update("estimatedCapacity")} />
        </div>
      </div>

      <div className="field-group">
        <label htmlFor="message">{t("contact.message")} *</label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={update("message")}
          aria-invalid={!!errors.message}
          style={{
            width: "100%", padding: "12px 14px", fontSize: "0.95rem",
            border: "1.5px solid var(--grey-200)", fontFamily: "var(--font-body)",
            color: "var(--dark-text)", resize: "vertical",
          }}
        />
        {errors.message && <div className="field-hint" style={{ color: "#C0392B" }}>{errors.message}</div>}
      </div>

      <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
        {isSubmitting ? t("contact.sending") : t("contact.requestConsultation")} <Send size={17} />
      </button>
      {submitError && <div className="field-hint" role="alert" style={{ color: "#C0392B" }}>{submitError}</div>}
    </form>
    </>
  );
}
