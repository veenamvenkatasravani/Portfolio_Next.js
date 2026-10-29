
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Git & GitHub",
  "Artificial Intelligent",
  "Machine Learning",
  "Web Development",
  "React native",
  "Visual Studio Code",
];

const projects = [
  {
    number: "01",
    title: "Personal Portfolio",
    description:
      "A responsive portfolio website showcasing my skills, projects, and professional journey.",
    tech: ["Next.js", "TypeScript", "CSS"],
    link: "https://github.com/veenamvenkatasravani/Personal-Portfolio-website",
  },
  {
    number: "02",
    title: "Student Management System",
    description:
      "A student management application designed to organize student records and manage student information through a clean interface.",
    tech: ["React", "JavaScript", "CSS"],
    link: "https://github.com/veenamvenkatasravani/React-Student-Management",
  },
  {
    number: "03",
    title: "Diabetic Retinopathy Detection",
    description:
      "A project focused on detecting diabetic retinopathy from retinal images using image analysis and machine learning techniques.",
    tech: ["Python", "Machine Learning", "Image Processing"],
    link: "https://github.com/veenamvenkatasravani/-Diabetic-Retinopathy-Detection",
  },
];

export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <header className="navbar">
        <a className="logo" href="#home">
          Veenam Venkata Sravani<span>.</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact" className="nav-contact">
            Contact ↗
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero section" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            Welcome to my portfolio
          </div>

          <p className="eyebrow">HELLO, I&apos;M</p>

          <h1>
            Veenam <span>Venkata Sravani</span>
          </h1>

          <h2>
            I build digital experiences
            <br />
            for the <span>modern web.</span>
          </h2>

          <p className="hero-description">
            I&apos;m a developer passionate about creating beautiful,
            responsive, and user-friendly web applications. I turn ideas
            into meaningful digital experiences.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore My Work <span>↗</span>
            </a>
            <a className="button button-secondary" href="#contact">
              Let&apos;s Talk
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/veenamvenkatasravani/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <span className="social-divider">/</span>

            <a
              href="https://www.linkedin.com/in/sravaniveenam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* DEVELOPER VISUAL */}
        <div
          className="hero-visual"
          role="img"
          aria-label="Developer code illustration"
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="code-card">
            <div className="code-header">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <span>developer.tsx</span>
            </div>

            <div className="code-body">
              <p>
                <span className="code-purple">const</span> developer = {"{"}
              </p>
              <p className="indent">
                name: <span className="code-green">&quot;Sravani&quot;</span>,
              </p>
              <p className="indent">
                role: <span className="code-green">&quot;Developer&quot;</span>,
              </p>
              <p className="indent">
                passion: <span className="code-green">&quot;Building&quot;</span>,
              </p>
              <p className="indent">
                creative: <span className="code-orange">true</span>,
              </p>
              <p>{"};"}</p>
              <p className="code-comment">
                // Turning ideas into reality ✨
              </p>
            </div>
          </div>

          <div className="floating-chip chip-top">{"<code />"}</div>
          <div className="floating-chip chip-bottom">
            ✦ Creative thinker
          </div>
          <div className="visual-glow" />
        </div>

        <a className="scroll-indicator" href="#about">
          <span className="scroll-line" />

        </a>
      </section>

      {/* ABOUT */}
      <section className="section content-section" id="about">
        <div className="section-heading">
          <p className="eyebrow">01 / ABOUT ME</p>
          <h2>
            A little about <span>myself.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-mark">
            <span>VS</span>
            <div className="about-mark-caption">
              Developer · Learner 
            </div>
          </div>

          <div className="about-copy">
            <h3>Curiosity drives my code.</h3>

            <p>
              I&apos;m Veenam Venkata Sravani, a developer who enjoys
              learning new technologies and building useful digital
              products. I care about clean code, thoughtful design,
              and creating smooth experiences for users.
            </p>

            <p>
              I&apos;m continuously improving my skills, exploring new
              ideas, and looking for opportunities to turn challenges
              into practical solutions.
            </p>

            <div className="about-facts">
              <div>
                <span className="fact-symbol">✦</span>
                <span>Always learning</span>
              </div>
              <div>
                <span className="fact-symbol">⌘</span>
                <span>Problem solving</span>
              </div>
              <div>
                <span className="fact-symbol">◈</span>
                <span>Creative thinking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section content-section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">02 / MY TOOLKIT</p>
          <h2>
            Skills &amp; <span>technologies.</span>
          </h2>
          <p className="section-description">
            Technologies I use and explore to bring ideas to life.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              <span className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="skill-name">{skill}</span>
              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section content-section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">03 / SELECTED WORK</p>
          <h2>
            Things I&apos;ve <span>built.</span>
          </h2>
          <p className="section-description">
            A selection of projects that represent my learning and
            development journey.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <span className="project-icon">↗</span>
              </div>

              <div className="project-art">
                <span className="project-art-symbol">
                  {project.number === "01"
                    ? "{ }"
                    : project.number === "02"
                      ? "✓"
                      : "◉"}
                </span>
                <span className="project-art-label">
                  PROJECT / {project.number}
                </span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-list">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View project <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* RESUME */}
      <section className="section content-section" id="resume">
        <div className="resume-card">
          <div className="resume-copy">
            <p className="eyebrow">04 / MY RESUME</p>

            <h2>
              Let&apos;s talk about
              <br />
              <span>my journey.</span>
            </h2>

            <p>
              Explore my resume for more details about my education,
              experience, technical skills, and accomplishments.
            </p>

            <a
              className="button button-primary"
              href="/Venkata_Sravani_Resume.pdf"
              download="Venkata_Sravani_Resume.pdf"
            >
              Download Resume <span>↓</span>
            </a>
          </div>

          <div className="resume-visual" aria-hidden="true">
            <div className="resume-paper">
              <div className="resume-paper-top">CURRICULUM VITAE</div>
              <div className="resume-paper-name">V. Sravani</div>
              <div className="resume-paper-line long" />
              <div className="resume-paper-line medium" />
              <div className="resume-paper-subtitle">EDUCATION</div>
              <div className="resume-paper-line long" />
              <div className="resume-paper-line short" />
              <div className="resume-paper-subtitle">SKILLS</div>
              <div className="resume-paper-line medium" />
              <div className="resume-paper-line long" />
              <div className="resume-paper-line short" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        className="section content-section contact-section"
        id="contact"
      >
        <div className="contact-card">
          <p className="eyebrow">05 / GET IN TOUCH</p>

          <h2>
            Have an idea?
            <br />
            Let&apos;s build <span>it together.</span>
          </h2>

          <p>
            Have a project in mind, an opportunity, or just want to say
            hello? I&apos;d love to hear from you.
          </p>

          <a
            className="button button-primary"
            href="mailto:veenamvenkatasravani0@gmail.com"
          >
            Send Me an Email <span>↗</span>
          </a>

          <div className="contact-socials">
            <a
              href="https://github.com/veenamvenkatasravani/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sravaniveenam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a className="logo" href="#home">
          VS<span>.</span>
        </a>

        <p>Designed &amp; built with care by Veenam Venkata Sravani.</p>

        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
