import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import NavigationBar from '../Navigation-bar'
import './trainer.css'
import Footer from '../Footer'
export default function TrainerPage() {
  return (
    <div>
      <NavigationBar />
      <h1>Trainer</h1>
      <Footer />
      
    </div>
  )
}
