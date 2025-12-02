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
    {id: 1, name: 'Facebook', icon: CiFacebook, href: 'https://facebook.com' },
    {id: 2, name: 'Instagram', icon: FaInstagram, href: 'https://Instagram.com' },
    {id: 3, name: 'Linkedin', icon: CiLinkedin, href: 'https://Linkedin.com' },
    {id: 4, name: 'Youtube', icon: FaYoutube, href: 'https://Youtube.com' },
  ];
    return (
        <footer className="footer">
        <div className="footer__left">
          <InfoSection 
          title="Logo"
          description="Stay up to date on the latest features and releases by joining our newsletter."
          variant="sm" />
          <Form 
          placeholder="Your email"
          buttonLabel="Subscribe"
          description="By subscribing, you agree to our Privacy Policy and consent to receive updates from our company."
          align="left" />
        </div>
        <div className="footer__right">
          <FooterList 
          title="Column one"
          items={[{label: 'Link one', href: '/'}, {label: 'Link two', href: '/'}, {label: 'Link three', href: '/'}, {label: 'Link four', href: '/'}, {label: 'Link five', href: '/'}]} />
          <FooterList 
          title="Column two"
          items={[{label: 'Link one', href: '/'}, {label: 'Link two', href: '/'}, {label: 'Link three', href: '/'}, {label: 'Link four', href: '/'}, {label: 'Link five', href: '/'}]} />
          <FooterMedia 
          platforms={socialPlatforms} />
        </div>
      </footer>
    )
}