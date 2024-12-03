
import React, { useEffect } from 'react';

import ScrollReveal from 'scrollreveal';

import intro_1 from '../../assets/intro-1.png'
import intro_2 from '../../assets/intro-2.png'
import intro_3 from '../../assets/intro-3.png'

import './main.css'
export default function Main() {


    useEffect(() => {
        const scrollRevealOption = {
            distance: "50px",
            origin: "bottom",
            duration: 1000,
        };

        ScrollReveal().reveal(".intro__card", {
            ...scrollRevealOption,
            interval: 500,
        });

    })

    return (
        <section className="section__container intro__container">
            <p className="section__subheader">Intro</p>
            <h2 className="section__header">Get to know us more</h2>
            <div className="intro__grid">
                <div className="intro__card">
                    <div className="intro__image">
                        <img src={intro_1} alt="intro" />
                    </div>
                    <h4>Pet Experts</h4>
                    <p>
                        Meet our team of skilled veterinarians, dedicated to your pet's
                        well-being.
                    </p>
                    <a href="#">Read More</a>
                </div>
                <div className="intro__card">
                    <div className="intro__image">
                        <img src={intro_2} alt="intro" />
                    </div>
                    <h4>Vet Services</h4>
                    <p>
                        Offering a wide range of veterinary services to keep your pets
                        healthy and happy.
                    </p>
                    <a href="#">Read More</a>
                </div>
                <div className="intro__card">
                    <div className="intro__image">
                        <img src={intro_3} alt="intro" />
                    </div>
                    <h4>Contact Us</h4>
                    <p>
                        Reach out to us for any inquiries or schedule an appointment for
                        your pet's care.
                    </p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </section>
    )
}
