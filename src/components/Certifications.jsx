import { useState, useEffect } from "react";
import Icon from "./Icon";
import { certifications } from "../data/portfolioData";
import "../styles/shared.css";
import "./Certifications.css";

export default function Certifications() {
  const [index, setIndex] = useState(0);

  const goNext = () => setIndex((i) => (i + 1) % certifications.length);
  const goPrev = () => setIndex((i) => (i - 1 + certifications.length) % certifications.length);

  // arrow-key navigation while this section is in view
  useEffect(() => {
    const handleKey = (e) => {
      const section = document.getElementById("certifications");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const current = certifications[index];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-eyebrow">CERTIFICATIONS</div>
        <h2 className="section-title">Courses & credentials</h2>

        {/* Click any certificate title to jump the slideshow straight to it */}
        <ul className="cert-tag-row">
          {certifications.map((c, i) => (
            <li key={c.title}>
              <button
                className={`cert-tag ${i === index ? "is-active" : ""}`}
                onClick={() => setIndex(i)}
              >
                {c.title}
              </button>
            </li>
          ))}
        </ul>

        <div className="cert-carousel">
          <button className="cert-arrow" aria-label="Previous certificate" onClick={goPrev}>
            <Icon name="chevronLeft" size={18} />
          </button>

          <div className="cert-card" key={current.title}>
            <div className="cert-card__bar">
              <span className="cert-card__dot" />
              <span className="cert-card__path">{current.issuer.toLowerCase()}.com</span>
            </div>
            <div className="cert-card__body">
              <span className="cert-card__category">{current.category}</span>
              <h3 className="cert-card__title">{current.title}</h3>
              <div className="cert-card__meta">
                <span>{current.issuer}</span>
                <span className="cert-card__meta-dot" />
                <span>{current.date}</span>
                <span className="cert-card__meta-dot" />
                <span>{current.hours}</span>
              </div>
            </div>
          </div>

          <button className="cert-arrow" aria-label="Next certificate" onClick={goNext}>
            <Icon name="chevronRight" size={18} />
          </button>
        </div>

        <div className="cert-dots">
          {certifications.map((c, i) => (
            <button
              key={c.title}
              className={`cert-dot ${i === index ? "is-active" : ""}`}
              aria-label={`Go to ${c.title}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <div className="cert-count">
          {index + 1} / {certifications.length}
        </div>
      </div>
    </section>
  );
}