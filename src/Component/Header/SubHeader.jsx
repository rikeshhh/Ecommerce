import React from 'react'
import './Header.css'
export const SubHeader = () => {
  return (
   <nav className='sub'>
    <div className='sub__header'>
        <h2><i class="fa-solid fa-list"></i>CATEGORIES</h2>
        <ul>
            <li>HOME</li>
            <li>STORE</li>
            <li>BLOG</li>
            <li>CONTACT</li>
        </ul>
    </div>
    <div>
        <select name="" id="">
            <option value="Nepali">NEPALI</option>
            <option value="English">ENGLISH</option>
            <option value="French">FRENCH</option>
        </select>
    </div>
   </nav>
  )
}
