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
    company: "Span Communications",
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
function BubbleGhost({ containerRef }) {
  const ghostRef = useRef(null);
  const waveRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const ghost = ghostRef.current;

    if (!container || !ghost) return;

    const bubbles = Array.from(
      container.querySelectorAll(
        [
          styles.questionBubble,
          styles.shortReply,
          styles.replyCard,
          styles.contactReply,
        ]
          .filter(Boolean)
          .map((name) => `.${name}`)
          .join(",")
      )
    );

    if (!bubbles.length) return;

    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let reducedMotion = motionQuery.matches;
    let frame;
    let lastTime = 0;
    let dirty = true;
    let initialized = false;
    let boxes = [];
    let containerRect;

    // Begin directly at the second message.
    const firstIndex = Math.min(1, bubbles.length - 1);
    let currentIndex = firstIndex;
    let targetIndex = firstIndex;

    let position = { x: 0, y: 0 };
    let phase = "wave";
    let phaseTime = 0;
    let jump = null;
    let waveAtStart = true;

    let lastScrollTime = -Infinity;
    let previousScrollY = window.scrollY;
    let scrollSpeed = 0;
    let scrollPending = false;

    const clamp = (value, min, max) =>
      Math.max(min, Math.min(max, value));

    function setPhase(next) {
      phase = next;
      phaseTime = 0;
      ghost.dataset.action = next;
    }

    function measure() {
      containerRect = container.getBoundingClientRect();

      const size = ghost.offsetWidth || 48;
      const availableWidth = Math.max(0, container.clientWidth - size);

      boxes = bubbles.map((bubble) => {
        const rect = bubble.getBoundingClientRect();

        const start = clamp(
          rect.left - containerRect.left + 8,
          0,
          availableWidth
        );

        const end = clamp(
          rect.right - containerRect.left - size - 8,
          start,
          availableWidth
        );

        return {
          start,
          end,
          y: rect.top - containerRect.top - size + 2,
          top: rect.top,
          bottom: rect.bottom,
        };
      });

      dirty = false;
    }

    function paint() {
      ghost.style.transform =
        `translate3d(${position.x}px, ${position.y}px, 0)`;
    }

    function findReadingBubble() {
      const readingLine = window.innerHeight * 0.45;
      let closest = firstIndex;
      let closestDistance = Infinity;

      for (let i = firstIndex; i < boxes.length; i += 1) {
        const box = boxes[i];

        const distance =
          readingLine < box.top
            ? box.top - readingLine
            : readingLine > box.bottom
              ? readingLine - box.bottom
              : 0;

        if (distance < closestDistance) {
          closest = i;
          closestDistance = distance;
        }
      }

      return closest;
    }

    function isVisible(index) {
      const box = boxes[index];

      return (
        box &&
        box.top > ghost.offsetHeight &&
        box.top < window.innerHeight - 50
      );
    }

    function beginJump(nextIndex) {
      if (!boxes[nextIndex] || nextIndex === currentIndex) return;

      jump = {
        from: { ...position },
        toIndex: nextIndex,
        progress: 0,
      };

      setPhase("jump");
    }

    function updateJump(delta, scrolling) {
      if (!jump) return;

      const destination = boxes[jump.toIndex];

      // Always land at the START, never the far end.
      const target = {
        x: destination.start,
        y: destination.y,
      };

      const duration = scrolling
        ? clamp(230 - scrollSpeed * 35, 130, 230)
        : 360;

      jump.progress = Math.min(
        1,
        jump.progress + delta / duration
      );

      const t = jump.progress;
      const eased = t * t * (3 - 2 * t);

      position.x =
        jump.from.x + (target.x - jump.from.x) * eased;

      position.y =
        jump.from.y +
        (target.y - jump.from.y) * eased -
        Math.sin(Math.PI * t) * 26;

      if (t === 1) {
        currentIndex = jump.toIndex;
        position = target;
        jump = null;
        waveAtStart = true;
        setPhase("land");
      }
    }

    function onScroll() {
      const now = performance.now();
      const elapsed = Math.max(16, now - lastScrollTime);

      scrollSpeed =
        Math.abs(window.scrollY - previousScrollY) / elapsed;

      previousScrollY = window.scrollY;
      lastScrollTime = now;
      scrollPending = true;
      dirty = true;
    }

    function onResize() {
      dirty = true;
    }

    function onMotionChange(event) {
      reducedMotion = event.matches;
      jump = null;
      initialized = false;
      dirty = true;
    }

    waveRef.current = () => {
      if (reducedMotion || phase === "jump") return;

      waveAtStart = true;
      setPhase("wave");
    };

    function animate(now) {
      frame = window.requestAnimationFrame(animate);

      const delta = lastTime
        ? Math.min(now - lastTime, 40)
        : 0;

      lastTime = now;

      if (document.hidden) return;
      if (dirty) measure();

      if (!initialized) {
        position = {
          x: boxes[currentIndex].start,
          y: boxes[currentIndex].y,
        };

        initialized = true;
        waveAtStart = true;
        setPhase(reducedMotion ? "still" : "wave");
        paint();
      }

      const visible =
        containerRect.top < window.innerHeight &&
        containerRect.bottom > 0;

      ghost.style.visibility = visible ? "visible" : "hidden";
ghost.style.opacity = visible ? "1" : "0";

if (!visible) return;

      const scrolling = now - lastScrollTime < 220;

      if (scrollPending) {
        targetIndex = findReadingBubble();
        scrollPending = false;
      }

      if (reducedMotion) {
        currentIndex = targetIndex;

        position = {
          x: boxes[currentIndex].start,
          y: boxes[currentIndex].y,
        };

        ghost.dataset.action = "still";
        paint();
        return;
      }

      phaseTime += delta;

      if (phase === "jump") {
        updateJump(delta, scrolling);
        paint();
        return;
      }

      // Move one bubble at a time while scrolling.
      if (targetIndex !== currentIndex) {
        beginJump(
          currentIndex + Math.sign(targetIndex - currentIndex)
        );

        paint();
        return;
      }

      const box = boxes[currentIndex];

      position.y = box.y;
      position.x = clamp(position.x, box.start, box.end);

      if (phase === "land") {
        if (phaseTime >= 150) {
          setPhase("wave");
        }
      } else if (phase === "wave") {
        if (phaseTime >= 650) {
          if (waveAtStart) {
            waveAtStart = false;
            setPhase("walk");
          } else {
            setPhase("wait");
          }
        }
      } else if (phase === "walk") {
        position.x = Math.min(
          box.end,
          position.x + (72 * delta) / 1000
        );

        if (position.x >= box.end) {
          waveAtStart = false;
          setPhase("wave");
        }
      } else if (phase === "wait") {
        const next = currentIndex + 1;

        if (phaseTime >= 500 && isVisible(next)) {
          targetIndex = next;
          beginJump(next);
        }
      }

      paint();
    }

    const resizeObserver = new ResizeObserver(onResize);

    resizeObserver.observe(container);
    bubbles.forEach((bubble) => resizeObserver.observe(bubble));

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    motionQuery.addEventListener("change", onMotionChange);

    frame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();

      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      motionQuery.removeEventListener("change", onMotionChange);

      waveRef.current = null;
    };
  }, [containerRef]);

  return (
    <button
      ref={ghostRef}
      type="button"
      className={styles.spiritAnchor}
      data-action="wave"
      aria-label="Make the ghost wave"
      onClick={() => waveRef.current?.()}
    >
      <svg
        viewBox="0 0 100 100"
        className={styles.spiritArtwork}
        fill="none"
        aria-hidden="true"
      >
        <ellipse
          className={styles.spiritShadow}
          cx="50"
          cy="95"
          rx="23"
          ry="3"
          fill="#000"
          opacity=".18"
        />

        <g className={styles.spiritBody}>
          <g className={styles.spiritArmLeft}>
            <path
              d="M28 53C20 54 15 48 10 44C6 40 3 43 5 50C8 61 17 67 28 67Z"
              fill="#fffce9"
              stroke="#d4d1bb"
              strokeWidth="1.2"
            />
          </g>

          <path
            d="M21 73C22 60 20 49 24 34C28 17 37 7 51 7C69 7 79 21 80 41C81 58 78 73 84 85C87 93 79 95 72 91C65 99 56 95 51 91C44 99 35 95 32 91C24 96 17 90 21 73Z"
            fill="#fffce9"
            stroke="#d4d1bb"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />

          <path
            d="M62 11C74 23 74 40 73 57C72 74 72 83 78 90C84 93 87 89 84 84C78 69 82 55 80 40C79 26 73 16 62 11Z"
            fill="#e8e5cf"
            opacity=".75"
          />

          <g className={styles.spiritOpenEyes} fill="#302820">
            <ellipse cx="40" cy="40" rx="4.4" ry="6.5" />
            <ellipse cx="61" cy="40" rx="4.4" ry="6.5" />

            <circle cx="41" cy="38" r="1.3" fill="white" />
            <circle cx="62" cy="38" r="1.3" fill="white" />
          </g>

          <g
            className={styles.spiritHappyEyes}
            stroke="#302820"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <path d="M35 42Q40 34 45 42" />
            <path d="M56 42Q61 34 66 42" />
          </g>

          <g fill="#efa9ad" opacity=".7">
            <ellipse cx="31" cy="51" rx="6" ry="3" />
            <ellipse cx="70" cy="51" rx="6" ry="3" />
          </g>

          <path
            className={styles.spiritSmile}
            d="M44 52Q50 60 57 52"
            stroke="#614037"
            strokeWidth="2.7"
            strokeLinecap="round"
          />

          <g className={styles.spiritHappyMouth}>
            <path
              d="M43 51Q50 49 58 51C58 66 43 66 43 51Z"
              fill="#614037"
            />
            <path
              d="M46 59Q51 55 56 59Q51 65 46 59Z"
              fill="#e99b9e"
            />
          </g>

          <ellipse
            className={styles.spiritJumpMouth}
            cx="51"
            cy="55"
            rx="3.5"
            ry="4.5"
            fill="#614037"
          />

          <g className={styles.spiritArmRight}>
            <path
              d="M75 52C83 49 87 39 92 39C99 40 94 53 89 59C85 65 80 67 75 65Z"
              fill="#fffce9"
              stroke="#d4d1bb"
              strokeWidth="1.2"
            />
          </g>
        </g>
      </svg>
    </button>
  );
}
function TechConversation() {
  const conversationRef = useRef(null);

  return (
    <div
      ref={conversationRef}
      className={styles.techConversation}
    >
         <BubbleGhost containerRef={conversationRef} />
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
            Hellooo! I’m Sankari, a backend-focused Information
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
