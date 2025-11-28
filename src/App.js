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
import { Contact } from "./modules/main/8contact/Contact";


export function App() {
  return (  
    <div className="wrapper">
      <Header/>
      <main className="main">
        <Welcome/>
        <Hero/>
        <Hub/>
        <Intro/>
        <Benefits/>
        <Proof/>
        <Newsletter/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

