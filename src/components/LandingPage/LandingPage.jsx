import React, { useState } from 'react';
import '../../index.css';
import Navbar from '../Navbar'; 
import KnowledgeAnimate from '../../images/knowledge-animate[1].svg'; 

const LandingPage = () => {
  const [lightMode, setLightMode] = useState(true); 

  const toggleLightMode = () => {
    setLightMode(!lightMode);
  };

  return (
    <div className={lightMode ? 'light-mode' : 'dark-mode'}>
      <Navbar lightMode={lightMode} toggleLightMode={toggleLightMode} />
      <header className="main-section">
        <div className="main-content">
          <h1>Connect, Swap, and Explore Your Next Great Read!</h1>
          <p>
            Join a thriving community to exchange books and discover new literary adventures.
          </p>
          <button className="explore-btn">Explore More</button>
        </div>
        <div className="svg-container">
          <img src={KnowledgeAnimate} alt="Knowledge Animate" />
        </div>
      </header>
    </div>
  );
};

export default LandingPage;
