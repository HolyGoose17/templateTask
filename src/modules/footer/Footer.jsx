import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer class="footer">
        <div class="footer__left">
          <div class='footer_head'>
            <p class="footer_title">Logo</p>
            <h1 class="footer_desc">
              Stay up to date on the latest features and releases by joining our newsletter.
            </h1>
          </div>
          <div class='footer_bottom'>
            <form class="footer__form">
              <input
                class="footer_inp"
                type="email"
                placeholder="Enter your email"
                name="email"
              />
              <button type="submit" value="Subscribe" class="footer_btn" aria-label="Subscribe">
                Subscribe
              </button>
            </form>
            <p class="footer_details">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
        <div class="footer__right">
          <ul class="footer__ul">
            <h2 class="footer__ul_title">Column one</h2>
            <li class="footer_li">Link one</li>
            <li class="footer_li">Link two</li>
            <li class="footer_li">Link three</li>
            <li class="footer_li">Link four</li>
            <li class="footer_li">Link five</li>
          </ul>
          <ul class="footer__ul">
            <h2 class="footer__ul_title">Column two</h2>
            <li class="footer_li">Link one</li>
            <li class="footer_li">Link two</li>
            <li class="footer_li">Link three</li>
            <li class="footer_li">Link four</li>
            <li class="footer_li">Link five</li>
          </ul>
          <ul class="footer__ul">
            <h2 class="footer__ul_title">Follow us</h2>
            <li class="footer__media_block">
              <CiFacebook class='footer_img' />
              <span class="footer_li">Facebook</span>
            </li>
            <li class="footer__media_block">
              <FaInstagram class='footer_img' />
              <span class="footer_li">Instagram</span>
            </li>
            <li class="footer__media_block">
              <CiLinkedin class='footer_img' />
              <span class="footer_li">Linkedin</span>
            </li>
            <li class="footer__media_block">
              <FaYoutube class='footer_img' />
              <span class="footer_li">Youtube</span>
            </li>
          </ul>
        </div>
      </footer>
    )
}