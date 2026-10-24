"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./tech.module.css";

const projects = [
  {
    name: "Moms on Teaching",
    repo: "mot-gulf-website",
    category: "WEB EXPERIENCE",
    description:
      "A tutoring website built around services, locations, and connecting families with teachers.",
    label: "education / web",
    icon: "◎",
    color: "#b6a4ff",
    preview: ["LEARN SOMETHING", "GREAT."],
  },
  {
    name: "Cleanlytics",
    repo: "Cleanlytics",
    category: "DATA PROJECT",
    description:
      "A project exploring data cleaning, dashboards, and turning datasets into useful insights.",
    label: "data / dashboards",
    icon: "▥",
    color: "#c7ff6b",
    preview: ["LESS MESS.", "MORE INSIGHT."],
  },
  {
    name: "ShareLocal",
    repo: "sharelocal",
    category: "FILE TRANSFER",
    description:
      "A browser-based file-sharing project exploring peer-to-peer connections with WebRTC.",
    label: "sharing / connections",
    icon: "⇄",
    color: "#8aeaff",
    preview: ["YOUR FILES.", "CONNECTED."],
  },
  {
    name: "Blackbook Automation",
    repo: "Blackbook-automation",
    category: "PROJECT REPOSITORY",
    description:
      "Open the repository to explore the project, its source code, and available documentation.",
    label: "source / documentation",
    icon: "▤",
    color: "#ffb3da",
    preview: ["BLACKBOOK", "AUTOMATION"],
  },
  {
    name: "StorageHive",
    repo: "StorageHive",
    category: "PROJECT REPOSITORY",
    description:
      "Explore StorageHive on GitHub, including its implementation and project documentation.",
    label: "explore / source",
    icon: "⬡",
    color: "#ffd78b",
    preview: ["INSIDE", "THE HIVE."],
  },
  {
    name: "ChitChat",
    repo: "chitchat",
    category: "PROJECT REPOSITORY",
    description:
      "A look inside the ChitChat project. Browse its code and available documentation on GitHub.",
    label: "explore / source",
    icon: "✳",
    color: "#a6baff",
    preview: ["CHIT.", "CHAT."],
  },
  {
    name: "System Design Notes",
    repo: "System-design-notes",
    category: "LEARNING ARCHIVE",
    description:
      "A repository for system design notes. Explore the ideas and documentation behind the work.",
    label: "systems / notes",
    icon: "⌘",
    color: "#a5f0c3",
    preview: ["THINK BIG.", "CONNECT DOTS."],
  },
];

function ProjectCard({ project, index, duplicate }) {
  return (
    <article
      className={styles.card}
      style={{ "--accent": project.color }}
    >
      <div className={styles.windowBar}>
        <span>project_{String(index + 1).padStart(2, "0")}.exe</span>
        <span className={styles.windowControls} aria-hidden="true">
          <i>−</i>
          <i>□</i>
          <i>×</i>
        </span>
      </div>

      <div className={styles.preview} aria-hidden="true">
        <span className={styles.previewLabel}>SANKARI / DIGITAL LAB</span>

        <div className={styles.previewTitle}>
          {project.preview.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>

        <span className={styles.projectIcon}>{project.icon}</span>

        <div className={styles.previewFooter}>
          <span>BUILD / EXPLORE / REPEAT</span>
          <span>↗</span>
        </div>
      </div>

      <div className={styles.cardBody}>
        <span className={styles.category}>{project.category}</span>
        <h3>{project.name}</h3>
        <p>{project.description}</p>

        <div className={styles.cardBottom}>
          <span className={styles.tag}>{project.label}</span>

          <a
            href={`https://github.com/Sana-17-Cipher/${project.repo}`}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={duplicate ? -1 : undefined}
            aria-label={`View ${project.name} on GitHub (opens in a new tab)`}
          >
            View code <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function TechPage() {
  const [paused, setPaused] = useState(false);

  return (
    <main className={styles.page}>
      <div className={styles.gridBackground} aria-hidden="true" />

      <header className={styles.topbar}>
        <Link href="/" className={styles.back}>
          <span aria-hidden="true">←</span> BACK TO DESK
        </Link>

        <span className={styles.identity}>SP / DIGITAL WORKSPACE</span>

        <a
          className={styles.github}
          href="https://github.com/Sana-17-Cipher"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB ↗
        </a>
      </header>

      <section className={styles.hero} aria-labelledby="tech-title">
        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}>
            <span className={styles.statusDot} />
            A LITTLE LOGIC. A LOT OF CURIOSITY.
          </div>

          <h1 id="tech-title">
            TECH
            <span>PLAYGROUND<span className={styles.asterisk}>✳</span></span>
          </h1>

          <p>
            Websites, experiments, and ideas turned into code.
            Welcome to the technical side of my desk.
          </p>

          <div className={styles.heroLabels}>
            <span>01—07 / PROJECT FILES</span>
            <span>DESIGNED TO BE EXPLORED</span>
          </div>
        </div>

        <div className={styles.systemWindow} aria-hidden="true">
          <div className={styles.systemTitle}>
            <span>workspace.sys</span>
            <span>− □ ×</span>
          </div>

          <div className={styles.orbit}>
            <span className={styles.orbitOne} />
            <span className={styles.orbitTwo} />
            <span className={styles.orbitThree} />
            <b>{"</>"}</b>
            <i>✦</i>
          </div>

          <div className={styles.systemReadout}>
            <span>USER: SANKARI PILLAI</span>
            <span>MODE: BUILD + EXPERIMENT</span>
            <span className={styles.ready}>● READY TO EXPLORE</span>
          </div>
        </div>
      </section>

      <section className={styles.projects} aria-labelledby="projects-title">
        <div className={styles.sectionBar}>
          <div>
            <span className={styles.smallLabel}>OPEN THE FILES</span>
            <h2 id="projects-title">Selected projects</h2>
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
          className={styles.viewport}
          data-paused={paused}
          role="region"
          aria-label="Sliding project gallery"
          tabIndex={0}
        >
          <div className={styles.track}>
            <div className={styles.projectGroup}>
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.repo}
                  project={project}
                  index={index}
                />
              ))}
            </div>

            {/* Visual copy makes the animation loop seamlessly. */}
            <div
              className={`${styles.projectGroup} ${styles.duplicate}`}
              aria-hidden="true"
              inert
            >
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

      <footer className={styles.footer}>
        <span>SANKARI PILLAI © {new Date().getFullYear()}</span>
        <span>IDEAS IN PROGRESS. CURIOSITY ALWAYS ON.</span>
        <Link href="/#contact">LET’S CONNECT ↗</Link>
      </footer>
    </main>
  );
}