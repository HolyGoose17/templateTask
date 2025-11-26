import '../HeaderButton/HeaderButton.css';
export const HeaderButton = ({label, variant = 'default'}) => {
    return (
        <button 
        className='headerButton' 
        aria-label={label} 
        type="button">
            {label}
        </button>
    )
}