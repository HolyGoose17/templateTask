import style from'./Footer.module.css'

export const FooterMedia = ({platforms}) => {
    return (
      <ul className={style.ul}>
        <h2 className={style.title}>Follow us</h2>
        {platforms.map(({ icon: Icon, name }, index) => (
            <li key={index} className={style.li}>
                <Icon className={style.icon} />
                {name}
            </li>
        ))}
      </ul>
    )
}