// Dashboard.js

import React from 'react';
import DashboardNav from './DashboardNav';
import { useAuthContext } from '../hooks/useAuthContext';

const Dashboard = () => {
    const { user } = useAuthContext();
  return (
    <div style={{ display: 'flex' }}>
      <DashboardNav />
      <div style={{ flex: 1, marginLeft: '200px' }}>
        {/* Add other content here, it won't affect the fixed DashboardNav */}
        <h1 style={{ color:'maroon', fontSize:'1.8rem'}}>Welcome  <span  style={{ color:"#004200", fontSize:'1.8rem'}}>{user.fullName}</span></h1>
        
        {/* Other content */}
      </div>
      
    </div>
  );
};

export default Dashboard;
