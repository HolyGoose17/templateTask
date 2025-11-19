import './App.css';

function App() {
  return (
    <div>
      <header className='header'>
        <nav className='header__left'>
          <button className='header__left_btn'>Discover LifeBlend</button>
          <button className='header__left_btn'>Explore</button>
          <button className='header__left_btn'>Inspiration</button>
          <button className='header__left_btn'>Contact us</button>
        </nav>
        <nav className='header__right'>
          <button className='header__right_btn'>Contact us</button>
        </nav>
      </header>
      <main className='main'>
        <section className='section-1'>
          <figure className='section-1__img'>
            <img src='img/img1.jpg' alt='img1'></img>
          </figure>
          <article className='section-1__botom'>
            <div className='section-1__left'>
              Stay tuned,<br></br> stay healthy
            </div>
            <div className='section-1__right'>
              <div className='section-1__right_desc'>
                Experience a comprehensive blend of content and resources to enhance and inspire every facet of your lifestyle.
              </div>
              <div className='section-1__right_btn'>
                <button className='section-1_btn'>Explore</button>
                <button className='section-1_btn'>Sign Up</button>
              </div>
            </div>
          </article>
        </section>
          <section className='section-2'>
            <figure>
              <img src='img/img2.jpg' alt='img2'></img>
          </figure>
          </section>
      </main>
    <footer></footer>
    </div>
  );
}

export default App;
