const projectData = [
  {
    name: 'Person Detection & Smart CCTV Surveillance',
    description:
      'AI-driven real-time person detection and reporting system designed for smart CCTV surveillance. The system detects people from video streams, records detection information, and can generate alerts for restricted-area monitoring.',
    tech: ['Python', 'Flask', 'OpenCV', 'TensorFlow', 'SSD MobileNet', 'PostgreSQL', 'ChromaDB', 'LangChain', 'Google Gemini'],
    github: 'https://github.com/rajsprajapati',
    demo: '#',
  },
  {
    name: 'Personal Book Manager',
    description:
      'A responsive book manager for organizing and tracking a personal library with a modern interface.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'PostgreSQL'],
    github: 'https://github.com/rajsprajapati',
    demo: '#',
  },
  {
    name: 'FitZone',
    description:
      'A modern fitness landing page designed to showcase gym services and brand identity with a clean responsive layout.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/rajsprajapati',
    demo: '#',
  },
  {
    name: 'Gym Management Application',
    description:
      'A concept application for gym administrators to manage members, inventory, and sales through a streamlined system.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Sequelize'],
    github: 'https://github.com/rajsprajapati',
    demo: '#',
  },
  {
    name: 'Human Rights Adviser — RAG Application',
    description:
      'An AI-powered retrieval-augmented generation app built to answer questions from a curated knowledge base.',
    tech: ['Python', 'LangChain', 'ChromaDB', 'Google Gemini', 'RAG'],
    github: 'https://github.com/rajsprajapati',
    demo: '#',
  },
  {
    name: 'Book Review API',
    description:
      'A backend API project demonstrating RESTful endpoints, database interaction, and clean API architecture.',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB'],
    github: 'https://github.com/rajsprajapati',
    demo: '#',
  },
];

const skills = {
  backend: ['Node.js', 'Express.js', 'REST APIs', 'Python', 'Flask', 'JavaScript'],
  frontend: ['React.js', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS', 'Vite'],
  database: ['PostgreSQL', 'MongoDB', 'pgAdmin', 'Sequelize'],
  ai: ['TensorFlow', 'OpenCV', 'YOLO', 'SSD MobileNet', 'ChromaDB', 'LangChain', 'Google Gemini', 'RAG'],
  tooling: ['Git', 'GitHub', 'Docker', 'Postman', 'Vercel', 'Render'],
};

const services = [
  'REST API development',
  'Node.js backend development',
  'Full-stack web applications',
  'PostgreSQL database design',
  'Authentication and authorization',
  'AI / RAG applications',
  'React / Next.js websites',
  'Database integration and deployment',
];

export default function App() {
  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#home" className="brand">
            Raj<span>Prajapati</span>
          </a>

          <nav className="nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="/Raj-Prajapati-Resume.txt" className="btn btn-primary" download>
            Resume
          </a>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Backend Developer / Full-Stack Developer</p>
              <h1>
                I build reliable digital products that solve real-world problems.
              </h1>
              <p className="lead">
                I’m Raj Prajapati, a backend-focused developer with hands-on experience in
                Node.js, Express.js, PostgreSQL, Python, AI integrations, and full-stack
                application development.
              </p>

              <div className="cta-row">
                <a href="#projects" className="btn btn-primary">
                  View Projects
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Contact Me
                </a>
              </div>

              <div className="stats-grid">
                <div>
                  <strong>2+</strong>
                  <span>Years learning & building</span>
                </div>
                <div>
                  <strong>6+</strong>
                  <span>Projects delivered</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>Driven by problem-solving</span>
                </div>
              </div>
            </div>

            <div className="hero-panel">
              <div className="panel-card">
                <p className="panel-label">Currently</p>
                <h3>Backend Developer</h3>
                <p>Working at LPO Holidays, contributing to operations-driven backend systems.</p>

                <ul>
                  <li>API development</li>
                  <li>Database integration</li>
                  <li>Scalable backend architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">About Me</p>
              <h2>Developer with backend engineering and AI curiosity.</h2>
            </div>

            <div className="about-grid">
              <div>
                <p>
                  I’m a Backend Developer focused on building scalable, secure, and reliable
                  web applications and APIs. I work primarily with Node.js, Express.js,
                  PostgreSQL, React, and modern JavaScript technologies.
                </p>
                <p>
                  I enjoy solving real-world problems through clean backend architecture, REST
                  APIs, database design, and full-stack development. I am continuously
                  improving my skills in system design, DSA, cloud technologies, and
                  AI-powered applications.
                </p>
              </div>

              <div className="info-box">
                <h3>Location</h3>
                <p>Virar, Maharashtra, India</p>

                <h3>Focus</h3>
                <p>Backend engineering, APIs, databases, AI, and full-stack products.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section alt-bg">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Skills</p>
              <h2>Technologies I work with.</h2>
            </div>

            <div className="skill-grid">
              {Object.entries(skills).map(([category, items]) => (
                <div className="skill-card" key={category}>
                  <h3>{category}</h3>
                  <div className="chip-list">
                    {items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Projects</p>
              <h2>Some of my recent work.</h2>
            </div>

            <div className="project-grid">
              {projectData.map((project) => (
                <article className="project-card" key={project.name}>
                  <div className="project-header">
                    <h3>{project.name}</h3>
                  </div>

                  <p>{project.description}</p>

                  <div className="chip-list small">
                    {project.tech.map((tech) => (
                      <span className="chip" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Demo
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section alt-bg">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Experience</p>
              <h2>Professional background.</h2>
            </div>

            <div className="experience-box">
              <div className="experience-top">
                <h3>Backend Developer</h3>
                <span>LPO Holidays</span>
              </div>

              <p className="experience-role">Current Role</p>
              <p>
                Working as a backend developer at a travel company, primarily contributing to
                the operations module. Responsibilities include backend development, API
                creation, database integration, and modern web technology implementation.
              </p>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Education & Growth</p>
              <h2>Constantly learning and improving.</h2>
            </div>

            <div className="education-box">
              <p>
                I’m investing heavily in areas like backend architecture, system design,
                database optimization, data structures and algorithms, and AI/ML-based
                application development.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="section alt-bg">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Services</p>
              <h2>What I can build for you.</h2>
            </div>

            <ul className="service-list">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let’s build something meaningful together.</h2>
              <p>
                I’m open to backend development, full-stack work, API projects, and AI-driven
                application opportunities.
              </p>
            </div>

            <div className="contact-card">
              <a href="mailto:raj.sbprj@gmail.com">raj.sbprj@gmail.com</a>
              <a href="tel:+919999999999">+91 99999 99999</a>
              <a href="https://www.linkedin.com/in/raj-prajapati-575661244/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/rajsprajapati/portfolio" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>© 2025 Raj Prajapati</p>
          <a href="#home">Back to top</a>
        </div>
      </footer>
    </>
  );
}
