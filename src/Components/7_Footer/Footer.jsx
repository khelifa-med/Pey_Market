
import React from 'react'
import './footer.css'



export default function Footer() {
    return (
        <footer id="contact">
            <div className="section__container footer__container">
                <div className="footer__col">
                    <div className="footer__logo">
                        <a href="#">Pet Place</a>
                    </div>
                </div>
                <div className="footer__col">
                    <h4>Company</h4>
                    <ul className="footer__links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Store</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Faq</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer__col">
                    <h4>Address</h4>
                    <ul className="footer__links">
                        <li><a href="#">New Delhi, India</a></li>
                        <li><a href="#">View on Maps</a></li>
                    </ul>
                    <br />
                    <h4>Inquiries</h4>
                    <ul className="footer__links">
                        <li><a href="#">+91 0987654321</a></li>
                        <li><a href="#">info@website.com</a></li>
                    </ul>
                </div>
                <div className="footer__col">
                    <h4>Newsletter</h4>
                    <p>Stay updated with out latest news</p>
                    <form action="/">
                        <input type="text" placeholder="Your email" />
                        <button className="btn">
                            <i className="ri-arrow-right-line"></i>
                        </button>
                    </form>
                    <br />
                    <h4>Follow Us</h4>
                    <ul className="footer__socials">
                        <li>
                            <a href="#"><i className="ri-facebook-fill"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="ri-twitter-fill"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="ri-youtube-fill"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="ri-pinterest-line"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="ri-instagram-line"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="ri-tiktok-fill"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__bar">
                Copyright © 2024 Web Design Mastery. All rights reserved. | I made some changes to the code and the design
            </div>
        </footer>
    )
}
