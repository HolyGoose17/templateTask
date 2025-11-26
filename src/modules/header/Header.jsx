import { Button } from "../../components/Button/Button"
import { HeaderButton } from "../../components/HeaderButton/HeaderButton"
import './Header.css';

export const Header =  () => {
    return (
        <header className="header">
        <ul className="header__left">
          <li>
            <HeaderButton label='Discover LifeBlend' />
          </li>
          <li>
            <HeaderButton label='Explore' />
          </li>
          <li>
            <HeaderButton label='Inspiration' />
          </li>
          <li>
            <HeaderButton label='Contact us' />
          </li>
        </ul>
        <ul className="header__right">
          <li>
            <Button label='Contact us' variant="primary" />
          </li>
        </ul>
      </header>
    )
}