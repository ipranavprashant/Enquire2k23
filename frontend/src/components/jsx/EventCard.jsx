import React from 'react';
import PropTypes from 'prop-types';
import '../styles/EventCard.css';
import { NavLink } from 'react-router-dom';

const EventCard = (props) => {
    const {
        title,
        venueName,
        venueLink,
        streetAddress,
        locality,
        imageUrl,
        date,
        time,
        detailsLink,
        registerLink,
        onClick,
    } = props;

    const handleDetailsLinkClick = (e) => {
        e.preventDefault();
        onClick(); // Trigger the click handler to open the modal
    };

    return (
        <section className="event card" onClick={onClick}>
            <div className="event-title title-block">
                <h2 className="title">{title}</h2>
                <p className="venue">
                    <a className="link" href={venueLink} target="_blank" rel="noopener noreferrer" aria-label="Visit venue website">
                        {venueName}
                    </a>
                </p>
                <address className="address">
                    <p className="streetAddress">{streetAddress}</p>
                    <span className="locality">{locality}</span>
                </address>
            </div>
            <div className="image-wrapper">
                <img className="featured-image" src={imageUrl} alt={`${title} Band`} />
                <div className="overlay"></div>
            </div>
            <div className="event-date date">
                <time dateTime={date}>{date}</time>
            </div>
            <div className="event-time time">
                <time dateTime={time}>{time}</time>
            </div>
            <div className="event-details">
                <a
                    className="link details"
                    href={detailsLink}
                    onClick={handleDetailsLinkClick}
                >
                    DETAILS
                </a>
            </div>
            <div className="event-tickets">
                <NavLink className="link" to={registerLink}>
                    REGISTER
                </NavLink>
            </div>
        </section>
    );
};

EventCard.propTypes = {
    title: PropTypes.string.isRequired,
    venueName: PropTypes.string.isRequired,
    venueLink: PropTypes.string.isRequired,
    streetAddress: PropTypes.string.isRequired,
    locality: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    detailsLink: PropTypes.string.isRequired,
    registerLink: PropTypes.string.isRequired,
};

export default EventCard;
