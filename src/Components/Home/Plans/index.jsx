import React from 'react'
import './index.css'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
export default function Plans() {
  return (
    <div className='Plans' >
        <ScrollAnimation animateIn='tada'animateOnce={true}>
        <h1 className='Plans-title'>Choose your <span>Plan</span></h1>
        </ScrollAnimation>
        <div className="plancontainer">
            <ScrollAnimation animateIn='bounceInUp'>
            <div className="plancard">
              
                <h2> <span className='basic'>Basic</span> <br />Membership</h2>

                <h3 className='price'>Ksh 3500/</h3>
                <ul>
                    <li>30 min Session</li>
                    <li>Private GYM</li>
                    <li>4 Swimming Pool Sessions</li>
                   
                </ul>
              
            </div>
            </ScrollAnimation>


            <ScrollAnimation animateIn='bounceInUp'>
            <div className="plancard">
              
              <h2> <span className='basic'>Starndard</span> <br />Membership</h2>

              <h3 className='price'>Ksh 6500/</h3>
              <ul>
                  <li>60 min Session</li>
                  <li>Locker Room Facilities</li>
                  <li>15 Swimming Sessions</li>
                 
              </ul>
            
          </div>
          </ScrollAnimation>



          <ScrollAnimation animateIn='bounceInUp'>
          <div className="plancard">
              
              <h2> <span className='basic'>Premium</span> <br />Membership</h2>

              <h3 className='price'>Ksh 14500/</h3>
              <ul>
              <li>60 min Session</li>
                  <li>Unlimited Pool Sessions</li>
                  <li>Locker Room Facilities</li>
                  <li>Sauna Facilities</li>
              </ul>
            
          </div>
          </ScrollAnimation>
    
    
      
    </div>
    </div>
  )
}
