import React from "react";
import "../styles/main.css";

const Privacy: React.FC = () => {
  return (
    <div className="privacy-page container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-text">
        This website respects your privacy. No personal data is collected, stored, or shared when you visit this site.
      </p>

      <h2 className="privacy-heading">Cookies & Tracking</h2>
      <p className="privacy-text">
        This site does not use cookies, analytics, or third-party tracking services.
      </p>

      <h2 className="privacy-heading">External Links</h2>
      <p className="privacy-text">
        This website may contain links to external sites. I am not responsible for the privacy practices of those websites.
      </p>

      <h2 className="privacy-heading">Changes to This Policy</h2>
      <p className="privacy-text">
        This Privacy Policy is subject to change, but since no data is collected, there are no significant privacy concerns.
      </p>

      <h2 className="privacy-heading">Contact</h2>
      <p className="privacy-text">
        If you have any questions, feel free to <a href="mailto:pepijnl.snoeren@gmail.com" className="privacy-link">reach out</a>.
      </p>
    </div>
  );
};

export default Privacy;
