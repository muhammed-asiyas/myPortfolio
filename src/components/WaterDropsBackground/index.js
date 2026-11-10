import React, { useEffect, useRef, useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const WaterDropsBackground = () => {
  const canvasRef = useRef(null);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let ctx;
    try {
      ctx = canvas.getContext("2d");
    } catch (error) {
      return;
    }

    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // 4D Water Physics State: Spatial Depth Layers (z-index) + Scroll Momentum
    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      // Inject scroll momentum into water velocity
      scrollVelocity += delta * 0.12;
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Multi-layered droplets with 3D depth (z: 1 = far, 2 = mid, 3 = close)
    const totalDrops = Math.min(Math.floor(width / 35), 45);
    const drops = [];

    for (let i = 0; i < totalDrops; i++) {
      const z = Math.random() < 0.25 ? 3 : Math.random() < 0.6 ? 2 : 1;
      drops.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z, // depth layer
        baseRadius: z === 3 ? 4.5 + Math.random() * 2 : z === 2 ? 2.5 + Math.random() * 1.5 : 1.2 + Math.random() * 1,
        speedY: z === 3 ? 0.9 + Math.random() * 0.6 : z === 2 ? 0.5 + Math.random() * 0.4 : 0.2 + Math.random() * 0.2,
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: z === 3 ? 0.75 : z === 2 ? 0.5 : 0.25,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.015 + Math.random() * 0.02,
      });
    }

    // Ripples array
    const ripples = [];

    const addRipple = (x, y, maxRadius = 40, color = null) => {
      ripples.push({
        x,
        y,
        radius: 3,
        maxRadius,
        opacity: 0.8,
        growthRate: 1.2 + Math.random() * 0.6,
        color: color || (isDark ? "245, 158, 11" : "217, 119, 6"),
      });
    };

    // Mouse interactive ripples with fluid throttling
    let lastMouseTime = 0;
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastMouseTime > 60) {
        addRipple(e.clientX, e.clientY, 32);
        lastMouseTime = now;
      }
    };

    const handleClick = (e) => {
      addRipple(e.clientX, e.clientY, 65);
      setTimeout(() => addRipple(e.clientX, e.clientY, 45), 140);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Dampen scroll momentum fluidly (natural water viscosity)
      scrollVelocity *= 0.92;
      if (Math.abs(scrollVelocity) < 0.01) scrollVelocity = 0;

      // 1. Draw ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.growthRate;
        r.opacity *= 0.96;

        if (r.opacity < 0.02 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        // Outer ripple
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${r.color}, ${r.opacity * 0.5})`;
        ctx.lineWidth = 1.4;
        ctx.stroke();

        // Inner harmonic wave
        if (r.radius > 9) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius * 0.68, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${r.color}, ${r.opacity * 0.28})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      }

      // 2. Draw 4D multi-layer droplets with depth-based parallax and scroll velocity
      for (let i = 0; i < drops.length; i++) {
        const d = drops[i];

        d.wobble += d.wobbleSpeed;
        // The closer the drop (z=3), the more it reacts to scroll momentum
        const scrollInfluence = scrollVelocity * (d.z / 2);
        d.y += d.speedY + scrollInfluence;
        d.x += d.speedX + Math.sin(d.wobble) * (0.2 * d.z);

        // Boundary wrapping
        if (d.y > height + 20) {
          d.y = -20;
          d.x = Math.random() * width;
          if (d.z === 3 && Math.random() > 0.5) {
            addRipple(d.x, height - 10, 25);
          }
        } else if (d.y < -20) {
          d.y = height + 20;
          d.x = Math.random() * width;
        }

        const currentRadius = d.baseRadius;

        ctx.save();
        ctx.translate(d.x, d.y);

        // Liquid drop gradient reflection
        const dropGradient = ctx.createRadialGradient(
          -currentRadius * 0.35,
          -currentRadius * 0.35,
          0,
          0,
          0,
          currentRadius
        );

        if (isDark) {
          dropGradient.addColorStop(0, "rgba(255, 255, 255, 0.75)");
          dropGradient.addColorStop(0.3, "rgba(251, 191, 36, 0.4)");
          dropGradient.addColorStop(0.85, "rgba(217, 119, 6, 0.22)");
          dropGradient.addColorStop(1, "rgba(18, 9, 6, 0.45)");
        } else {
          dropGradient.addColorStop(0, "rgba(255, 255, 255, 0.95)");
          dropGradient.addColorStop(0.35, "rgba(245, 158, 11, 0.3)");
          dropGradient.addColorStop(0.85, "rgba(180, 83, 9, 0.18)");
          dropGradient.addColorStop(1, "rgba(0, 0, 0, 0.15)");
        }

        ctx.beginPath();
        ctx.ellipse(0, 0, currentRadius, currentRadius * 1.18, 0, 0, Math.PI * 2);
        ctx.fillStyle = dropGradient;
        ctx.fill();

        // 3D Specular refraction glint
        if (d.z >= 2) {
          ctx.beginPath();
          ctx.ellipse(
            -currentRadius * 0.35,
            -currentRadius * 0.38,
            currentRadius * 0.35,
            currentRadius * 0.22,
            -Math.PI / 4,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = `rgba(255, 255, 255, ${d.opacity * 0.95})`;
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-700"
      style={{ opacity: 0.9 }}
      aria-hidden="true"
    />
  );
};

export default WaterDropsBackground;
