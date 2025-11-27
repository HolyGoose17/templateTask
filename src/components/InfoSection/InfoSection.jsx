import style from './InfoSection.module.css'
export const InfoSection = ({subTitle, title, description}) => {
    return (
        <div className={style.infoSection}>
            {subTitle && <p className={style.subTitle}>{subTitle}</p>}
            {title && <h2 className={style.title}>{title}</h2>}
            {description && <span className={style.description}>{description}</span>}
        </div>
    )
}