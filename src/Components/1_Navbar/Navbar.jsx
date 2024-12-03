

import React, { useState, useEffect } from 'react';
import './navbar.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])



  const toggleMenu = () => {
    if (window.innerWidth <= 1025) {
      setIsMenuOpen(!isMenuOpen);
    }
  };


  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="nav__header">
        <div className="nav__logo">
          <a href="#">Pet Place</a>
        </div>
        <div className="nav__menu__btn" onClick={toggleMenu}>
          <span>
            <i className={isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
          </span>
        </div>
      </div>
      <ul className={`nav__links ${isMenuOpen ? 'open' : ''}`} >
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#store" onClick={toggleMenu}>Store</a></li>
        <li><a href="#service" onClick={toggleMenu}>Services</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </nav>
  )
}
