"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Desk from "../components/Desk";
import ContactExperience from "../components/ContactExperience";

const panels = {
  projects: {
    title: "IT Projects",
    description: "Applications, experiments and system design studies.",
    note: "Your project cards, GitHub links and live demos will go here.",
  },
  design: {
    title: "Design",
    description: "Visual ideas, interfaces and creative explorations.",
    note: "Your design gallery and case studies will go here.",
  },
  about: {
    title: "Hello, I’m Sankari.",
    description: "A little logic. A little imagination.",
    note: "Add your biography and contact details here.",
  },
};

export default function Home() {
  const [active, setActive] = useState(null);
  const [paused, setPaused] = useState(false);

  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  const panel = active ? panels[active] : null;

  function openPanel(key) {
    if (!Object.prototype.hasOwnProperty.call(panels, key)) return;

    triggerRef.current = document.activeElement;
    setActive(key);
  }

  function closePanel() {
    setActive(null);
  }

  function scrollToContact() {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    document.getElementById("contact")?.scrollIntoView({
      behavior: reduceMotion || paused ? "auto" : "smooth",
      block: "start",
    });
  }

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (active) {
      if (!dialog.open) dialog.showModal();
      return;
    }

    if (dialog.open) dialog.close();

    const trigger = triggerRef.current;
    triggerRef.current = null;

    if (trigger?.isConnected && typeof trigger.focus === "function") {
      trigger.focus({ preventScroll: true });
    }
  }, [active]);

  function handleBackdropClick(event) {
    const dialog = dialogRef.current;

    if (!dialog || event.target !== dialog) return;

    const bounds = dialog.getBoundingClientRect();

    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    ) {
      closePanel();
    }
  }

  return (
    <main className="home-page">
      <section
        className={`portfolio${paused ? " paused" : ""}`}
        aria-label="Portfolio desk"
      >
        <a className="skip" href="#navigation">
          Skip to navigation
        </a>

        <h1 className="sr-only">
          Sankari Pillai — IT and Design Portfolio
        </h1>

        <header className="topbar">
          <Link
            className="brand"
            href="/"
            aria-label="Sankari Pillai home"
          >
            sp<span aria-hidden="true">✳</span>
          </Link>

          <span className="desk-caption">
            a desk full of possibilities
          </span>

          <button
            type="button"
            className="motion-toggle"
            onClick={() => setPaused((previous) => !previous)}
            aria-label="Pause animations"
            aria-pressed={paused}
          >
            {paused ? "▷ Motion off" : "Ⅱ Motion on"}
          </button>
        </header>

        <div className="desk-wrap">
          <Desk onOpen={openPanel} />
        </div>

        <nav
          id="navigation"
          className="navigation"
          aria-label="Portfolio sections"
          tabIndex={-1}
        >
          <button
            type="button"
            className="nav-note projects-note"
            onClick={() => openPanel("projects")}
            aria-haspopup="dialog"
          >
            <small>01 / BUILD</small>
            IT Projects <span aria-hidden="true">↗</span>
          </button>

          <button
            type="button"
            className="nav-note design-note"
            onClick={() => openPanel("design")}
            aria-haspopup="dialog"
          >
            <small>02 / CREATE</small>
            Design <span aria-hidden="true">↗</span>
          </button>

          <button
            type="button"
            className="nav-note about-note"
            onClick={() => openPanel("about")}
            aria-haspopup="dialog"
          >
            <small>03 / HELLO</small>
            About me <span aria-hidden="true">↗</span>
          </button>
        </nav>

        {/* Replaces “Hover, tap & explore the desk”. */}
        <div className="interaction-hint home-scroll-hint">
          <button
            type="button"
            className="home-scroll-button"
            onClick={scrollToContact}
            aria-label="Scroll down to my contact card"
          >
            <svg
              className="home-scroll-arrow"
              viewBox="0 0 32 42"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M16 3v31M5 24l11 11 11-11"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Pull down</span>
          </button>
        </div>
      </section>

      {/* Same page — revealed by scrolling. */}
      <ContactExperience paused={paused} />

      <dialog
        ref={dialogRef}
        className="content-dialog"
        aria-labelledby="panel-title"
        aria-describedby="panel-description"
        onCancel={(event) => {
          event.preventDefault();
          closePanel();
        }}
        onClick={handleBackdropClick}
      >
        <button
          type="button"
          className="close"
          onClick={closePanel}
          aria-label="Close panel"
        >
          ×
        </button>

        <p className="panel-eyebrow">SANKARI’S WORKSPACE</p>

        <h2 id="panel-title">{panel?.title}</h2>
        <p id="panel-description">{panel?.description}</p>
        <p className="placeholder-note">{panel?.note}</p>
      </dialog>

      <style jsx global>{`
        .home-page {
          width: 100%;
          min-height: 100svh;
          overflow-x: clip;
        }

        .portfolio .home-scroll-hint {
          padding: 4px 0 10px !important;
        }

        .home-scroll-button {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1px;

          margin: 0;
          padding: 4px 22px;

          border: 0;
          border-radius: 0;
          box-shadow: none;
          background: transparent;
          color: #fff3cf;

          font-family: Kalam, cursive;
          font-size: 16px;
          line-height: 1.3;

          cursor: pointer;
        }

        .home-scroll-button > span {
          padding: 0;
        }

        .home-scroll-arrow {
          display: block;
          width: 23px;
          height: 30px;
          animation: home-arrow-down 1.5s ease-in-out infinite;
        }

        .home-scroll-button:focus-visible {
          outline: 2px dashed #fff3cf;
          outline-offset: 3px;
        }

        @keyframes home-arrow-down {
          0%,
          100% {
            transform: translateY(-2px);
          }

          50% {
            transform: translateY(4px);
          }
        }

        .paused .home-scroll-arrow {
          animation: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .home-scroll-arrow {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}