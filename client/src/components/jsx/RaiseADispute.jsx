import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css';
import '../styles/Heading.css';

const RaiseADispute = () => {
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
            const response = await axios.post('https://enquire-backend.onrender.com/api/raise-a-dispute', formData);
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
                        <h1>We are here to hear you :)</h1>
                        <p>Or e-mail us at <a href="mailto:enquireclub@nitc.ac.in">enquireclub@nitc.ac.in</a></p>
                    </div>
                </section>

                <section className="section2 clearfix">
                    <div className="col2 column1 first">
                        <iframe className='map'
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
                                            placeholder="Your concern here..."
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

export default RaiseADispute;
