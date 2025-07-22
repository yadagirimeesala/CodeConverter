import React from "react";
import "./TopBar.css";

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-content">
        <div className="topbar-section"></div>
        
        <div className="topbar-section topbar-center">
          <span className="appname">CodeConverter</span>
        </div>

        <div className="topbar-section topbar-right">
          <a href="#about">About</a>
          <a href="#signup" className="signup-link">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}