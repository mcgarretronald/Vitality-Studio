import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../Navigation-bar';
import './trainer.css';
import Footer from '../Footer';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

export default function TrainerPage() {
  const [trainers, setTrainers] = useState([]);
  

  useEffect(() => {
    async function fetchTrainers() {
      try {
        const response = await fetch('trainers.json');
        const data = await response.json();
        setTrainers(data.trainers); // Set the trainers state with data from the API
      } catch (error) {
        console.log(error);
        setTrainers([]);
      }
    }

    fetchTrainers(); 
  }, []); 

  return (
    <div>
      <NavigationBar />
      <h1 className='Trainer-title'>Trainers</h1>
      <ScrollAnimation animateIn='fadeInUp' initiallyVisible={true} animateOnce={true}>
      <div className="trainerheads">
        {trainers.map(trainer => (
          <Link to={'/trainerprofile'} state={{ trainer }}>
            <div key={trainer.id} className="trainer-card">
              <div className="trainer-imagey">
              <img src={trainer.image} alt={trainer.name} className="trainer-image"/>
              </div>

            <h2 >{trainer.name}</h2>
            <p>{trainer.specialty}</p>
            <p className='trainer-rating'>Rating: {trainer.rating}</p>
          </div>
          </Link>
        
           
         
        ))}
      </div>
      </ScrollAnimation>
      <Footer />
    </div>
  );
}

