import React from "react";
import "../styles/EventCard.css";
import { NavLink } from "react-router-dom";

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
    onClick();
  };

  const handleRegisterLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="event card" onClick={onClick}>
      <div className="event-title title-block">
        <h2 className="title">{title}</h2>
        <p className="venue">
          <a
            className="link"
            href={venueLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit venue website"
          >
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
        <NavLink
          className="link details"
          to={detailsLink}
          onClick={handleDetailsLinkClick}
        >
          DETAILS
        </NavLink>
      </div>
      <div className="event-tickets">
        <NavLink
          className="link"
          to={registerLink}
          onClick={handleRegisterLinkClick}
        >
          REGISTER
        </NavLink>
      </div>
    </section>
  );
};

export default EventCard;
