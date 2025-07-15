import React, { useState, useEffect } from 'react';
import TodoPage from './pages/TodoPage';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="App">
      <TodoPage />
    </div>
  );
}

export default App;
