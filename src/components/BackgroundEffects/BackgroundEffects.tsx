import styles from './BackgroundEffects.module.css';

export default function BackgroundEffects() {
  return (
    <div className={styles.backgroundContainer}>
      <div className={`${styles.circle} ${styles.circle1}`}></div>
      <div className={`${styles.circle} ${styles.circle2}`}></div>
      <div className={`${styles.circle} ${styles.circle3}`}></div>
      <div className={`${styles.circle} ${styles.circle4}`}></div>
    </div>
  );
}
