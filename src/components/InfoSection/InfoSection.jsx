import style from './InfoSection.module.css'
export const InfoSection = ({subTitle, title, description, variant='sm', align = 'left'}) => {
    const alignClass = align === 'center' ? style.alignCenter : style.alignLeft;
    return (
        <div className={`${style.infoSection} ${alignClass}`}>
            {subTitle && <p className={style.subTitle}>{subTitle}</p>}
            {title && <h2 className={`${style.title} ${style[variant]}`}>{title}</h2>}
            {description && <span className={style.description}>{description}</span>}
        </div>
    )
}