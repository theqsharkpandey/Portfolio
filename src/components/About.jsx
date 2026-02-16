import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section container">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                About Me
            </motion.h2>
            <motion.div
                className="about-content"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', fontSize: '1.1rem', lineHeight: '1.8' }}
            >
                <p>
                    Highly motivated Computer Science and Engineering student at <strong style={{ color: 'var(--text-primary)' }}>Bennett University</strong>, specializing in <strong style={{ color: 'var(--accent-color)' }}>Full Stack Development</strong> (Node.js, Express, React) and <strong style={{ color: 'var(--accent-color)' }}>Artificial Intelligence / Machine Learning</strong> (Python, Scikit-learn, Deep Learning).
                </p>
                <p>
                    Proven ability to develop scalable, full-stack applications and implement data-driven predictive models. Seeking a challenging role as a Software Development Intern/Engineer where analytical and programming skills can build impactful, modern systems.
                </p>
            </motion.div>
        </section>
    );
};

export default About;
