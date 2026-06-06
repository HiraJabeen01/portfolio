import profileImage from '../assets/hira-profile.png';
import skillImage from '../assets/Skills.png';

import { FiMail, FiLinkedin } from "react-icons/fi";

const services = [
  {
    title: 'Launch Your Product',
    text: 'From MVPs to full-scale platforms, I help startups bring ideas to market with modern, scalable web applications.',
    items: [
      'SaaS Development',
      'MVP Delivery',
      'Custom Platforms',
      'API Development',
    ],
  },
  {
    title: 'Automate Delivery',
    text: 'Reduce release risk and deployment bottlenecks through modern DevOps practices and automated workflows.',
    items: [
      'CI/CD Pipelines',
      'Deployment Automation',
      'Cloud Infrastructure',
      'Monitoring & Reliability',
    ],
  },
  {
    title: 'Modern Web Engineering',
    text: 'Build fast, responsive, and scalable web applications integrated with cloud infrastructure and DevOps pipelines.',
    items: [
      'React / Frontend Engineering',
      'Backend APIs',
      'Cloud Integration (Azure)',
      'CI/CD Ready Systems',
    ],
  }
];

const projects = [
  {
    eyebrow: "Featured Project",
    title: "FirstFrame Enterprise SaaS Platform",
    text: "Delivered a cloud-native SaaS platform from concept to production, enabling organizations to streamline collaboration, automate workflows, and scale without increasing operational overhead.",
    outcomes: [
      "Production-ready MVP delivered",
      "Microsoft ecosystem integration",
      "Automated deployment pipeline",
      "Scalable cloud foundation",
    ],
    stack: "Azure / Docker / Kubernetes / Terraform / GitHub Actions",
  },
  {
    eyebrow: "Corporate Digital Platform",
    title: "Microtechx Enterprise Website",
    text: "Designed and developed a modern digital platform that clearly communicates complex cloud, AI, cybersecurity, and SAP services while strengthening enterprise brand positioning.",
    outcomes: [
      "Improved service visibility",
      "Enterprise-grade digital presence",
      "Customer acquisition focused",
    ],
    stack: "React / TypeScript / Responsive Design",
  },
  {
    eyebrow: "Cloud Architecture Lab",
    title: "Distributed Voting Platform",
    text: "Architected and deployed a distributed microservices platform to demonstrate resilient cloud-native application patterns, container orchestration, and scalable infrastructure design.",
    outcomes: [
      "Fault-tolerant architecture",
      "Containerized deployment model",
      "Cloud scalability validation",
    ],
    stack: "Python / Node.js / .NET / Redis / PostgreSQL / Kubernetes",
  },

  /* ✅ NEW 4th PROJECT */
  {
    eyebrow: "DevOps Automation Project",
    title: "CI/CD & Infrastructure Automation Pipeline",
    text: "Built a fully automated CI/CD pipeline with infrastructure-as-code to streamline deployments, reduce manual errors, and improve release velocity for cloud applications.",
    outcomes: [
      "Fully automated CI/CD workflow",
      "Zero-downtime deployments",
      "Infrastructure as Code (IaC)",
      "Improved release reliability",
    ],
    stack: "GitHub Actions / Azure / Docker / Terraform / Kubernetes",
  },
];

