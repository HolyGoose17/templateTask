import '../ArrowButton/ArrowButton.css'
export const ArrowButton = ({ label, onClick, variant = 'default' }) => {
  return (
    <button
      className='arrow_btn'
      onClick={onClick}
      type="button"
      aria-label={label}
    >
      {label} <span className='arrow'>&gt;</span>
    </button>
  );
};