import React from 'react'
import './index.css'
import anatase from '../../../assets/anastase-maragos-7kEpUPB8vNk-unsplash.jpg'
import brett from '../../../assets/brett-jordan-U2q73PfHFpM-unsplash.jpg'
import edgar from '../../../assets/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg'

export default function HealthyBody() {
  return (
    <div className='healthybodyhealthymind'>
        <div>
            <div className='healthybody'>
                <section className='healthybody-txt'>Healthy body</section>
                <section><hr /></section>
            </div>
            <div className='healthymind'>
            <section><hr /></section>
                <section className='healthymind-txt'>Healthy mind</section>
               
            </div>
            <section className='healthybodyhealthymindp' >
                <p>Embrace the harmony of a healthy body and a healthy mind. Our holistic 
                    approach to wellness recognizes the vital connection between physical fitness 
                    and mental well being. Regular excercise  boosts physical health, improves
                    mood, reduces stress, and enhances cognitive function. Balanced nutrition
                    fuels both body and mind, providing the energy and nutrients needed for 
                    optimal performance and mental clarity. By priotizing both physical 
                    activity and mindful practices, you can achieve  a state  of  overall well-being,
                    leading to a more fulfiling, balanced life. Discover the power of a healthy
                    body and a healthy mind working together.

                </p>

            </section>


        </div>

        <div  className='healthybodymindimages'>
            <section className='healthybodymindimagesA'>
                <div >
                    <img src={anatase} alt="fitness" />
                </div>
                <div className='bret'>
                    <img src={brett} alt="fitness" />
                </div>
            </section>
            <section className='healthybodymindimagesB'>
                <img src={edgar} alt="fitness" />
            </section>
        </div>
      
    </div>
  )
}
