import React from 'react'
import { Next, Previous } from '../SVGs'
import { useDispatch,useSelector } from 'react-redux';
import { setNextImg, setPrevImg } from '../toolkit/features/overall/OverallSlice';


const Gallery = () => {
  const dispatch = useDispatch()
  const { currentImage, largeImages } = useSelector((store) => store.overall);

  return (
    <div className="mob-gallery">
      <div
        className="mob-gallery__right"
        onClick={() => dispatch(setNextImg())}
      >
        <Next />
      </div>
      <img
        className="mob-gallery__img"
        src={largeImages[currentImage]}
        alt="main-product"
      />
      <div className="mob-gallery__left" onClick={() => dispatch(setPrevImg())}>
        <Previous />
      </div>
    </div>
  );
}

export default Gallery