import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import profileImg from "../assets/profile.jpg";
import { siteConfig } from "../data/siteData";

const PixelTransition = lazy(() => import("./PixelTransition"));

const Hero = () => {
  const roles = siteConfig.roleRotation;
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setShouldReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) {
      setText(roles[roleIndex]);
      return;
    }

    const handleTyping = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
        setSpeed(50);
      } else {
        setText(currentRole.substring(0, text.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, roles, speed, shouldReduceMotion]);

  return (
    <section id="hero" className="section hero-section">
      <div className="container hero-layout">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-title"
          >
            Kushagra Pandey
          </motion.h1>
          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I am a {text}
            {!shouldReduceMotion && <span className="hero-cursor">&nbsp;</span>}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-actions"
          >
            <a href="/#projects" className="btn btn-primary">
              View Work
            </a>
            <Link to="/contact" className="btn-secondary">
              Contact Me
            </Link>
          </motion.div>
        </div>

        <div className="hero-media">
          <Suspense
            fallback={
              <img
                src={profileImg}
                alt="Profile"
                className="hero-image-fallback"
              />
            }
          >
            <PixelTransition
              firstContent={
                <img
                  src={profileImg}
                  alt="Profile"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
                <div className="hero-pixel-back">
                  <p className="hero-greeting">Hello😊</p>
                </div>
              }
              gridSize={8}
              pixelColor="#fff"
              once={shouldReduceMotion}
              animationStepDuration={shouldReduceMotion ? 0 : 0.4}
              className="custom-pixel-card"
              style={{ width: "100%", aspectRatio: "1/1" }}
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Hero;
