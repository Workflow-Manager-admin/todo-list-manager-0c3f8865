import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const AppBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <header className="app-bar">
      <h1>Todo List</h1>
      <button 
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </header>
  );
};

export default AppBar;
