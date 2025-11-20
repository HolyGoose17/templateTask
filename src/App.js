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
              <div className='hero__moto'>
                Revolutionize
              </div>
              <h2 className='hero__title'>
                Discover a New Way of Living
              </h2>
              <div className='hero__desc'>
                LifeBlend Hub offers a unique and comprehensive approach to modern living. With a curated blend of content and resources, we aim to enhance and inspire every facet of your lifestyle.
              </div>
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
              <button className='arrow hero__btn'>Sign Up {'>'}</button>
            </div>
          </div>
            <div className='hero_img'>
              <img src='img/img2.jpg' alt='img2'></img>
            </div>
        </section>
        <section class='hub'>
          <div class='hub__content'>
            <div class='hub__moto'>
              Discover
            </div>
            <div class='hub__head'>
              Unlock the Power of LifeBlend Hub
            </div>
            <div class='hub__body'>
              LifeBlend Hub is your one-stop destination for all things related to health, productivity, leisure, and personal growth. Explore our comprehensive blend of content and resources to enhance and inspire every facet of your lifestyle.
            </div>
          </div>
          <div class='hub__cards'>
            <div class='hub__card'>
              <img className='hub__img' src='img/img3-1.jpg' alt='img2-1'></img>
              <h2 class='hub__title'>
                Health and Wellness
              </h2>
              <p class='hub__desc'>
                Discover expert advice and tips on maintaining a healthy lifestyle.
              </p>
            </div>
            <div class='hub__card'>
              <img className='hub__img' src='img/img3-2.jpg' alt='img3-2'></img>
              <h2 class='hub__title'>
                Boost Your Productivity
              </h2>
              <p class='hub__desc'>
                Learn effective strategies to maximize your productivity and achieve your goals.
              </p>
            </div>
            <div class='hub__card'>
              <img className='hub__img' src='img/img3-3.jpg' alt='img3-3'></img>
              <h2 class='hub__title'>
                Find Joy in Leisure
              </h2>
              <p class='hub__desc'>
                Discover exciting activities and hobbies to make the most of your leisure time.
              </p>
            </div>
          </div>
          <div class='hub_btns'>
            <button class='hub__btn'>Join</button>
            <button class='hub__btn_arrow'>Learn more {'>'}</button>
          </div>
        </section>
      </main>
    <footer></footer>
    </div>
  );
}

export default App;
