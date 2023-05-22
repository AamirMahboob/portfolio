import React from 'react'
import { NavLink } from 'react-router-dom'
import ProjectCardData from './WorkCardData'

import './WorkCardStyle.css'
export const WorkCard = (props) => {
  return (
    <div className='project-card'>
      <img src={props.image} alt='image' />
      <h2 className='project-title'>{props.title}</h2>
      <div className='pro-details'>
        <p >{props.text}</p>
        <div className='pro-btns' >
          <NavLink to={"url.com"} className='btn' >View</NavLink>
          <NavLink to={"url.com"} className='btn' >Source</NavLink>
        </div>
      </div>

    </div>


  )
}
