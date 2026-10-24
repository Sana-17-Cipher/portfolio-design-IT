"use client";

import { useEffect, useId, useState } from "react";

/* -------------------------------------------------------
   Interactive wrapper
------------------------------------------------------- */

function DeskObject({
  label,
  position,
  mobilePosition,
  mobile,
  motion = "wiggle",
  className = "",
  onActivate,
  children,
}) {
  const [tapped, setTapped] = useState(false);

  useEffect(() => {
    if (!tapped) return;

    const timer = window.setTimeout(() => {
      setTapped(false);
    }, 900);

    return () => window.clearTimeout(timer);
  }, [tapped]);

  function activate() {
    setTapped(true);
    onActivate?.();
  }

  return (
    <g transform={mobile ? mobilePosition || position : position}>
      <g
        className={[
          "sk-object",
          `sk-${motion}`,
          className,
          tapped ? "sk-tapped" : "",
        ].join(" ")}
        role="button"
        tabIndex={0}
        aria-label={label}
        onClick={activate}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            activate();
          }
        }}
      >
        {children}
      </g>
    </g>
  );
}

/* -------------------------------------------------------
   Reusable drawings
------------------------------------------------------- */

function Star({ smile = false }) {
  return (
    <g>
      <path
        d="M85 4 110 57 169 65 126 107
           136 166 84 139 32 165 42 106
           1 64 60 56Z"
        fill="#fff8dc"
        stroke="#29382b"
        strokeWidth="6"
      />

      <path
        d="M85 20 105 67 153 73 118 108
           126 151 84 128 42 151 51 106
           16 73 67 65Z"
        fill="#edbf55"
        stroke="#71562b"
        strokeWidth="3"
      />

      <path
        d="M85 30 102 72 139 77 105 85
           83 80 52 130 58 102 28 77 70 72Z"
        fill="#ffe799"
      />

      <path
        d="M81 39 72 65 47 70"
        fill="none"
        stroke="#fff5c8"
        strokeWidth="5"
      />

      {smile && (
        <g fill="#413d2b">
          <circle cx="67" cy="94" r="4" />
          <circle cx="104" cy="94" r="4" />

          <path
            d="M77 110 Q86 120 95 110"
            fill="none"
            stroke="#413d2b"
            strokeWidth="3"
          />
        </g>
      )}
    </g>
  );
}

function Paperclip({ color = "#ba5639" }) {
  return (
    <path
      d="M18 8
         C4 -9 -20 4 -12 24
         L28 103
         C39 126 67 111 57 89
         L23 23
         C17 10 0 18 7 33
         L38 93"
      fill="none"
      stroke={color}
      strokeWidth="7"
      strokeLinecap="round"
    />
  );
}

function Tape({ transform }) {
  return (
    <g transform={transform} opacity="0.8">
      <path
        d="M0 0 12 4 23 0 34 4 46 0
           58 4 70 0 86 3
           83 58 71 54 59 58 47 54
           35 58 23 54 11 58 0 54Z"
        fill="#dfdba1"
        stroke="#70805b"
        strokeWidth="2"
      />

      <path
        d="M13 8 25 49 M37 8 49 49 M61 8 73 49"
        stroke="#a8b37b"
        strokeWidth="3"
        opacity="0.65"
      />
    </g>
  );
}

function Crayon({ color, label, transform }) {
  return (
    <g transform={transform}>
      <path
        d="M0 0 H39 V132 L20 179 0 132Z"
        fill={color}
        stroke="#2b392b"
        strokeWidth="4"
      />

      <path
        d="M0 30 H39 V109 H0Z"
        fill="#fff1c3"
        fillOpacity="0.25"
        stroke="#34402b"
        strokeWidth="3"
      />

      <path
        d="M0 132 20 179 39 132"
        fill="#24372b"
        fillOpacity="0.2"
      />

      <path
        d="M8 7 V23"
        stroke="#fff0bd"
        strokeWidth="3"
      />

      <text
        transform="translate(25 102) rotate(-90)"
        fontSize="14"
        fill="#29382b"
      >
        {label}
      </text>
    </g>
  );
}

function Brush({ color = "#377ba3" }) {
  return (
    <g>
      <path
        d="M0 16 Q-16 17 -36 6
           Q-31 24 -45 39
           Q-18 29 1 34Z"
        fill="#aaa58c"
        stroke="#2d392d"
        strokeWidth="4"
      />

      <path
        d="M-31 14 -5 25 M-32 24 -8 28 M-33 32 -9 30"
        fill="none"
        stroke="#64634e"
        strokeWidth="2"
      />

      <path
        d="M-3 14 49 18 49 32 -3 35Z"
        fill="#bdc4aa"
        stroke="#2d392d"
        strokeWidth="4"
      />

      <path
        d="M47 18 271 22 Q292 26 271 30 L47 33Z"
        fill={color}
        stroke="#2d392d"
        strokeWidth="4"
      />

      <path
        d="M62 22 249 25"
        stroke="#8ac0d6"
        strokeWidth="3"
      />
    </g>
  );
}

