import React from 'react'
import NavigationBar from '../Navigation-bar'
import Landingpage from './Landing-page'
import HealthyBody from './healthybody'
import Goals from './Goals'
import Plans from './Plans'
import Footer from '../Footer'
import './home.css'
import background from '../../assets/background web 1.jpg'

export default function Home() {
  return (
    <div className='home'>
      <NavigationBar />
      <Landingpage />
      <HealthyBody />
      <Goals />
      <Plans />
      <Footer />
    </div>
  )
}

