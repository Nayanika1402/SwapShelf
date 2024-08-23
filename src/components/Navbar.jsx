import React from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';
import { FaBook } from 'react-icons/fa'; // Import the book icon
import { Link } from 'react-router-dom';

const Navbar = ({ lightMode, toggleLightMode }) => {
  return (
    <nav className="navbar">
      <div className="logo flex items-center">
        <FaBook size={24} className="mr-2" /> {/* Add the book icon here */}
        <h1>SwapShelf</h1>
      </div>
      <div className="nav-links">
        <button className="home-btn"><Link to="/">Home</Link></button>
        <button className="books-btn"><Link to="/books">Books</Link></button>
        <button className="post-btn"><Link to="/feed">Post</Link></button>
        <button className="newp-btn"><Link to="/newp">Create Post</Link></button>
        <button className="login-btn"><Link to="/login">Login</Link></button>
        <button onClick={toggleLightMode} className="toggle-mode-btn">
          {lightMode ? <BiSun size={24} /> : <BiMoon size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
