import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";


const Footer: React.FC = () => {
  return (
    <footer className="footer motion-section-main">
      <strong>
        &copy; {new Date().getFullYear()} DaPSL. All rights reserved.
      </strong>
      <div className="footer-links">
        <Link to="/terms" className="footer-link terms-link">
          Terms of Service
        </Link>
        <Link to="/privacy" className="footer-link privacy-link">
          Privacy Policy
        </Link>
        <Link to="https://github.com/IAmThePSL/Portfolio-dapsl/" className="footer-link source-code-link">
          View Source code 
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
