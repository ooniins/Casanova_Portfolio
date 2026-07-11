import { useState, useEffect, useMemo } from "react";
import Icon from "./Icon";
import { certifications, certificationGroups } from "../data/portfolioData";
import "../styles/shared.css";
import "./Certifications.css";

const AUTOPLAY_MS = 4000;

export default function Certifications() {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const [groupIndex, setGroupIndex] = useState(0);
  const [isGroupPaused, setIsGroupPaused] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null); // null = nothing revealed yet
  const [certIndex, setCertIndex] = useState(0);
  const [isCertPaused, setIsCertPaused] = useState(false);

  // auto-advance the category carousel, unless paused (hover) or reduced-motion is on
  useEffect(() => {
    if (prefersReducedMotion || isGroupPaused || certificationGroups.length < 2) return;
    const id = setInterval(() => {
      setGroupIndex((i) => (i + 1) % certificationGroups.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [isGroupPaused, prefersReducedMotion]);

  const filteredCerts = useMemo(
    () => (activeCategory ? certifications.filter((c) => c.category === activeCategory) : []),
    [activeCategory]
  );

  // jump back to the first certificate whenever the category selection changes
  useEffect(() => {
    setCertIndex(0);
  }, [activeCategory]);

  // auto-advance the revealed certificate carousel too, once something is selected
  useEffect(() => {
    if (!activeCategory || prefersReducedMotion || isCertPaused || filteredCerts.length < 2) return;
    const id = setInterval(() => {
      setCertIndex((i) => (i + 1) % filteredCerts.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [activeCategory, isCertPaused, prefersReducedMotion, filteredCerts.length]);

  const goNextCert = () => setCertIndex((i) => (i + 1) % filteredCerts.length);
  const goPrevCert = () => setCertIndex((i) => (i - 1 + filteredCerts.length) % filteredCerts.length);
  const goNextGroup = () => setGroupIndex((i) => (i + 1) % certificationGroups.length);
  const goPrevGroup = () => setGroupIndex((i) => (i - 1 + certificationGroups.length) % certificationGroups.length);

  // clicking the group label toggles it: click to reveal, click again to hide
  const handleSelectGroup = (category) => {
    setActiveCategory((current) => (current === category ? null : category));
  };

  // arrow-key navigation for the revealed certificate carousel while this section is in view
  useEffect(() => {
    const handleKey = (e) => {
      if (!activeCategory) return;
      const section = document.getElementById("certifications");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;
      if (e.key === "ArrowRight") goNextCert();
      if (e.key === "ArrowLeft") goPrevCert();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory, filteredCerts.length]);

  const currentGroup = certificationGroups[groupIndex];
  const currentCert = filteredCerts[certIndex];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-eyebrow">CERTIFICATIONS</div>
        <h2 className="section-title">Courses & credentials</h2>

        {/* Auto-advancing carousel of category labels — click to reveal, click again to hide */}
        <div
          className="group-carousel"
          onMouseEnter={() => setIsGroupPaused(true)}
          onMouseLeave={() => setIsGroupPaused(false)}
        >
          <button className="cert-arrow cert-arrow--small" aria-label="Previous category" onClick={goPrevGroup}>
            <Icon name="chevronLeft" size={16} />
          </button>

          <button
            className={`group-card ${activeCategory === currentGroup.category ? "is-selected" : ""}`}
            onClick={() => handleSelectGroup(currentGroup.category)}
            key={currentGroup.label}
          >
            <span className="group-card__eyebrow">
              {activeCategory === currentGroup.category ? "Selected — click to hide" : "Click to view certificates"}
            </span>
            <span className="group-card__label">{currentGroup.label}</span>
            <span className="group-card__count">
              {certifications.filter((c) => c.category === currentGroup.category).length} certificates
            </span>
            {!prefersReducedMotion && (
              <span className={`group-card__progress ${isGroupPaused ? "is-paused" : ""}`} />
            )}
          </button>

          <button className="cert-arrow cert-arrow--small" aria-label="Next category" onClick={goNextGroup}>
            <Icon name="chevronRight" size={16} />
          </button>
        </div>

        <div className="group-dots">
          {certificationGroups.map((g, i) => (
            <button
              key={g.label}
              className={`cert-dot ${i === groupIndex ? "is-active" : ""}`}
              aria-label={`Show ${g.label}`}
              onClick={() => setGroupIndex(i)}
            />
          ))}
        </div>

        {/* Nothing below renders at all until a category has been clicked */}
        {activeCategory && currentCert && (
          <>
            <ul className="cert-tag-row">
              {filteredCerts.map((c, i) => (
                <li key={c.title}>
                  <button
                    className={`cert-tag ${i === certIndex ? "is-active" : ""}`}
                    onClick={() => setCertIndex(i)}
                  >
                    {c.title}
                  </button>
                </li>
              ))}
            </ul>

            <div
              className="cert-carousel"
              onMouseEnter={() => setIsCertPaused(true)}
              onMouseLeave={() => setIsCertPaused(false)}
            >
              <button className="cert-arrow" aria-label="Previous certificate" onClick={goPrevCert}>
                <Icon name="chevronLeft" size={18} />
              </button>

              <div className="cert-card" key={currentCert.title}>
                <div className="cert-card__bar">
                  <span className="cert-card__dot" />
                  <span className="cert-card__path">{currentCert.issuer.toLowerCase()}.com</span>
                </div>
                <div className="cert-card__body">
                  <span className="cert-card__category">{currentCert.category}</span>
                  <h3 className="cert-card__title">{currentCert.title}</h3>
                  <div className="cert-card__meta">
                    <span>{currentCert.issuer}</span>
                    <span className="cert-card__meta-dot" />
                    <span>{currentCert.date}</span>
                    <span className="cert-card__meta-dot" />
                    <span>{currentCert.hours}</span>
                  </div>
                </div>
                {!prefersReducedMotion && filteredCerts.length > 1 && (
                  <span className={`cert-card__progress ${isCertPaused ? "is-paused" : ""}`} />
                )}
              </div>

              <button className="cert-arrow" aria-label="Next certificate" onClick={goNextCert}>
                <Icon name="chevronRight" size={18} />
              </button>
            </div>

            <div className="cert-dots">
              {filteredCerts.map((c, i) => (
                <button
                  key={c.title}
                  className={`cert-dot ${i === certIndex ? "is-active" : ""}`}
                  aria-label={`Go to ${c.title}`}
                  onClick={() => setCertIndex(i)}
                />
              ))}
            </div>

            <div className="cert-count">
              {certIndex + 1} / {filteredCerts.length}
            </div>
          </>
        )}
      </div>
    </section>
  );
}