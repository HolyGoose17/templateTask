import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <header className='header'>
        <nav className='header__left'>
          <button className='header__btn'>Discover LifeBlend</button>
          <button className='header__btn'>Explore</button>
          <button className='header__btn'>Inspiration</button>
          <button className='header__btn'>Contact us</button>
        </nav>
        <nav className='header__right'>
          <button className='header__right_btn btn'>Contact us</button>
        </nav>
      </header>
      <main className='main'>
        <section className='welcome'>
          <img className='welcome__img' src='img/img1.jpg' alt='img1'></img>
          <div className='welcome__content'>
            <h2 className='welcome__title'>
              Stay tuned,<br></br> stay healthy
            </h2>
            <div className='welcome__info'>
              <p className='welcome__description'>
                Experience a comprehensive blend of content and resources to enhance and inspire every facet of your lifestyle.
              </p>
              <div className='welcome__actions'>
                <button className='welcome__btn btn'>Explore</button>
                <button className='welcome__btn btn'>Sign Up</button>
              </div>
            </div>
          </div>
        </section>
        <section className='hero'>
          <div className='hero__content'>
            <div className='hero__lifeStyle'>
              <h4 className='hero__moto'>
                Revolutionize
              </h4>
              <h2 className='hero__title'>
                Discover a New Way of Living
              </h2>
              <p className='hero__desc'>
                LifeBlend Hub offers a unique and comprehensive approach to modern living. With a curated blend of content and resources, we aim to enhance and inspire every facet of your lifestyle.
              </p>
            </div>
            <div className='hero__features'>
              <div className='hero__feature'> 
                  <div className='hero__feature__title'>
                    Explore More
                  </div>
                  <div className='hero__feature__desc'>
                    Unlock your potential with our diverse range of articles, guides, and tools.
                  </div>
              </div>
              <div className='hero__feature'>
                <div className='hero__feature__title'>
                  Get Inspired
                </div>
                <div className='hero__feature__desc'>
                  Discover stories of transformation and success from our vibrant community.
                </div>
              </div>
            </div>
            <div className='hero__action'>
              <button className='hero__btn'>Learn more</button>
              <button className='hero__btn__arrow'>Sign Up {'>'}</button>
            </div>
          </div>
            <div className='hero_img'>
              <img src='img/img2.jpg' alt='img2'></img>
            </div>
        </section>
        <section className='hub'>
          <div className='hub__content'>
            <h4 className='hub__moto'>
              Discover
            </h4>
            <h2 className='hub__head'>
              Unlock the Power of LifeBlend Hub
            </h2>
            <p className='hub__body'>
              LifeBlend Hub is your one-stop destination for all things related to health, productivity, leisure, and personal growth. Explore our comprehensive blend of content and resources to enhance and inspire every facet of your lifestyle.
            </p>
          </div>
          <div className='hub__cards'>
            <div className='hub__card'>
              <img className='hub__img' src='img/img3-1.jpg' alt='img2-1'></img>
              <h2 className='hub__title'>
                Health and Wellness
              </h2>
              <p className='hub__desc'>
                Discover expert advice and tips on maintaining a healthy lifestyle.
              </p>
            </div>
            <div className='hub__card'>
              <img className='hub__img' src='img/img3-2.jpg' alt='img3-2'></img>
              <h2 className='hub__title'>
                Boost Your Productivity
              </h2>
              <p className='hub__desc'>
                Learn effective strategies to maximize your productivity and achieve your goals.
              </p>
            </div>
            <div className='hub__card'>
              <img className='hub__img' src='img/img3-3.jpg' alt='img3-3'></img>
              <h2 className='hub__title'>
                Find Joy in Leisure
              </h2>
              <p className='hub__desc'>
                Discover exciting activities and hobbies to make the most of your leisure time.
              </p>
            </div>
          </div>
          <div className='hub_btns'>
            <button className='btn hub__btn'>Join</button>
            <button className='hub__btn__arrow'>Learn more {'>'}</button>
          </div>
        </section>
        <section className='intro'>
          <div className='intro__container'>
            <div className='intro__text'>
              <h4 className='intro__moto'>
                Discover
              </h4>
              <h2 className='intro__title'>
                Unlock the Secrets to a Balanced Lifestyle
              </h2>
              <p className='intro__desc'>
                LifeBlend Hub provides a comprehensive blend of content and resources to help you achieve balance in every aspect of your life. From wellness tips and personal development strategies to home organization hacks and travel inspiration, we've got you covered.
              </p>
            </div>
            <div className='intro__btns'>
              <button className='btn intro__btn'>
                Learn more
              </button>
              <button className='intro__btn_arrow'>
                Sign Up<span>{'>'}</span>
              </button>
            </div>
          </div>
          <img className='intro__img' src='img/img4.jpg' alt='cyclist' />
        </section>
        <section class='benefits'>
          <h2 class='benefits__header'>
            Discover a World of Inspiration and Resources on LifeBlend Hub
          </h2>
          <div class='benefits__cards'>
            <div class='benefits__card'>
              <img class='benefits__img' src='img/img5-1.jpg' alt='img5' />
              <h4 class='benefits__title'>
                Unlock Your Full Potential with LifeBlend Hub's Comprehensive Content
              </h4>
              <p class='benefits__desc'>
                Engage with our curated content and resources to enhance every aspect of your lifestyle.
              </p>
              <button class='benefits__btn_arrow'>Explore <span>{'>'}</span></button>
            </div>
            <div class='benefits__card'>
              <img class='benefits__img' src='img/img5-2.jpg' alt='img5' />
              <h4 class='benefits__title'>
                Stay Informed and Inspired with LifeBlend Hub's Diverse Content Content
              </h4>
              <p class='benefits__desc'>
                Access our extensive collection of articles, videos, and guides to enrich your daily life.
              </p>
              <button class='benefits__btn_arrow'>Discover <span>{'>'}</span></button>
            </div>
            <div class='benefits__card'>
              <img class='benefits__img' src='img/img5-3.jpg' alt='img5' />
              <h4 class='benefits__title'>
                Transform Your Lifestyle with LifeBlend Hub's Expertly Curated Resources
              </h4>
              <p class='benefits__desc'>
                Find the tools and resources you need to achieve your goals and live your best life.
              </p>
              <button class='benefits__btn_arrow'>Get Started<span>{'>'}</span></button>
            </div>
          </div>
        </section>
      </main>
    <footer></footer>
    </div>
  );
}

export default App;
