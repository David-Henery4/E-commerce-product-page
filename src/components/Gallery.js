import React from 'react'
import { Next, Previous } from '../SVGs'
import ImgProductOne from "../images/image-product-1.jpg";
import { useDispatch,useSelector } from 'react-redux';
import { setNextImg, setPrevImg } from '../toolkit/features/overall/OverallSlice';


const Gallery = () => {
  const dispatch = useDispatch()
  const { currentImage, largeImages } = useSelector((store) => store.overall);

  return (
    <div className="mob-gallery">
      <div className="mob-gallery__right">
        <Next onClick={() => dispatch(setNextImg())} />
      </div>
      <img
        className="mob-gallery__img"
        src={largeImages[currentImage]}
        alt="main-product"
      />
      <div className="mob-gallery__left">
        <Previous onClick={() => dispatch(setPrevImg())} />
      </div>
    </div>
  );
}

export default Gallery