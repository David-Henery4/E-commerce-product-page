import React from 'react'
import { ItemPricing, ItemQuantity } from '../components';
import { useSelector } from 'react-redux';


const Item = () => {
  const {item} = useSelector(store => store.overall)
  const {name,company,desc,price,discount,discountedPrice} = item
  //
  return (
    <main className="item">
      <p className="item__sub-title">{company.toUpperCase()}</p>
      <h1 className="item__title">{name}</h1>
      <article className="item__desc">
        {desc}
      </article>
      <ItemPricing price={price} discount={discount} discountedPrice={discountedPrice}/>
      <ItemQuantity/>
    </main>
  );
}

export default Item