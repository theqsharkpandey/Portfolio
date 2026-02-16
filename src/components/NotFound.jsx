import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
    useEffect(() => {
        document.title = "404 - Page Not Found | Kushagra Pandey";
    }, []);

    return (
        <section className="section error-page">
            <div className="container error-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="error-content"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="error-code"
                    >
                        404
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="error-title"
                    >
                        Page Not Found
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="error-message"
                    >
                        Looks like this page got lost in the digital void. The page you're
                        looking for doesn't exist or may have been moved.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="error-actions"
                    >
                        <Link to="/" className="btn btn-primary">
                            Back to Home
                        </Link>
                        <Link to="/contact" className="btn-secondary">
                            Contact Me
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="error-suggestions"
                    >
                        <p>Looking for something specific? Try these:</p>
                        <ul className="error-links">
                            <li>
                                <Link to="/#about">About Me</Link>
                            </li>
                            <li>
                                <Link to="/#projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/#tech-stack">Tech Stack</Link>
                            </li>
                            <li>
                                <Link to="/#education">Education</Link>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default NotFound;
