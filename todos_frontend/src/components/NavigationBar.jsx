import React from 'react';

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <button className="nav-item active">All</button>
      <button className="nav-item">Active</button>
      <button className="nav-item">Completed</button>
    </nav>
  );
};

export default NavigationBar;
