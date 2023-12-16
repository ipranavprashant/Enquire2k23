import React, { useState } from 'react';
import '../styles/Admin.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Heading.css';
import { PacmanLoader } from 'react-spinners';
import { BASE_URL } from '../utils/constants';

const Admin = () => {
    const navigate = useNavigate();

    const handleNavigateToHome = () => {
        navigate("/");
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false); // New state variable

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Set loading to true on sign-in attempt
        const data = {
            email: email,
            password: password
        };

        try {
            const res = await axios.post(`${BASE_URL}/login`, data, {
                withCredentials: true,
            });
            if (res.status === 401) {
                alert("Invalid Credentials");
            } else if (res.status === 500) {
                alert("Internal Server Error");
            } else {
                const token = res.data.token;
                localStorage.setItem('authToken', token);
                alert("Successfully signed in!");
                navigate("/admin/registrations");
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("Wrong Credentials. Please try again.");
        } finally {
            setIsLoading(false); // Set loading to false regardless of the sign-in result
        }
    };

    return (
        <>
            <div className="beautify-heading">
                <h1>Admin Panel</h1>
            </div>
            <div className="signin-container">
                <h2>Sign In</h2>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter your password"
                    />
                </div>
                <div>
                    {isLoading ? (
                        <div className="loading-container">
                            <div className='pacman'>
                                <PacmanLoader color={'#36D7B7'} size={35} />
                            </div>
                            <br />
                            <h4 className='to-centre'>Loading...</h4>
                        </div>
                    ) : (
                        <>
                            <button className="btn-signin" onClick={handleSignIn} disabled={isLoading}>
                                Sign In
                            </button>
                            <p className='btn-spread'>Not an Admin?</p>
                            <button className="btn-signin" onClick={handleNavigateToHome}>
                                Go back
                            </button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Admin;