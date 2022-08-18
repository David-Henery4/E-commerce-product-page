import React from 'react'
import { Burger, Logo, CartIcon } from '../SVGs'
import img from "../images/image-avatar.png"
import navData from '../data/navData'
import Cart from './Cart'
import { useDispatch } from 'react-redux'
import { toggleNavbarOpen, toggleCartOpen, toggleOverlay } from '../toolkit/features/overall/OverallSlice'

const Navigation = () => {
  const dispatch = useDispatch()

  return (
    <nav className='nav'>
      
      <div className="nav-left">
        <Burger className='nav__burger' onClick={() => {
          dispatch(toggleNavbarOpen())
          dispatch(toggleOverlay())
        }}/>
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
        <CartIcon className='nav-right__cart' onClick={() => dispatch(toggleCartOpen())}/>
        <Cart/>
        <div className="nav-user">
            <img src={img} alt="user-profile"/>
        </div>
      </div>
      
    </nav>
  )
}

export default Navigation