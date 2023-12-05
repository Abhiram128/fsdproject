// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DashboardNav from './pages/DashboardNav';
import EventForm from './pages/EventForm';
import EventsPage from './pages/EventsPage';
import Events from './pages/Events';

import AlumniTable from './pages/AlumniTable';
function App() {
  return (
    <Router>
      <AuthContextProvider>
        <div className='bg-[#E9EBE7] '>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/DashboardNav" element={<DashboardNav />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
           <Route path="/EventForm" element={<EventForm />} />
           <Route path="/EventsPage" element={<EventsPage />} />
           <Route path="/Events" element={<Events />} />
           <Route path="/AlumniTable" element={<AlumniTable />} />
          </Routes>
        </div>
        <Footer />
      </AuthContextProvider>
    </Router>
  );
}

export default App;
