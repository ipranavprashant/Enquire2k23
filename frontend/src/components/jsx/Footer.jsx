import React from 'react';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
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
                                <li><a href="/about">about us</a></li>
                                <li><a href="/events">events</a></li>
                                <li><a href="events">privacy policy</a></li>
                                <li><a href="members">alumni</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><a href="/contactus">FAQ</a></li>
                                <li><a href="/contactus">Contact Us</a></li>
                                <li><a href="contactus">Raise a dispute</a></li>
                                <li><a href="contactus">Sponsorship</a></li>
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
