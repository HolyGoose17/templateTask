import style from'./Footer.module.css'

export const FooterMedia = ({platforms}) => {
    return (
      <ul className={style.ul}>
        <h2 className={style.title}>Follow us</h2>
        {platforms.map(({id, icon: Icon, name, href }, index) => (
            <li key={id} className={style.li}>
                <Icon className={style.icon} />
                {name}
                {/* <a href={href} className={style.link}>{name}</a> */}
            </li>
        ))}
      </ul>
    )
}