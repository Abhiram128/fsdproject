// EventsPage.js
import React from 'react';
import EventCard from '../components/EventCard';
import useEvents from '../hooks/useEvents';
import DashboardNav from './DashboardNav';

const EventsPage = () => {
  const { events, loading } = useEvents();

  return (
    <div style={{ display: 'flex' }}>
      <DashboardNav />
      <div style={{ flex: 1, marginLeft: '200px' }}>
        <div className="events-page">
          <h2 className="text-4xl font-medium text-maroon mb-10">My Events 📒</h2>
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
