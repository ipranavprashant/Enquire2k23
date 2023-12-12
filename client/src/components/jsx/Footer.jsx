import React from 'react';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import '../styles/Footer.css';
import { Newsletter } from './Newsletter';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <footer className="footer">
                <div className="container-footer">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Club</h4>
                            <ul>
                                <li><NavLink to="/about" className="nav__link" onClick={scrollToTop}>about us</NavLink></li>
                                <li><NavLink to="/gallery" className="nav__link" onClick={scrollToTop}>Gallery</NavLink></li>
                                <li><NavLink to="/privacypolicy" className="nav__link" onClick={scrollToTop}>privacy policy</NavLink></li>
                                <li><NavLink to="/members" className="nav__link" onClick={scrollToTop}>alumni</NavLink></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><NavLink to="/faq" className="nav__link" onClick={scrollToTop}>FAQ</NavLink></li>
                                <li><NavLink to="/archives" className="nav__link" onClick={scrollToTop}>Archives</NavLink></li>
                                <li><NavLink to="/raise-a-dispute" className="nav__link" onClick={scrollToTop}>Raise a Dispute</NavLink></li>
                                <li><NavLink to="/sponsorship" className="nav__link" onClick={scrollToTop}>Sponsorship</NavLink></li>
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
                            <h4>Stay tuned with Enquire!</h4>
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
