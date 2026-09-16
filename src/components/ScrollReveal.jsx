import { useEffect, useRef, useState } from "react";

/**
 * Wraps children and adds the `is-visible` class once the element
 * scrolls into view, triggering the CSS-driven fade/slide-up defined
 * in global.css (.reveal). Keeps all animation timing in CSS.
 */
export default function ScrollReveal({ children, className = "", as: Tag = "div", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? `reveal-delay-${delay}` : "";

  return (
    <Tag ref={ref} className={`reveal ${delayClass} ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
