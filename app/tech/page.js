"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./tech.module.css";

const GITHUB = "https://github.com/Sana-17-Cipher";

const projects = [
  {
    name: "Moms on Teaching",
    repo: "mot-gulf-website",
    type: "WEBSITE",
    description:
      "Explore the Moms on Teaching website project, its source code, and available documentation.",
    label: "website / development",
    headline: ["LEARN SOMETHING", "GREAT."],
    symbol: "◎",
    color: "#b6a4ff",
  },
  {
    name: "Cleanlytics",
    repo: "Cleanlytics",
    type: "PROJECT REPOSITORY",
    description:
      "A look inside Cleanlytics. Explore the implementation, source code, and project documentation.",
    label: "explore / source",
    headline: ["LESS MESS.", "MORE INSIGHT."],
    symbol: "▥",
    color: "#c7ff6b",
  },
  {
    name: "ShareLocal",
    repo: "sharelocal",
    type: "PROJECT REPOSITORY",
    description:
      "Open ShareLocal on GitHub to explore the project, its implementation, and available documentation.",
    label: "sharing / connections",
    headline: ["YOUR FILES.", "CONNECTED."],
    symbol: "⇄",
    color: "#8aeaff",
  },
  {
    name: "Blackbook Automation",
    repo: "Blackbook-automation",
    type: "PROJECT REPOSITORY",
    description:
      "Open the repository to explore the project, source code, and available documentation.",
    label: "source / documentation",
    headline: ["BLACKBOOK", "AUTOMATION"],
    symbol: "▤",
    color: "#ffb3da",
  },
  {
    name: "StorageHive",
    repo: "StorageHive",
    type: "PROJECT REPOSITORY",
    description:
      "Explore StorageHive on GitHub, including its implementation and project documentation.",
    label: "explore / source",
    headline: ["INSIDE", "THE HIVE."],
    symbol: "⬡",
    color: "#ffd78b",
  },
  {
    name: "ChitChat",
    repo: "chitchat",
    type: "PROJECT REPOSITORY",
    description:
      "A look inside the ChitChat project. Browse its code and available documentation on GitHub.",
    label: "explore / source",
    headline: ["CHIT.", "CHAT."],
    symbol: "✳",
    color: "#a6baff",
  },
  {
    name: "System Design Notes",
    repo: "System-design-notes",
    type: "LEARNING ARCHIVE",
    description:
      "A repository for system design notes. Explore the ideas and documentation behind the work.",
    label: "systems / notes",
    headline: ["THINK BIG.", "CONNECT DOTS."],
    symbol: "⌘",
    color: "#a5f0c3",
  },
];

const skillGroups = [
  {
    title: "Languages",
    file: "languages.json",
    items: ["JavaScript", "TypeScript", "Python", "C", "C++"],
  },
  {
    title: "Backend",
    file: "backend.config",
    items: ["Node.js", "REST APIs", "Firebase", "FastAPI", "API Integration"],
  },
  {
    title: "Databases",
    file: "databases.sql",
    items: [
      "Microsoft SQL Server",
      "MySQL",
      "PostgreSQL",
      "Firebase / Firestore",
      "DuckDB",
    ],
  },
  {
    title: "Frontend",
    file: "interface.jsx",
    items: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Concepts",
    file: "application.logic",
    items: [
      "Object-Oriented Programming",
      "CRUD",
      "Authentication",
      "Database Operations",
      "API Development",
      "Error Handling",
    ],
  },
  {
    title: "Tools",
    file: "tools.exe",
    items: ["Git", "GitHub", "VS Code", "Netlify", "Canva"],
  },
];

/*
 * Logos use Devicon's public CDN.
 * Each logo falls back to its initials if the image cannot load.
 * Concepts such as REST APIs are represented by labelled symbols.
 */
