import { useEffect, useRef } from "react";
import "./GridCursorHighlight.css";

const CELL = 48; // must match the --grid cell size used in the body background (index.css)

export default function GridCursorHighlight() {
  const elRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const el = elRef.current;
    if (!el) return;

    let rafId = null;
    let pending = null;

    // Replicates CSS `background-position: center` for a repeating tile,
    // so the highlight lines up exactly with the visible grid lines.
    const getOffsetX = () => {
      const w = window.innerWidth;
      let off = ((w - CELL) / 2) % CELL;
      if (off < 0) off += CELL;
      return off;
    };

    const applyPosition = () => {
      rafId = null;
      if (!pending) return;
      const { x, y } = pending;
      const offsetX = getOffsetX();
      const cellX = Math.floor((x - offsetX) / CELL) * CELL + offsetX;
      const cellY = Math.floor(y / CELL) * CELL;
      el.style.transform = `translate3d(${cellX}px, ${cellY}px, 0)`;
      el.classList.add("is-visible");
    };

    const handleMouseMove = (e) => {
      pending = { x: e.clientX, y: e.clientY };
      if (rafId === null) {
        rafId = requestAnimationFrame(applyPosition);
      }
    };

    const handleMouseLeave = () => {
      el.classList.remove("is-visible");
    };

    if (prefersReducedMotion) {
      // Skip the moving spotlight entirely for reduced-motion users —
      // it's a decorative effect, not essential content.
      return;
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return <div className="grid-cursor-highlight" ref={elRef} aria-hidden="true" />;
}