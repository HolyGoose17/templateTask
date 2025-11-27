import { ArrowButton } from '../ArrowButton/ArrowButton'
import style from './InfoCard.module.css'

export const InfoCard = ({ imageSrc, altText, title, description, buttonLabel }) => {
    return (
        <div className={style.card}>
            <img className={style.image} src={imageSrc} alt={altText}/>
            <h3 className={style.title}>
                {title}
            </h3>
            <p className={style.description}>
                {description}
            </p>
            {buttonLabel && <ArrowButton label={buttonLabel} variant="default" />}
        </div>
    )
}