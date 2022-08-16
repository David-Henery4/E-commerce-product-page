import React from 'react'
import { Next, Previous } from '../SVGs'
import ImgProductOne from "../images/image-product-1.jpg";

const Gallery = () => {
  return (
    <div className="mob-gallery">
      <div className="mob-gallery__right">
        <Next />
      </div>
      <img
        className="mob-gallery__img"
        src={ImgProductOne}
        alt="main-product"
      />
      <div className="mob-gallery__left">
        <Previous />
      </div>
    </div>
  );
}

export default Gallery