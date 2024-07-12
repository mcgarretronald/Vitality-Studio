import React from 'react'
import './index.css'

export default function Plans() {
  return (
    <div className='Plans'>
        <h1 className='Plans-title'>Choose your <span>Plan</span></h1>
        <div className="plancontainer">
            <div className="plancard">
              
                <h2> <span className='basic'>Basic</span> <br />Membership</h2>

                <h3 className='price'>Ksh 3500/</h3>
                <ul>
                    <li>30 min Session</li>
                    <li>Private GYM</li>
                    <li>4 Swimming Pool Sessions</li>
                   
                </ul>
              
            </div>



            <div className="plancard">
              
              <h2> <span className='basic'>Starndard</span> <br />Membership</h2>

              <h3 className='price'>Ksh 6500/</h3>
              <ul>
                  <li>60 min Session</li>
                  <li>Locker Room Facilities</li>
                  <li>15 Swimming Sessions</li>
                 
              </ul>
            
          </div>




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
    
    
      
    </div>
    </div>
  )
}
