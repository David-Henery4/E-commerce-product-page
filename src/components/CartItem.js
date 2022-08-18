import React from 'react'
import thumb from "../images/image-product-1-thumbnail.jpg";
import { Delete } from "../SVGs";


export const CartItem = () => {
  return (
    <div className="cart-content">
        {/* Rendered Conditionally */}
      <p className="cart-empty">Your cart is empty.</p>

      <div className="cart-item">
        <div className="cart-item-overall">
          <img className="cart-item__thumb" src={thumb} alt="item" />
          <div className="cart-item-info">
            <p className="cart-item__title">Autumn Limited Edition</p>
            <div className="cart-item-prices">
              <p className="cart-item__price">$125.00</p>
              <p className="cart-item__amount"> x 3</p>
              <p className="cart-item__total">$375.00</p>
            </div>
          </div>
          <Delete className="cart-item-delete" />
        </div>
      </div>
      <button className="cart__btn">Checkout</button>
    </div>
  );
}
