import styles from './ArrowButton.module.css';
export const ArrowButton = ({ label, onClick, variant = 'default' }) => {
  return (
    <button
      className={styles.arrowText}
      onClick={onClick}
      type="button"
      aria-label={label}
    >
      {label} <span className={styles.arrowSymbol}>&gt;</span>
    </button>
  );
};