import { Button } from '../../../components/Button/Button'
import '../1welcome/Welcome.css'
export const Welcome = () => {
    return (
        <section className="welcome">
          <img className="welcome__img" src="/img/img1.jpg" alt="img1" fetchPriority="high" />
          <div className="welcome__content">
            <h2 className="welcome__title">
              Stay tuned, stay healthy
            </h2>
            <div className="welcome__info">
              <p className="welcome__description">
                Experience a comprehensive blend of content and resources to
                enhance and inspire every facet of your lifestyle.
              </p>
              <div className="welcome__actions">
                <Button label='Explore' variant="primary" />
                <Button label='Sign Up' variant="primary" />
              </div>
            </div>
          </div>
        </section>
    )
}