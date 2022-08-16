import React from 'react'
import { Burger, Logo, CartIcon } from '../SVGs'
import img from "../images/image-avatar.png"

const Navigation = () => {
  return (
    <nav className='nav'>
      
      <div className="nav-left">
        <Burger className='nav__burger'/>
        <Logo/>
      </div>
      {/**/}
      <div className="nav-right">
        <CartIcon/>
        <div className="nav-user">
            <img src={img} alt="user-profile"/>
        </div>
      </div>
      
    </nav>
  )
}

export default Navigation