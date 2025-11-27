import style from './Button.module.css';
export const Button = ({label}) => {
    return (
        <button
        className={style.btn}
        aria-label={label} 
        type="button">
            {label}
        </button>
    )
}