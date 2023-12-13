import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Sponsorship.css';
import '../styles/Contact.css';
import '../styles/Heading.css';
import whoarewe from '../../assets/sponsorshipdocs/whoarewe.pdf';
import whatcanweoffer from '../../assets/sponsorshipdocs/whatcanweoffer.pdf';
import Marquee from './Marquee';
import Reach from './Reach';

const Sponsorship = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobilenumber: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://enquire-backend.onrender.com/api/sponsorship', formData);
            console.log('Message sent successfully:', response.data);
            setIsSubmitted(true);
            setFormData({
                firstname: '',
                lastname: '',
                email: '',
                mobilenumber: '',
                message: '',
            });
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="container-contactus">
            <div className="innerwrap">
                <section className="section1 clearfix">
                    <div className="beautify-heading">
                        <h1>Sponsorship</h1>
                    </div>
                    <p>
                        While the club has made it a habit to host quality quizzes round the calendar, the support we've
                        had over the years from our sponsors has been the driving force behind the successful organization
                        of the events. It's for this single reason that we value sponsorship at a high level, without which
                        the events would never be a reality. Do see the following documents to understand the benefits of
                        sponsoring us:
                    </p>

                    <div className="pdf-links">
                        <a href={whoarewe} download>
                            <button className="pdf-button">Marketing Brochure</button>
                        </a>
                        <a href={whatcanweoffer} download>
                            <button className="pdf-button">General Proposal Scheme</button>
                        </a>
                    </div>
                </section>
                <div className="beautify-heading vertical-gap">
                    <h1>Our Previous Sponsors</h1>
                </div>
                <Marquee />
                <div className="beautify-heading vertical-gap">
                    <h1>Our Reach</h1>
                </div>
                <Reach />
                <div className="beautify-heading vertical-gap">
                    <h1>React out to us</h1>
                </div>
                <p className='to-centre'>Or e-mail us at <span>&nbsp;</span><a href="mailto:enquireclub@nitc.ac.in"> enquireclub@nitc.ac.in</a></p>
                <section className="section2 clearfix">
                    <div className="col2 column1 first">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.1796100106694!2d75.93106097504986!3d11.321579088862295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba642fd50000001%3A0xbe8a77db953bda6c!2sNational%20Institute%20of%20Technology%2C%20Calicut!5e0!3m2!1sen!2sin!4v1702252973479!5m2!1sen!2sin"
                            title="club-location"
                            width="600"
                            height="450"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="col2 column2 last">
                        <div className="sec2innercont"></div>
                        <div className="sec2contactform">
                            {isSubmitted ? (
                                <div className="success-message-container">
                                    <p className="success-message">Thanks for contacting us!</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="clearfix">
                                        <input
                                            className="col2 first"
                                            type="text"
                                            name="firstname"
                                            placeholder="First Name"
                                            onChange={handleChange}
                                            value={formData.firstname}
                                            required
                                        />
                                        <input
                                            className="col2 last"
                                            type="text"
                                            name="lastname"
                                            placeholder="Last Name"
                                            onChange={handleChange}
                                            value={formData.lastname}
                                            required
                                        />
                                    </div>
                                    <div className="clearfix">
                                        <input
                                            className="col2 first"
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            onChange={handleChange}
                                            value={formData.email}
                                            required
                                        />
                                        <input
                                            className="col2 last"
                                            type="text"
                                            name="mobilenumber"
                                            placeholder="Contact Number"
                                            onChange={handleChange}
                                            value={formData.mobilenumber}
                                            required
                                        />
                                    </div>
                                    <div className="clearfix">
                                        <textarea
                                            name="message"
                                            id=""
                                            cols="30"
                                            rows="7"
                                            placeholder="Your message here..."
                                            onChange={handleChange}
                                            value={formData.message}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="clearfix">
                                        <input type="submit" value="Send" />
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Sponsorship;