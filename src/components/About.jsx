import Icon from "./Icon";
import { useTypedText } from "../hooks/useTypedText";
import { profile, socials } from "../data/portfolioData";

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
            
            <a className="btn btn--ghost"
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
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                  <Icon name={s.icon} size={17} />
                  <span>{s.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <aside className="hero__card">
          <div className="hero__avatar">{profile.avatarInitial}</div>
          <dl className="hero__facts">
            <div>
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Education</dt>
              <dd>
                {profile.education.school}
                <br />
                <span className="hero__facts-sub">
                  {profile.education.program} · {profile.education.period}
                </span>
              </dd>
            </div>
          </dl>
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