const technologies = [
  "Cloud",
  "DevOps",
  "Azure",
  "Kubernetes",
  "React",
  "APIs",
  "Automation",
  "CI/CD",
  "Leadership",
  "AI"
];

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Hira Jabeen home">HJ</a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#work">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>

        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Full-Stack Development & DevOps Solutions</p>
            <h2>
              An Engineer Known for{" "}
              <strong className="gradient-text">
                Turning Complexity into Clarity
              </strong>
            </h2>
            <p className="hero-lede">
              I help SaaS startups and growing technology companies launch products faster, automate delivery, and build reliable systems that support growth instead of slowing it down.
            </p>
            <div className="hero-actions">
              <a className="button primary"
                href="mailto:hira.jabeen@microtechx.com">
                Book a Discovery Call
              </a>
              {/* <a className="button ghost" href="#work">View Case Studies</a> */}
            </div>
            {/* <div className="capabilities" aria-label="Core capabilities">
              <span>Full-Stack Development</span>
              <span>Cloud & DevOps Engineering</span>
              <span>CI/CD Automation</span>
              <span>Azure Infrastructure</span>
              <span>Docker & Kubernetes</span>
            </div> */}
          </div>
          <div className="about-image">
            <img src={skillImage} alt="Hira Jabeen" />
          </div>
        </section>

        <section className="section about" id="about">

          {/* LEFT SIDE IMAGE */}

          <div className="hero-visual" aria-label="Portrait of Hira Jabeen">
            <div className="portrait-orbit"></div>
            <img src={profileImage} alt="Hira Jabeen" />
            <div className="floating-card top">
              <strong>Cloud & AI</strong>
              <span>Engineering Lead</span>
            </div>
            <div className="floating-card bottom">
              <strong>100%</strong>
              <span>Automated delivery focus</span>
            </div>
          </div>

          {/* RIGHT SIDE TEXT */}
          <div className="about-text">
            <p className="eyebrow">About</p>

            <h1>I'm Hira Jabeen</h1>

            <p>
              A Full-Stack Developer and DevOps Engineer focused on helping businesses
              turn ideas into production-ready products. My work combines software engineering,
              cloud infrastructure, and automation to deliver faster releases, improved reliability,
              and scalable foundations for growth.
            </p>
          </div>

        </section>


        <section className="section services" id="services">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h3>Helping SaaS startups launch faster, scale smarter, and deliver with confidence.</h3>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="card-icon" aria-hidden="true">{service.title.charAt(0)}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul>
                  {service.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>


        <section className="section work" id="work">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>

            <h2>
              Engineering solutions that create{" "}
              <span className="gradient-text">measurable business impact.</span>
            </h2>

            <p>
              From SaaS platforms to cloud modernization initiatives, I focus on
              delivering systems that accelerate growth, improve reliability,
              and reduce operational complexity.
            </p>
          </div>

          <div className="project featured">
            <div>
              <p className="eyebrow">{projects[0].eyebrow}</p>

              <h2>{projects[0].title}</h2>

              <p>{projects[0].text}</p>

              <div className="outcomes">
                {projects[0].outcomes.map((outcome) => (
                  <span key={outcome}>{outcome}</span>
                ))}
              </div>

              <p className="stack">{projects[0].stack}</p>
            </div>

            <div className="project-preview" aria-hidden="true">
              <div className="preview-window">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="preview-lines">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <div className="preview-panel"></div>
            </div>
          </div>

          <div className="project-grid">
            {projects.slice(1).map((project) => (
              <article className="project-card" key={project.title}>
                <p className="eyebrow">{project.eyebrow}</p>

                <h3>{project.title}</h3>

                <p>{project.text}</p>

                <div className="mini-outcomes">
                  {project.outcomes.map((outcome) => (
                    <span key={outcome}>{outcome}</span>
                  ))}
                </div>

                <p className="stack">{project.stack}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="impact-stats">
            <div className="stat-card">
              <strong>10+</strong>
              <span>Projects Delivered</span>
            </div>

            <div className="stat-card">
              <strong>CI/CD</strong>
              <span>Automation Focus</span>
            </div>

            <div className="stat-card">
              <strong>Azure</strong>
              <span>Cloud Expertise</span>
            </div>

            <div className="stat-card">
              <strong>SaaS</strong>
              <span>Product Engineering</span>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <p className="eyebrow">Contact</p>

          <h2>
            Let's build something{" "}
            <span className="gradient-text">scalable.</span>
          </h2>

          <p>
            Whether you're launching a SaaS product, modernizing cloud infrastructure,
            or improving deployment reliability, I'd be happy to discuss your goals.
          </p>

          <div className="social-links">
            <a
              href="mailto:hira.jabeen@microtechx.com"
              aria-label="Email"
              title="Email"
            >
              <FiMail />
            </a>

            <a
              href="https://www.linkedin.com/in/hira-jabeen-cloud-engineer/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
