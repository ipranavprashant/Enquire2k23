import React, { useState } from "react";
import "../styles/Events.css";
import "../styles/Heading.css";
import eventCards from "../utils/activeEventData";
import EventCard from "./EventCard";
import EventDetailsModal from "./EventDetailsModal";

const ActiveEvents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventCardClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const filteredEventCards = eventCards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="your-component-container">
      <div className="beautify-heading">
        <h1>Active Events</h1>
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-box"
      />

      <div className="event-cards-container">
        {filteredEventCards.length > 0 ? (
          filteredEventCards.map((card) => (
            <EventCard
              key={card.id}
              title={card.title}
              venueName={card.venueName}
              venueLink={card.venueLink}
              streetAddress={card.streetAddress}
              locality={card.locality}
              imageUrl={card.imageUrl}
              date={card.date}
              time={card.time}
              detailsLink={card.detailsLink}
              registerLink={card.registerLink}
              onClick={() => handleEventCardClick(card)}
            />
          ))
        ) : (
          <p className="no-events-message">
            Zzz... No events found. Check back later or try a different search.
          </p>
        )}
      </div>

      {selectedEvent && (
        <EventDetailsModal event={selectedEvent} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ActiveEvents;
