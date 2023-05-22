import React from 'react'
import './AboutContentStyle.css';
import { Link } from 'react-router-dom';

export const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who am I</h1>
            <p>I am a react front end developer.I create responsive secure websites for my clients</p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div> 
        <div className='right'>
             <div className='img-container'>
                 <div className='img-stack top'>
                     <img src='https://f4n3x6c5.stackpathcdn.com/article/what-and-why-reactjs/Images/React%20Properties.jpg' 
                     className='img'
                     alt='true'
                     /> 
                 </div>
                 {/* <div className='img-stack bottom'>              
                     <img src='https://www.techmagic.co/blog/content/images/2023/05/cover-React.js.png'
                     className='img'
                     alt='true'
                      />        
                 </div> */}
             </div>
        </div>
    </div>
  )
}
