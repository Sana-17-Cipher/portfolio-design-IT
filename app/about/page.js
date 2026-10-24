import Link from "next/link";
import AboutPortrait from "../../components/AboutPortrait";

import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/" className={styles.back}>
            <span aria-hidden="true">←</span>
            Back to the desk
          </Link>

          <span className={styles.headerNote}>
            the person behind the pixels
          </span>
        </header>

        <AboutPortrait />

        <footer className={styles.footer}>
          <span>A little logic. A little imagination.</span>
          <Link href="/#contact">Let’s connect ↗</Link>
        </footer>
      </div>
    </main>
  );
}