const technologies = [
  { name: "JavaScript", icon: "javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "typescript/typescript-original.svg" },
  { name: "Python", icon: "python/python-original.svg" },
  { name: "C", icon: "c/c-original.svg" },
  { name: "C++", icon: "cplusplus/cplusplus-original.svg" },
  { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
  { name: "Firebase", icon: "firebase/firebase-original.svg" },
  { name: "FastAPI", icon: "fastapi/fastapi-original.svg" },
  {
    name: "SQL Server",
    icon: "microsoftsqlserver/microsoftsqlserver-original.svg",
  },
  { name: "MySQL", icon: "mysql/mysql-original.svg" },
  { name: "PostgreSQL", icon: "postgresql/postgresql-original.svg" },
  { name: "Firestore", icon: "firebase/firebase-original.svg" },
  { name: "DuckDB", icon: "duckdb/duckdb-original.svg" },
  { name: "React", icon: "react/react-original.svg" },
  {
    name: "Next.js",
    icon: "nextjs/nextjs-original.svg",
    light: true,
  },
  { name: "HTML", icon: "html5/html5-original.svg" },
  { name: "CSS", icon: "css3/css3-original.svg" },
  {
    name: "Tailwind",
    icon: "tailwindcss/tailwindcss-original.svg",
  },
  { name: "Git", icon: "git/git-original.svg" },
  {
    name: "GitHub",
    icon: "github/github-original.svg",
    light: true,
  },
  { name: "VS Code", icon: "vscode/vscode-original.svg" },
  { name: "Netlify", icon: "netlify/netlify-original.svg" },
  { name: "Canva", icon: "canva/canva-original.svg" },
  { name: "PHP", icon: "php/php-original.svg" },
  { name: "Drupal", icon: "drupal/drupal-original.svg" },
  { name: "REST APIs", symbol: "{ }" },
  { name: "API Integration", symbol: "⇄" },
];

const experience = [
  {
    role: "Web Developer",
    company: "Moms on Teaching",
    points: [
      "Built and deployed two websites, working across frontend development, website structure, and performance.",
      "Currently working with PHP and Drupal backend development to extend and maintain the websites.",
    ],
  },
  {
    role: "Junior Frontend Developer Intern",
    company: "Spam Communications",
    points: [
      "Built and maintained responsive applications using Next.js, React.js, and JavaScript.",
      "Worked with Git, API testing, and deployment workflows.",
    ],
  },
  {
    role: "Developer & Designer",
    company: "Web Ops Club · Jai Hind College",
    points: [
      "Developed and maintained departmental and event websites using React, Next.js, and Tailwind CSS.",
      "Collaborated on responsive interfaces, reusable components, and student and event platforms.",
    ],
  },
];

function WindowBar({ title }) {
  return (
    <div className={styles.windowBar}>
      <span>{title}</span>

      <span className={styles.windowControls} aria-hidden="true">
        <i>−</i>
        <i>□</i>
        <i>×</i>
      </span>
    </div>
  );
}

function TechLogo({ technology }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={styles.techLogo} title={technology.name}>
      <span
        className={`${styles.logoImage} ${
          technology.light ? styles.lightLogo : ""
        }`}
        aria-hidden="true"
      >
        {technology.icon && !failed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${technology.icon}`}
            width="28"
            height="28"
            alt=""
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <span>
            {technology.symbol ||
              technology.name.replace(/[^a-z0-9]/gi, "").slice(0, 2)}
          </span>
        )}
      </span>

      <span>{technology.name}</span>
    </div>
  );
}

function KeyboardWord() {
  const [pressed, setPressed] = useState(null);
  const timer = useRef(null);

  useEffect(() => {
    return () => window.clearTimeout(timer.current);
  }, []);

  function pressKey(letter) {
    window.clearTimeout(timer.current);
    setPressed(letter);
    timer.current = window.setTimeout(() => setPressed(null), 220);
  }

  return (
    <div className={styles.keyboardKeys} role="group" aria-label="CODE keyboard">
      {["C", "O", "D", "E"].map((letter) => (
        <button
          key={letter}
          type="button"
          className={`${styles.keycap} ${
            pressed === letter ? styles.keyPressed : ""
          }`}
          aria-label={`Press ${letter} key`}
          onClick={() => pressKey(letter)}
        >
          <span>{letter}</span>
        </button>
      ))}
    </div>
  );
}

function ProjectCard({ project, index, duplicate = false }) {
  return (
    <article
      className={styles.projectCard}
      style={{ "--project-color": project.color }}
    >
      <WindowBar
        title={`project_${String(index + 1).padStart(2, "0")}.exe`}
      />

      <div className={styles.projectPreview}>
        <span className={styles.previewLabel}>SANKARI / DIGITAL LAB</span>

        <div className={styles.previewTitle}>
          {project.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>

        <span className={styles.projectSymbol} aria-hidden="true">
          {project.symbol}
        </span>

        <div className={styles.previewFooter}>
          <span>BUILD / EXPLORE / REPEAT</span>
          <span aria-hidden="true">↗</span>
        </div>
      </div>

      <div className={styles.projectBody}>
        <p className={styles.projectCategory}>{project.type}</p>
        <h3>{project.name}</h3>
        <p className={styles.projectDescription}>{project.description}</p>

        <div className={styles.projectBottom}>
          <span>{project.label}</span>

          <a
            href={`${GITHUB}/${project.repo}`}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={duplicate ? -1 : undefined}
            aria-label={`View ${project.name} on GitHub`}
          >
            View code <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function ProjectSlider() {
  const viewportRef = useRef(null);
  const groupRef = useRef(null);
  const interactions = useRef({
    hover: false,
    focus: false,
    pointer: false,
  });
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    const group = groupRef.current;

    if (!viewport || !group) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = media.matches;
    let groupWidth = group.getBoundingClientRect().width;
    let frame;
    let previousTime = 0;
    let position = viewport.scrollLeft;
    let lastWritten = position;

    function measure() {
      groupWidth = group.getBoundingClientRect().width;
    }

    function updateMotion(event) {
      reducedMotion = event.matches;
    }

    function releasePointer() {
      interactions.current.pointer = false;
    }

    function animate(time) {
      const delta = previousTime ? Math.min(time - previousTime, 50) : 0;
      previousTime = time;

      const blocked =
        paused ||
        reducedMotion ||
        document.hidden ||
        interactions.current.hover ||
        interactions.current.focus ||
        interactions.current.pointer;

      if (blocked) {
        position = viewport.scrollLeft;
        lastWritten = position;
      } else if (groupWidth > 0) {
        // Respect manual scrolling before resuming automatic movement.
        if (Math.abs(viewport.scrollLeft - lastWritten) > 1) {
          position = viewport.scrollLeft;
        }

        // Keep a fractional position for smooth movement on fast displays.
        position += delta * 0.035;

        if (position >= groupWidth) {
          position %= groupWidth;
        }

        viewport.scrollLeft = position;
        lastWritten = viewport.scrollLeft;
      }

      frame = window.requestAnimationFrame(animate);
    }

    const observer = new ResizeObserver(measure);
    observer.observe(group);

    media.addEventListener("change", updateMotion);
    window.addEventListener("pointerup", releasePointer);
    window.addEventListener("pointercancel", releasePointer);
    window.addEventListener("blur", releasePointer);

    frame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      media.removeEventListener("change", updateMotion);
      window.removeEventListener("pointerup", releasePointer);
      window.removeEventListener("pointercancel", releasePointer);
      window.removeEventListener("blur", releasePointer);
    };
  }, [paused]);

  return (
    <section
      id="projects"
      className={styles.projects}
      aria-labelledby="projects-title"
    >
      <div className={styles.sectionBar}>
     
        <div>
          <p className={styles.eyebrow}>OPEN THE FILES</p>
          <h2 id="projects-title">Selected projects</h2>
        </div>
           <div className={styles.heartDecoration} aria-hidden="true">
  <span className={`${styles.gameHeart} ${styles.heart1}`}>
    <svg viewBox="0 0 24 22">
      <path d="M12 21L2.1 11.1C-1.1 7.9.3 2.6 4.7 1.3 7.3.5 10.1 1.4 12 3.5 13.9 1.4 16.7.5 19.3 1.3c4.4 1.3 5.8 6.6 2.6 9.8L12 21z" />
    </svg>
  </span>

  <span className={`${styles.gameHeart} ${styles.heart2}`}>
    <svg viewBox="0 0 24 22">
      <path d="M12 21L2.1 11.1C-1.1 7.9.3 2.6 4.7 1.3 7.3.5 10.1 1.4 12 3.5 13.9 1.4 16.7.5 19.3 1.3c4.4 1.3 5.8 6.6 2.6 9.8L12 21z" />
    </svg>
  </span>

  <span className={`${styles.gameHeart} ${styles.heart3}`}>
    <svg viewBox="0 0 24 22">
      <path d="M12 21L2.1 11.1C-1.1 7.9.3 2.6 4.7 1.3 7.3.5 10.1 1.4 12 3.5 13.9 1.4 16.7.5 19.3 1.3c4.4 1.3 5.8 6.6 2.6 9.8L12 21z" />
    </svg>
  </span>
</div>

        <button
          type="button"
          className={styles.motionButton}
          aria-pressed={paused}
          onClick={() => setPaused((value) => !value)}
        >
          <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>
          {paused ? "Resume sliding" : "Pause sliding"}
        </button>
      </div>

      <div
        ref={viewportRef}
        className={styles.projectViewport}
        tabIndex={0}
        aria-label="Projects. Scroll horizontally to explore."
        onMouseEnter={() => {
          interactions.current.hover = true;
        }}
        onMouseLeave={() => {
          interactions.current.hover = false;
        }}
        onFocusCapture={() => {
          interactions.current.focus = true;
        }}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            interactions.current.focus = false;
          }
        }}
        onPointerDown={() => {
          interactions.current.pointer = true;
        }}
      >
        <div className={styles.projectTrack}>
          <div ref={groupRef} className={styles.projectGroup}>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.repo}
                project={project}
                index={index}
              />
            ))}
          </div>

          <div className={styles.projectGroup} aria-hidden="true">
            {projects.map((project, index) => (
              <ProjectCard
                key={`copy-${project.repo}`}
                project={project}
                index={index}
                duplicate
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.galleryHint}>
        <span>HOVER OR FOCUS TO PAUSE / SCROLL SIDEWAYS TO EXPLORE</span>
        <span aria-hidden="true">← ───── →</span>
      </div>
    </section>
  );
}
function TechConversation() {
  return (
    <div className={styles.techConversation}>
      <div className={styles.chatStatus}>
        <span aria-hidden="true" />
        a little conversation / about my work
      </div>

      {/* INTRODUCTION */}
      <section
        className={styles.chatExchange}
        aria-labelledby="chat-about-title"
      >
        <div className={styles.questionRow}>
          <span className={styles.chatAvatar} aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="18" r="9" fill="currentColor" />
              <path
                d="M7 45v-5c0-10 8-15 17-15s17 5 17 15v5"
                fill="currentColor"
              />
            </svg>
          </span>

          <p className={styles.questionBubble}>
            I want to know the person behind the code.
          </p>
        </div>

        <p className={styles.shortReply}>
          Oh, sure! Here’s a little about me…
        </p>

        <article className={styles.replyCard}>
          <div className={styles.replyHeading}>
            <span className={styles.chatStar} aria-hidden="true">★</span>
            <h2 id="chat-about-title">
              about <em>ME</em>
            </h2>
          </div>

          <p className={styles.chatLead}>
            Hellooo! I’m Sankari—a backend-focused Information
            Technology student who likes knowing how things work
            behind the screen.
          </p>

          <p className={styles.chatParagraph}>
            I build web applications with Node.js, TypeScript,
            JavaScript, REST APIs, Firebase, and SQL databases.
            My work covers application logic, authentication,
            database operations, API integration, and responsive
            interfaces.
          </p>

          <ul className={styles.conversationTags}>
            {[
              "Backend-focused",
              "BSc IT student",
              "Web development",
              "Problem-solving",
              "Design + technology",
            ].map((item) => (
              <li key={item}>
                {item}
                <span aria-hidden="true">×</span>
              </li>
            ))}
          </ul>

          <p className={styles.replySignoff}>
            A little logic. A lot of curiosity.
            <span aria-hidden="true">✳</span>
          </p>
        </article>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className={styles.chatExchange}
        aria-labelledby="chat-skills-title"
      >
        <div className={styles.questionRow}>
          <span className={styles.smallAvatar} aria-hidden="true">?</span>
          <p className={styles.questionBubble}>
            Okay, what’s in your toolkit?
          </p>
        </div>

        <p className={styles.shortReply}>
          A little frontend, a lot of backend.
        </p>

        <article className={styles.replyCard}>
          <div className={styles.replyHeading}>
            <span className={styles.chatStar} aria-hidden="true">✳</span>
            <h2 id="chat-skills-title">
              my <em>SKILLS</em>
            </h2>
          </div>

          <p className={styles.chatParagraph}>
            The languages, tools, and concepts I use to connect
            an idea to a working application.
          </p>

          <div className={styles.chatSkillGroups}>
            {skillGroups.map((group) => (
              <div className={styles.chatSkillGroup} key={group.title}>
                <h3>{group.title}</h3>

                <ul className={styles.conversationTags}>
                  {group.items.map((item) => (
                    <li key={item}>
                      {item}
                      <span aria-hidden="true">×</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.learningMessage}>
            <span aria-hidden="true">↳</span>
            <p>
              Currently expanding my backend toolkit with
              <strong> PHP & Drupal</strong> while working on
              production websites.
            </p>
          </div>
        </article>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className={styles.chatExchange}
        aria-labelledby="chat-experience-title"
      >
        <div className={styles.questionRow}>
          <span className={styles.smallAvatar} aria-hidden="true">?</span>
          <p className={styles.questionBubble}>
            And where have you put all that to work?
          </p>
        </div>

        <p className={styles.shortReply}>
          Here’s where I’ve been building.
        </p>

        <article className={styles.replyCard}>
          <div className={styles.replyHeading}>
            <span className={styles.chatStar} aria-hidden="true">★</span>
            <h2 id="chat-experience-title">
              my <em>WORK</em>
            </h2>
          </div>

          <div className={styles.chatJobs}>
            {experience.map((job, index) => (
              <article className={styles.chatJob} key={job.company}>
                <div className={styles.chatJobTop}>
                  <span className={styles.chatJobIndex}>
                    0{index + 1}
                  </span>
                  <p>{job.company}</p>
                </div>

                <h3>{job.role}</h3>

                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className={styles.replySignoff}>
            Learning by building. Improving by doing.
            <span aria-hidden="true">↗</span>
          </p>
        </article>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className={styles.chatExchange}
        aria-labelledby="chat-education-title"
      >
        <div className={styles.questionRow}>
          <span className={styles.smallAvatar} aria-hidden="true">?</span>
          <p className={styles.questionBubble}>
            Still studying?
          </p>
        </div>

        <p className={styles.shortReply}>
          Yes! Still learning, always building.
        </p>

        <article className={styles.replyCard}>
          <div className={styles.replyHeading}>
            <span className={styles.chatStar} aria-hidden="true">✳</span>
            <h2 id="chat-education-title">
              study <em>NOTES</em>
            </h2>
          </div>

          <div className={styles.chatEducation}>
            <div>
              <p className={styles.chatSchool}>Jai Hind College, Mumbai</p>
              <h3>Bachelor’s in Information Technology</h3>
              <p className={styles.chatYear}>2025 — Present</p>
            </div>

            <div className={styles.chatGrade}>
              <strong>9.6</strong>
              <span>CGPA</span>
            </div>
          </div>

          <p className={styles.chatSubjectLabel}>On my reading list</p>

          <ul className={styles.conversationTags}>
            {[
              "Web Development",
              "Programming Fundamentals",
              "Digital Media Projects",
            ].map((item) => (
              <li key={item}>
                {item}
                <span aria-hidden="true">×</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      {/* CONTACT */}
      <div className={styles.chatExchange}>
        <div className={styles.questionRow}>
          <span className={styles.smallAvatar} aria-hidden="true">?</span>
          <p className={styles.questionBubble}>
            What if I have something worth building?
          </p>
        </div>

        <div className={styles.contactReply}>
          <p>Then we should talk.</p>
          <Link href="/#contact" className={styles.chatContactLink}>
            Send me a hello <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <p className={styles.chatDelivered}>Delivered ✓✓</p>
      </div>
    </div>
  );
}
export default function TechPage() {
  return (
    <main className={styles.page}>
      <a href="#tech-title" className={styles.skipLink}>
        Skip to content
      </a>

      <header className={styles.topbar}>
        <Link href="/" className={styles.backLink}>
          <span aria-hidden="true">←</span> BACK TO DESK
        </Link>

        <span className={styles.desktopName}>SP / DIGITAL WORKSPACE</span>

        <a
          href={GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubLink}
        >
          GITHUB ↗
        </a>
      </header>

      <section className={styles.heroDesktop} aria-labelledby="tech-title">
        <nav className={styles.desktopShortcuts} aria-label="Workspace folders">
          {[
            { name: "Projects", href: "#projects" },
            { name: "Skills", href: "#skills" },
            { name: "Experience", href: "#experience" },
            { name: "Education", href: "#education" },
          ].map((folder) => (
            <a
              key={folder.name}
              href={folder.href}
              className={styles.desktopShortcut}
            >
              <span className={styles.desktopFolder} aria-hidden="true" />
              <span>{folder.name}</span>
            </a>
          ))}

          <Link href="/#contact" className={styles.desktopShortcut}>
            <span className={styles.desktopFolder} aria-hidden="true" />
            <span>Contact</span>
          </Link>
        </nav>

        <div className={styles.heroGrid}>
          <div className={styles.desktopIntro}>
            

            <p className={styles.desktopEyebrow}>
              SANKARI PILLAI / INFORMATION TECHNOLOGY
            </p>

            <h1 id="tech-title" className={styles.heroTitle}>
              Behind the screen.
              <span>Into the</span>
              <span className={styles.srOnly}>code.</span>
            </h1>

            <KeyboardWord />

            <p className={styles.keyboardHint}>go on, tap the keys.</p>

            <p className={styles.desktopDescription}>
              Backend-focused IT student building web applications,
              connecting APIs, and making the logic behind the interface work.
            </p>

            <a href="#projects" className={styles.desktopExplore}>
              Open project files <span aria-hidden="true">↘</span>
            </a>
          </div>

          <div className={styles.computerComposition}>
           

            <div className={styles.mainComputer}>
              <WindowBar title="my_workspace.sys" />

              <div className={styles.computerScreen}>
                <span className={styles.screenCaption}>
                  CONNECTION ESTABLISHED
                </span>

                <div className={styles.screenMessage}>
                  HELLO,
                  <br />
                  WORLD<span className={styles.screenCursor}>_</span>
                </div>

                <div className={styles.screenSkills}>
                  <span>NODE.JS</span>
                  <span>TYPESCRIPT</span>
                  <span>REST APIs</span>
                </div>

                <div className={styles.screenBottom}>
                  <span>● READY TO BUILD</span>
                  <span aria-hidden="true">✦</span>
                </div>
              </div>

              <div className={styles.computerChin}>
                <span>SP / PERSONAL COMPUTER</span>
                <span className={styles.powerLight} aria-hidden="true" />
              </div>
            </div>

            <aside className={styles.toolkitWindow} aria-label="Technology toolkit">
              <WindowBar title="my_toolkit.exe" />

              <div className={styles.logoGrid}>
                {technologies.map((technology) => (
                  <TechLogo
                    key={technology.name}
                    technology={technology}
                  />
                ))}
              </div>

              <p className={styles.toolkitFootnote}>
                Currently exploring <strong>PHP + Drupal</strong>
              </p>
            </aside>

          </div>
        </div>
      </section>

      <ProjectSlider />

      <TechConversation />

      <footer className={styles.footer}>
        <span>SANKARI PILLAI / A LITTLE LOGIC. A LITTLE IMAGINATION.</span>
        <Link href="/">Back to the desk ↑</Link>
      </footer>
    </main>
  );
}