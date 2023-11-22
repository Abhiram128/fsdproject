import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiUser, FiLogOut } from 'react-icons/fi'; // Assuming FiUser and FiLogOut are appropriate icons for user and logout
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
import logo from '../assets/logo.png';

function Navbar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className='px-52 bg-[#E9EBE7] font-display flex justify-between items-center py-3 border' style={{ borderBottom: 'none' }}>
      <div>
        <NavLink to={user ? "/dashboard" : "/"}>
          <img className='h-28' src={logo} alt="" />
        </NavLink>
      </div>
      <div style={{ marginLeft: 50 }}>
        <ul className='flex justify-center items-center space-x-10 text-sm font-semibold text-[#385529] '>
          <li>
            <NavLink to="#">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/Events">Events</NavLink>
          </li>
          <li>
            <NavLink to="#">Members</NavLink>
          </li>
          <li>
            <NavLink to="#">Alumni awards</NavLink>
          </li>
        </ul>
      </div>
      <div className='flex justify-center space-x-5 font-semibold' style={{ marginLeft: 20 }}>
        {user ? (
          <>
            <div className="profile-dropdown">
              <button onClick={toggleProfile} className='border bg-dark-green py-[0.5em] px-6 rounded-lg text-white font-thin' style={{ color: 'white', cursor: 'pointer' }}>
                <FiUser />
              </button>
              {isProfileOpen && (
                <div className="profile-dropdown-content">
                  <ul>
                 <li> <span>{user.fullName}</span></li>
                  <li style={{textAlign:"center"}}><button onClick={logout}>
                    <FiLogOut /> 
                  </button></li>
                  </ul>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
           <NavLink to="/login">
              <button className='border  bg-dark-green py-[0.5em] px-6 rounded-lg text-white font-thin' style={{ color: 'white' }}>
                Login
              </button>
            </NavLink>
            <NavLink to="/signup">
              <button className='border  bg-dark-green py-[0.5em] px-6 rounded-lg text-white font-thin' style={{ color: 'white' }}>
                Signup
              </button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
