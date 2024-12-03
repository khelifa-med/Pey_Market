
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import './about.css'

import about_1 from '../../assets/about-1.jpg'
import about_2 from '../../assets/about-2.jpg'
import about_3 from '../../assets/about-3.jpg'
import about_1_icon from '../../assets/about-1-icon.png'
import about_2_icon from '../../assets/about-2-icon.png'
import about_3_icon from '../../assets/about-3-icon.png'


export default function About() {

    useEffect(() => {
        const scrollRevealOption = {
            distance: "50px",
            origin: "bottom",
            duration: 1000,
        };

        ScrollReveal().reveal(
            ".about__row:nth-child(3) .about__image img, .about__row:nth-child(5) .about__image img",
            {
                ...scrollRevealOption,
                origin: "left",
            }
        );
        ScrollReveal().reveal(".about__row:nth-child(4) .about__image img", {
            ...scrollRevealOption,
            origin: "right",
        });
        ScrollReveal().reveal(".about__content span", {
            ...scrollRevealOption,
            delay: 500,
        });
        ScrollReveal().reveal(".about__content h4", {
            ...scrollRevealOption,
            delay: 1000,
        });
        ScrollReveal().reveal(".about__content p", {
            ...scrollRevealOption,
            delay: 1500,
        });

    })


    return (
        <section className="section__container about__container" id="about">
            <p className="section__subheader">About Us</p>
            <h2 className="section__header">What we can do for you</h2>
            <div className="about__row">
                <div className="about__image">
                    <img src={about_1} alt="about" />
                </div>
                <div className="about__content">
                    <span><img src={about_1_icon} alt="about-icon" /></span>
                    <h4>Let us help you with your pet health</h4>
                    <p>
                        Our expert veterinarians are here to provide comprehensive care and
                        guidance to ensure your pet stays in perfect health.
                    </p>
                </div>
            </div>
            <div className="about__row">
                <div className="about__image">
                    <img src={about_2} alt="about" />
                </div>
                <div className="about__content">
                    <span><img src={about_2_icon} alt="about-icon" /></span>
                    <h4>Caring personal will take care of your pet</h4>
                    <p>
                        Your pet will be in good hands with our compassionate and
                        well-trained staff, who treat every pet like family.
                    </p>
                </div>
            </div>
            <div className="about__row">
                <div className="about__image">
                    <img src={about_3} alt="about" />
                </div>
                <div className="about__content">
                    <span><img src={about_3_icon} alt="about-icon" /></span>
                    <h4>Let us groom your precious and loved pet</h4>
                    <p>
                        From bathing to styling, we offer professional grooming services to
                        keep your pet looking and feeling their best.
                    </p>
                </div>
            </div>
        </section>
    )
}
