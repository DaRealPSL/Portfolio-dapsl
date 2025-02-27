// TODO: Update Contact.tsx to make sure vercel can find the "offensive.txt" file
//       and actually read / execute the code based around that file.
//       such as:
//       flagging names & email
//       
//       To do this, we should only change the path at line 34 at the "fetch()".
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "emailjs-com";
import validator from "validator";

import "../styles/main.css";

const containsOffensiveTerms = (input: string, offensiveList: string[]) => {
  return offensiveList.some((term) => input.toLowerCase().includes(term));
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });
  const [status, setStatus] = useState<{
    message: string;
    success: boolean;
  } | null>(null);
  const [offensiveTerms, setOffensiveTerms] = useState<string[]>([]);

  useEffect(() => {
    const loadOffensiveTerms = async () => {
      const response = await fetch("/src/utils/offensive.txt");
      const text = await response.text();
      const terms = text
        .split("\n")
        .map((term) => term.trim().toLowerCase())
        .filter((term) => term.length > 0); //ignore empty lines

      setOffensiveTerms(terms);

      if (response.ok) {
        console.log("Fetched offensive.txt correctly");
      } else {
        console.error("Did not fetch offensive.txt correctly");
      }
    };

    loadOffensiveTerms();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.honeypot !== "") {
      setStatus({
        message: "Bot detected! Submission blocked.",
        success: false,
      });
      return;
    }

    if (offensiveTerms.length === 0) {
      setStatus({
        message: "Error: Offensive words not loaded yet.",
        success: false
      });
    }

    //Load terms from list
    const offensiveList = offensiveTerms.map((term) => term.trim());

    //Check for offensive words in name and full email
    if (
      containsOffensiveTerms(formData.name, offensiveList) ||
      containsOffensiveTerms(formData.email.toLowerCase(), offensiveList)
    ) {
      setStatus({
        message: "Offensive language detected! Submission blocked.",
        success: false,
      });
      return;
    }

    if (!validator.isEmail(formData.email)) {
      setStatus({ message: "Invalid email address", success: false });
      return;
    }
    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.message.trim() === ""
    ) {
      setStatus({ message: "All fields are required", success: false });
      return;
    }

    //setStatus to indicate waiting for the server
    setStatus({ message: "Waiting for server response...", success: false });

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then((response) => {
        console.log("Email sent successfully", response);
        setStatus({
          message: "Email sent successfully",
          success: true,
        });
      })
      .catch((error) => {
        console.error("Error sending email", error);
        setStatus({
          message: "Something went wrong! Cannot submit form.",
          success: false,
        });
      });
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="contact-section motion-section-main"
    >
      <h2 className="contact-title">Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        {status && (
          <div
            className={`status-message ${
              status.message === "Waiting for server response..."
                ? "loading"
                : status.success
                ? "success"
                : "error"
            }`}
          >
            {status.message}
          </div>
        )}
        <input
          type="text"
          name="honeypot"
          id="honeypot"
          style={{
            position: "absolute",
            left: "-9999px",
            opacity: 0,
            pointerEvents: "none",
          }}
          autoComplete="off"
          onChange={handleChange}
          value={formData.honeypot}
          tabIndex={-1}
        />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="contact-input"
          onChange={handleChange}
          value={formData.name}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="contact-input"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="contact-textarea"
          onChange={handleChange}
          value={formData.message}
          required
        />
        <button type="submit" className="contact-button">
          Send
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
