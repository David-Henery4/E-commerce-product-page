import React from "react";
import { CartItem } from "./CartItem";
import { useSelector} from "react-redux";

const Cart = () => {
  const {isCartOpen} = useSelector(store => store.overall)


  //
  return (
    // Needs "cart-active" class
    <div className={isCartOpen? "cart-active cart" : "cart"}>
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