/* -------------------------------------------------------
   Headphones — dark headband, round cups, spider and star
------------------------------------------------------- */

function Headphones() {
  return (
    <g>
      {/* Cable */}
      <path
        d="M240 268
           C280 322 225 354 181 336
           S90 343 117 389"
        fill="none"
        stroke="#203329"
        strokeWidth="7"
      />

      <path
        d="M117 389 124 404"
        stroke="#879282"
        strokeWidth="9"
      />

      {/* Outer headband */}
      <path
        d="M30 158
           C8 -12 277 -35 292 146"
        fill="none"
        stroke="#17271f"
        strokeWidth="34"
      />

      {/* Headband surface */}
      <path
        d="M30 151
           C11 -8 274 -27 290 143"
        fill="none"
        stroke="#454842"
        strokeWidth="23"
      />

      {/* Highlight */}
      <path
        d="M31 111
           C37 12 217 -22 273 89"
        fill="none"
        stroke="#73756c"
        strokeWidth="4"
      />

      {/* Metal sliders */}
      <path
        d="M31 151 39 183 M289 146 277 180"
        stroke="#1c2b22"
        strokeWidth="15"
      />

      <path
        d="M31 151 39 183 M289 146 277 180"
        stroke="#b6bbae"
        strokeWidth="8"
      />

      {/* Left cup */}
      <g transform="translate(18 170) rotate(-17 58 62)">
        <path
          d="M21 -20 H77 L82 8 H17Z"
          fill="#4d5148"
          stroke="#1c2a22"
          strokeWidth="4"
        />

        <ellipse
          cx="58"
          cy="65"
          rx="64"
          ry="77"
          fill="#323b32"
          stroke="#17271f"
          strokeWidth="6"
        />

        <ellipse
          cx="58"
          cy="65"
          rx="52"
          ry="66"
          fill="#62665b"
          stroke="#1d2b22"
          strokeWidth="4"
        />

        <ellipse
          cx="58"
          cy="65"
          rx="43"
          ry="55"
          fill="#8a8e7f"
          stroke="#444d40"
          strokeWidth="3"
        />

        <path
          d="M26 33 Q41 7 66 11"
          fill="none"
          stroke="#b7bba6"
          strokeWidth="4"
          opacity="0.8"
        />

        {/* Spider emblem */}
        <g
          fill="#272e27"
          stroke="#272e27"
          strokeWidth="3"
          strokeLinecap="round"
        >
          <ellipse cx="58" cy="68" rx="7" ry="13" />
          <circle cx="58" cy="51" r="6" />

          <path
            d="M54 53 41 42 40 25
               M62 53 75 42 76 25
               M51 60 34 54 25 41
               M65 60 82 54 91 41
               M51 69 33 74 25 91
               M65 69 83 74 91 91
               M54 77 43 92 43 108
               M62 77 73 92 73 108"
            fill="none"
          />
        </g>
      </g>

      {/* Right cup */}
      <g transform="translate(205 163) rotate(18 58 62)">
        <path
          d="M21 -20 H77 L82 8 H17Z"
          fill="#4d5148"
          stroke="#1c2a22"
          strokeWidth="4"
        />

        <ellipse
          cx="58"
          cy="65"
          rx="64"
          ry="77"
          fill="#323b32"
          stroke="#17271f"
          strokeWidth="6"
        />

        <ellipse
          cx="58"
          cy="65"
          rx="52"
          ry="66"
          fill="#62665b"
          stroke="#1d2b22"
          strokeWidth="4"
        />

        <ellipse
          cx="58"
          cy="65"
          rx="43"
          ry="55"
          fill="#8a8e7f"
          stroke="#444d40"
          strokeWidth="3"
        />

        <path
          d="M26 33 Q41 7 66 11"
          fill="none"
          stroke="#b7bba6"
          strokeWidth="4"
          opacity="0.8"
        />

        {/* Star emblem */}
        <path
          d="M58 35 67 54 88 56 72 71
             77 94 58 82 39 94 44 71
             28 56 49 54Z"
          fill="#aa6257"
          stroke="#242e26"
          strokeWidth="5"
        />

        <path
          d="M58 46 62 59 76 61 65 69
             68 82 58 75 47 82 50 69
             40 61 53 59Z"
          fill="#d08c75"
        />
      </g>

      {/* Visible only on hover/focus/tap */}
      <g className="sk-music" fill="#f9df8b">
        <text x="-35" y="98" fontSize="48">
          ♪
        </text>

        <text x="321" y="112" fontSize="55">
          ♫
        </text>
      </g>
    </g>
  );
}

/* -------------------------------------------------------
   Laptop
------------------------------------------------------- */

