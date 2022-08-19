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
            return (
              <div
                key={i}
                className="desk-gallery-nail"
                style={{
                  outline: `${currentImage === i ? "4px solid orange" : "none"}`,
                }}
                onClick={() => {
                  dispatch(setActiveGalleryImg(i));
                }}
              >
                <div
                  className={
                    currentImage === i
                      ? "desk-gallery-nail-overlay active-thumb-overlay"
                      : "desk-gallery-nail-overlay"
                  }
                ></div>
                <img src={thumbs} alt={`thumbnail-${i}`} />
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default DeskGallery