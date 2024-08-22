import React from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Navbar = ({ lightMode, toggleLightMode }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>SwapShelf</h1>
      </div>
      <div className="nav-links">
        <button className="login-btn"><Link to ="/login">Login</Link></button>
        <button onClick={toggleLightMode} className="toggle-mode-btn">
          {lightMode ? <BiSun size={24} /> : <BiMoon size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
