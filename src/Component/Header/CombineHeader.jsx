import React from 'react'
import Header from './Header'
import { SubHeader } from './SubHeader'

const CombineHeader = () => {
  return (
    <header className='main-container'>
        <Header/>
        <SubHeader/>
    </header>
  )
}

export default CombineHeader