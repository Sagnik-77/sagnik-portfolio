import React from 'react';
import './Home.css';
import myResume from './file/SagnikKundu_Resume_20241015.pdf';
import cursorImage from './img/cursor.png';


const Home = () => {
  return (
    <div className="home-container">
      <header>
        <div className="logo">SK</div>
        <nav>
          <ul>
            <li><a href="#projects">WORK</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li>
              <a 
                href={myResume}
                download="SagnikKundu_Resume.pdf"
              >
                RESUME
              </a>
            </li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
        <div className="social-links">
          <a href="https://dribbble.com/sagnik7">Dribble</a>
          <a href="#">/</a>
          <a href="https://www.linkedin.com/in/sagnik-kundu-68a5b01b0/">LinkedIn</a>
        </div>
      </header>

      <main>
        <h1>Creating Design <br/>That <span className="matters">Matters</span>
        </h1>
          <div className="cursor-animation">
            <img src={cursorImage} alt="Cursor" />
          </div>
          <button className='homeButton'>
            <a href="#contact">Let's Connect</a>
          </button>
      </main>
    </div>
  );
};

export default Home;