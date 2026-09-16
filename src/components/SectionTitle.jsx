export default function SectionTitle({ eyebrow, title, description, center = false }) {
  return (
    <div className={`section-header ${center ? "section-header--center" : ""}`}>
      {eyebrow && <div className="eyebrow-line">{eyebrow}</div>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
