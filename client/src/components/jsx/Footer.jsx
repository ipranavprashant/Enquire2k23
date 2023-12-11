import React from 'react';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import '../styles/Footer.css';
import { Newsletter } from './Newsletter';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="footer">
                <div className="container-footer">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Club</h4>
                            <ul>
                                <li><NavLink to="/about" className="nav__link">about us</NavLink></li>
                                <li><NavLink to="/gallery" className="nav__link">Gallery</NavLink></li>
                                <li><NavLink to="/about" className="nav__link">privacy policy</NavLink></li>
                                <li><NavLink to="/members" className="nav__link">alumni</NavLink></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><NavLink to="/faq" className="nav__link">FAQ</NavLink></li>
                                <li><NavLink to="/archives" className="nav__link">Archives</NavLink></li>
                                <li><NavLink to="/contactus" className="nav__link">Raise a Dispute</NavLink></li>
                                <li><NavLink to="/contactus" className="nav__link">Sponsorship</NavLink></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>follow us</h4>
                            <div className="social-links">
                                <a href="https://www.facebook.com/enquirequizclub/" target='_blank' rel="noopener noreferrer"><FaFacebookF /></a>
                                <a href="https://twitter.com/enquirequizclub" target='_blank' rel="noopener noreferrer"><FaXTwitter /></a>
                                <a href="https://www.instagram.com/enquire_nitc/" target='_blank' rel="noopener noreferrer"><FaInstagram /></a>
                                <a href="https://www.linkedin.com/company/enquireclubnitc/mycompany/" target='_blank' rel="noopener noreferrer"><FaLinkedinIn /></a>
                                <a href="mailto:enquireclub@nitc.ac.in"><FaEnvelope /></a>
                            </div>
                        </div>
                        <div className='footer-col'>
                            <h4>Subscribe to our Newsletter</h4>
                            <Newsletter />
                            <div className='cp-container'>
                                <p className='cp-text'>© Copyright {currentYear} Enquire Quiz Club. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
