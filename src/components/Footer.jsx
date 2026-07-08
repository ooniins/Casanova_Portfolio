import { profile } from "../data/portfolioData";
import { useClock } from "../hooks/useClock";

export default function Footer() {
  const { date } = useClock();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="footer__date">{date}</span>
      </div>
    </footer>
  );
}