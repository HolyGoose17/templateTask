import styles from './ArrowButton.module.css';
export const ArrowButton = ({ label, onClick, variant = 'default' }) => {
  return (
    <button
      className={styles.arrow_btn}
      onClick={onClick}
      type="button"
      aria-label={label}
    >
      {label} <span className={styles.arrow}>&gt;</span>
    </button>
  );
};