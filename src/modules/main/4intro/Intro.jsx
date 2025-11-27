import { ArrowButton } from '../../../components/ArrowButton/ArrowButton'
import { Button } from '../../../components/Button/Button'
import { InfoSection } from '../../../components/InfoSection/InfoSection'
import './Intro.css'

export const Intro = () => {
    return (
        <section className="intro">
          <div className="intro__container">
                <InfoSection 
                subTitle='Discover'
                title='Unlock the Secrets to a Balanced Lifestyle'
                description='LifeBlend Hub provides a comprehensive blend of content and resources to help you achieve balance in every aspect of your life. From wellness tips and personal development strategies to home organization hacks and travel inspiration, we`ve got you covered.' />
            <div className="intro__btns">
                <Button 
                label='Learn more' />
                <ArrowButton 
                label='Sign Up' />
            </div>
          </div>
          <img className="intro__img" src="img/img4.jpg" alt="cyclist" />
        </section>
    )
}