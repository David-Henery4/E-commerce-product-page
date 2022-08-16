import React from 'react'
import { Minus, Plus, CartIcon, CartIconTest } from "../SVGs";

const ItemQuantity = () => {
  return (
    <div className="item-quantity">
      <div className="item-quantity-change">
        <Minus />
        <p>0</p>
        <Plus />
      </div>
      <button className="item-quantity--add-btn">
        <CartIcon />
        Add to cart
      </button>
    </div>
  );
}

export default ItemQuantity