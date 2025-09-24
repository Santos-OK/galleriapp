import React from 'react'
import { useState } from 'react';
import imagen1 from '../assets/messi.jpg';
import imagen2 from '../assets/cr7.jpg';
import imagen3 from '../assets/kaka.jpg';
import imagen4 from '../assets/neymar.jpg';

import Rate from './rate';

 function Gallery() {

  const [images, setImages] = useState([
      {id: 1, src: imagen1, rate: 0},
      {id: 2, src: imagen2, rate: 0},
      {id: 3, src: imagen3, rate: 0},
      {id: 4, src: imagen4, rate: 0},
    ]);

  const updateRate = (index, value) => {
    const newImages = [...images];
    newImages[index].rate = value;
    setImages(newImages.sort((a, b) => b.rate - a.rate));
  };

  return (
  <>
    <div className='gallery'> 
      {images.map((img) => (
          <div key={img.id} className="scoreCard">
            <img src={img.src} alt="imagen" />
            <Rate knowRate={updateRate} index={images.indexOf(img)} />
          </div>
      ))}
    </div>
  </>
  );
}
export default Gallery
