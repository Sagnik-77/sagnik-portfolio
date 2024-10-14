import React, { useState, useEffect } from 'react';
import './About.css';
import aboutImage from './img/aboutImage.png'
import myResume from './file/SagnikKundu_Resume_20241015.pdf';

const About = () => {
  const [currentAdjective, setCurrentAdjective] = useState(0);
  const adjectives = ["UI Designer", "UX Designer", "Web Developer", "UX Researcher"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentAdjective(prevAdjective => (prevAdjective + 1) % adjectives.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [adjectives.length]);

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="Profile" />
        </div>
        <div className="about-content">
          <h1 className="rotatingText">
            <span className="rotatingText-adjective">{adjectives[currentAdjective]}</span>
          </h1>
          <p className="about-description">
            I’m Sagnik, I design user interfaces that are intuitive, user-friendly, 
            and improve user experience for both web and mobile applications.
          </p>
          <p className="about-description">
            I create visually pleasing design ideas that connect with the target audience 
            by transforming ideas into designs.
          </p>
          <div className="about-buttons">
            <div class="buttons">
              <a href={myResume} download="SagnikKundu_resume.pdf">
                <button className="cv-button">Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
