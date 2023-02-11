import React, { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`navbar ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="navbar-container">
        <a href="#" className="navbar-brand">
          Hackville
        </a>
        <div className="navbar-toggler">
          <label className="switch">
            <input type="checkbox" onClick={toggleDarkMode} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
