import React from 'react'


const ItemPricing = () => {
  return (
    <div className="item-pricing">
      <div className="item-price">
        <p className="item-price__price">$125.00</p>
        <p className="item-price__status">50%</p>
      </div>
      <p className="item-price__prev">$250.00</p>
    </div>
  );
}

export default ItemPricing