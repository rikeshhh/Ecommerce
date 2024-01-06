import React from 'react'
import { Slider } from './Slider'
import {slidesData} from "./heroslider"

export const SectionTwo = () => {
  return (
   <section className='sectionTwo'>
    <Slider  slides ={slidesData}/>
   </section>
  )
}
