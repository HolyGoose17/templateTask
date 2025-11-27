import { BsGeoAlt } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlinePhone } from "react-icons/md";

import "./App.css";
import { Header } from "./modules/header/Header";
import { Footer } from "./modules/footer/Footer";
import { Welcome } from "./modules/main/1welcome/Welcome";
import { Hero } from "./modules/main/2hero/Hero";
import { Hub } from "./modules/main/3hub/Hub";
import { Intro } from "./modules/main/4intro/Intro";
import { Benefits } from "./modules/main/5benefits/Benefits";

function App() {
  return (  
    <div className="wrapper">
      {/* сделай header в виде компонента */}
      <Header/>
      <main className="main">
        {/* каждая секция должна быть в виде компонента */}
        <Welcome/>
        <Hero/>
        <Hub/>
        <Intro/>
        <Benefits/>
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
              <button className="proof__btn" aria-label="Learn More" type="button">
                Learn more
              </button>
              <button className="proof__btn__arrow" aria-label="Sign Up" type="button">
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
              <button className="newsletter__btn" aria-label="Sign In" type="submit">
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
                <button className="contact_btn" aria-label="Get Directions" type="button">
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
      <Footer/>
    </div>
  );
}

// не экспортируй по дефолту, экспортируй по имени App
export default App;
