import React from "react";
import "../styles/main.css";

const Privacy: React.FC = () => {
  return (
    <div className="privacy-page">
      <h1>Privacy Policy</h1>
      <p>
        This website respects your privacy. No personal data is collected, stored, or shared when you visit this site.
      </p>

      <h2>Cookies & Tracking</h2>
      <p>
        This site does not use cookies, analytics, or third-party tracking services.
      </p>

      <h2>External Links</h2>
      <p>
        This website may contain links to external sites. I am not responsible for the privacy practices of those websites.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        This Privacy Policy is subject to change, but since no data is collected, there are no significant privacy concerns.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions, feel free to reach out.
      </p>
    </div>
  );
};

export default Privacy;