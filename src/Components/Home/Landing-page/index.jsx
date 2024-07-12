import React from 'react'
import './index.css'
import muscelman from '../../../assets/Muscle__Man_-_1200x800-removebg-preview.png'
export default function Landingpage() {
  return (
    <div className='Landingpage'>
        <section className='landingpage-sect1'>
        <h1 className='whoarewe'>WHO ARE <br /> WE</h1>
        <img src={muscelman} alt="muscel man" />

        </section>
        <section className='aboutus'>
            <div className="aboutus-content">
               
              
                <h2>About us</h2>
                <p>At VitalityVault, we're dedicated to helping you achieve your fitness goals. Since
                    1999, our welcoming, state-of-the-art facility has provided top-notch equipment,
                    diverse classes, and expert guidance from certified trainers. We belive in holistic
                    approach to health, offering personalized support to ensure your journey is enjoyable
                    and sustainable. Join our community and transform your life with us.
                </p>
            </div>
        </section>
      
      
    </div>
  )
}
