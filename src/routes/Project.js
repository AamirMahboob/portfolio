import React from 'react'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
 
 
import Navbar from '../components/Navbar'
import PricingCard from '../components/PricingCard'
import { Work } from '../components/Work'

export default function Project() {
  return (
    <div>
      <Navbar />
       <HeroImage2 heading='Projects.' text='Some of my recent project'  />
       <Work />
       <PricingCard />
      <Footer />
    </div>
  )
}
