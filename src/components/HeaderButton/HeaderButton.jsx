import style from './HeaderButton.module.css';
export const HeaderButton = ({label, variant = 'default'}) => {
    return (
        <button 
        className={style.headerButton} 
        aria-label={label} 
        type="button">
            {label}
        </button>
    )
}