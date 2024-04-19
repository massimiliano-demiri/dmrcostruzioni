import React from 'react';
import carImage from './immagini/mok.jpeg'; // Importa l'immagine

const PhotoOverlay = () => {
  const widgetTextStyle = {
    fontFamily: 'Russo One',
    fontSize: '30px',
    fontWeight: 'normal',
    lineHeight: '1.5',
    color: '#616163',
   
  };

  const muliTextStyleSpan = {
    fontFamily: 'Muli',
    fontSize: '30px',
    fontWeight: 'normal',
    lineHeight: '1.5',
    color: '#616163',
   
  };

  const muliTextStyle = {
    fontFamily: 'Muli',
    fontSize: '20px',
    fontWeight: 'normal',
    lineHeight: '1.5',
    color: '#616163',
  
  };

  const buttonStyle = {
    backgroundColor: '#96C940',
    color: '#ffffff',
    fontFamily: 'Muli',
    fontSize: '14px', // Riduci la dimensione del testo del bottone
    fontWeight: 'bold',
    padding: '8px 16px', // Riduci il padding del bottone
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    height: '60px', // Aumenta l'altezza del bottonepaddingLeft: '115px'
    width: '30%'
 
  };

  const arrowIconStyle = {
    width: '20px',
    height: '20px',
    marginLeft: '5px',
  };

  return (
    <div className="relative" style={{ height: '634.2px' }}>
      <div className="flex justify-end h-full">
        <img src={carImage} alt="Immagine" className="w-3/4 h-full" style={{ maxHeight: '634.2px', objectFit: 'cover' }} />
        <div className="absolute top-1/2 left-0 pl-10 transform -translate-y-1/2 flex flex-col gap-4 bg-white p-4 rounded-md" style={{ maxWidth: '900px', width: '50%', height: '424px', paddingLeft: '150px', zIndex: '200' }}>
          {/* Aggiorna la posizione del wrapper e aggiungi spaziatura */}
          <div style={{ marginLeft: '10px' }}>
            <strong style={widgetTextStyle}>DA OLTRE 20 ANNI</strong>
            <br />
            <span style={muliTextStyleSpan}>costruiamo la tua qualità</span>
          </div>
          <p style={{ ...muliTextStyle, marginLeft: '10px' }}>L’esperienza della nostra squadra si combina con l’innovazione tecnologica più avanzata, per soddisfare le tue aspettative con responsabilità, etica e massima serietà.</p>
          <button style={{ ...buttonStyle, marginLeft: '10px', textAlign: 'center' }}>
            SCOPRI {/*<img src={arrowRightIcon} alt="Freccia destra" style={arrowIconStyle} />*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H5"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoOverlay;
