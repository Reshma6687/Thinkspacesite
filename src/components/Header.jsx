import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import "./Header.css";
import logo_light from "../assets/daylight.png";
import logo_dark from "../assets/night-mode.png";
import logo from "../assets/skill-development.png";

const Header = () => {
  const [theme, setTheme] = useState("light");

  const toggleMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Apply theme to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`navbar ${theme}`}>
      <div className="logo-group">
        <img src={logo} alt="ThinkSpace Logo" />
        <h1>THINKSPACE</h1>
      </div>

      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/pomodoro">POMODORO</Link></li>
        <li><Link to="/tips">GROW ME</Link></li>
        <li><Link to="/task">TASK</Link></li>
      </ul>

      <div className="theme-icon">
        <img
          src={theme === "light" ? logo_dark : logo_light}
          alt="Theme Toggle"
          onClick={toggleMode}
        />
      </div>
    </div>
  );
};

export default Header;
