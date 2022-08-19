import React, { useState } from 'react'
import { largeImages, thumbnails } from "../data/imgData";
import {Next, Previous, Close} from "../SVGs"
import { useDispatch, useSelector } from 'react-redux';
import { setActiveGalleryImg, setNextImg, setPrevImg, toggleModalGallery, toggleOverlay } from '../toolkit/features/overall/OverallSlice';

// Needs "modal-gallery-active"

const ModalGallery = () => {
  const dispatch = useDispatch()
  const { currentImage, isModalGalleryOpen } = useSelector(
    (store) => store.overall
  );
  //
    return (
      // needs "modal-gallery-active"
      <div
        className={
          isModalGalleryOpen
            ? "modal-gallery modal-gallery-active"
            : "modal-gallery"
        }
      >
        <Close className="modal-gallery-close" onClick={() => {
          dispatch(toggleOverlay())
          dispatch(toggleModalGallery())
        }} />
        <div className="modal-gallery-prev">
          <Previous
            onClick={() => {
              dispatch(setPrevImg());
            }}
          />
        </div>
        <div className="modal-gallery-next">
          <Next
            onClick={() => {
              dispatch(setNextImg());
            }}
          />
        </div>
        <img
          className="modal-gallery__main-img"
          src={largeImages[currentImage]}
          alt="main-product"
        />
        <div className="modal-gallery-nails">
          {thumbnails.map((thumb, i) => {
            return (
              <div
                className="modal-gallery-nail"
                key={i}
                style={{
                  outline: `${
                    currentImage === i ? "4px solid orange" : "none"
                  }`,
                }}
                onClick={() => dispatch(setActiveGalleryImg(i))}
              >
                <div
                  className={
                    currentImage === i
                      ? "modal-gallery-nail-overlay active-thumb-overlay"
                      : "modal-gallery-nail-overlay"
                  }
                ></div>
                <img
                  className="modal-gallery__thumb"
                  src={thumb}
                  alt="thumbnail"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default ModalGallery