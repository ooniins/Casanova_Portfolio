import Icon from "./Icon";
import { projects } from "../data/portfolioData";
import "../styles/shared.css";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-eyebrow">PROJECTS</div>
        <h2 className="section-title">Things I've built</h2>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-card__bar">
                <span className="project-card__dot" />
                <span className="project-card__path">{project.path}</span>
              </div>

              <div className="project-card__body">
                <div className="project-card__heading">
                  <h3>{project.name}</h3>
                  <span className="project-card__period">{project.period}</span>
                </div>

                {project.badge && <span className="project-card__badge">{project.badge}</span>}

                <p className="project-card__desc">{project.description}</p>

                <ul className="tag-row">
                  {project.stack.map((tech) => (
                    <li key={tech} className="tag">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="project-card__links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Icon name="github" size={15} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <Icon name="external" size={15} /> Live
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}