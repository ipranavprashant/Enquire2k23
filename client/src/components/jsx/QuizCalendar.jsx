import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/QuizCalendar.css";
import "../styles/Heading.css";
import events from "../utils/quizCalendarEvents";

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const getEventsForDate = (date) => {
    return (
      events.find((event) => event.date.toDateString() === date.toDateString())
        ?.events || []
    );
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  return (
    <>
      <div className="beautify-heading">
        <h1>Quiz Calendar</h1>
      </div>
      <div className="event-calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          tileClassName={({ date, view }) =>
            getEventsForDate(date).length > 0 && view === "month"
              ? "highlighted"
              : null
          }
        />
        {selectedDate && (
          <div className="event-details-calendar">
            <h2>Events on {selectedDate.toDateString()}</h2>
            {selectedDateEvents.length > 0 ? (
              <div className="calendar-events">
                {selectedDateEvents.map((event, index) => (
                  <div className="calendar-event" key={index}>
                    <h3>{event.title}</h3>
                    <img src={event.imageUrl} alt="placeholder-event-pic" />
                  </div>
                ))}
              </div>
            ) : (
              <p>No events for the selected date.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default EventCalendar;
