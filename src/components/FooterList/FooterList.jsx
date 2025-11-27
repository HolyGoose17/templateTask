import style from './FooterList.module.css'

export const FooterList = ({title, items}) => {
    return (
        <ul className={style.ul}>
            <h2 className={style.title}>{title}</h2>
            {items.map((item, index) => (
                <li key={index} className={style.li}>{item}</li>
            ))}
          </ul>
    )
}