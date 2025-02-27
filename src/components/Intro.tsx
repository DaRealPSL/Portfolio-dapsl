import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "../styles/main.css";
import "./ResumeDownload";

const Intro: React.FC = () => {
  const handleExploreClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleWwynmClick = () => {
		const wwynmSection = document.getElementById("wwynm");
		if (wwynmSection) {
			wwynmSection.scrollIntoView({ behavior: "smooth" });
		}
	};

  return (
    <motion.section
      id="intro"
      className="hero-section flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="intro-text">
        {/* Typewriter Effect */}
        <h1 className="hero-title text-4xl font-bold text-white">
          <Typewriter
            words={[
              "Let's Build Something Amazing Together!",
              "Creating, Innovating, and Pushing Boundaries.",
              "Coding the Future, One Line at a Time.",
              "Designing with Purpose, Developing with Passion.",
              "Turning Ideas into Reality.",
              "Engineering the Web, Crafting Experiences.",
              "Breaking Limits, Building Possibilities.",
            ]}
            loop={true}
            cursor
            cursorStyle="▌"
            typeSpeed={65}
            deleteSpeed={50}
            delaySpeed={1750}
          />
        </h1>
        <p className="hero-description text-lg text-gray-300 mt-4">
          I'm Pepijn, a passionate coder and tech enthusiast. Explore my work
          and let's create something amazing!
        </p>

        {/* Explore Button */}
        <div className="button-container">
          <motion.button
            className="explore-button"
            style={{ backgroundColor: "#6a0dad", border: "none" }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#8832cc",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={handleExploreClick}
          >
            Explore My Work
          </motion.button>
          <motion.button
				className="wwynm-btn"
				style={{ backgroundColor: "#6a0dad", border: "none" }}
				whileHover={{
					scale: 1.1,
					backgroundColor: "#8832cc",
				}}
				whileTap={{ scale: 0.95 }}
				transition={{ duration: 0.2 }}
				onClick={handleWwynmClick}
			>

			</motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default Intro;
