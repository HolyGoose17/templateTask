import { Form } from "../../components/Form/Form";
import { InfoSection } from "../../components/InfoSection/InfoSection";
import { FooterList } from "../../components/FooterList/FooterList";
import { FooterMedia } from "../../components/FooterMedia/FooterMedia";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import './Footer.css'

export const Footer = () => {
  const socialPlatforms = [
    { name: 'Facebook', icon: CiFacebook },
    { name: 'Instagram', icon: FaInstagram },
    { name: 'Linkedin', icon: CiLinkedin },
    { name: 'Youtube', icon: FaYoutube },
  ];
    return (
        <footer className="footer">
        <div className="footer__left">
          <InfoSection 
          title="Logo"
          description="Stay up to date on the latest features and releases by joining our newsletter."
          variant="sm" />
          <Form 
          placeholder="Enter your email"
          buttonLabel="Subscribe"
          description="By subscribing, you agree to our Privacy Policy and consent to receive updates from our company." />
        </div>
        <div className="footer__right">
          <FooterList 
          title="Column one"
          items={['Link one', 'Link two', 'Link three', 'Link four', 'Link five']} />
          <FooterList 
          title="Column two"
          items={['Link one', 'Link two', 'Link three', 'Link four', 'Link five']} />
          <FooterMedia 
          platforms={socialPlatforms} />
        </div>
      </footer>
    )
}