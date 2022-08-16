import React from 'react'
import { largeImages, thumbnails } from '../data/imgData'

const DeskGallery = () => {

    return (
      <div className="desk-gallery">
        <img
          src={largeImages[0]}
          className="desk-gallery__main-img"
          alt="main-shot-of-product"
        />
        <div className="desk-gallery-nails">
          {thumbnails.map((thumbs, i) => {
            return <img key={i} src={thumbs} alt={`thumbnail-${i}`} />;
          })}
        </div>
      </div>
    );
}

export default DeskGallery