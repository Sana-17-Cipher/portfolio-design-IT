"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./ContactExperience.module.css";

/*
 * Add your real details here.
 * Empty values show clear placeholders instead of broken links.
 */
const CONTACT = {
  name: "Sankari Pillai",
  role: "IT & Design",
  email: "sankaripillai2502@gmail.com",
  phone: "+91 8169512524",
  githubUrl: "https://github.com/Sana-17-Cipher",
  githubLabel: "GitHub",
};

const PULL_THRESHOLD = 70;
const MAX_PULL = 125;

function ArrowIcon() {
  return (
    <svg viewBox="0 0 32 48" fill="none" aria-hidden="true">
      <path
        d="M16 4v34M5 28l11 12 11-12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactIcon({ type }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {type === "email" && (
        <>
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="m4 7 8 6 8-6" />
        </>
      )}

      {type === "phone" && (
        <path
          d="M7 3H4a1 1 0 0 0-1 1
             c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3
             l-5-2-2 2a14 14 0 0 1-7-7l2-2-2-5Z"
        />
      )}

      {type === "github" && (
        <>
          <path
            d="M9 19c-4 1-4-2-6-2
               M15 22v-4a3.5 3.5 0 0 0-1-3
               c3.3-.4 6.8-1.6 6.8-7.3
               A5.7 5.7 0 0 0 19.3 4
               5.3 5.3 0 0 0 19.2.3
               S18-.1 15.2 1.8a13.5 13.5 0 0 0-7.2 0
               C5.2-.1 4 .3 4 .3A5.3 5.3 0 0 0 3.9 4
               5.7 5.7 0 0 0 2.4 8
               c0 5.7 3.5 6.9 6.8 7.3
               A3.5 3.5 0 0 0 8.2 18v4"
            transform="translate(1 1) scale(.9)"
          />
        </>
      )}
    </svg>
  );
}

function Flower({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      aria-hidden="true"
    >
      <path
        d="M20 13
           C8-2 0 13 13 20
           C-2 30 13 41 20 27
           C30 42 42 27 27 20
           C42 10 27-2 20 13Z"
        fill="#faf5dc"
        stroke="#526b60"
        strokeWidth="1.6"
      />

      <circle
        cx="20"
        cy="20"
        r="5"
        fill="#dfad6e"
        stroke="#526b60"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function CartoonPortrait() {
  return (
    <svg
      viewBox="0 0 180 210"
      role="img"
      aria-label="Illustrated cartoon portrait"
    >
      <rect width="180" height="210" rx="18" fill="#b7c9cd" />

      <path
        d="M0 161 35 131 60 154 97 124 130 151 180 129V210H0Z"
        fill="#9eb6b6"
      />

      {/* Shoulders */}
      <path
        d="M30 210v-16q3-38 60-38t60 38v16"
        fill="#a796b3"
        stroke="#443d48"
        strokeWidth="4"
      />

      <path
        d="M73 166 90 190 107 166"
        fill="#eee4d0"
        stroke="#443d48"
        strokeWidth="3"
      />

      {/* Hair */}
      <path
        d="M37 93q-6-54 53-55 59 1 53 55
           l8 69-25 14-19-12-36 4-30-1-14-15Z"
        fill="#51414a"
        stroke="#393640"
        strokeWidth="4"
      />

      {/* Ears */}
      <ellipse
        cx="39"
        cy="119"
        rx="12"
        ry="16"
        fill="#edc39a"
        stroke="#443d48"
        strokeWidth="3"
      />

      <ellipse
        cx="141"
        cy="119"
        rx="12"
        ry="16"
        fill="#edc39a"
        stroke="#443d48"
        strokeWidth="3"
      />

      {/* Face */}
      <path
        d="M43 88q0-35 47-35t47 35v43
           q-2 38-47 39-45-1-47-39Z"
        fill="#efcba5"
        stroke="#443d48"
        strokeWidth="4"
      />

      {/* Fringe */}
      <path
        d="M42 100V78q8-31 48-31 42 0 48 33v18
           q-18 0-29-18-10 15-23 15-4-13-9-18
           -12 22-35 23Z"
        fill="#51414a"
        stroke="#443d48"
        strokeWidth="3"
      />

      {/* Eyebrows */}
      <path
        d="M57 107h17m32 0h17"
        stroke="#51414a"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Eyes */}
      <rect x="60" y="116" width="8" height="13" rx="4" fill="#443d48" />
      <rect x="112" y="116" width="8" height="13" rx="4" fill="#443d48" />

      {/* Cheeks */}
      <ellipse cx="58" cy="138" rx="10" ry="6" fill="#df9f91" />
      <ellipse cx="122" cy="138" rx="10" ry="6" fill="#df9f91" />

      {/* Nose */}
      <path
        d="M85 125q5-4 10 0v9H85Z"
        fill="#d79b87"
      />

      {/* Smile */}
      <path
        d="M78 144q12 13 24 0"
        fill="none"
        stroke="#704953"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Cap */}
      <path
        d="M39 80V51q1-26 51-27 50 1 51 27v29Z"
        fill="#b39ab2"
        stroke="#443d48"
        strokeWidth="4"
      />

      <path
        d="M71 27q19-5 38 0v51H71Z"
        fill="#d8b8b1"
        stroke="#756173"
        strokeWidth="2"
      />

      <path
        d="M32 77q56-14 116 0l-5 16q-55-12-106 0Z"
        fill="#796477"
        stroke="#443d48"
        strokeWidth="4"
      />

      <text
        x="90"
        y="64"
        textAnchor="middle"
        fontFamily="Kalam, cursive"
        fontWeight="700"
        fontSize="27"
        fill="#fff1cd"
        stroke="#796477"
        strokeWidth="0.6"
      >
        SP
      </text>

      {/* Tiny earrings */}
      <circle cx="40" cy="142" r="4" fill="#e6bc74" />
      <circle cx="140" cy="142" r="4" fill="#e6bc74" />
    </svg>
  );
}

