import React from 'react'
import './FooterStyle.css'
import { FaFacebook,
        FaHome, 
        FaLinkedin, 
        FaMailBulk, 
        FaPhone, 
        FaTwitter } from "react-icons/fa"
export default function Footer() {
  return (
    <div className='footer' >
     <div className='footer-container'>
         <div className='left' >
            <div className='location'>
              <FaHome size={20} style ={{color:'white' , marginRight:"2rem" }} />
              <div>
                <p>Wapda Housing society,Mardan.</p>
                <p>Pakistan</p>
              </div>
            </div>
            <div className='phone'>
               <h4><FaPhone size={20} style ={{color:'white' , marginRight:"2rem" }}  />
               +923159142436 </h4>            
            </div>
            <div className='phone'>
               <h4><FaMailBulk size={20} style ={{color:'white' , marginRight:"2rem" }}  />
               amirmehboob16@gmail.com </h4>            
            </div>
            
         </div>
         <div className='right' >
            <h4>
                About the Company
            </h4>
            <p>
                This is me Aamir,a freelauncer I enjoy discussing new projects and design challanges
            </p>
            <div className='social'>
            <FaFacebook size={30} style ={{color:'white' , marginRight:"1rem" }}  />
            <FaTwitter size={30} style ={{color:'white' , marginRight:"1rem" }}  />
            <FaLinkedin size={30} style ={{color:'white' , marginRight:"1rem" }}  />
                 
            </div>
         </div>
     </div>

    </div>
  )
}
