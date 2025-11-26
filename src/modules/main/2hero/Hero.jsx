import { ArrowButton } from "../../../components/ArrowButton/ArrowButton"
import { Button } from "../../../components/Button/Button"

export const Hero = () => {
    return (
        <section className="hero">
          <div className="hero__content">
            <div className="hero__lifeStyle">
              <p className="hero__moto">Revolutionize</p>
              <h2 className="hero__title">Discover a New Way of Living</h2>
              <p className="hero__desc">
                LifeBlend Hub offers a unique and comprehensive approach to modern living. With a curated blend of content and resources, we aim to enhance and inspire every facet of your lifestyle.
              </p>
            </div>
            <div className="hero__features">
              <div className="hero__feature">
                <div className="hero__feature__title">Explore More</div>
                <div className="hero__feature__desc">
                  Unlock your potential with our diverse range of articles, guides, and tools.
                </div>
              </div>
              <div className="hero__feature">
                <div className="hero__feature__title">Get Inspired</div>
                <div className="hero__feature__desc">
                  Discover stories of transformation and success from our
                  vibrant community.
                </div>
              </div>
            </div>
            <div className="hero__action">
                <Button label='Learn more'/>
                <ArrowButton label='Sign Up'/>
            </div>
          </div>
          <img class='hero_img' src="img/img2.jpg" alt="img2" />
        </section>
    )
}