import React, { useState } from 'react'
import { largeImages, thumbnails } from "../data/imgData";
import {Next, Previous, Close} from "../SVGs"

// Needs "modal-gallery-active"

const ModalGallery = () => {
    let [activeImg,setActiveImg] = useState(0)

    // Will make reusable by having in the store & slice
    const handleThumbChange = (i) => {
        setActiveImg(i)
    }
    //
    const handleNextChange = () => {
        setActiveImg(++activeImg);
        if (activeImg > thumbnails.length -1){
            setActiveImg(0)
        }
        console.log(activeImg)
    }
    //
    const handlePrevChange = () => {
        setActiveImg(--activeImg);
        if (activeImg < 0) {
            setActiveImg(thumbnails.length -1)
        }
    }
    //
    return (
      <div className="modal-gallery">
        <Close className="modal-gallery-close" />
        <div className="modal-gallery-prev">
          <Previous onClick={handlePrevChange} />
        </div>
        <div className="modal-gallery-next">
          <Next onClick={handleNextChange} />
        </div>
        <img
          className="modal-gallery__main-img"
          src={largeImages[activeImg]}
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
                onClick={() => handleThumbChange(i)}
              />
            );
          })}
        </div>
      </div>
    );
}

export default ModalGallery