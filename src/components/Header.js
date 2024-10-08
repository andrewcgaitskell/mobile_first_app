import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">MyApp</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/news">News</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>
        <a href="https://google.com/" target="_blank" rel="noopener noreferrer">
            Google
          </a>
      </nav>
    </header>
  );
};

export default Header;
