import { useState } from "react";
import Icon from "./Icon";
import { useActiveSection } from "../hooks/useActiveSection";
import { useClock } from "../hooks/useClock";
import { profile } from "../data/portfolioData";
import "./Navbar.css";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const active = useActiveSection(NAV_ITEMS.map((item) => item.id));
  const { time } = useClock();
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a
          href="#about"
          className="navbar__logo"
          onClick={(e) => {
            e.preventDefault();
            handleNav("about");
          }}
        >
          <span className="navbar__logo-mark">
            {profile.avatarUrl ? (
              <img src={profile.avatarUrl} alt={profile.name} className="navbar__logo-img" />
            ) : (
              profile.avatarInitial
            )}
          </span>
          <span className="navbar__logo-text">{profile.name}</span>
        </a>

        <nav className={`navbar__links ${open ? "is-open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`navbar__link ${active === item.id ? "is-active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleNav(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__status">
          <span className="navbar__dot" aria-hidden="true" />
          <span className="navbar__clock">{time}</span>
        </div>

        <button
          className="navbar__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}