import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import '../styles/Navbar.css';
import EnquireLogo from '../../assets/EnquireLogo.jpeg';

const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                !document.querySelector('.nav__list').contains(e.target) &&
                !document.querySelector('.nav-toggle').contains(e.target)
            ) {
                setIsExpanded(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleToggle = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <>
            <div className='container'>
                <header className="site-header">
                    <div className="header__content--flow">
                        <section className="header-content--left">
                            <NavLink to="/" className="brand-logo">
                                <img
                                    src={EnquireLogo}
                                    alt="logo"
                                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                                />
                                <span className="logo-text">Enquire Quiz Club</span>
                            </NavLink>
                            <button className="nav-toggle" onClick={handleToggle}>
                                <span className="toggle--icon"></span>
                            </button>
                        </section>
                        <section className="header-content--right">
                            <nav className="header-nav" role="navigation">
                                <ul className={`nav__list ${isExpanded ? 'expanded' : ''}`} aria-expanded={isExpanded}>
                                    <li className="list-item">
                                        <NavLink to="/" className="nav__link">Home</NavLink>
                                    </li>
                                    <li className="list-item">
                                        <NavLink to="/about" className="nav__link">About</NavLink>
                                    </li>
                                    <li className="list-item">
                                        <NavLink to="/events" className="nav__link">Events</NavLink>
                                    </li>
                                    <li className="list-item">
                                        <NavLink to="/members" className="nav__link">Members</NavLink>
                                    </li>
                                    <li className="list-item">
                                        <NavLink to="/archives" className="nav__link">Archives</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </section>
                    </div>
                </header>
            </div>
        </>
    );
}

export default Navbar;
