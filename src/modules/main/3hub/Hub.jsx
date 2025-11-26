import { ArrowButton } from '../../../components/ArrowButton/ArrowButton'
import { Button } from '../../../components/Button/Button'
import '../3hub/Hub.css'

export const Hub = () => {
    return (
        <section className="hub">
          <div className="hub__content">
            <p className="hub__moto">Discover</p>
            <h2 className="hub__head">Unlock the Power of LifeBlend Hub</h2>
            <p className="hub__body">
              LifeBlend Hub is your one-stop destination for all things related
              to health, productivity, leisure, and personal growth. Explore our
              comprehensive blend of content and resources to enhance and
              inspire every facet of your lifestyle.
            </p>
          </div>
          <div className="hub__cards">
            {/* Создай компонент HubCard */}
            <div className="hub__card">
              <img className="hub__img" src="img/img3-1.jpg" alt="img2-1" />
              <h3 className="hub__title">Health and Wellness</h3>
              <p className="hub__desc">
                Discover expert advice and tips on maintaining a healthy
                lifestyle.
              </p>
            </div>
            <div className="hub__card">
              <img className="hub__img" src="img/img3-2.jpg" alt="img3-2" />
              <h3 className="hub__title">Boost Your Productivity</h3>
              <p className="hub__desc">
                Learn effective strategies to maximize your productivity and
                achieve your goals.
              </p>
            </div>
            <div className="hub__card">
              <img className="hub__img" src="img/img3-3.jpg" alt="img3-3" />
              <h3 className="hub__title">Find Joy in Leisure</h3>
              <p className="hub__desc">
                Discover exciting activities and hobbies to make the most of
                your leisure time.
              </p>
            </div>
          </div>
          <div className="hub_btns">
            <Button label='Join'/>
            <ArrowButton label='Learn more'/>
          </div>
        </section>
    )
}