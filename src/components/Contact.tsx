import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import validator from "validator";

import "../styles/main.css";

import emailjs from "@emailjs/browser";

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
      const response = await fetch("/utils/offensive.txt");
      const text = await response.text();
      const terms = text
        .split("\n")
        .map((term) => term.trim().toLowerCase())
        .filter((term) => term.length > 0);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        success: false,
      });
      return;
    }

    const offensiveList = offensiveTerms.map((term) => term.trim());

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

    setStatus({ message: "Waiting for server response...", success: false });

    try {
      const res = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      );
      console.log(res.text);
      setStatus({ message: "Email sent successfully!", success: true });
      setFormData({ name: "", email: "", message: "", honeypot: "" });
    } catch (e) {
      console.error("EmailJS error:", e);
      setStatus({ message: "Failed to send email.", success: false });
    }
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
