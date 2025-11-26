import '../Button/Button.css';
export const Button = ({label, variant = 'default'}) => {
    return (
        <button
        className='btn'
        aria-label={label} 
        type="button">
            {label}
        </button>
    )
}