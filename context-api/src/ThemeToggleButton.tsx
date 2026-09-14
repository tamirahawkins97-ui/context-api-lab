import { useTheme } from './context/ThemeContext';

export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
      <span className="tech-indicator"></span>
      <span className="tech-label">{theme.toUpperCase()}</span>
    </button>
  );
};
