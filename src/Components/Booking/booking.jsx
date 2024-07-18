import React from 'react'
import './booking.css'  
import NavigationBar from '../Navigation-bar'
import Footer from '../Footer'
export default function Booking() {
  return (
    <div>
      <NavigationBar />
      <form action="" className='bookingForm'>
        <h1 className='form-title'>Gym Membership Form</h1>
        <label htmlFor="name">Name <sup>*</sup></label> 
        <div>
          <input type="text" placeholder='First' />
          <input type="text" placeholder='Last' />
        </div>
        <label htmlFor="current-weight">Current Weight <sup>*</sup></label>
        <input type="number"  />
        <label htmlFor="goal-weight">Goal Weight <sup>*</sup></label>
        <input type="number"  />
        <label htmlFor="email">Email <sup>*</sup></label>
        <input type="email"  />
        <label htmlFor="phone">Phone <sup>*</sup></label>
        <input type="tel"  />
        <label htmlFor="address">Membership plan <sup>*</sup></label>
       
        
        <button type="submit">Submit</button>
      </form>
      <Footer />
      
    </div>
  )
}
