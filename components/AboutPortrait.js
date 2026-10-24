"use client";

import { useState } from "react";
import styles from "./AboutPortrait.module.css";

const facts = [
  {
    id: "basics",
    content: <>20 years old<br />BSc IT student</>,
  },
  {
    id: "city",
    content: <>From the city of dreams,<br /><strong>Mumbai.</strong></>,
  },
  {
    id: "creative",
    content: <>A little tech.<br />A lot of creative curiosity.</>,
  },
  {
    id: "likes",
    content: <><strong>Likes</strong>
    <br />Music <br />Food <br />Jokes <br /></>,
  },
  {
    id: "dislikes",
    content: (
      <>
        <strong>Dislikes</strong>
        <br />
        Meetings & presentations
        <br />
        Ghosting <br /> 
      </>
    ),
  },
];

function PortraitArrows() {
  return (
    <svg
      className={styles.arrows}
      viewBox="0 0 1040 600"
      fill="none"
      aria-hidden="true"
    >
      {/* Each line starts near the photo and ends beside its fact. */}
      <g className={styles.arrowLine}>
        {/* Upper left: basics */}
        <path
          pathLength="1"
          d="M391 140C344 142 337 90 285 90"
        />
        <path d="M298 81L284 90L297 100" />

        {/* Upper right: Mumbai, dotted */}
        <path
          className={styles.dotted}
          d="M650 143C694 147 685 89 735 89"
        />
        <path d="M722 80L736 89L723 99" />

        {/* Lower left: creative, a loop */}
        <path
          pathLength="1"
          d="M387 315C329 313 310 263 336 251C370 235 377 287 333 307C308 320 285 325 260 325"
        />
        <path d="M273 316L259 325L272 335" />

        {/* Right: likes */}
        <path
          pathLength="1"
          d="M652 275C710 277 706 315 755 315"
        />
        <path d="M742 306L756 315L743 325" />

        {/* Bottom: dislikes, dotted */}
        <path
          className={styles.dotted}
          d="M550 465C557 500 624 510 661 503"
        />
        <path d="M647 496L662 503L651 515" />
      </g>
    </svg>
  );
}

export default function AboutPortrait() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className={styles.section} aria-labelledby="about-title">
      <header className={styles.heading}>
        <p>THE PERSON BEHIND THE WORK</p>
        <h1 id="about-title">Hellooo!</h1>
      </header>

      <div
        className={`${styles.scene} ${
          expanded ? styles.expanded : ""
        }`}
      >
        <figure className={styles.portrait}>
          <button
            type="button"
            className={styles.photoButton}
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            aria-controls="portrait-facts"
            aria-label={
              expanded
                ? "Hide facts about Sankari"
                : "Show facts about Sankari"
            }
          >
            <span className={styles.film}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/photo-4.png"
                alt="Sankari Pillai"
                width="600"
                height="750"
                className={styles.photo}
              />
            </span>
          </button>

          <figcaption className={styles.name}>
            Sankari Pillai
          </figcaption>

          <span className={styles.tapHint}>
            {expanded ? "tap photo to tuck it away" : "tap the photo to meet me"}
          </span>
        </figure>

        <div
          id="portrait-facts"
          className={styles.reveal}
          hidden={!expanded}
        >
          <PortraitArrows />

          {facts.map((fact) => (
            <div
              key={fact.id}
              className={`${styles.fact} ${styles[fact.id]}`}
            >
              <svg
                className={styles.mobileArrow}
                viewBox="0 0 80 45"
                fill="none"
                aria-hidden="true"
              >
                <path d="M5 8C21 32 45 34 70 22M56 19L71 22L63 35" />
              </svg>

              <p>{fact.content}</p>
            </div>
          ))}
        </div>
      </div>

    
    </section>
  );
}