import React from 'react'
import { ItemPricing, ItemQuantity } from '../components';

const Item = () => {
  return (
    <main className="item">
      <p className="item__sub-title">SNEAKER COMPANY</p>
      <h1 className="item__title">Fall Limited Edition Sneakers</h1>
      <article className="item__desc">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </article>
      <ItemPricing/>
      <ItemQuantity/>
    </main>
  );
}

export default Item