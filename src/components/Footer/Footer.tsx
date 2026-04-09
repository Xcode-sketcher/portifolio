import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <p className={styles.copyright}>
          &copy; {currentYear} Eduardo Barbosa Silva. Todos os direitos reservados.
        </p>
        <div className={styles.socials}>
          <a href="https://github.com/Xcode-sketcher" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
          <a href="https://www.linkedin.com/in/eduardo-barbosa-silva-dev" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
