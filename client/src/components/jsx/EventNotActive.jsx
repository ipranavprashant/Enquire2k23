import React from 'react';
import { NavLink } from 'react-router-dom';

const EventNotActive = () => {
    const containerStyle = {
        textAlign: 'center',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#ffffff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        minHeight:'60vh'
    };

    const headerStyle = {
        color: '#e91e63',
    };

    const paragraphStyle = {
        color: '#333',
        fontSize: '16px',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>Event Not Active</h1>
            <p style={paragraphStyle}>Sorry, this event is currently not active. Please check back later.</p>
            <br />
            <NavLink to="/active-events" smooth={true} duration={500} className="button button-accent">
            Explore Active Events
          </NavLink>
        </div>
    );
};

export default EventNotActive;
