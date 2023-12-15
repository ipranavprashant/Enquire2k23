import React, { useState } from 'react';
import axios from 'axios';
import { FaReact } from 'react-icons/fa';
import '../styles/Newsletter.css';

export const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await axios.post('https://enquire-backend.onrender.com/api/newsletter', { email });
            setIsSubscribed(true);
            setEmail('');
        } catch (error) {
            console.error('Error subscribing to newsletter:', error);
        } finally {
            setIsLoading(false);
            if (isSubscribed) {
                window.alert("Thanks for Subscribing. We will keep you posted with the updates!");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-box">
                <div className="input-main">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                        <path
                            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                        />
                    </svg>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className="submit" type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <>
                            <FaReact className="loading-icon" />
                            <span>Loading...</span>
                        </>
                    ) : (
                        'Subscribe'
                    )}
                </button>
            </div>
        </form>
    );
};
