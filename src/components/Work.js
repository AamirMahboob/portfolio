import React from 'react'
import { NavLink } from 'react-router-dom'
import './WorkCardStyle.css'
import ProjectCardData from './WorkCardData'
import { WorkCard } from './WorkCard'

export const Work= () => {
  return (
        <div className='work-container'>
           <h1 className='project-heading'>Projects</h1>
           <div className='project-container'>
                {ProjectCardData.map((value,index)=>{
                  return(
                    <WorkCard 
                       key = {index}
                       image = {value.image}
                       title = {value.title}
                       text = {value.text}
                    />
                  )
                })}
           </div>
        </div>
                
    
  )
}