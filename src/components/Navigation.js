import React from 'react'
import { Burger, Logo, CartIcon } from '../SVGs'
import img from "../images/image-avatar.png"
import navData from '../data/navData'
import Cart from './Cart'

const Navigation = () => {
  return (
    <nav className='nav'>
      
      <div className="nav-left">
        <Burger className='nav__burger'/>
        <Logo/>
        <ul className='nav-links'>
          {navData.map(link => {
            return <li key={link.id} className="nav__link">
              <a href="#">{link.name}</a>
            </li>
          })}
        </ul>
      </div>
      {/**/}
      <div className="nav-right">
        <CartIcon className='nav-right__cart'/>
        <Cart/>
        <div className="nav-user">
            <img src={img} alt="user-profile"/>
        </div>
      </div>
      
    </nav>
  )
}

export default Navigation