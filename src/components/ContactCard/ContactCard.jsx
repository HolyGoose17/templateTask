import style from '../ContactCard/ContactCard.module.css'

export const ContactCard = ({ icon: Icon, title, subtitle, detail }) => {
    return (
        <div className={style.card}>
           <Icon className={style.icon} aria-label={title} />
            <h3 className={style.type}>{title}</h3>    
            <p className={style.text}>{subtitle}</p>
            {detail && <p className={style.text}>{detail}</p>}  
        </div>
    )
}