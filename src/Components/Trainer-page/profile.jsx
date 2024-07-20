import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavigationBar from '../Navigation-bar';
import './trainer.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

export default function Profile() {
    const location = useLocation();
    const trainer = location.state.trainer;

    if (!trainer) {
        return <div>Trainer not found</div>;
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <NavigationBar />
            <div className="profile">
                <section>
                    <div className="cssanimation hu__hu__">
                        <img src={trainer.image} alt={trainer.name} />
                        </div>


                </section>
<ScrollAnimation animateIn='fadeInUp' initiallyVisible={true} animateOnce={true}>
                <section className='trainer-details'>
                    <h1>{trainer.name}</h1>
                    <h2>{trainer.specialty}</h2>
                    <p>{trainer.Duties}</p>
                    <p className='trainer-rating'>Rating: {trainer.rating}</p>
                    <Link to={'/booking'} state={{ trainer }}><button type="button" className="book-button">Book</button></Link>
                </section>
</ScrollAnimation>
            </div>
            <Footer />
        </div>
    );
}

