import React, { useEffect, useState } from 'react'
import thumb from "../images/image-product-1-thumbnail.jpg";
import { Delete } from "../SVGs";
import { useSelector, useDispatch } from 'react-redux';
import { updateCartItems, deleteItemFromCart } from '../toolkit/features/overall/OverallSlice';


export const CartItem = () => {
  const [isCartEmpty, setIsCartEmpty] = useState(true)
  const {cartItems} = useSelector(store => store.overall)
  const dispatch = useDispatch()
  // id,name,price,amountOfItems,totalPrice
  //
  const handleDeleteItem = (id) => {
    const newCartItems = cartItems.filter(item => item.id !== id)
    dispatch(deleteItemFromCart(newCartItems))
  }
  //
  useEffect(() => {
    if (cartItems.length <= 0) setIsCartEmpty(true)
    if(cartItems.length > 0) setIsCartEmpty(false)
  }, [cartItems.length])
  //
  return (
    // cart-center-empty
    <div
      className={
        isCartEmpty ? "cart-content cart-center-empty" : "cart-content"
      }
    >
      {isCartEmpty ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => {
          const { id, name, price, amountOfItems, totalPrice, thumb } = item;
          return (
            <div key={id} className="cart-item">
              <div className="cart-item-overall">
                <img className="cart-item__thumb" src={thumb} alt="item" />
                <div className="cart-item-info">
                  <p className="cart-item__title">{name}</p>
                  <div className="cart-item-prices">
                    <p className="cart-item__price">${price.toFixed()}</p>
                    <p className="cart-item__amount"> x {amountOfItems}</p>
                    <p className="cart-item__total">${totalPrice.toFixed()}</p>
                  </div>
                </div>
                <Delete
                  className="cart-item-delete"
                  onClick={() => {
                    handleDeleteItem(id);
                  }}
                />
              </div>
            </div>
          );
        })
      )}
      {isCartEmpty || <button className="cart__btn">Checkout</button>}
    </div>
  );
}
