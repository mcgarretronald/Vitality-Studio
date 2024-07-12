import React from 'react'
import NavigationBar from '../Navigation-bar'
import Landingpage from './Landing-page'
import HealthyBody from './healthybody'
import Goals from './Goals'
import Plans from './Plans'
import Footer from '../Footer'

export default function Home() {
  return (
    <div>
     <NavigationBar/>
     <Landingpage/>
     <HealthyBody/>
     <Goals/>
     <Plans/>
     <Footer/>
      
    </div>
  )
}
