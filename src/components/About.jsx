import Icon from "./Icon";
import { useTypedText } from "../hooks/useTypedText";
import { profile, socials } from "../data/portfolioData";
import "../styles/shared.css";
import "./About.css";

export default function About() {
  const typed = useTypedText(profile.roles);

  return (
    <section id="about" className="section hero">
      <div className="container hero__grid">
        <div className="hero__main">
          <div className="section-eyebrow">PORTFOLIO / {new Date().getFullYear()}</div>
          <h1 className="hero__heading">
            Hi, I'm <span className="hero__name">{profile.name}</span>.
          </h1>
          <p className="hero__typed">
            <span className="hero__typed-text">{typed}</span>
            <span className="hero__cursor" aria-hidden="true" />
          </p>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href={profile.resumeUrl} download>
              Download résumé
            </a>
            <a
              className="btn btn--ghost"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in touch
            </a>
          </div>

          <ul className="hero__socials">
            {socials.map((s) => {
              const href = s.icon === "mail" ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(s.value)}` : s.href;
              return (
                <li key={s.label}>
                  <a href={href} target="_blank" rel="noreferrer" aria-label={s.label}>
                    <Icon name={s.icon} size={17} />
                    <span>{s.value}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <aside className="hero__card">
          <div className="hero__avatar-panel">
            <div className="hero__avatar">
              {profile.avatarUrl ? (
                <img src={profile.avatarUrl} alt={profile.name} className="hero__avatar-img" />
              ) : (
                <span className="hero__avatar-fallback">{profile.avatarInitial}</span>
              )}
            </div>
          </div>

          <div className="code-card">
            <div className="code-card__bar">
              <span className="code-card__dot" />
              <span className="code-card__path">profile.json</span>
            </div>

            <pre className="code-card__body" aria-hidden="true">
              <code>
                <span className="code-line" style={{ "--delay": "0ms" }}>
                  <span className="code-line__num">01</span>
                  <span className="code-line__content">
                    const <span className="code-tok-var">profile</span> = {"{"}
                  </span>
                </span>

                {[
                  { key: "location", value: profile.location },
                  { key: "school", value: profile.education.school },
                  { key: "program", value: profile.education.program },
                  { key: "status", value: profile.education.period },
                ].map((line, i) => (
                  <span className="code-line" key={line.key} style={{ "--delay": `${(i + 1) * 90}ms` }}>
                    <span className="code-line__num">{String(i + 2).padStart(2, "0")}</span>
                    <span className="code-line__content code-line__content--indent">
                      <span className="code-tok-key">{line.key}</span>
                      <span className="code-tok-punc">: </span>
                      <span className="code-tok-str">"{line.value}"</span>
                      <span className="code-tok-punc">,</span>
                    </span>
                  </span>
                ))}

                <span className="code-line" style={{ "--delay": "450ms" }}>
                  <span className="code-line__num">06</span>
                  <span className="code-line__content">
                    <span className="code-tok-punc">{"};"}</span>
                    <span className="code-cursor" />
                  </span>
                </span>
              </code>
            </pre>

            <span className="sr-only">
              Location: {profile.location}. Education: {profile.education.school}, {profile.education.program},{" "}
              {profile.education.period}.
            </span>
          </div>
        </aside>
      </div>

      <div className="container">
        <div className="about-me">
          <div className="about-me__content">
            <div className="about-me__badge">About Me</div>
            <h2 className="about-me__heading">
              I'm passionate about creating <span className="about-me__highlight">data & web solutions</span>
            </h2>
            <div className="about-me__description">
              {profile.bio.map((paragraph, i) => (
                <p key={i} className="about-me__text">
                  {paragraph}
                </p>
              ))}
            </div>
            <a
              href="#projects"
              className="about-me__btn"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn More About Me <span className="about-me__btn-arrow">→</span>
            </a>
          </div>

          <div className="about-me__stats">
            {[
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                ), 
                value: "10+", 
                label: "Projects Built" 
              },
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                ), 
                value: "10+", 
                label: "DataCamp Courses" 
              },
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                ), 
                value: "8+", 
                label: "Seminars Attended" 
              },
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                ), 
                value: "15+", 
                label: "Tools & Technologies" 
              },
            ].map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-card__icon-wrapper">
                  {stat.icon}
                </div>
                <div className="stat-card__info">
                  <span className="stat-card__value">{stat.value}</span>
                  <span className="stat-card__label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}