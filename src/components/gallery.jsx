import React from 'react'
import { useState } from 'react';
import imagen1 from '../assets/messi.jpg';
import imagen2 from '../assets/cr7.jpg';
import imagen3 from '../assets/kaka.jpg';
import imagen4 from '../assets/neymar.jpg';

import Rate from './rate';
import Send from './send';
import Modal from './modal';

 function Gallery() {

  const [images, setImages] = useState([
      {id: 1, src: imagen1, rate: 0},
      {id: 2, src: imagen2, rate: 0},
      {id: 3, src: imagen3, rate: 0},
      {id: 4, src: imagen4, rate: 0},
    ]);

  const [modal, setModal] = useState(false);
  const [average, setAverage] = useState(false);

  const updateRate = (index, value) => {
    const newImages = [...images];
    newImages[index].rate = value;
    setImages(newImages.sort((a, b) => b.rate - a.rate));
  };

  const getAverage = () => {
    const aver = images.reduce((acum, img) => (acum += img.rate), 0) / images.length;
    console.log(`el promedio es ${aver.toFixed(2)}`);
    setModal(true)
    setAverage(aver)
  };

  const restart = () => {
    const newImages = [...images];
    newImages.map((img) => (img.rate = 0));
    setImages(newImages);
   
  };

  return (
  <>
    <div className='gallery'> 
      {images.map((img) => (
          <div key={img.id} className="scoreCard">
            <img src={img.src} alt="imagen" />
            <Rate ref={img.ref} knowRate={updateRate} index={images.indexOf(img)} />
          </div>
      ))}
      <Send
          onClick={getAverage}        
        >
          Calcula promedio
        </Send>
        <Modal
          isOpen={modal}
          onClose={() => setModal(false)} 
          restart ={restart}       
        >
          <h2>Calificación de la galería</h2>
          <p>El promedio de la calificacion es: {average}</p>
        </Modal>
    </div>
  </>
  );
}
export default Gallery
