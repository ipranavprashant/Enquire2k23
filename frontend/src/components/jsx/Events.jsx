import React, { useState } from 'react';
import '../styles/Events.css';
import EventCard from './EventCard';

const Events = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Sample data for event cards
    const eventCards = [
        {
            id: 1,
            title: 'Event 1',
            venueName: 'Venue 1',
            venueLink: 'https://example.com/venue1',
            streetAddress: '123 Main St',
            locality: 'City A, State A',
            imageUrl: 'https://source.unsplash.com/random',
            date: '2023-01-01',
            time: '18:00',
            detailsLink: 'https://example.com/details1',
            registerLink: '/registration-panel',
        },
        {
            id: 2,
            title: 'Event 2',
            venueName: 'Venue 2',
            venueLink: 'https://example.com/venue2',
            streetAddress: '456 Oak St',
            locality: 'City B, State B',
            imageUrl: 'https://source.unsplash.com/random',
            date: '2023-02-01',
            time: '19:30',
            detailsLink: 'https://example.com/details2',
            registerLink: '/registration-panel',
        },
        {
            id: 3,
            title: 'Event 3',
            venueName: 'Venue 2',
            venueLink: 'https://example.com/venue2',
            streetAddress: '456 Oak St',
            locality: 'City B, State B',
            imageUrl: 'https://source.unsplash.com/random',
            date: '2023-02-01',
            time: '19:30',
            detailsLink: 'https://example.com/details2',
            registerLink: '/registration-panel',
        },
        {
            id: 4,
            title: 'Event 4',
            venueName: 'Venue 2',
            venueLink: 'https://example.com/venue2',
            streetAddress: '456 Oak St',
            locality: 'City B, State B',
            imageUrl: 'https://source.unsplash.com/random',
            date: '2023-02-01',
            time: '19:30',
            detailsLink: 'https://example.com/details2',
            registerLink: '/registration-panel',
        },
    ];

    // Filter event cards based on the search term
    const filteredEventCards = eventCards.filter((card) =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="your-component-container">
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
                        />
                    ))
                ) : (
                    <p className="no-events-message">Zzz... No events found. Check back later or try a different search.</p>
                )}
            </div>
        </div>
    );
};

export default Events;