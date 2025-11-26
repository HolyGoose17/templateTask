import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer__left">
          <div className='footer_head'>
            <p className="footer_title">Logo</p>
            <h1 className="footer_desc">
              Stay up to date on the latest features and releases by joining our newsletter.
            </h1>
          </div>
          <div className='footer_bottom'>
            <form className="footer__form">
              <input
                className="footer_inp"
                type="email"
                placeholder="Enter your email"
                name="email"
              />
              <button type="submit" value="Subscribe" className="footer_btn" aria-label="Subscribe">
                Subscribe
              </button>
            </form>
            <p className="footer_details">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
        <div className="footer__right">
          <ul className="footer__ul">
            <h2 className="footer__ul_title">Column one</h2>
            <li className="footer_li">Link one</li>
            <li className="footer_li">Link two</li>
            <li className="footer_li">Link three</li>
            <li className="footer_li">Link four</li>
            <li className="footer_li">Link five</li>
          </ul>
          <ul className="footer__ul">
            <h2 className="footer__ul_title">Column two</h2>
            <li className="footer_li">Link one</li>
            <li className="footer_li">Link two</li>
            <li className="footer_li">Link three</li>
            <li className="footer_li">Link four</li>
            <li className="footer_li">Link five</li>
          </ul>
          <ul className="footer__ul">
            <h2 className="footer__ul_title">Follow us</h2>
            <li className="footer__media_block">
              <CiFacebook className='footer_img' />
              <span className="footer_li">Facebook</span>
            </li>
            <li className="footer__media_block">
              <FaInstagram className='footer_img' />
              <span className="footer_li">Instagram</span>
            </li>
            <li className="footer__media_block">
              <CiLinkedin className='footer_img' />
              <span className="footer_li">Linkedin</span>
            </li>
            <li className="footer__media_block">
              <FaYoutube className='footer_img' />
              <span className="footer_li">Youtube</span>
            </li>
          </ul>
        </div>
      </footer>
    )
}