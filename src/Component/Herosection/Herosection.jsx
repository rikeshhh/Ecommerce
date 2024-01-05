import React from 'react'
import { SectionOne } from './SectionOne'
import { SectionTwo } from './SectionTwo'
import './Herosection.css'
export const Herosection = () => {
  return (
    <section className='main-container'>
    <div className='hero-section'>
    <SectionOne/>
        <SectionTwo/>
    </div>

    </section>
  )
}
