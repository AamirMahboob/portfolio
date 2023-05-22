import React from 'react'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import Navbar from '../components/Navbar'
import { Work } from '../components/Work'
import Project from './Project'

export default function Home() {
  return (
    <div>
        <Navbar />
        <HeroImg />
        <Work />
        <Footer />
    </div>
  )
}
