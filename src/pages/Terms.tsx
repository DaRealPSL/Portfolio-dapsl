import React from "react";
import "../styles/main.css";

const Terms: React.FC = () => {
  return (
    <div className="terms-page">
      <h1>Terms of Use</h1>
      <p>
        By accessing this website, you agree to these terms. If you do not agree, please refrain from using the site.
      </p>

      <h2>Use of Content</h2>
      <p>
        All content on this website, including text, images, and code, is owned by me unless stated otherwise. You may not copy, modify, or redistribute content without permission.
      </p>

      <h2>External Links</h2>
      <p>
        This site may contain links to external websites. I am not responsible for their content or policies.
      </p>

      <h2>Disclaimer</h2>
      <p>
        This website is provided "as is" without any guarantees of availability, accuracy, or security.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        These terms may be updated at any time. Continued use of the site implies acceptance of the latest version.
      </p>

      <h2>Contact</h2>
      <p>
        For questions, contact me at <a target="_blank" href="mailto:pepijnl.snoeren0@gmail.com">pepijnl.snoeren0@gmail.com</a>.
      </p>
    </div>
  );
};

export default Terms;