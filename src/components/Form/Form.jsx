import { Button } from '../Button/Button'
import style from './Form.module.css'

export const Form = ({ placeholder, buttonLabel, description }) => {
    return (
        <form className={style.form}>
            <div className={style.nav}>
                <input
                className={style.input}
                type="email"
                placeholder={placeholder}
                name="email"
                />
                <Button
                label={buttonLabel}
                type="submit"
                 />
            </div>
            <p className={style.details}>
              {description}
            </p>
        </form>
    )
}