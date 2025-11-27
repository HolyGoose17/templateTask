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
import { Newsletter } from "./modules/main/7newsletter/Newsletter";
import { Proof } from "./modules/main/6proof/Proof";

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
        <Proof/>
        <Newsletter/>
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
