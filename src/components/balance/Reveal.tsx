import React, { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number; // ms
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

/** Lightweight scroll-reveal using IntersectionObserver. Respects prefers-reduced-motion. */
export const Reveal: React.FC<Props> = ({ children, delay = 0, as: Tag = "div", className = "" }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setShown(true); return; }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const T = Tag as any;
  return (
    <T
      ref={ref as any}
      className={`${className} transition-all duration-[900ms] ease-out will-change-transform ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
    >
      {children}
    </T>
  );
};
