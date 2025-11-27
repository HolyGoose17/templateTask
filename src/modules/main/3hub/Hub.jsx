import { ArrowButton } from '../../../components/ArrowButton/ArrowButton'
import { Button } from '../../../components/Button/Button'
import { InfoCard } from '../../../components/InfoCard/InfoCard'
import { InfoSection } from '../../../components/InfoSection/InfoSection'
import '../3hub/Hub.css'

export const Hub = () => {
    return (
        <section className="hub">
          <InfoSection 
          subTitle='Discover'
          title='Unlock the Power of LifeBlend Hub'
          description='LifeBlend Hub is your one-stop destination for all things related to health, productivity, leisure, and personal growth. Explore our comprehensive blend of content and resources to enhance and inspire every facet of your lifestyle.' />
          <div className="hub__cards">
            <InfoCard
            imageSrc='img/img3-1.jpg'
            altText='TreadMill'
            title='Health and Wellness'
            description='Discover expert advice and tips on maintaining a healthy lifestyle.'
            />
            <InfoCard
            imageSrc='img/img3-2.jpg'
            altText='Basketball'
            title='Boost Your Productivity'
            description='Learn effective strategies to maximize your productivity and achieve your goals.'
            />
            <InfoCard
            imageSrc='img/img3-3.jpg'
            altText='Field'
            title='Find Joy in Leisure'
            description='Discover exciting activities and hobbies to make the most of your leisure time.'
            />
          </div>
          <div className="hub_btns">
            <Button label='Join'/>
            <ArrowButton label='Learn more'/>
          </div>
        </section>
    )
}