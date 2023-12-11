import React from 'react';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import '../styles/Footer.css';
import { Newsletter } from './Newsletter';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container-footer">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Club</h4>
                            <ul>
                                <li><NavLink to="/about" className="nav__link">about us</NavLink></li>
                                <li><NavLink to="/events" className="nav__link">events</NavLink></li>
                                <li><NavLink to="/about" className="nav__link">privacy policy</NavLink></li>
                                <li><NavLink to="/members" className="nav__link">alumni</NavLink></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><NavLink to="/aboutus" className="nav__link">FAQ</NavLink></li>
                                <li><NavLink to="/aboutus" className="nav__link">Contact Us</NavLink></li>
                                <li><NavLink to="/aboutus" className="nav__link">Raise a Dispute</NavLink></li>
                                <li><NavLink to="/aboutus" className="nav__link">Sponsorship</NavLink></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>follow us</h4>
                            <div className="social-links">
                                <a href="https://www.facebook.com/enquirequizclub/" target='_blank' rel="noopener noreferrer"><FaFacebookF /></a>
                                <a href="https://twitter.com/enquirequizclub" target='_blank' rel="noopener noreferrer"><FaXTwitter /></a>
                                <a href="https://www.instagram.com/enquire_nitc/" target='_blank' rel="noopener noreferrer"><FaInstagram /></a>
                                <a href="https://www.linkedin.com/company/enquireclubnitc/mycompany/" target='_blank' rel="noopener noreferrer"><FaLinkedinIn /></a>
                            </div>
                        </div>
                        <div className='footer-col'>
                            <h4>Subscribe to our Newsletter</h4>
                            <Newsletter />
                            <div className='cp-container'>
                                <p className='cp-text'>© Copyright 2023 Enquire Quiz Club. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <p class="footer-heart">
  Made with <g-emoji class="g-emoji" alias="heart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png">
<img class="emoji" alt="heart" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"/>
</g-emoji> by the <a href="https://pranavprashant.in">Tech Team, Enquire.</a>
</p> */}
        </>
    );
};

export default Footer;
