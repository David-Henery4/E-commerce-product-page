import React from 'react'
import { largeImages, thumbnails } from '../data/imgData'
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleModalGallery,
  toggleOverlay,
  setActiveGalleryImg,
} from "../toolkit/features/overall/OverallSlice";

const DeskGallery = () => {
  const dispatch = useDispatch()
  const { currentImage } = useSelector((store) => store.overall);

    return (
      <div className="desk-gallery">
        <img
          onClick={() => {
            dispatch(toggleModalGallery())
            dispatch(toggleOverlay())
          }}
          src={largeImages[currentImage]}
          className="desk-gallery__main-img"
          alt="main-shot-of-product"
        />
        <div className="desk-gallery-nails">
          {thumbnails.map((thumbs, i) => {
            return <img key={i} src={thumbs} alt={`thumbnail-${i}`} onClick={() => {
              dispatch(setActiveGalleryImg(i));
            }} />;
          })}
        </div>
      </div>
    );
}

export default DeskGallery