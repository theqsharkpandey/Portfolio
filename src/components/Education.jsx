import { motion } from 'framer-motion';

const education = [
    {
        title: 'Bachelor of Computer Science and Engineering',
        institution: 'Bennett University, Greater Noida',
        duration: '2022 – 2026',
    },
    {
        title: 'Intermediate (ISC)',
        institution: 'Sacred Heart Convent Higher Secondary School, Mathura',
        duration: '2022',
    },
    {
        title: 'High School (ICSE)',
        institution: 'Sacred Heart Convent Higher Secondary School, Mathura',
        duration: '2020',
    },
];

const awards = [
    {
        title: 'Heights Institute Mathura Scholarship',
        detail: 'Awarded for securing the highest marks in Computer Science in Std. XII (ISC).',
    },
    {
        title: 'Top 3 Rank – CISCE Board (Mathura District)',
        detail: 'Recognized in local newspapers for ranking among the top 3 students in the ISC board in Mathura district.',
    },
];

const certifications = [
    'Neural Networks and Deep Learning — DeepLearning.AI (Coursera)',
    'NLP with Classification & Vector Spaces — DeepLearning.AI (Coursera)',
    'Delta — Full Stack Web Development — Apna College',
];

const cardStyle = {
    padding: '2rem',
    borderRadius: '8px',
    borderLeft: '4px solid var(--accent-color)',
    marginBottom: '1.5rem',
};

const Education = () => {
    return (
        <section id="education" className="section container">
            {/* Education */}
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Education
            </motion.h2>

            {education.map((edu, i) => (
                <motion.div
                    key={i}
                    className="glass-card"
                    style={cardStyle}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.15 }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                        <h3 style={{ margin: 0 }}>{edu.title}</h3>
                        <span style={{ color: 'var(--accent-color)', fontWeight: 600 }}>{edu.duration}</span>
                    </div>
                    <p style={{ fontSize: '0.95rem', marginTop: '0.5rem' }}>{edu.institution}</p>
                </motion.div>
            ))}

            {/* Awards */}
            <motion.h2
                className="section-title"
                style={{ marginTop: '3rem' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Awards & Achievements
            </motion.h2>

            {awards.map((award, i) => (
                <motion.div
                    key={i}
                    className="glass-card"
                    style={{ ...cardStyle, borderLeftColor: '#FFD700' }}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.15 }}
                >
                    <h3 style={{ margin: 0, marginBottom: '0.5rem' }}>🏆 {award.title}</h3>
                    <p style={{ margin: 0 }}>{award.detail}</p>
                </motion.div>
            ))}

            {/* Certifications */}
            <motion.h2
                className="section-title"
                style={{ marginTop: '3rem' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Certifications
            </motion.h2>

            {certifications.map((cert, i) => (
                <motion.div
                    key={i}
                    className="glass-card"
                    style={{ ...cardStyle, borderLeftColor: '#2DE1FC' }}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.15 }}
                >
                    <p style={{ margin: 0, fontWeight: 500, color: 'var(--text-primary)' }}>📜 {cert}</p>
                </motion.div>
            ))}
        </section>
    );
};

export default Education;
