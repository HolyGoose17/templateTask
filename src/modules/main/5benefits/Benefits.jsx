import { InfoCard } from '../../../components/InfoCard/InfoCard'
import './Benefits.css'
export const Benefits = () => {
    return (
        <section className="benefits">
          <h2 className="benefits__header">
            Discover a World of Inspiration and Resources on LifeBlend Hub
          </h2>
          {/* Это тоже список где есть данные которые перебираются в цикле и отображается компонент BenefitsCard */}
          <div className="benefits__cards">
            <InfoCard 
            imageSrc='img/img5-1.jpg'
            altText='Runners'
            title="Unlock Your Full Potential with LifeBlend Hub's Comprehensive Content"
            description='Engage with our curated content and resources to enhance every aspect of your lifestyle.'
            buttonLabel='Explore' />
            <InfoCard 
            imageSrc='img/img5-2.jpg'
            altText='Relax'
            title="Stay Informed and Inspired with LifeBlend Hub's Diverse Content Content"
            description="Access our extensive collection of articles, videos, and guides to enrich your daily life."
            buttonLabel='Discover' />
            <InfoCard 
            imageSrc='img/img5-3.jpg'
            altText='Football'
            title="Transform Your Lifestyle with LifeBlend Hub's Expertly Curated Resources"
            description="Find the tools and resources you need to achieve your goals and live your best life."
            buttonLabel='Get Started' />
          </div>
        </section>
    )
}