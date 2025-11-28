import './Contact.css'
import { BsGeoAlt } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlinePhone } from "react-icons/md";
import { InfoSection } from '../../../components/InfoSection/InfoSection';
import { ContactCard } from '../../../components/ContactCard/ContactCard';


export const Contact = () => {
    return (
      <section className="contact">
        <div className="contact__content">  
          <InfoSection 
            subTitle="Connect"
            title="Contact LifeBlend"
            description="Have a question or need assistance? We're here to help!" 
            variant='lg' />
          <ContactCard 
            icon={HiOutlineMailOpen} 
            title="Email"
            subtitle="Send us an email"
            detail="hello@lifeblendhub.com" />
          <ContactCard 
            icon={MdOutlinePhone} 
            title="Phone"
            subtitle="Give us a call"
            detail="+1 (555) 123-4567" />
          <ContactCard 
            icon={BsGeoAlt} 
            title="Office"
            subtitle="123 Main St, Anytown, USA"
            detail="Get Directions >" />
        </div>
        <div className="contact__block">
          <img className="contact_img" src="img/image7.jpg" alt="img" />
        </div>
      </section>
    )
}