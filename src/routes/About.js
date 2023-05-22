import React from 'react'
import { AboutContent } from '../components/AboutContent'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
 
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading='About.' text='I am friendly Front-End-Developer'  />
      <AboutContent />
      <Footer />
    </div>
  )
}
