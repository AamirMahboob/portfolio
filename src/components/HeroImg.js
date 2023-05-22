import './HeroImgStyle.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroImg() {
  return (
    <div className='hero'> 
        <div className='mask'>
            <img className='into-img'
            src='https://cdn.pixabay.com/photo/2016/11/29/13/24/coffee-1869820_1280.jpg' alt='Hero image' />
        </div>
        <div className='content'>
           <p>Hi, i' am Aamir</p>
           <h1>React Developer</h1>
         <div>
            <Link to="/project" className='btn' >Projects</Link>
            <Link to="/contact" className='btn btn-light' >Contact us</Link>
        </div>  
        </div>
    </div>
  )
}
