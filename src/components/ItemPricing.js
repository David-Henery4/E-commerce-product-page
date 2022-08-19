import React from 'react'


const ItemPricing = ({price, discount, discountedPrice}) => {
  return (
    <div className="item-pricing">
      <div className="item-price">
        <p className="item-price__price">${discountedPrice.toFixed(2)}</p>
        <p className="item-price__status">{discount}</p>
      </div>
      <p className="item-price__prev">${price.toFixed(2)}</p>
    </div>
  );
}

export default ItemPricing