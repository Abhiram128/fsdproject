import React, { useState } from 'react';
import { useEvent } from '../hooks/useEvent';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import DashboardNav from './DashboardNav';

const EventForm = () => {
  const { user } = useAuthContext();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [registrationLink, setRegistrationLink] = useState("");
  const [alumniIncharge, setAlumniIncharge] = useState("");
  const [team, setTeam] = useState("");

  const { createEvent, error, loading } = useEvent();
  const navigate = useNavigate();
  

  const handleEvent = async (e) => {
    e.preventDefault();

    // Include user.email in the request data
    const eventData = {
      title,
      date,
      time,
      venue,
      registrationLink,
      alumniIncharge,
      team,
      email: user.email,
    };

    await createEvent(eventData);

    // Handle navigation or other logic based on the outcome
    if (!error) {
      // Navigate or perform any other action on success
      navigate('/EventsPage'); // Adjust the path as needed
    }
  };

  return (
    <div style={{ display: 'flex' }}>
    <DashboardNav />
    <form
      onSubmit={handleEvent}
      className="login-form flex flex-col gap-5 py-20 mx-auto max-w-sm"
    >
      <h2 className="text-4xl font-medium text-maroon mb-10">Create Event</h2>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="title"
          className="cursor-pointer hover-text-sky-400 duration-300 text-dark-green"
        >
          Event Title
        </label>
        <input
          type="text"
          id="title"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"
          style={{ color: 'black' }}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="date"
          className="cursor-pointer hover-text-sky-400 duration-300 text-dark-green"
        >
          Event Date
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"
          style={{ color: 'black' }}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="time"
          className="cursor-pointer hover-text-sky-400 duration-300 text-dark-green"
        >
          Event Time
        </label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"
          style={{ color: 'black' }}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="venue"
          className="cursor-pointer hover-text-sky-400 duration-300 text-dark-green"
        >
          Event Venue
        </label>
        <input
          type="text"
          id="venue"
          placeholder="Event Venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"
          style={{ color: 'black' }}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="registrationLink"
          className="cursor-pointer hover-text-sky-400 duration-300 text-dark-green"
        >
          Registration Link
        </label>
        <input
          type="text"
          id="registrationLink"
          placeholder="Registration Link"
          value={registrationLink}
          onChange={(e) => setRegistrationLink(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"
          style={{ color: 'black' }}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="alumniIncharge"
          className="cursor-pointer hover-text-sky-400 duration-300 text-dark-green"
        >
          Alumni Incharge
        </label>
        <input
          type="text"
          id="alumniIncharge"
          placeholder="Alumni Incharge"
          value={alumniIncharge}
          onChange={(e) => setAlumniIncharge(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"
          style={{ color: 'black' }}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="team"
          className="cursor-pointer hover-text-sky-400 duration-300 text-dark-green"
        >
          Team Size
        </label>
        <input
          type="number"
          id="team"
          placeholder="Team Size"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"
          style={{ color: 'black' }}
        />
      </div>

      <button
        type="submit"
        className="bg-dark-green text-white py-3 rounded-xl hover-bg-sky-500 duration-300 mt-3" style={{ color: 'white' }}
      >
        Sign Up for Event
      </button>
    </form>
      
    </div>
  );
};

export default EventForm;
