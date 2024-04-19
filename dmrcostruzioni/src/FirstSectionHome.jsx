import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import car1 from './immagini/car1.jpg';
import car2 from './immagini/car2.jpg';
import logo from './immagini/pcar4.png'; // Immagine da aggiungere sopra al carosello
import './styles.css'

// SVG della freccia verso il basso
const ArrowDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="33.421" height="33.421" viewBox="0 0 33.421 33.421">
    <g id="arrow-down-left" transform="translate(-8.484 16.712) rotate(-45)">
      <g id="Raggruppa_7" data-name="Raggruppa 7" transform="translate(6 5.998)">
        <path id="Tracciato_6" data-name="Tracciato 6" d="M6,28.646a.985.985,0,0,0,.985.985H18.8a.985.985,0,1,0,0-1.969H9.362L29.344,7.681a.986.986,0,1,0-1.394-1.394L7.969,26.269V16.83A.985.985,0,0,0,6,16.83Z" transform="translate(-6 -5.998)" fill="#fff" fillRule="evenodd"/>
      </g>
    </g>
  </svg>
);

const Carousel = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const transitionTime = 5000; // Tempo di transizione tra una foto e l'altra in millisecondi
  
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Carica il progress bar all'inizio della pagina
    setLoadingProgress(0);
    animateProgress();
  }, []);

  const handleBeforeChange = (oldIndex, newIndex) => {
    // Aggiorna lo stato del progresso al 0 prima del cambio di immagine
    setLoadingProgress(0);
  };

  const handleAfterChange = () => {
    setLoadingProgress(0); // Resettiamo il progresso del caricamento
    animateProgress();
  };

  const animateProgress = () => {
    let startTime = Date.now();
    const endTime = startTime + transitionTime;

    const animate = () => {
      const now = Date.now();
      const progress = ((now - startTime) / transitionTime) * 100;

      setLoadingProgress(progress);

      if (now < endTime) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true, // Imposta l'autoplay su true
    autoplaySpeed: transitionTime, // Tempo di attesa tra una transizione e l'altra
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: handleBeforeChange, // Funzione da eseguire prima che l'immagine cambi
    afterChange: handleAfterChange, // Funzione da eseguire dopo che l'immagine è cambiata
    prevArrow: null, // Rimuove il pulsante "Previous"
    nextArrow: null, // Rimuove il pulsante "Next"
    arrows: 'false'
  };

  const imageStyles = {
    height: `${windowHeight}px`, // Imposta l'altezza dell'immagine in base all'altezza dello schermo
    width: '100%', // Imposta la larghezza dell'immagine al 100%
    objectFit: 'cover', // Assicura che l'immagine si adatti correttamente al contenitore
    filter: 'sepia(90%) hue-rotate(180deg)', // Applica il filtro di colore
    maxWidth: '100vw'
  };

  const logoStyles = {
    position: 'absolute',
    top: '46%',
    left: '50%',
    width: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999 // Assicura che l'immagine sia sopra al carosello
  };

// Calcola la larghezza della barra di avanzamento in base alla larghezza del componente genitore
const progressBarStyles = {
  width: `${(Math.min(Math.max(loadingProgress, 0), 100) / 100) * window.innerWidth}px`, // Larghezza basata sulla larghezza della finestra
  background: '#90c63d',
  height: '5px',
  maxHeight: '5px', // Imposta un'altezza massima
  right: 0, // Set the right property to 0 to limit the width of the progress bar
};

  
  
  const arrowContainerStyles = {
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'Muli, sans-serif',
    fontSize: '20px',
    fontWeight: 400,
    position: 'absolute',
    top: 'calc(70% + 10px)', // Altezza del testo "Scorri" + 10px per lo spazio
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };

  const arrowStyles = {
    animation: 'bounce 1s infinite alternate',
    cursor: 'pointer', 
    display: 'flex', 
    justifyContent: 'center'
  };

  return (
    <div style={{ position: 'relative' }}>
      <img src={logo} alt="Logo" style={logoStyles} /> {/* Aggiunta dell'immagine sopra al carosello */}
      <Slider {...settings}>
  {/* Contenuto dello slider */}

        <div>
          <img src={car1} alt="Immagine 1" style={{ ...imageStyles, filter: 'brightness(70%)' }} />
        </div>
        <div>
          <img src={car2} alt="Immagine 2" style={{ ...imageStyles, filter: 'brightness(70%)' }} />
        </div>
      </Slider>
      <div style={arrowContainerStyles}>
        Scorri
        <div style={arrowStyles}><ArrowDown /></div> {/* Inserimento dell'SVG della freccia con stile */}
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, overflow: 'hidden', maxWidth: '100vw' }}>
  <div style={progressBarStyles}></div>
</div>
    </div>
  );
};

export default Carousel;