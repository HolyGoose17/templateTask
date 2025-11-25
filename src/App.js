// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BsGeoAlt } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlinePhone } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    // <QueryClientProvider>
    //   <BrowserRouter>
    <div className="wrapper">
      {/* сделай header в виде компонента */}
      <header className="header">
        <nav className="header__left">
          {/* Используй ul и li для списка */}
          {/* сделай переиспользуемые кнопки в виде компонентов */}
          {/* используй css modules для стилей */}
          <button className="header__btn" aria-label="Discover LifeBlend">
            Discover LifeBlend
          </button>
          <button className="header__btn" aria-label="Explore">
            Explore
          </button>
          <button className="header__btn" aria-label="Inspiration">
            Inspiration
          </button>
          <button className="header__btn" aria-label="Contact us">
            Contact us
          </button>
        </nav>
        <nav className="header__right">
          <button className="header__right_btn btn" aria-label="Contact us">
            Contact us
          </button>
        </nav>
      </header>
      <main className="main">
        {/* каждая секция должна быть в виде компонента */}
        <section className="welcome">
          <img className="welcome__img" src="img/img1.jpg" alt="img1" />
          <div className="welcome__content">
            <h2 className="welcome__title">
              Stay tuned, stay healthy
            </h2>
            <div className="welcome__info">
              <p className="welcome__description">
                Experience a comprehensive blend of content and resources to
                enhance and inspire every facet of your lifestyle.
              </p>
              <div className="welcome__actions">
                <button className="welcome__btn btn" aria-label="Explore">
                  Explore
                </button>
                <button className="welcome__btn btn" aria-label="Sign Up">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="hero">
          <div className="hero__content">
            <div className="hero__lifeStyle">
              {/* не думаю что логично отображать h4 перед h2, лучше просто p или span */}
              <h4 className="hero__moto">Revolutionize</h4>
              <h2 className="hero__title">Discover a New Way of Living</h2>
              <p className="hero__desc">
                LifeBlend Hub offers a unique and comprehensive approach to modern living. With a curated blend of content and resources, we aim to enhance and inspire every facet of your lifestyle.
              </p>
            </div>
            <div className="hero__features">
              {/* используй ul и li для списка */}
              {/* используй один компонент для списка */}
              {/* у 3 секций заголовок и описание одинаковые, лучше использовать один компонент для каждой секции */}
              <div className="hero__feature">
                <div className="hero__feature__title">Explore More</div>
                <div className="hero__feature__desc">
                  Unlock your potential with our diverse range of articles, guides, and tools.
                </div>
              </div>
              <div className="hero__feature">
                <div className="hero__feature__title">Get Inspired</div>
                <div className="hero__feature__desc">
                  Discover stories of transformation and success from our
                  vibrant community.
                </div>
              </div>
            </div>
            <div className="hero__action">
              <button className="hero__btn" aria-label="Learn more">
                Learn more
              </button>
              <button className="hero__btn__arrow" aria-label="Sign Up">
                Sign Up {">"}
              </button>
            </div>
          </div>
          <img class='hero_img' src="img/img2.jpg" alt="img2" />
        </section>
        <section className="hub">
          <div className="hub__content">
            <h4 className="hub__moto">Discover</h4>
            <h2 className="hub__head">Unlock the Power of LifeBlend Hub</h2>
            <p className="hub__body">
              LifeBlend Hub is your one-stop destination for all things related
              to health, productivity, leisure, and personal growth. Explore our
              comprehensive blend of content and resources to enhance and
              inspire every facet of your lifestyle.
            </p>
          </div>
          <div className="hub__cards">
            {/* Создай компонент HubCard */}
            <div className="hub__card">
              <img className="hub__img" src="img/img3-1.jpg" alt="img2-1" />
              <h2 className="hub__title">Health and Wellness</h2>
              <p className="hub__desc">
                Discover expert advice and tips on maintaining a healthy
                lifestyle.
              </p>
            </div>
            <div className="hub__card">
              <img className="hub__img" src="img/img3-2.jpg" alt="img3-2" />
              <h2 className="hub__title">Boost Your Productivity</h2>
              <p className="hub__desc">
                Learn effective strategies to maximize your productivity and
                achieve your goals.
              </p>
            </div>
            <div className="hub__card">
              <img className="hub__img" src="img/img3-3.jpg" alt="img3-3" />
              <h2 className="hub__title">Find Joy in Leisure</h2>
              <p className="hub__desc">
                Discover exciting activities and hobbies to make the most of
                your leisure time.
              </p>
            </div>
          </div>
          {/* Такие же кнопки в еще 3 блоках, создай переиспользуемый компонент */}
          <div className="hub_btns">
            <button className="btn hub__btn" aria-label="Join">
              Join
            </button>
            <button className="hub__btn__arrow" aria-label="Learn More">
              Learn more {">"}
            </button>
          </div>
        </section>
        <section className="intro">
          <div className="intro__container">
            <div className="intro__text">
              <h4 className="intro__moto">Discover</h4>
              <h2 className="intro__title">
                Unlock the Secrets to a Balanced Lifestyle
              </h2>
              <p className="intro__desc">
                LifeBlend Hub provides a comprehensive blend of content and
                resources to help you achieve balance in every aspect of your
                life. From wellness tips and personal development strategies to
                home organization hacks and travel inspiration, we've got you
                covered.
              </p>
            </div>
            <div className="intro__btns">
              <button className="btn intro__btn" aria-label="Learn More">
                Learn more
              </button>
              <button className="intro__btn_arrow" aria-label="Sign Up">
                Sign Up<span>{">"}</span>
              </button>
            </div>
          </div>
          <img className="intro__img" src="img/img4.jpg" alt="cyclist" />
        </section>
        <section className="benefits">
          <h2 className="benefits__header">
            Discover a World of Inspiration and Resources on LifeBlend Hub
          </h2>
          {/* Это тоже список где есть данные которые перебираются в цикле и отображается компонент BenefitsCard */}
          <div className="benefits__cards">
            <div className="benefits__card">
              <img className="benefits__img" src="img/img5-1.jpg" alt="img5" />
              <h4 className="benefits__title">
                Unlock Your Full Potential with LifeBlend Hub's Comprehensive
                Content
              </h4>
              <p className="benefits__desc">
                Engage with our curated content and resources to enhance every
                aspect of your lifestyle.
              </p>
              <button className="benefits__btn_arrow" aria-label="Explore">
                Explore <span>{">"}</span>
              </button>
            </div>
            <div className="benefits__card">
              <img className="benefits__img" src="img/img5-2.jpg" alt="img5" />
              <h4 className="benefits__title">
                Stay Informed and Inspired with LifeBlend Hub's Diverse Content
                Content
              </h4>
              <p className="benefits__desc">
                Access our extensive collection of articles, videos, and guides
                to enrich your daily life.
              </p>
              <button className="benefits__btn_arrow" aria-label="Discover">
                Discover <span>{">"}</span>
              </button>
            </div>
            <div className="benefits__card">
              <img className="benefits__img" src="img/img5-3.jpg" alt="img5" />
              <h4 className="benefits__title">
                Transform Your Lifestyle with LifeBlend Hub's Expertly Curated
                Resources
              </h4>
              <p className="benefits__desc">
                Find the tools and resources you need to achieve your goals and
                live your best life.
              </p>
              <button className="benefits__btn_arrow" aria-label="Get Started">
                Get Started<span>{">"}</span>
              </button>
            </div>
          </div>
        </section>
        <section className="proof">
          <div className="proof__content">
            <div className="proof__head">
              {/* Такой же заголовок как и везде но к примеру пропс subTitle опциональный и здесь он отсутствует */}
              <h2 className="proof__title">
                Discover the Impact of LifeBlend Hub with These Fascinating
                Statistics
              </h2>
              <p className="proof__desc">
                LifeBlend Hub has reached millions of users worldwide, providing
                valuable resources and inspiring content to enhance their modern
                lifestyles.
              </p>
            </div>
            <div className="proof__stats">
              {/* список с переиспользуемым компонентом */}
              <div className="proof__card">
                <h2 className="proof__percent">50%</h2>
                <p className="proof__details">
                  Users report improved well-being and satisfaction with
                  LifeBlend Hub.
                </p>
              </div>
              <div className="proof__card">
                <h2 className="proof__percent">50%</h2>
                <p className="proof__details">
                  LifeBlend Hub has become an essential part of users' lives.
                </p>
              </div>
            </div>
            <div className="proof__nav">
              <button className="proof__btn" aria-label="Learn More">
                Learn more
              </button>
              <button className="proof__btn__arrow" aria-label="Sign Up">
                Sign Up
                <span>{">"}</span>
              </button>
            </div>
          </div>
          <img className="proof__img" src="img/img6.jpg" alt="runners" />
        </section>
        <section className="newsletter">
          <div className="newsletter__text">
            <h2 className="newsletter__title">
              Get the Latest LifeBlend Updates
            </h2>
            <p className="newsletter__desc">
              Subscribe to our newsletter for regular updates on lifestyle
              trends and tips.
            </p>
          </div>
          <div className="newsletter__form">
            {/* Создай компонент где будет тег form и внутри него будет input и button */}
            <form className="newsletter__nav">
              <input
                className="newsletter__inp"
                type="email"
                placeholder="Enter your email"
                name="email"
              />
              <button className="newsletter__btn" aria-label="Sign In">
                Sign in
              </button>
            </form>
            <p className="newsletter__details">
              By clicking Sign Up, you agree to our Terms and Conditions.
            </p>
          </div>
        </section>
        <section className="contact">
          <div className="contact__content">
            <div className="contact__head">
              <h4 className="contact_desc">Connect</h4>
              <h2 className="contact_title">Contact LifeBlend</h2>
              <p className="contact_details">
                Have a question or need assistance? We're here to help!
              </p>
            </div>
            {/* список с переиспользуемым компонентом */}
            <div className="contact__card">
              <HiOutlineMailOpen
                className="contact__card_img"
                aria-label="Email"
              />
              <h3 className="contact_type">Email</h3>
              <p className="contact_text">Send us an email</p>
              <p className="contact_text">hello@lifeblendhub.com</p>
            </div>
            <div className="contact__card">
              <MdOutlinePhone
                className="contact__card_img"
                aria-label="Phone"
              />
              <h3 className="contact_type">Phone</h3>
              <p className="contact_text">Give us a call</p>
              <p className="contact_text">+1 (555) 123-4567</p>
            </div>
            <div className="contact__office">
              <div className="contact__office_head">
                <BsGeoAlt className="contact__card_img" aria-label="Office" />
                <h3 className="contact_type">Office</h3>
                <p className="contact_text">123 Main St, Anytown, USA</p>
              </div>
              <div className="contact__office_btn">
                <button className="contact_btn" aria-label="Get Directions">
                  Get Directions <span>{">"}</span>
                </button>
              </div>
            </div>
          </div>
          <div className="contact__block">
            <img className="contact_img" src="img/image7.jpg" alt="img" />
          </div>
        </section>
      </main>
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
              <button type="submit" value="Subscribe" class="footer_btn">
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
    </div>
    //   </BrowserRouter>
    // </QueryClientProvider>
  );
}

// не экспортируй по дефолту, экспортируй по имени App
export default App;
