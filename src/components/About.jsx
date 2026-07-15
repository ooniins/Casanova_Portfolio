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
              // Same fix as the Contact section: route the email entry through
              // Gmail compose instead of a bare mailto:, which leaves a blank
              // tab open if the visitor has no default mail app configured.
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
          <div className="hero__avatar">
            {profile.avatarUrl ? (
              <img src={profile.avatarUrl} alt={profile.name} className="hero__avatar-img" />
            ) : (
              <span className="hero__avatar-fallback">{profile.avatarInitial}</span>
            )}
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
                    <span className="code-tok-kw">const</span> <span className="code-tok-var">profile</span> = {"{"}
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
        <div className="bio-panel">
          <div className="section-eyebrow">ABOUT</div>
          <div className="bio-panel__grid">
            {profile.bio.map((paragraph, i) => (
              <p key={i} className="bio-panel__text">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}