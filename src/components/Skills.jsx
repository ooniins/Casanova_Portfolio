import { skillGroups } from "../data/portfolioData";

const ACCENTS = ["amber", "teal", "rose", "amber"];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-eyebrow">SKILLS</div>
        <h2 className="section-title">What I work with</h2>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div className="skills-group" key={group.title}>
              <h3 className="skills-group__title">{group.title}</h3>
              <ul className={`tag-row tag-row--${ACCENTS[i % ACCENTS.length]}`}>
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}