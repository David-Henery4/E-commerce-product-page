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
              <img
                className="modal-gallery__thumb"
                src={thumb}
                alt="thumbnail"
                key={i}
                onClick={() => dispatch(setActiveGalleryImg(i))}
              />
            );
          })}
        </div>
      </div>
    );
}

export default ModalGallery