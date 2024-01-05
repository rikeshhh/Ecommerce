import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <nav>
<h1>BYTEZ</h1>
<div className='nav__content'>
<form action="">
<input type="text" placeholder='Search'/>
<button><i className="fa-solid fa-magnifying-glass"></i></button>
</form>
<button><i className="fa-solid fa-rotate"></i></button>
<button><i className="fa-solid fa-heart"></i></button>
<button><i className="fa-solid fa-cart-shopping"></i></button>
<button><i className="fa-solid fa-user"></i></button>
</div>
    </nav>
  )
}

export default Header