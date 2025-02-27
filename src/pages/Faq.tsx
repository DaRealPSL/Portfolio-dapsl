import React from "react";
import "../styles/main.css";

const Faq: React.FC = () => {
  return (
    <div className="faq-page container">
      <h1 className="faq-title">Frequently Asked Questions</h1>

      <h2 className="faq-heading">What is this website about?</h2>
      <p className="faq-text">
        This website serves as my personal portfolio, showcasing my projects, skills, and experience.
      </p>

      <h2 className="faq-heading">How can I contact you?</h2>
      <p className="faq-text">
        You can <a href="mailto:pepijnl.snoeren0@gmail.com" className="faq-link">email me</a> for inquiries or collaborations.
      </p>

      <h2 className="faq-heading">Do you collect any personal data?</h2>
      <p className="faq-text">
        No, this website does not collect, store, or share any personal data.
      </p>

      <h2 className="faq-heading">Can I use your projects?</h2>
      <p className="faq-text">
        Almost all of my projects may be open-source. Check their respective repositories for licensing details.
      </p>

      <h2 className="faq-heading">Will there be updates to this website?</h2>
      <p className="faq-text">
        Yes, I regularly update my portfolio with new projects and improvements. This will always be, unless I state otherwise.
      </p>
    </div>
  );
};

export default Faq;
