import React from "react";
import "../styles/main.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="/" className="logo-link">
          <img
            src="/dapsl-high-resolution-logo-no-text-dark.jpg"
            alt="DaPSL Logo"
            className="logo-img"
          />
        </a>
        <a href="/" className="logo-link">
          <div className="logo">DaPSL's Portfolio</div>
        </a>

        <div className="nav-links-container">
          <div className="nav-links-left">
            <a href="#intro" className="nav-link-left">
              Home
            </a>
            <a href="#skills" className="nav-link-left">
              Skills
            </a>
            <a href="#projects" className="nav-link-left">
              Projects
            </a>
            <a href="#contact" className="nav-link-left">
              Contact
            </a>
          </div>

          <div className="nav-links-right">
            <a href="https://github.com/IAmThePSL" className="nav-link-right" target="_blank">
              <img
                src="/github-128.svg"
                alt="Github"
                className="nav-link-logo"
              />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
