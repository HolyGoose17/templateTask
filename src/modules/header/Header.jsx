import { useState } from "react";
import { Button } from "../../components/Button/Button"
import { HeaderButton } from "../../components/HeaderButton/HeaderButton"
import './Header.css';

export const Header =  () => {
  const [isVisible, setIsVisible] = useState(false);

    return (
      <>
        <div className="header_hidden">
          <div className="header_txt">Lifestyle</div>
          <button className="header_btn" onClick={() => setIsVisible(!isVisible)}>&#8942;</button>
        </div>
        <header  className={`header ${isVisible ? 'header--active' : ''}`}>
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
      </>
    )
}