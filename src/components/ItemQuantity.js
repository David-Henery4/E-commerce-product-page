import React, { useState } from 'react'
import { Minus, Plus, CartIcon } from "../SVGs";
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, updateCartItems } from '../toolkit/features/overall/OverallSlice';



const ItemQuantity = () => {
  const dispatch = useDispatch()
  const {item,cartItems} = useSelector(store => store.overall)
  const {price,id,name,thumbs} = item
  let [amount, setAmount] = useState(0)
  //
  const handleItemToCart = () => {
    const checkDupItem = cartItems.some(itemInCart => itemInCart.id === id
    )
    if (checkDupItem){
      dispatch(updateCartItems({id,amount}))
    }
    if (amount <= 0){
      return
    }
    if (!checkDupItem){
      const itemDetails = {
        id,
        thumb : thumbs[0],
        name: name,
        price: price / 2 ,
        amountOfItems: amount,
        totalPrice: (price / 2) * amount,
      }
      dispatch(addItemToCart(itemDetails))
    }
  }
  //
  const handleQuantityInc = () => {
    setAmount(++amount)
  }
  //
  const handleQuantityDec = () => {
    setAmount(--amount)
    if (amount <= 0) {setAmount(0)}
  }
  //
  return (
    <div className="item-quantity">
      <div className="item-quantity-change">
        <Minus onClick={handleQuantityDec} />
        <p>{amount}</p>
        <Plus onClick={handleQuantityInc} />
      </div>
      <button className="item-quantity--add-btn" onClick={handleItemToCart}>
        <div className="item-quantity--add-btn-overlay"></div>
        <CartIcon />
        Add to cart
      </button>
    </div>
  );
}

export default ItemQuantity