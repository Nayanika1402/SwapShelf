import React, { useState } from 'react';
import '../../index.css';
import { BiSun, BiMoon } from 'react-icons/bi';
import KnowledgeAnimate from '../../images/knowledge-animate[1].svg'; // Update with the correct path

const LandingPage = () => {
  const [lightMode, setLightMode] = useState(true); // Default to light mode

  const toggleLightMode = () => {
    setLightMode(!lightMode);
  };

  return (
    <div className={lightMode ? 'light-mode' : 'dark-mode'}>
      <nav className="navbar">
        <div className="logo">
          <h1>SwapShelf</h1>
        </div>
        <div className="nav-links">
          <button className="login-btn">Login</button>
          <button onClick={toggleLightMode} className="toggle-mode-btn">
            {lightMode ? <BiSun size={24} /> : <BiMoon size={24} />}
          </button>
        </div>
      </nav>
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
