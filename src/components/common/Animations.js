/* ============================================================
   GLOBAL 4D ANIMATION + SCROLL MOTION ENGINE
   Smooth, natural, non-AI-template feel
   ============================================================ */
import React, { useEffect, useRef } from "react";

/* ─── Scroll-driven reveal: each child fades + slides as it enters viewport ─── */
export const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",   // "up" | "left" | "right" | "down" | "scale"
  distance = 40,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const dirMap = {
      up:    `translateY(${distance}px)`,
      down:  `translateY(-${distance}px)`,
      left:  `translateX(${distance}px)`,
      right: `translateX(-${distance}px)`,
      scale: "scale(0.88)",
    };

    el.style.opacity = "0";
    el.style.transform = dirMap[direction] || dirMap.up;
    el.style.transition = `opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`;
    el.style.willChange = "opacity, transform";

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, direction, distance]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

/* ─── Magnetic hover: element gently follows cursor on hover ─── */
export const MagneticWrap = ({ children, strength = 0.25, className = "" }) => {
  const ref = useRef(null);
  const rafId = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * strength;
    const dy = (e.clientY - cy) * strength;
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      el.style.transform = `translate(${dx}px, ${dy}px)`;
      el.style.transition = "transform 0.15s ease-out";
    });
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    if (rafId.current) cancelAnimationFrame(rafId.current);
    el.style.transform = "translate(0px, 0px)";
    el.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
  };

  useEffect(() => () => { if (rafId.current) cancelAnimationFrame(rafId.current); }, []);

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

/* ─── Parallax band: moves at a fraction of scroll speed (depth illusion) ─── */
export const ParallaxBand = ({ children, speed = 0.12, className = "" }) => {
  const ref = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const center = window.innerHeight / 2;
        const offset = (rect.top + rect.height / 2 - center) * speed;
        el.style.transform = `translateY(${offset.toFixed(2)}px)`;
        el.style.willChange = "transform";
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

/* ─── Liquid count-up: animates a number from 0 to target when visible ─── */
export const CountUp = ({ to, suffix = "", className = "" }) => {
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const duration = 1200;
    const startTime = performance.now();

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasRun.current) {
        hasRun.current = true;
        const tick = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
          el.textContent = Math.round(eased * to) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.3 });

    io.observe(el);
    return () => io.disconnect();
  }, [to, suffix]);

  return <span ref={ref} className={className}>0{suffix}</span>;
};
