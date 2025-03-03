import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/main.css";

const WWYNM = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      id="wwynm"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
      }}
      className="wwynm-section motion-section-main"
    >
      <h2 className="wwynm-title">Why Would You Need Me?</h2>

      <div className="wwynm-list">
        <div className="wwynm-item">
          <h3>Passionate About Technology</h3>
          <p>
            I'm driven by a deep love for technology and innovation. Whether it's
            building applications or solving complex problems, I'm always up for
            the challenge.
          </p>
        </div>
        <div className="wwynm-item">
          <h3>Experience in Multiple Technologies</h3>
          <p>
            From programming languages like JavaScript and Python to frameworks like
            React and Node.js, I have hands-on experience across a range of technologies.
            No project is too big or too small for me!
          </p>
        </div>
        <div className="wwynm-item">
          <h3>Problem-Solving Mindset</h3>
          <p>
            Every challenge is an opportunity for me to innovate and find creative
            solutions. I approach problems methodically and efficiently, ensuring that
            the end result is always the best.
          </p>
        </div>
        <div className="wwynm-item">
          <h3>Open to Collaboration</h3>
          <p>
            Whether it's a solo project or working with a team, I thrive in collaborative
            environments and am always open to new ideas and feedback to ensure the best
            outcomes.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default WWYNM;
