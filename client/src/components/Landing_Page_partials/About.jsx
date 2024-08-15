

import React from 'react';
import Image from 'next/image';


const About = () => {
    return (
        <div className="about-us-container">
          <div className="about">
            <img src="/images/landing_about.png" alt="Rings" className="image"  />
            <div className="text left">
              <h2>About Us</h2>
              <p>Event management services, personalized and creative designing, and seamless execution are our hallmarks.</p>
            </div>
          </div>
          <div className="vision">
            <div className="text right">
              <h2>Our Vision</h2>
              <p>We believe in originality and that the sky is the limit when it comes to our creativity and efforts. We aim to create a new generation of innovation and elegance in Mauritius.</p>
            </div>
            <img src="/images/landing_vision.png" alt="Vision" className="image" />
          </div>
          <div className="mission">
            <img src="/images/landing_mission.png" alt="Mission" className="image"  />
            <div className="text left">
              <h2>Our Mission</h2>
              <p>To accompany you along the journey and giving life to your dream events whilst you sit back, relax and enjoy the show. </p>
            </div>
          </div>
          <div className="value">
            <div className="text right">
              <h2>Our Values</h2>
              <p>At the core of our collective aspiration to be recognized as a unique company, our values define what we do and how we do it. From innovation to building integrity, our values are not just an ethical code of conduct but the defining principle of what differentiates us from other players in the market.</p>
            </div>
            <img src="/images/landing_values.png" alt="Values" className="image"  />
          </div>
        </div>
      );
};

export default About;


