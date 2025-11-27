import { ArrowButton } from "../../../components/ArrowButton/ArrowButton"
import { Button } from "../../../components/Button/Button"
import { InfoSection } from "../../../components/InfoSection/InfoSection"
import { TextBlock } from "../../../components/TextBlock/TextBlock"
import './Hero.css'

export const Hero = () => {
    return (
        <section className="hero">
          <div className="hero__content">
            <InfoSection 
            subTitle='Revolutionize'
            title='Discover a New Way of Living'
            description='LifeBlend Hub offers a unique and comprehensive approach to modern living. With a curated blend of content and resources, we aim to enhance and inspire every facet of your lifestyle.'
            variant="lg" 
            />
            <div className="hero__features">
              <TextBlock 
              title='Explore More'
              description='Unlock your potential with our diverse range of articles, guides, and tools.'
              variant="sm" />
              <TextBlock 
              title='Get Inspired'
              description='Discover stories of transformation and success from our vibrant community.'
              variant="sm" />
            </div>
            <div className="hero__action">
              <Button label='Learn more'/>
              <ArrowButton label='Sign Up'/>
            </div>
          </div>
          <img className='hero_img' src="img/img2.jpg" alt="img2" />
        </section>
    )
}