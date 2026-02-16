import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navItems, siteConfig } from "../data/siteData";
import { trackEvent } from "../lib/analytics";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const [hidden, setHidden] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (shouldReduceMotion) {
      setHidden(false);
      return;
    }
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.35,
        ease: "easeInOut",
      }}
      className="site-header"
    >
      <nav className="container site-nav">
        <Link to="/" className="site-logo">
          <span className="logo-accent">&lt;</span>
          {siteConfig.name.split(" ")[0]}
          <span className="logo-accent">/&gt;</span>
        </Link>

        {/* Desktop Nav */}
        {!isMobile && (
          <ul className="nav-links">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={`/${item.hash}`} className="nav-link">
                  {item.name}
                </Link>
              </motion.li>
            ))}
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <motion.a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("resume_click", { source: "header_desktop" })
                }
                className="btn-primary header-resume-btn"
                whileHover={{
                  boxShadow: "0 0 15px rgba(255,255,255,0.5)",
                  textShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
                  borderRadius: "30px",
                  color: "white",
                }}
              >
                Resume
              </motion.a>
            </motion.li>
          </ul>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={toggleMenu}
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="mobile-menu-button"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        )}

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMobile && isOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mobile-overlay"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={`/${item.hash}`}
                  onClick={closeMenu}
                  className="mobile-overlay-link"
                >
                  {item.name}
                </Link>
              ))}
              <motion.a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent("resume_click", { source: "header_mobile" });
                  closeMenu();
                }}
                className="btn-primary mobile-resume-btn"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.55)",
                  borderRadius: "30px",
                  color: "white",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