function Laptop() {
  const code = [
    { text: "const developer = {", color: "#deb66c", x: 55 },
    { text: 'name: "Sankari Pillai",', color: "#d59eaa", x: 77 },
    { text: 'interests: ["code", "design"],', color: "#91c5b2", x: 77 },
    { text: "curiosity: Infinity,", color: "#9ebbd2", x: 77 },
    { text: "create: () => buildSomething()", color: "#d2d5a1", x: 77 },
    { text: "};", color: "#deb66c", x: 55 },
    { text: "developer.create();", color: "#91c5b2", x: 55 },
  ];

  return (
    <g>
      {/* Screen enclosure */}
      <path
        d="M17 0 H485 Q502 0 502 19
           V284 H0 V19 Q0 0 17 0Z"
        fill="#485044"
        stroke="#24372b"
        strokeWidth="6"
      />

      <rect
        x="16"
        y="17"
        width="470"
        height="247"
        rx="7"
        fill="#172f33"
        stroke="#a4ac93"
        strokeWidth="4"
      />

      <circle cx="251" cy="8" r="3" fill="#c4ccba" />

      {/* Editor toolbar */}
      <path d="M25 27 H477 V54 H25Z" fill="#2b4648" />

      <circle cx="40" cy="40" r="4" fill="#de8e78" />
      <circle cx="55" cy="40" r="4" fill="#e5c269" />
      <circle cx="70" cy="40" r="4" fill="#92b98b" />

      <text
        x="459"
        y="44"
        textAnchor="end"
        fill="#c0d0c4"
        fontFamily="monospace"
        fontSize="11"
      >
        portfolio.js
      </text>

      {/* Actual readable code */}
      <g className="sk-code">
        {code.map((line, index) => (
          <g key={line.text}>
            <text
              x="29"
              y={82 + index * 24}
              fill="#708a84"
              fontFamily="monospace"
              fontSize="12"
            >
              {index + 1}
            </text>

            <text
              x={line.x}
              y={82 + index * 24}
              fill={line.color}
              fontFamily="monospace"
              fontSize="15"
            >
              {line.text}
            </text>
          </g>
        ))}
      </g>

      <rect
        className="sk-cursor"
        x="55"
        y="245"
        width="10"
        height="3"
        fill="#f2d58c"
      />

      {/* Keyboard base */}
      <path
        d="M0 284 H502 L536 457
           Q539 473 522 476
           H-20 Q-37 472 -34 457Z"
        fill="#b7bfaa"
        stroke="#24372b"
        strokeWidth="5"
      />

      <path
        d="M17 301 H483 L500 405 H0Z"
        fill="#465349"
        stroke="#344535"
        strokeWidth="3"
      />

      {Array.from({ length: 5 }, (_, row) => (
        <g key={row}>
          {Array.from({ length: 13 }, (_, column) => (
            <rect
              key={column}
              x={22 + column * 35 - row * 2}
              y={309 + row * 18}
              width="27"
              height="12"
              rx="2"
              fill="#d0d3bb"
              stroke="#344535"
              strokeWidth="1.4"
            />
          ))}
        </g>
      ))}

      <path
        d="M168 419 H335 L343 462 H160Z"
        fill="#9ca994"
        stroke="#596b57"
        strokeWidth="2"
      />

      <path
        d="M-24 466 H526"
        stroke="#eef0d9"
        strokeWidth="3"
      />
    </g>
  );
}

/* -------------------------------------------------------
   Main scene
------------------------------------------------------- */

