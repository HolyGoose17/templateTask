import style from './FooterList.module.css'

export const FooterList = ({title, items}) => {
    return (
        <ul className={style.ul}>
            <h2 className={style.title}>{title}</h2>
            {items.map((item) => (
                <li key={item} className={style.li}>
                    <a href={item.href} className={style.link}>{item.label}</a>
                </li>
            ))}
          </ul>
    )
}