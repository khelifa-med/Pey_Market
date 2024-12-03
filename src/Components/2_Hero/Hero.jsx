
import React, { useEffect } from 'react';
import './hero.css'

import header_bg from '../../assets/header-bg.png'
import header from '../../assets/header.png'

import ScrollReveal from 'scrollreveal';
export default function Hero() {

  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    ScrollReveal().reveal('.header__image img', {
      ...scrollRevealOption,
      origin: 'right',
      delay: 500,
    });

    ScrollReveal().reveal(".header__content h4", {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal(".header__content h1", {
      ...scrollRevealOption,
      delay: 1500,
    });
    ScrollReveal().reveal(".header__content h2", {
      ...scrollRevealOption,
      delay: 2000,
    });
    ScrollReveal().reveal(".header__content p", {
      ...scrollRevealOption,
      delay: 2500,
    });
    ScrollReveal().reveal(".header__btn", {
      ...scrollRevealOption,
      delay: 3000,
    });


  })
  return (
    <header id="home">
      <div className="section__container header__container">
        <div className="header__content">
          <h4>Welcome</h4>
          <h1>Pet<br /><span>Doctor</span></h1>
          <h2>We love pets like you do :)</h2>
          <p>
            From routine check-ups to specialized treatments, we're here to
            ensure your pets lead happy, healthy lives.
          </p>
          <div className="header__btn">
            <button>
              Start Here!
              <span><i className="ri-arrow-right-line"></i></span>
            </button>
          </div>
        </div>
        <div className="header__image">
          <img
            src={header_bg}
            alt="header-bg"
            className="header__image-bg"
          />
          <img src={header} alt="header" />
        </div>
      </div>
      <div className="header__bottom"></div>
    </header>
  )
}
