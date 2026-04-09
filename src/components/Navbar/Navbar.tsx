import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navbar}`}>
        <Link href="/" className={styles.logo}>
          Eduardo <span className={styles.logoHighlight}>Barbosa Silva</span>
        </Link>
        <nav className={styles.navLinks}>
          <Link href="#about" className={styles.link}>Sobre</Link>
          <Link href="#projects" className={styles.link}>Projetos</Link>
          <Link href="#contact" className={styles.link}>Contato</Link>
        </nav>
      </div>
    </header>
  );
}
