import Icon from "./Icon";
import { useTheme } from "../hooks/useTheme";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
    >
      <Icon name={isLight ? "moon" : "sun"} size={16} />
    </button>
  );
}