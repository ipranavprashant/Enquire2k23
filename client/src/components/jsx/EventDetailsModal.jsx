import React from "react";
import PropTypes from "prop-types";
import "../styles/EventDetailsModal.css";

const EventDetailsModal = ({ event, onClose }) => {
  return (
    <div className="event-details-modal-overlay" onClick={onClose}>
      <div className="event-details-modal" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>
          &times;
        </span>

        <div className="modal-content">
          <div className="modal-image">
            <img src={event.imageUrl} alt={event.title} />
          </div>
          <div className="modal-details">
            <h2>{event.title}</h2>
            <p>
              <strong>Venue:</strong>{" "}
              <a
                href={event.venueLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {event.venueName}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

EventDetailsModal.propTypes = {
  event: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EventDetailsModal;
