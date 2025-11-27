import style from './TextBlock.module.css'

export const TextBlock = ({title, description, variant='sm'}) => {
    return (
        <div className={style.textBlock}>
            <h3 className={`${style.title} ${style[variant]}`}>{title}</h3>
            <p className={style.description}>{description}</p>
        </div>
    )
}