import { skillGroups } from "../data/portfolioData";
import "../styles/shared.css";
import "./Skills.css";

// cycles through the three blue tag-row tiers defined in shared.css:
// "" (default, mid-tone) -> "primary" (brightest) -> "muted" (deepest)
const ACCENTS = ["", "primary", "muted", ""];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-eyebrow">SKILLS</div>
        <h2 className="section-title">What I work with</h2>

        <div className="skills-grid">
          {skillGroups.map((group, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <div className="skills-group" key={group.title}>
                <h3 className="skills-group__title">{group.title}</h3>
                <ul className={`tag-row ${accent ? `tag-row--${accent}` : ""}`}>
                  {group.items.map((item) => (
                    <li key={item} className="tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}