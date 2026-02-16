import { motion } from "framer-motion";

const categories = [
  {
    label: "Languages",
    items: [
      { name: "Python", icon: "🐍" },
      { name: "JavaScript (ES6+)", icon: "⚡" },
      { name: "Java", icon: "☕" },
      { name: "C++", icon: "⚙️" },
      { name: "SQL", icon: "🗄️" },
    ],
  },
  {
    label: "Web Development",
    items: [
      { name: "React", icon: "⚛️" },
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚀" },
      { name: "MongoDB", icon: "🍃" },
      { name: "HTML5 / CSS3", icon: "🌐" },
      { name: "RESTful APIs", icon: "🔗" },
    ],
  },
  {
    label: "AI / ML",
    items: [
      { name: "Scikit-learn", icon: "🤖" },
      { name: "Pandas", icon: "🐼" },
      { name: "NumPy", icon: "🔢" },
      { name: "Jupyter", icon: "📓" },
      { name: "Google Colab", icon: "☁️" },
    ],
  },
  {
    label: "Dev Tools",
    items: [
      { name: "Git / GitHub", icon: "🔧" },
      { name: "VS Code", icon: "💻" },
      { name: "IntelliJ IDEA", icon: "🧠" },
      { name: "PyCharm", icon: "🐍" },
    ],
  },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="section container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Tech Stack
      </motion.h2>

      {categories.map((cat, catIdx) => (
        <div key={catIdx} style={{ marginBottom: "2.5rem" }}>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{
              color: "var(--accent-color)",
              marginBottom: "1rem",
              fontSize: "1.2rem",
              textAlign: "center",
            }}
          >
            {cat.label}
          </motion.h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "1.5rem",
              textAlign: "center",
            }}
          >
            {cat.items.map((tech, index) => (
              <motion.div
                key={index}
                className="stack-item glass-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "var(--accent-color)",
                  background: "rgba(168, 85, 247, 0.1)",
                }}
                style={{
                  padding: "2rem",
                  borderRadius: "8px",
                  border: "1px solid transparent",
                  cursor: "default",
                }}
              >
                <span
                  style={{
                    fontSize: "2rem",
                    display: "block",
                    marginBottom: "0.75rem",
                  }}
                >
                  {tech.icon}
                </span>
                <h4 style={{ margin: 0, fontSize: "0.95rem" }}>{tech.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default TechStack;
