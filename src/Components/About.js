import React from 'react';
import ProfPic from '../Images/ProfPic.jpg';
import './About.css';


const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          
            <img  src={ProfPic} alt="ProfilePicture" className ="about-image" />
          
          <div className="about-text">
            <h2>About Me</h2>
            <p>
            Software Engineer | Bachelor of Computer and Information Sciences | Looking for new opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;