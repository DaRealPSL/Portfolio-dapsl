import React from "react";
import "../styles/main.css";

const Terms: React.FC = () => {
  return (
    <div className="terms-page container">
      <h1 className="terms-title">Terms of Use</h1>
      <p className="terms-text">
        By accessing this website, you agree to these terms. If you do not agree, please refrain from using the site.
      </p>

      <h2 className="terms-heading">Use of Content</h2>
      <p className="terms-text">
        All content on this website, including text, images, and code, is owned by me unless stated otherwise. You may not copy, modify, or redistribute content without permission.
      </p>

      <h2 className="terms-heading">External Links</h2>
      <p className="terms-text">
        This site may contain links to external websites. I am not responsible for their content or policies.
      </p>

      <h2 className="terms-heading">Disclaimer</h2>
      <p className="terms-text">
        This website is provided "as is" without any guarantees of availability, accuracy, or security.
      </p>

      <h2 className="terms-heading">Changes to These Terms</h2>
      <p className="terms-text">
        These terms may be updated at any time. Continued use of the site implies acceptance of the latest version.
      </p>

      <h2 className="terms-heading">Contact</h2>
      <p className="terms-text">
        For questions, contact me at <a href="mailto:pepijnl.snoeren0@gmail.com" className="terms-link">pepijnl.snoeren0@gmail.com</a>.
      </p>
    </div>
  );
};

export default Terms;
