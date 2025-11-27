import styles from './ArrowButton.module.css';

export const ArrowButton = ({ label}) => {
  return (
    <button
      className={styles.arrowText}
      type="button"
      aria-label={label}
    >
      {label} <span className={styles.arrowSymbol}>&gt;</span>
    </button>
  );
};