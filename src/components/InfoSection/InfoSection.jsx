import style from './InfoSection.module.css'
export const InfoSection = ({subTitle, title, description, className = ''}) => {
    return (
        <div className={`${style.infoSection} && ${className}`}>
            {subTitle && <p className={style.subTitle}>{subTitle}</p>}
            {title && <h2 className={style.title}>{title}</h2>}
            {description && <p className={style.description}>{description}</p>}
        </div>
    )
}