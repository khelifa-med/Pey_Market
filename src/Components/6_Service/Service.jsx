import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './service.css';

import service_1 from '../../assets/service-1.png';
import service_2 from '../../assets/service-2.png';
import service_3 from '../../assets/service-3.png';
import service_4 from '../../assets/service-4.png';
import service_5 from '../../assets/service-5.png';

export default function Service() {
    useEffect(() => {
        
        ScrollReveal().reveal(".service__card", {          
            duration: 1500,
            interval:500
        });

    })

    return (
        <section className="section__container " id="service">
            <p className="section__subheader">Services</p>
            <h2 className="section__header">What we can do for you</h2>
            <div className="service__flex">
                <div className="service__card">
                    <div>
                        <img src={service_1} alt="Emergency Care" />
                    </div>
                    <p>Emergency Care</p>
                </div>
                <div className="service__card">
                    <div>
                        <img src={service_2} alt="Vaccination Services" />
                    </div>
                    <p>Vaccination Services</p>
                </div>
                <div className="service__card">
                    <div>
                        <img src={service_3} alt="Nutrition Counseling" />
                    </div>
                    <p>Nutrition Counseling</p>
                </div>
                <div className="service__card">
                    <div>
                        <img src={service_4} alt="Behavioral Consultation" />
                    </div>
                    <p>Behavioral Consultation</p>
                </div>
                <div className="service__card">
                    <div>
                        <img src={service_5} alt="Pet Boarding Services" />
                    </div>
                    <p>Pet Boarding Services</p>
                </div>
            </div>
        </section>
    );
}
