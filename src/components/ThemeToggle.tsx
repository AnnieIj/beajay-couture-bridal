import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button
      id="theme-toggle-btn"
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-200 cursor-pointer shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B3F] focus-visible:ring-offset-2 ${
        isDark
          ? 'bg-[#181716] text-[#E6C875] border border-white/15 hover:border-[#C59B3F] hover:bg-[#22201E] focus-visible:ring-offset-[#0C0C0B]'
          : 'bg-white text-[#856122] border border-[#DDD4C1] hover:border-[#C59B3F] hover:bg-[#FDFBF7] focus-visible:ring-offset-[#FCFAF7]'
      } ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 sm:w-[18px] sm:h-[18px] transition-transform duration-200 hover:rotate-45" aria-hidden="true" />
      ) : (
        <Moon className="w-4 h-4 sm:w-[18px] sm:h-[18px] transition-transform duration-200 hover:-rotate-12" aria-hidden="true" />
      )}
      <span className="sr-only">{label}</span>
    </button>
  );
};