function BackgroundPattern() {
  return (
    <svg
      className={styles.backgroundPattern}
      width="100%"
      height="100%"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="contact-background-pattern"
          width="280"
          height="240"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-15)"
        >
          <g
            fill="none"
            stroke="#716a79"
            strokeWidth="10"
            opacity="0.075"
          >
            <rect x="36" y="30" width="91" height="65" rx="12" />

            <path d="M53 50 80 70 109 50" />

            <path
              d="m177 54-19 18 19 18
                 m37-36 19 18-19 18
                 m-17-42-14 48"
            />

            <path
              d="M70 156 78 174 98 176 83 189
                 87 209 70 199 53 209 57 189
                 42 176 62 174Z"
            />

            <circle cx="196" cy="180" r="25" />
            <path d="M184 180h24m-12-12v24" />
          </g>
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#contact-background-pattern)" />
    </svg>
  );
}

function Lanyard() {
  return (
    <div className={styles.lanyard} aria-hidden="true">
      <div className={styles.strap}>
        <span className={styles.strapMark}>SP</span>
        <span className={styles.strapStar}>✦</span>
        <span className={styles.strapCode}>{"</>"}</span>
      </div>

      <div className={styles.metalRing} />
      <div className={styles.connector} />
    </div>
  );
}

function ContactRow({ type, label, value, href, external = false }) {
  const content = (
    <>
      <span className={styles.contactIcon}>
        <ContactIcon type={type} />
      </span>

      <span className={styles.contactText}>
        <span className={styles.contactLabel}>{label}</span>
        <span className={styles.contactValue}>{value}</span>
      </span>

      {href && <span className={styles.linkArrow}>↗</span>}
    </>
  );

  if (!href) {
    return <div className={styles.contactRow}>{content}</div>;
  }

  return (
    <a
      className={styles.contactRow}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  );
}

