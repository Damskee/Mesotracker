import React from 'react';
import { useTheme } from '../context/ThemeContext';

const TopNavBar: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-800 shadow">
      <button onClick={onMenuClick} className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
        <span className="material-icons">menu</span>
      </button>
      <span className="font-bold text-lg tracking-tight">Meso Builder</span>
      <button onClick={toggleTheme} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
        <span className="material-icons">{darkMode ? 'dark_mode' : 'light_mode'}</span>
      </button>
    </nav>
  );
};

export default TopNavBar;
