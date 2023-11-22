import React from 'react'
import logo from '../assets/logo.png'

function Footer() {
  return (
    <div className=' min-h-[60vh] max-w-screen bg-[#99CAB7]'>
        <div className='grid grid-cols-3 gap-5 space-x-5 px-52'>


        <div className='space-y-7 py-20'>

        <div ><img src= {logo} alt="" /></div>
        <p className=' text-start'>Discover the CBIT Alumni Network, your gateway to connecting with fellow graduates. Easily access exclusive events, updates, and resources.</p>

        <form>
      <label >
    
    <input className=" border border-black placeholder-black  rounded-md text-black p-3" type="text" placeholder="Enter your email"></input>
     </label>
      </form>
       <p className='text-black text-xs'>© 2023 FSD minor project</p>


        </div >
        <div className='py-20 px-52'>
        <ul className="list-none space-y-8">
      <li className='font-bold text-sm'>Company</li>
      <li>About</li>
      <li>events</li>
      <li>gallery</li>
      <li>updates</li>
      <li>Help</li>
     
  


  
      </ul>
      
         


        </div>
        <div className='py-20 px-48'>
      
        <ul className="list-none space-y-8">
        <p className='text-xs w-8 display-inline font-bold whitespace-nowrap'>Alumni Directory</p>
      <li className='whitespace-nowrap'>  Donations</li>
      <li className='whitespace-nowrap'> contact us</li>
      <li className='whitespace-nowrap'>Terms of service</li>
      <li className='whitespace-nowrap'>News</li>
      <li className='whitespace-nowrap'>Privacy policy</li>
  


  
      </ul>
        </div>
      
        </div>
        

    </div>
  )
}

export default Footer