export default function Desk({ onOpen }) {
  const [mobile, setMobile] = useState(false);

  const uniqueId = useId().replace(/:/g, "");
  const gridId = `${uniqueId}-grid`;
  const shadowId = `${uniqueId}-shadow`;
  const paperId = `${uniqueId}-paper`;

  useEffect(() => {
    const query = window.matchMedia("(max-width: 700px)");

    function sync() {
      setMobile(query.matches);
    }

    sync();
    query.addEventListener("change", sync);

    return () => query.removeEventListener("change", sync);
  }, []);

  const shadow = `url(#${shadowId})`;

  function open(section) {
    onOpen?.(section);
  }

  return (
    <svg
      className="desk sk-scene"
      viewBox={mobile ? "0 0 900 1200" : "0 0 1600 900"}
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sankari Pillai’s interactive portfolio desk"
    >
      <defs>
        <pattern
          id={gridId}
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
        >
          <rect width="48" height="48" fill="#287a53" />

          <path
            d="M48 0 H0 V48"
            fill="none"
            stroke="#bad39b"
            strokeWidth="1.6"
            opacity="0.8"
          />

          <path
            d="M12 0 V48 M24 0 V48 M36 0 V48
               M0 12 H48 M0 24 H48 M0 36 H48"
            fill="none"
            stroke="#bad39b"
            strokeWidth="0.5"
            opacity="0.18"
          />
        </pattern>

        <filter
          id={shadowId}
          x="-30%"
          y="-30%"
          width="170%"
          height="180%"
        >
          <feDropShadow
            dx="7"
            dy="10"
            stdDeviation="1.5"
            floodColor="#153d2b"
            floodOpacity="0.4"
          />
        </filter>

        <linearGradient id={paperId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fffce8" />
          <stop offset="1" stopColor="#f5efcf" />
        </linearGradient>
      </defs>

      <style>{`
        /* Layout overrides: avoid the old square scene and overlapping nav. */
        .portfolio {
          min-height: 100svh;
          height: auto;
          overflow-x: clip;
          overflow-y: visible;
        }

        .portfolio .desk-wrap {
          width: 100%;
          height: auto !important;
          min-height: 0 !important;
          aspect-ratio: 1600 / 900;
        }

        .portfolio .sk-scene {
          display: block;
          width: 100%;
          height: 100%;
          overflow: hidden;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .portfolio .navigation {
          position: relative !important;
          inset: auto !important;
          transform: none !important;
          width: fit-content;
          max-width: calc(100% - 28px);
          margin: 8px auto 0;
          padding: 0;
        }

        .portfolio .interaction-hint {
          position: relative !important;
          inset: auto !important;
          margin: 0;
          padding: 16px 12px 12px;
        }

        .sk-scene text {
          user-select: none;
        }

        .sk-hand {
          font-family: Kalam, cursive;
          fill: #3c3a25;
        }

        .sk-object {
          cursor: pointer;
          outline: none;
          transform-box: fill-box;
          transform-origin: center;
        }

        .sk-object:focus-visible {
          filter: drop-shadow(0 0 5px #fff1ab);
        }

        .sk-wiggle:is(:hover, :focus-visible, .sk-tapped) {
          animation: sk-wiggle 650ms ease;
        }

        .sk-lift {
          transition: transform 240ms ease;
        }

        .sk-lift:is(:hover, :focus-visible, .sk-tapped) {
          transform: translateY(-7px) rotate(-1.5deg);
        }

        .sk-bounce:is(:hover, :focus-visible, .sk-tapped) {
          animation: sk-bounce 650ms ease;
        }

        .sk-headphone:is(:hover, :focus-visible, .sk-tapped) {
          animation: sk-bop 750ms ease;
        }

        .sk-spin:is(:hover, :focus-visible, .sk-tapped) {
          animation: sk-spin 800ms ease;
        }

        .sk-music {
          opacity: 0;
          pointer-events: none;
          transition: opacity 180ms ease;
        }

        .sk-object:is(:hover, :focus-visible, .sk-tapped) .sk-music {
          opacity: 1;
          animation: sk-notes 800ms ease-in-out infinite;
        }

        .sk-code {
          transition: filter 200ms ease;
        }

        .sk-object:is(:hover, :focus-visible, .sk-tapped) .sk-code {
          filter: brightness(1.3);
        }

        .sk-cursor {
          animation: sk-blink 1.2s steps(2, start) infinite;
        }

        .sk-glasses {
          opacity: 0;
          pointer-events: none;
          transform: translateY(-18px) rotate(-8deg);
          transform-box: fill-box;
          transform-origin: center;
          transition:
            opacity 160ms ease,
            transform 280ms cubic-bezier(.2,.8,.2,1);
        }

        .sk-girl:is(:hover, :focus-visible, .sk-tapped) .sk-glasses {
          opacity: 1;
          transform: translateY(0) rotate(0);
        }

        .sk-title-letter {
          animation: sk-ink 600ms both;
          animation-delay: var(--letter-delay);
        }

        .sk-name {
          animation: sk-ink 900ms 500ms both;
        }

        @keyframes sk-wiggle {
          0%, 100% { transform: rotate(0); }
          20% { transform: rotate(-6deg); }
          40% { transform: rotate(5deg); }
          60% { transform: rotate(-3deg); }
          80% { transform: rotate(2deg); }
        }

        @keyframes sk-bounce {
          0%, 100% { transform: translateY(0); }
          40% { transform: translateY(-13px) rotate(-3deg); }
          70% { transform: translateY(-4px) rotate(2deg); }
        }

        @keyframes sk-bop {
          0%, 100% { transform: rotate(0); }
          30% { transform: rotate(-5deg) translateY(-5px); }
          65% { transform: rotate(4deg); }
        }

        @keyframes sk-spin {
          0%, 100% { transform: rotate(0); }
          45% { transform: rotate(30deg); }
          75% { transform: rotate(-7deg); }
        }

        @keyframes sk-notes {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-9px); }
        }

        @keyframes sk-blink {
          to { opacity: 0; }
        }

        @keyframes sk-ink {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .paused .sk-object,
        .paused .sk-scene * {
          animation: none !important;
          transition: none !important;
        }

        .paused .sk-object:is(:hover, :focus-visible, .sk-tapped) {
          transform: none !important;
        }

        @media (max-width: 700px) {
          .portfolio .desk-wrap {
            aspect-ratio: 900 / 1200;
            margin-top: 48px;
          }

          .portfolio .navigation {
            width: calc(100% - 28px);
            gap: 9px;
            margin-top: 10px;
          }

          .portfolio .nav-note {
            flex: 1;
            min-width: 0;
            font-size: 17px;
            padding: 10px 9px 7px;
          }

          .portfolio .nav-note small {
            font-size: 8px;
            letter-spacing: .4px;
          }

          .portfolio .nav-note span {
            margin-left: 4px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sk-scene * {
            animation: none !important;
            transition: none !important;
          }

          .sk-object:is(:hover, :focus-visible, .sk-tapped) {
            transform: none !important;
          }
        }
      `}</style>

      {/* Background */}
      <rect
        x="-100"
        y="-100"
        width="2000"
        height="1600"
        fill={`url(#${gridId})`}
      />

      {/* Soft diagonal daylight */}
      <g fill="#f8e59d" opacity="0.1" pointerEvents="none">
        <path d="M-180 0 H-10 L1350 1200 H1100Z" />
        <path d="M180 0 H400 L1740 1200 H1470Z" />
      </g>

      {/* Top-left star */}
      <DeskObject
        label="Wiggle the gold star"
        position="translate(35 35) rotate(-10 85 85) scale(1.1)"
        mobilePosition="translate(20 25) rotate(-10 85 85) scale(.8)"
        mobile={mobile}
      >
        <g filter={shadow}>
          <Star />
        </g>
      </DeskObject>

      {/* To-do paper */}
      <DeskObject
        label="Lift the to-do list"
        position="translate(285 48) rotate(-10 120 120) scale(1.1)"
        mobilePosition="translate(225 35) rotate(-8 120 120)"
        mobile={mobile}
        motion="lift"
      >
        <g filter={shadow}>
          <path
            d="M0 0 H236 V218 L208 244 H0Z"
            fill="#f6da75"
            stroke="#3e462b"
            strokeWidth="4"
          />

          <path
            d="M208 244 V218 H236"
            fill="#c6ab54"
            stroke="#3e462b"
            strokeWidth="3"
          />

          <path
            d="M8 9 H227"
            stroke="#fff0aa"
            strokeWidth="5"
          />

          <text
            x="118"
            y="43"
            textAnchor="middle"
            className="sk-hand"
            fontSize="28"
          >
            TO-DO LIST
          </text>

          {["Overthink", "Be Cool", "Stay Curious"].map((text, index) => (
            <g key={text} transform={`translate(26 ${88 + index * 49})`}>
              <rect
                y="-15"
                width="16"
                height="16"
                rx="2"
                fill="#fff0b1"
                stroke="#6c6037"
                strokeWidth="2"
              />

              <text x="29" className="sk-hand" fontSize="25">
                {text}
              </text>

              <path
                d="M27 13 H182"
                stroke="#b39b55"
                strokeWidth="1.5"
                opacity="0.6"
              />
            </g>
          ))}
        </g>

        <g transform="translate(15 -12) rotate(-8) scale(.48)">
          <Paperclip />
        </g>
      </DeskObject>

      {/* Glue bottle */}
      <DeskObject
        label="Wobble the glue bottle"
        position="translate(755 -56) rotate(10 75 110)"
        mobilePosition="translate(505 -48) rotate(10 75 110) scale(.8)"
        mobile={mobile}
      >
        <path
          d="M28 271
             C-12 239 -48 262 -25 288
             C-59 312 -12 337 18 318
             C36 352 77 338 82 316
             C130 328 149 287 110 278
             C88 250 52 252 28 271Z"
          fill="#f6f4df"
          stroke="#35432f"
          strokeWidth="4"
        />

        <g filter={shadow}>
          <path
            d="M0 0 H150 L147 139
               Q145 164 118 164 H32
               Q4 162 3 138Z"
            fill="#eae5cf"
            stroke="#293a2e"
            strokeWidth="5"
          />

          <path
            d="M15 12 H33 V130 Q33 145 48 152
               H33 Q17 149 16 131Z"
            fill="#fff9e5"
          />

          <rect
            x="40"
            y="32"
            width="75"
            height="77"
            rx="6"
            fill="#bf6636"
            stroke="#34412d"
            strokeWidth="4"
          />

          <text
            x="77"
            y="79"
            textAnchor="middle"
            className="sk-hand"
            fontSize="27"
          >
            glue
          </text>

          <path
            d="M28 164 H124 L120 211 H33Z"
            fill="#31566a"
            stroke="#293a2e"
            strokeWidth="4"
          />

          {Array.from({ length: 10 }, (_, index) => (
            <path
              key={index}
              d={`M${37 + index * 8} 171 V202`}
              stroke="#8ca5af"
              strokeWidth="2"
            />
          ))}

          <path
            d="M54 211 H100 L89 252 77 281 65 252Z"
            fill="#43798b"
            stroke="#293a2e"
            strokeWidth="4"
          />
        </g>
      </DeskObject>

      {/* Crayons */}
      <DeskObject
        label="Wiggle the crayons"
        position="translate(1000 -18) rotate(7)"
        mobilePosition="translate(680 -25) rotate(7) scale(.75)"
        mobile={mobile}
      >
        <Crayon color="#d2614a" label="CRAYON" transform="rotate(-8)" />
        <Crayon color="#e9b54f" label="DRAW" transform="translate(62 -8)" />
        <Crayon
          color="#71a161"
          label="CREATE"
          transform="translate(124 -12) rotate(-5)"
        />
      </DeskObject>

      {/* Postcards */}
      <DeskObject
        label="Open design work"
        position="translate(1290 38) rotate(15 120 100)"
        mobilePosition="translate(674 172) rotate(14 120 100) scale(.72)"
        mobile={mobile}
        motion="lift"
        onActivate={() => open("design")}
      >
        <g filter={shadow}>
          <path
            d="M0 27 249 16 259 252 10 267Z"
            fill="#ebe8d5"
            stroke="#2c3b2b"
            strokeWidth="4"
          />

          <path
            d="M-19 -10 231 3 222 228 -29 213Z"
            fill="#fff6df"
            stroke="#2c3b2b"
            strokeWidth="4"
          />

          <path
            d="M-8 2 224 14 214 170 -16 153Z"
            fill="#e8a36d"
            stroke="#51462f"
            strokeWidth="3"
          />

          <circle cx="133" cy="58" r="28" fill="#f8d987" />

          <path
            d="M-13 121 56 82 121 119
               164 98 216 132 214 170 -16 153Z"
            fill="#b86b49"
          />

          <path
            d="M-14 137 78 112 160 149
               214 139 214 170 -16 153Z"
            fill="#855740"
          />

          <path
            d="M30 49 38 45 46 51 M176 69 184 65 192 71"
            fill="none"
            stroke="#824f37"
            strokeWidth="3"
          />

          <text x="6" y="195" className="sk-hand" fontSize="24">
            little moments ♡
          </text>
        </g>
      </DeskObject>

      {/* Design label */}
      <DeskObject
        label="Open the design gallery"
        position="translate(590 263) rotate(-3)"
        mobilePosition="translate(320 325) rotate(-3)"
        mobile={mobile}
        motion="lift"
        onActivate={() => open("design")}
      >
        <g filter={shadow}>
          <path
            d="M0 0 H190 L186 51 H0Z"
            fill="#ffdc71"
            stroke="#41472b"
            strokeWidth="3"
          />

          <text
            x="95"
            y="36"
            textAnchor="middle"
            className="sk-hand"
            fontSize="31"
          >
            DESIGN
          </text>
        </g>
      </DeskObject>

      {/* Pencil shaving */}
      <DeskObject
        label="Spin the pencil shaving"
        position="translate(267 355) scale(.8)"
        mobilePosition="translate(34 275) scale(.8)"
        mobile={mobile}
        motion="spin"
      >
        <path
          d="M67 0 79 8 92 5 101 18 115 21
             119 35 131 44 128 58 135 71
             127 83 127 97 113 104 106 119
             91 117 78 130 65 124 51 131
             39 119 25 118 20 104 7 98
             11 82 0 71 8 58 4 44
             18 35 21 21 35 18 44 5 56 10Z"
          fill="#4d86a5"
          stroke="#2c3b2b"
          strokeWidth="4"
        />

        <circle
          cx="67"
          cy="66"
          r="52"
          fill="#d8bd8c"
          stroke="#494e33"
          strokeWidth="3"
        />

        {Array.from({ length: 20 }, (_, index) => (
          <path
            key={index}
            d="M67 18 V51"
            transform={`rotate(${index * 18} 67 66)`}
            stroke="#aa916b"
            strokeWidth="2"
          />
        ))}

        <path
          d="M67 43 75 57 92 59 79 71
             82 87 67 79 51 87 54 70
             42 58 59 56Z"
          fill="#287a53"
          stroke="#435034"
          strokeWidth="3"
        />
      </DeskObject>

      {/* Headphones fill the left-hand empty space */}
      <DeskObject
        label="Move the headphones"
        position="translate(25 340) rotate(-10 160 180) scale(.85)"
        mobilePosition="translate(37 826) rotate(-10 160 180) scale(.65)"
        mobile={mobile}
        motion="headphone"
      >
        <g filter={shadow}>
          <Headphones />
        </g>
      </DeskObject>


      {/* Large central paper, with tape attached to the same group */}
      <DeskObject
        label="Lift the portfolio paper"
        position="translate(405 361) rotate(-2 415 115)"
        mobilePosition="translate(40 487) rotate(-2 415 115)"
        mobile={mobile}
        motion="lift"
      >
        <path
          d="M0 22 25 8 43 13 68 3 92 9
             120 0 145 6 175 1 202 7 230 1
             258 7 288 2 318 8 349 2 380 8
             410 2 440 8 472 1 501 7 532 2
             560 8 589 2 620 8 650 1 679 8
             708 2 737 9 766 3 793 12 819 8
             838 25 831 43 841 61 834 81
             841 101 834 123 842 143 833 163
             840 183 829 201 809 212 786 208
             760 218 733 212 705 220 677 214
             649 222 621 215 592 223 563 217
             534 224 505 217 476 224 446 218
             417 225 386 219 357 225 327 218
             298 224 268 217 238 224 209 217
             180 223 150 216 120 222 92 214
             65 218 42 209 23 212 9 196
             3 176 10 158 2 137 8 117
             1 96 9 77 2 57 12 41Z"
          fill={`url(#${paperId})`}
          filter={shadow}
        />
        

        <text
          x="420"
          y="133"
          textAnchor="middle"
          className="sk-hand"
          fontSize="91"
          letterSpacing="4"
        >
          {"PORTFOLIO".split("").map((letter, index) => (
            <tspan
              key={index}
              className="sk-title-letter"
              style={{ "--letter-delay": `${index * 75}ms` }}
            >
              {letter}
            </tspan>
          ))}
        </text>

        <text
          x="420"
          y="178"
          textAnchor="middle"
          className="sk-hand"
          fontSize="22"
          fill="#7b7350"
        >
          a little logic. a little imagination.
        </text>

        <Tape transform="translate(-21 -8) rotate(-35 43 28)" />
        <Tape transform="translate(777 180) rotate(35 43 28)" />
        
      </DeskObject>
      
      {/* Girl sticker */}
      <DeskObject
        label="Meet Sankari — hover for sunglasses"
        position="translate(1130 220) rotate(10 100 100) scale(1.08)"
        mobilePosition="translate(644 325) rotate(10 100 100) scale(.86)"
        mobile={mobile}
        motion="still"
        className="sk-girl"
        onActivate={() => open("about")}
      >
        <g filter={shadow}>
          <path
            d="M54 24 Q86 -14 135 8
               Q184 20 184 71 L208 86
               205 129 181 144 185 195
               125 189 87 197 58 171
               20 167 2 135 13 110
               3 82 16 58 42 60Z"
            fill="#fff9e5"
            stroke="#293a2c"
            strokeWidth="5"
          />

          <path
            d="M60 50 Q61 3 123 12
               Q180 21 177 80 L172 153
               186 183 134 174 102 182 70 152Z"
            fill="#29382c"
          />

          <ellipse
            cx="113"
            cy="85"
            rx="48"
            ry="54"
            fill="#f4eacb"
            stroke="#29382c"
            strokeWidth="4"
          />

          <path
            d="M68 70 Q65 25 113 25
               Q152 25 161 68
               Q125 65 113 38
               Q106 67 68 70Z"
            fill="#29382c"
          />

          <path
            d="M83 84 96 79 M124 81 137 86"
            fill="none"
            stroke="#29382c"
            strokeWidth="4"
          />

          <path
            d="M110 87 106 99 113 100"
            fill="none"
            stroke="#29382c"
            strokeWidth="2"
          />

          <path
            d="M90 109 Q111 135 130 104
               Q116 111 90 109Z"
            fill="#fff8e4"
            stroke="#29382c"
            strokeWidth="3"
          />

          {/* Peace-sign hand */}
          <path
            d="M45 141 18 118 21 100 33 104
               27 66 Q29 57 35 63
               L49 95 48 50 Q53 42 59 50
               L65 101 73 86 Q82 83 83 91
               L77 124 62 144Z"
            fill="#f4eacb"
            stroke="#29382c"
            strokeWidth="4"
          />

          <path
            d="M36 109 53 118 48 133 M52 102 61 111"
            fill="none"
            stroke="#29382c"
            strokeWidth="3"
          />
        </g>

        {/* Sunglasses */}
        <g className="sk-glasses">
          <path
            d="M80 80 68 74 M146 80 158 74"
            fill="none"
            stroke="#202c27"
            strokeWidth="5"
          />

          <path
            d="M79 77 Q94 72 108 78
               L105 95 Q94 103 83 94Z"
            fill="#243b3d"
            stroke="#152820"
            strokeWidth="4"
          />

          <path
            d="M117 78 Q132 72 147 77
               L143 94 Q132 103 121 95Z"
            fill="#243b3d"
            stroke="#152820"
            strokeWidth="4"
          />

          <path
            d="M108 81 Q113 77 118 81"
            fill="none"
            stroke="#152820"
            strokeWidth="4"
          />

          <path
            d="M85 81 97 78 M124 81 137 78"
            fill="none"
            stroke="#b7d6ca"
            strokeWidth="3"
            opacity="0.8"
          />
        </g>
      </DeskObject>

      {/* Right star */}
      <DeskObject
        label="Wiggle the smiling star"
        position="translate(1415 312) rotate(12 85 85) scale(.8)"
        mobilePosition="translate(735 727) rotate(12 85 85) scale(.65)"
        mobile={mobile}
      >
        <g filter={shadow}>
          <Star smile />
        </g>
      </DeskObject>

      {/* Brushes */}
      <DeskObject
        label="Wiggle the paintbrushes"
        position="translate(1338 486) rotate(-10) scale(.86)"
        mobilePosition="translate(650 870) rotate(-15) scale(.75)"
        mobile={mobile}
      >
        <Brush />

        <g transform="translate(-10 65) rotate(16)">
          <Brush color="#436c9d" />
        </g>
      </DeskObject>

      {/* Year */}
      <DeskObject
        label="Wiggle the year label"
        position="translate(405 633) rotate(-4)"
        mobilePosition="translate(65 772) rotate(-4)"
        mobile={mobile}
      >
        <g filter={shadow}>
          <path
            d="M0 0 H167 V46 H0Z"
            fill="#efcb65"
            stroke="#41482b"
            strokeWidth="3"
          />

          <text
            x="83"
            y="35"
            textAnchor="middle"
            className="sk-hand"
            fontSize="34"
          >
            2026
          </text>
        </g>
      </DeskObject>

      {/* Name on smaller paper */}
      <DeskObject
        label="Sankari Pillai — open About"
        position="translate(1040 655) rotate(3) scale(1.12)"
        mobilePosition="translate(540 762) rotate(3)"
        mobile={mobile}
        motion="lift"
        onActivate={() => open("about")}
      >
        <path
          d="M0 8 21 3 35 6 54 0 73 4
             96 0 117 4 138 1 160 5
             183 2 201 7 224 5 240 12
             257 13 252 27 259 40 254 54
             260 67 247 80 230 77 210 82
             187 79 168 83 146 78 130 81
             104 78 82 82 61 77 39 80
             26 73 11 73 6 60 9 46 3 33Z"
          fill="#fff8df"
          filter={shadow}
        />

        <g className="sk-name">
          <text
            x="126"
            y="35"
            textAnchor="middle"
            className="sk-hand"
            fontSize="29"
            letterSpacing="2"
          >
            Sankari
          </text>

          <text
            x="126"
            y="65"
            textAnchor="middle"
            className="sk-hand"
            fontSize="29"
            letterSpacing="2"
          >
            Pillai
          </text>
        </g>

        <g transform="translate(250 -7) rotate(45) scale(.55)">
          <Paperclip color="#d4a13f" />
        </g>
      </DeskObject>

      {/* Laptop — full screen and keyboard remain inside the scene */}
      <DeskObject
        label="Open IT projects on the laptop"
        position="translate(156 596) rotate(-9 250 230) scale(.63)"
        mobilePosition="translate(375 912) rotate(-8 250 230) scale(.56)"
        mobile={mobile}
        motion="lift"
        onActivate={() => open("projects")}
      >
        <g filter={shadow}>
          <Laptop />
        </g>
      </DeskObject>

      {/* USB pendrive */}
      <DeskObject
        label="Bounce the USB pendrive"
        position="translate(745 691) rotate(-24 65 90)"
        mobilePosition="translate(680 1010) rotate(20 65 90) scale(.68)"
        mobile={mobile}
        motion="bounce"
      >
        <g filter={shadow}>
          <path
            d="M23 96 H109 V189 H23Z"
            fill="#bdc5b2"
            stroke="#293b2e"
            strokeWidth="5"
          />

          <path d="M28 113 H104" stroke="#e0e4ce" strokeWidth="4" />

          <rect x="37" y="148" width="18" height="22" fill="#384839" />
          <rect x="77" y="148" width="18" height="22" fill="#384839" />

          <rect
            width="132"
            height="126"
            rx="13"
            fill="#377ca8"
            stroke="#263b2d"
            strokeWidth="5"
          />

          <path
            d="M13 13 118 12 117 100 14 102Z"
            fill="#4d92b9"
            stroke="#8bc0d2"
            strokeWidth="3"
          />

          <path
            d="M66 79 V36
               M66 39 59 48 M66 39 73 48
               M66 65 48 55 V43
               M66 71 85 60 V46"
            fill="none"
            stroke="#e1eed7"
            strokeWidth="4"
          />

          <circle cx="66" cy="82" r="6" fill="#e1eed7" />
          <circle cx="48" cy="40" r="4" fill="#e1eed7" />
          <rect x="81" y="39" width="8" height="8" fill="#e1eed7" />
        </g>
      </DeskObject>

      {/* Loose paperclip */}
      <DeskObject
        label="Wiggle the loose paperclip"
        position="translate(622 763) rotate(-15) scale(.68)"
        mobilePosition="translate(350 850) rotate(-15) scale(.55)"
        mobile={mobile}
      >
        <Paperclip color="#d16b4d" />
      </DeskObject>

      {/* Small stars to balance lower-right space */}
      <DeskObject
        label="Twinkle the little stars"
        position="translate(1430 683)"
        mobilePosition="translate(795 938) scale(.75)"
        mobile={mobile}
        motion="bounce"
      >
        <path
          d="M0 0 10 24 24 10-24 10-10 24-10-24-24-10 24-10Z"
          fill="#f1d47c"
          stroke="#3b432c"
          strokeWidth="3"
        />

        <path
          d="M63 -36 7 17 17 7-17 7-7 17-7-17-17-7 17-7Z"
          fill="#f1d47c"
          stroke="#3b432c"
          strokeWidth="3"
        />
      </DeskObject>
    </svg>
  );
}