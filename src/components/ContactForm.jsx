import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const serviceOptions = [
  "Solar EPC",
  "On-grid Solar",
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
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = "Full name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Enter a valid email address.";
    if (!form.phone.trim()) errs.phone = "Phone number is required.";
    if (!form.interestedService) errs.interestedService = "Please select a service.";
    if (!form.message.trim()) errs.message = "Please add a short message about your project.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // Placeholder submit handler — wire this to your backend/API endpoint
      // (e.g. POST /api/contact) or an email service to receive enquiries.
      console.log("Contact form submitted:", form);
      setSubmitted(true);
      setForm(initialState);
    }
  };

  if (submitted) {
    return (
      <div className="bracket-frame" style={{ textAlign: "center", padding: 48 }}>
        <CheckCircle2 size={40} color="var(--pro-blue)" style={{ marginBottom: 16 }} />
        <h3>Thank you — your enquiry has been received</h3>
        <p>Our engineering team will get in touch within 1–2 business days to discuss your project.</p>
        <button className="btn btn--outline-blue" onClick={() => setSubmitted(false)}>Submit another enquiry</button>
      </div>
    );
  }

  return (
    <form className="bracket-frame" onSubmit={handleSubmit} noValidate>
      <div className="two-col-list" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 24px", borderBottom: "none" }}>
        <div className="field-group">
          <label htmlFor="fullName">Full Name *</label>
          <input id="fullName" value={form.fullName} onChange={update("fullName")} aria-invalid={!!errors.fullName} />
          {errors.fullName && <div className="field-hint" style={{ color: "#C0392B" }}>{errors.fullName}</div>}
        </div>
        <div className="field-group">
          <label htmlFor="companyName">Company Name</label>
          <input id="companyName" value={form.companyName} onChange={update("companyName")} />
        </div>
        <div className="field-group">
          <label htmlFor="email">Email *</label>
          <input id="email" type="email" value={form.email} onChange={update("email")} aria-invalid={!!errors.email} />
          {errors.email && <div className="field-hint" style={{ color: "#C0392B" }}>{errors.email}</div>}
        </div>
        <div className="field-group">
          <label htmlFor="phone">Phone *</label>
          <input id="phone" type="tel" value={form.phone} onChange={update("phone")} aria-invalid={!!errors.phone} />
          {errors.phone && <div className="field-hint" style={{ color: "#C0392B" }}>{errors.phone}</div>}
        </div>
        <div className="field-group">
          <label htmlFor="country">Country</label>
          <input id="country" value={form.country} onChange={update("country")} />
        </div>
        <div className="field-group">
          <label htmlFor="interestedService">Interested Service *</label>
          <select id="interestedService" value={form.interestedService} onChange={update("interestedService")} aria-invalid={!!errors.interestedService}>
            <option value="">Select a service</option>
            {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.interestedService && <div className="field-hint" style={{ color: "#C0392B" }}>{errors.interestedService}</div>}
        </div>
        <div className="field-group">
          <label htmlFor="projectType">Project Type</label>
          <input id="projectType" placeholder="e.g. New installation, upgrade, consultation" value={form.projectType} onChange={update("projectType")} />
        </div>
        <div className="field-group">
          <label htmlFor="estimatedCapacity">Estimated Capacity</label>
          <input id="estimatedCapacity" placeholder="e.g. 500 kW, 5 MW" value={form.estimatedCapacity} onChange={update("estimatedCapacity")} />
        </div>
      </div>

      <div className="field-group">
        <label htmlFor="message">Message *</label>
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

      <button type="submit" className="btn btn--primary">
        Request a Consultation <Send size={17} />
      </button>
    </form>
  );
}
