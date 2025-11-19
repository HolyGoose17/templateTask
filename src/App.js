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
              <button className='hero__btn btn'>Learn more</button>
              <div>
                <button className='hero__btn'>Sign Up <span className='hero__btn arrow'>{'>'}</span></button>
              </div>
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
            <div class='hub__title'>
              Unlock the Power of LifeBlend Hub
            </div>
            <div class='hub__desc'>
              LifeBlend Hub is your one-stop destination for all things related to health, productivity, leisure, and personal growth. Explore our comprehensive blend of content and resources to enhance and inspire every facet of your lifestyle.
            </div>
          </div>
          <div class='hub__cards'>
            <div class='hub__health'>
              <img class='' src='' alt=''></img>
              <h2>
                Health and Wellness
              </h2>
              <p>
                Discover expert advice and tips on maintaining a healthy lifestyle.
              </p>
            </div>
            <div class='hub__prod'>
              <img class='' src='' alt=''></img>
              <h2>
                Boost Your Productivity
              </h2>
              <p>
                Learn effective strategies to maximize your productivity and achieve your goals.
              </p>
            </div>
            <div class='hub__joy'>
              <img class='' src='' alt=''></img>
              <h2>
                Find Joy in Leisure
              </h2>
              <p>
                Discover exciting activities and hobbies to make the most of your leisure time.
              </p>
            </div>
          </div>
          <div class='hub_btns'></div>
        </section>
      </main>
    <footer></footer>
    </div>
  );
}

export default App;
