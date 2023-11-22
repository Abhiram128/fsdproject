// EventsPage.js
import React from 'react';
import EventCard from '../components/EventCard';
import useEvents1 from '../hooks/useEvents1';

const EventsPage = () => {
  const { events, loading } = useEvents1();

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, marginLeft: '200px' }}>
        <div className="events-page">
          <h2 className="text-4xl font-medium text-maroon mb-10">Events</h2>
          {loading ? (
            <p>Loading events...</p>
          ) : (
            <div className="text-center">
              {events.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
