import { ArrowButton } from '../../../components/ArrowButton/ArrowButton'
import { Button } from '../../../components/Button/Button'
import { InfoSection } from '../../../components/InfoSection/InfoSection'
import { TextBlock } from '../../../components/TextBlock/TextBlock'
import './Proof.css'

export const Proof = () => {
    return (
        <section className="proof">
          <div className="proof__content">
            <InfoSection 
              title="Discover the Impact of LifeBlend Hub with These Fascinating Statistics"
              description="LifeBlend Hub has reached millions of users worldwide, providing valuable resources and inspiring content to enhance their modern lifestyles."
              variant='lg' />
            <div className="proof__stats">
              <TextBlock  
              title="50%"
              description="Users report improved well-being and satisfaction with LifeBlend Hub."
              variant='lg'
              />
              <TextBlock  
              title="50%"
              description="LifeBlend Hub has become an essential part of users' lives."
              variant='lg'
              />
            </div>
            <div className="proof__nav">
              <Button 
              label="Learn more" />
              <ArrowButton 
              label="Sign Up" />
            </div>
          </div>
          <img className="proof__img" src="img/img6.jpg" alt="runners" />
        </section>
    )
}