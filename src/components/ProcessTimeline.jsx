import { useEffect, useRef, useState } from "react";
import { User, MapPin, Settings, ShoppingBag, Wrench, CheckCircle, PlayCircle, LifeBuoy } from "lucide-react";

const defaultSteps = [
  { 
    title: "Consultation", 
    description: "Understanding requirements, load profile and site constraints.", 
    icon: User,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/12/369247353/DW/EW/DL/33834061/solar-project-engineering-design-service.jpg"
  },
  { 
    title: "Site Assessment", 
    description: "Technical survey covering electrical, structural and access factors.", 
    icon: MapPin,
    image: "https://media.licdn.com/dms/image/v2/D4E12AQHnvkFEUkLqPw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1688359396622?e=2147483647&v=beta&t=ziotOa9S3hD4YrUMJ8LC9g4SCDR8u0STK2JJ20D5wjg"
  },
  { 
    title: "Engineering & Design", 
    description: "Detailed design, single-line diagrams and equipment specification.", 
    icon: Settings,
    image: "https://sunworks.in/wp-content/uploads/2025/02/freepik__solar-engineer-india-under-maintenance-orange-hat-__596-1024x585.webp"
  },
  { 
    title: "Procurement", 
    description: "Sourcing equipment and materials from qualified, approved vendors.", 
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
  },
  { 
    title: "Installation", 
    description: "Civil, structural and electrical construction by certified crews.", 
    icon: Wrench,
    image: "https://www.tatapower.com/adobe/dynamicmedia/deliver/dm-aid--1eb4d5ed-5feb-4b1f-be54-c8cef2df26d6/site-assessment-and-planning-01.png?preferwebp=true&quality=85"
  },
  { 
    title: "Testing", 
    description: "Pre-commissioning tests to verify performance and safety.", 
    icon: CheckCircle,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pNSGIjqqq6keALr00_YszOKActuoZVqSQey4izcl37tTFb04TDTCE1Qj&s=10"
  },
  { 
    title: "Commissioning", 
    description: "Energisation, synchronisation and handover documentation.", 
    icon: PlayCircle,
    image: "https://res.cloudinary.com/sustainfyenergy/image/upload/v1684301207/Post_Commissoning_Services1_0ef69c81ba.png"
  },
  { 
    title: "Operations & Support", 
    description: "Ongoing monitoring, maintenance and long-term support.", 
    icon: LifeBuoy,
    image: "https://akuntha.com/wp-content/uploads/2023/02/Solar-O-M.jpg"
  },
];

export default function ProcessTimeline({ steps = defaultSteps }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="epc-flow-container" ref={ref}>
      <div className="epc-flow-grid">
        {/* Left Side: The Interactive Navigation Timeline */}
        <div className="epc-flow-nav">
          <div className="epc-flow-track">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div 
                  className={`epc-flow-step ${i === activeIndex ? "is-active" : ""}`} 
                  key={step.title}
                  onClick={() => setActiveIndex(i)}
                >
                  <div className="epc-flow-step__marker">
                    <span className="epc-flow-step__num">{String(i + 1).padStart(2, "0")}</span>
                    <div className="epc-flow-step__dot" />
                  </div>
                  <div className="epc-flow-step__content">
                    <span className="epc-flow-step__icon">
                      {Icon && <Icon size={16} />}
                    </span>
                    <h3 className="epc-flow-step__title">{step.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: The Detailed Content View */}
        <div className="epc-flow-display">
          {steps.map((step, i) => (
            <div 
              className={`epc-flow-panel ${i === activeIndex ? "is-visible" : ""}`} 
              key={step.title}
            >
              <div className="epc-flow-panel__media">
                <img src={step.image} alt={step.title} />
              </div>
              <div className="epc-flow-panel__text">
                <span className="epc-flow-panel__eyebrow">STEP 0{i + 1}</span>
                <h2 className="epc-flow-panel__title">{step.title}</h2>
                <p className="epc-flow-panel__desc">{step.description}</p>
                <div className="epc-flow-panel__meta">
                  <div className="epc-flow-panel__meta-item">
                    {step.icon && <step.icon size={18} />}
                    <span>Specialized EPC Phase</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
