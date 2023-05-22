import React from 'react'
 
import Footer from '../components/Footer'
import Form from '../components/Form'
import HeroImage2 from '../components/HeroImage2'
 
import Navbar from '../components/Navbar'
export default function Contact() {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading='Contact.' text='Lets have a chat'  />
      <Form />
      <Footer />
    </div>
  )
}
