export const siteConfig = {
  name: "Kushagra Pandey",
  title: "Kushagra Pandey | Full-Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Kushagra Pandey — Full-Stack Developer and AI enthusiast building scalable web apps and intelligent systems.",
  url: "https://kushagra-portfolio.vercel.app",
  email: "kushagrapandey3000@gmail.com",
  location: "Greater Noida, India",
  resumeUrl:
    "https://drive.google.com/file/d/16qDQkFVV712VmooKR8KBj3znquG4rgmM/view?usp=sharing",
  ogImage: "/og-image.svg",
  roleRotation: ["Full-Stack Developer", "AI Enthusiast", "CSE Student"],
};

export const navItems = [
  { name: "About", hash: "#about" },
  { name: "Education", hash: "#education" },
  { name: "Projects", hash: "#projects" },
  { name: "Tech Stack", hash: "#tech-stack" },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/theqsharkpandey",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/kushagrapandey",
  },
  {
    label: "Email",
    href: "mailto:kushagrapandey3000@gmail.com",
  },
];

export const projects = [
  {
    title: "The Leasing World",
    desc: "Built and deployed a full-stack commercial real estate platform with RBAC + JWT authentication, Cloudinary media uploads, REST APIs, and a lead management system.",
    tags: ["Next.js", "Node.js", "MongoDB", "JWT", "Cloudinary"],
    github: "https://github.com/theqsharkpandey/Leasing_v1",
    demo: "https://leasingworld.vercel.app/",
  },
  {
    title: "Wanderlust",
    desc: "Built a full-stack Airbnb-inspired platform with secure Passport.js authentication, CRUD listings, Cloudinary image uploads, Leaflet + Geoapify maps, reviews, search, filters, and a responsive Bootstrap UI.",
    tags: ["Node.js", "Express", "MongoDB", "EJS", "Passport.js"],
    github: "https://github.com/theqsharkpandey/Wanderlust",
    demo: null,
  },
  {
    title: "CardioCare",
    desc: "Built a cardiovascular risk prediction system using 15+ ML & DL models (LR, RF, XGBoost, ANN). Performed preprocessing, feature selection, and evaluation to analyze overfitting and improve model generalization. Presented at ICCCNT 2025 (IEEE), IIT Indore.",
    tags: ["Python", "Scikit-learn", "TensorFlow", "Keras", "XGBoost"],
    github: "https://github.com/theqsharkpandey/CardioCare",
    demo: null,
  },
];
