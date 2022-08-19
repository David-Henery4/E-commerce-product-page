import React from 'react'
import { Burger, Logo, CartIcon } from '../SVGs'
import img from "../images/image-avatar.png"
import navData from '../data/navData'
import Cart from './Cart'
import { useDispatch, useSelector } from 'react-redux'
import { toggleNavbarOpen, toggleCartOpen, toggleOverlay } from '../toolkit/features/overall/OverallSlice'

const Navigation = () => {
  const dispatch = useDispatch()
  const { cartItems, sumOfItems } = useSelector((store) => store.overall);

  return (
    <nav className="nav">
      <div className="nav-left">
        <Burger
          className="nav__burger"
          onClick={() => {
            dispatch(toggleNavbarOpen());
            dispatch(toggleOverlay());
          }}
        />
        <Logo />
        <ul className="nav-links">
          {navData.map((link) => {
            return (
              <li key={link.id} className="nav__link">
                <a href="#">{link.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
      {/**/}
      <Cart />
      <div className="nav-right">
        {cartItems.length > 0 && (
          <div className="nav-right-num-items">
            <p className="nav-right__quantity">{sumOfItems}</p>
          </div>
        )}
        <CartIcon
          className="nav-right__cart"
          onClick={() => dispatch(toggleCartOpen())}
        />
        <div className="nav-user">
          <img src={img} alt="user-profile" />
        </div>
      </div>
    </nav>
  );
}

export default Navigation