import React from 'react';
import Slider from 'react-slick';
import immagineAias from './immagini/aias.jpg';
import immagineBlu from './immagini/ias_blu.png';
import immagineRosso from './immagini/ias_rosso.png';
import immagineVerde from './immagini/ias_verde.png';
import immagineDefault from './immagini/images.png';
import './styles.css';

const ImmaginiSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const sliderContainerStyle = {
    paddingLeft: '50px',
    paddingRight: '50px',
  };

  const imageContainerStyle = {
    width: '200px', // Imposta la larghezza fissa delle immagini
    height: '200px', // Imposta l'altezza fissa delle immagini
    backgroundColor: '#ffffff', // Imposta il colore di sfondo bianco
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
  };

  return (
    <div style={sliderContainerStyle}>
      <Slider {...sliderSettings}>
        <div style={imageContainerStyle}>
          <img src={immagineAias} style={imageStyle} alt="Immagine 1" />
        </div>
        <div style={imageContainerStyle}>
          <img src={immagineBlu} style={imageStyle} alt="Immagine 2" />
        </div>
        <div style={imageContainerStyle}>
          <img src={immagineRosso} style={imageStyle} alt="Immagine 3" />
        </div>
        <div style={imageContainerStyle}>
          <img src={immagineVerde} style={imageStyle} alt="Immagine 4" />
        </div>
        <div style={imageContainerStyle}>
          <img src={immagineDefault} style={imageStyle} alt="Immagine 5" />
        </div>
      </Slider>
    </div>
  );
};

export default ImmaginiSlider;

