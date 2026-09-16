import { useEffect, useRef, useState } from "react";
import { User, MapPin, Settings, ShoppingBag, Wrench, CheckCircle, PlayCircle, LifeBuoy } from "lucide-react";

const defaultSteps = [
  { title: "Consultation", description: "Understanding requirements, load profile and site constraints.", icon: User },
  { title: "Site Assessment", description: "Technical survey covering electrical, structural and access factors.", icon: MapPin },
  { title: "Engineering & Design", description: "Detailed design, single-line diagrams and equipment specification.", icon: Settings },
  { title: "Procurement", description: "Sourcing equipment and materials from qualified, approved vendors.", icon: ShoppingBag },
  { title: "Installation", description: "Civil, structural and electrical construction by certified crews.", icon: Wrench },
  { title: "Testing", description: "Pre-commissioning tests to verify performance and safety.", icon: CheckCircle },
  { title: "Commissioning", description: "Energisation, synchronisation and handover documentation.", icon: PlayCircle },
  { title: "Operations & Support", description: "Ongoing monitoring, maintenance and long-term support.", icon: LifeBuoy },
];

export default function ProcessTimeline({ steps = defaultSteps }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          steps.forEach((_, i) => {
            setTimeout(() => setVisibleCount((c) => Math.max(c, i + 1)), i * 120);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [steps]);

  return (
    <div className="timeline" ref={ref}>
      <div className="timeline__track">
        {steps.map((step, i) => {
          const Icon = step.icon;

          return (
            <div className={`timeline__step ${i < visibleCount ? "is-visible" : ""}`} key={step.title}>
              <span className="timeline__dot" />
              <span className="timeline__num">{String(i + 1).padStart(2, "0")}</span>
              <div className="timeline__title">
                {Icon && <span className="timeline__icon"><Icon size={15} /></span>}
                <h3>{step.title}</h3>
              </div>
              <p>{step.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
