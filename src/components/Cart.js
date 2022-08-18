import React from "react";
import { CartItem } from "./CartItem";

const Cart = () => {
  return (
    // Needs "cart-active" class
    <div className="cart">
      {/* CART HEADER */}
      <div className="cart-header">
        <p className="cart-header__title">Cart</p>
      </div>

      {/* CART ITEMS */}
      <CartItem />
    </div>
  );
};

export default Cart;