function ContactBadge({ onReplay }) {
  const phoneHref = CONTACT.phone
    ? `tel:${CONTACT.phone.replace(/[^\d+]/g, "")}`
    : undefined;

  return (
    <article
      className={styles.badge}
      aria-label={`${CONTACT.name}'s contact card`}
      onDoubleClick={(event) => {
        // Links should work normally without restarting the animation.
        if (event.target.closest("a, button")) return;
        onReplay();
      }}
    >
      <div className={styles.badgeTab} aria-hidden="true">
        <span />
        <span />
      </div>

      <Flower className={`${styles.flower} ${styles.flowerOne}`} />
      <Flower className={`${styles.flower} ${styles.flowerTwo}`} />
      <Flower className={`${styles.flower} ${styles.flowerThree}`} />
      <Flower className={`${styles.flower} ${styles.flowerFour}`} />

      <div className={styles.cardWindow}>
        <div className={styles.cardHeader}>
          <span>CREATIVE DEPARTMENT</span>
          <span className={styles.headerSymbol}>✦</span>
        </div>

        <div className={styles.cardBody}>
          <div className={styles.identity}>
            <div className={styles.portraitWrap}>
              <div className={styles.portrait}>
                <CartoonPortrait />
              </div>

              <span className={styles.photoTooltip}>Contact me</span>

              
            </div>

            <div className={styles.identityText}>
              <span className={styles.eyebrow}>NICE TO MEET YOU</span>

              <h1>{CONTACT.name}</h1>

              <span className={styles.role}>{CONTACT.role}</span>

              <p>
                A little logic.
                <br />
                A little imagination.
              </p>
            </div>
          </div>

          <div className={styles.contactDetails}>
            <ContactRow
              type="email"
              label="EMAIL"
              value={CONTACT.email || "Add your email"}
              href={CONTACT.email ? `mailto:${CONTACT.email}` : undefined}
            />

            <ContactRow
              type="phone"
              label="CONTACT"
              value={CONTACT.phone || "+91 8169512524"}
              href={phoneHref}
            />

            <ContactRow
              type="github"
              label="FIND MY CODE"
              value={CONTACT.githubLabel}
              href={CONTACT.githubUrl || undefined}
              external
            />
          </div>

          <div className={styles.cardFooter}>
            <div className={styles.barcode} aria-hidden="true" />
            <span>IDEAS • CODE • DESIGN</span>
          </div>
        </div>
      </div>
    </article>
  );
}
export default function ContactExperience({ paused = false }) {
  const [revealed, setRevealed] = useState(false);
  const [swingCount, setSwingCount] = useState(0);

  const stageRef = useRef(null);
  const touchStart = useRef(null);
  const previousTap = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    if (!("IntersectionObserver" in window)) {
      setRevealed(true);
      return;
    }

    // Wait until the ID area is visible, not the introduction.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(stage);

    return () => observer.disconnect();
  }, []);

  function replaySwing() {
    previousTap.current = null;
    setSwingCount((count) => count + 1);
  }

  function isLinkOrButton(target) {
    return (
      target instanceof Element &&
      Boolean(target.closest("a, button"))
    );
  }

  function handlePointerDown(event) {
    if (
      event.pointerType !== "touch" ||
      !event.isPrimary ||
      isLinkOrButton(event.target)
    ) {
      touchStart.current = null;
      return;
    }

    touchStart.current = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      time: performance.now(),
    };
  }

  function handlePointerUp(event) {
    if (event.pointerType !== "touch") return;

    const start = touchStart.current;
    touchStart.current = null;

    if (
      !start ||
      start.id !== event.pointerId ||
      isLinkOrButton(event.target)
    ) {
      previousTap.current = null;
      return;
    }

    const now = performance.now();
    const distance = Math.hypot(
      event.clientX - start.x,
      event.clientY - start.y
    );

    // Scrolling should never count as a tap.
    if (distance > 12 || now - start.time > 350) {
      previousTap.current = null;
      return;
    }

    const last = previousTap.current;

    if (
      last &&
      now - last.time < 320 &&
      Math.hypot(
        event.clientX - last.x,
        event.clientY - last.y
      ) < 32
    ) {
      replaySwing();
      return;
    }

    previousTap.current = {
      time: now,
      x: event.clientX,
      y: event.clientY,
    };
  }

  return (
    <section
      id="contact"
      className={styles.page}
      data-motion-paused={paused ? "true" : "false"}
      aria-labelledby="contact-heading"
    >
      {/* Suspense screen: ordinary scrolling continues below. */}
      <div className={styles.contactIntro}>
        <p className={styles.introEyebrow}>
          YOU FOUND THE CONTACT CORNER
        </p>

        <h2 id="contact-heading" className={styles.introHeading}>
          Let’s make
          <br />
          something <span>good.</span>
        </h2>

        <p className={styles.introDescription}>
          My details are just a little scroll away.
        </p>

        <div className={styles.scrollCue}>
          <span className={styles.cueThread} aria-hidden="true" />

          <div className={styles.cueTag}>
            <svg
              className={styles.cueArrow}
              viewBox="0 0 40 54"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M20 5v40M7 32l13 14 13-14"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Pull down</span>
          </div>
        </div>

        <p className={styles.keepScrolling}>Keep scrolling to meet me</p>
      </div>

      {/* The ID enters only when this area scrolls into view. */}
      <div className={styles.contactScene}>
        <div ref={stageRef} className={styles.stage}>
          {revealed && (
            <div className={styles.hangingPosition}>
              <div
                key={swingCount}
                className={`${styles.swingAssembly} ${styles.enterSwing}`}
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
                onPointerCancel={() => {
                  touchStart.current = null;
                  previousTap.current = null;
                }}
              >
                <Lanyard />
                <ContactBadge onReplay={replaySwing} />
              </div>
            </div>
          )}
        </div>

        <div className={styles.sceneFooter}>
          <p>Double-click or double-tap the ID to swing it again.</p>

          <button
            type="button"
            className={styles.replayButton}
            onClick={replaySwing}
          >
            Swing again <span aria-hidden="true">↝</span>
          </button>
        </div>
      </div>
    </section>
  );
}