import React from 'react';
import { IoMdPeople, IoIosRocket, IoMdBulb } from 'react-icons/io';

function About() {
  const cardData = [
    {
      title: 'Be a mentor',
      description: 'Give mentorship to students',
      icon: <IoMdPeople size={50} className='icon' />, // Set icon size and add className for styling
    },
    {
      title: 'Share achievements',
      description: 'Share your achievements',
      icon: <IoIosRocket size={50} className='icon' />, // Set icon size and add className for styling
    },
    {
      title: 'Share opportunities',
      description: 'Help students grow',
      icon: <IoMdBulb size={50} className='icon' />, // Set icon size and add className for styling
    },
  ];

  return (
    <div className='space-y-8'>
      <div className='font-display space-y-2 mt-14'>
        <p className='text-black font-extrabold text-4xl'>Events</p>
      </div>
      <div className='grid grid-cols-3 gap-3 space-x-2 '>
        {cardData.map((card, index) => (
          <div key={index} className='bg-transparent min-h-[30vh] rounded-3xl p-5 flex flex-col justify-end'>
            <div className='flex flex-col items-center text-center space-y-6'>
              <div className='space-y-1 flex flex-col items-center'>
                {/* Wrap the icon in a div to apply hover styles */}
                <div
                  className='hover-icon'
                  style={{ color: '#971B1E', transition: 'color 0.5s', cursor: 'pointer' }}
                >
                  {card.icon}
                </div>
                <p className='font-semibold text-lg text-[#385529]'>{card.title}</p>
                <p className='text-[#385529] font-light text-wrap w-4/5'>{card.description}</p>
              </div>
              <button className='border border-black bg-dark-green py-[0.5em] px-6 rounded-lg text-white font-thin'style={{ color: 'white' }}>
              
                Join now!
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
