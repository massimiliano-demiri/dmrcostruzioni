import React from 'react';
import './styles.css';

import s1 from './immagini/s1.jpg';
import s2 from './immagini/s2.jpg';
import s3 from './immagini/s3.jpg';
import s4 from './immagini/s4.jpg';
import s5 from './immagini/s3.jpg';
import s6 from './immagini/s7.jpg';

const titles = [
  'Cantiere Borgo Rivo',
  'Cantiere Strada Santa filomena',
  'Cantiere Sangemini',
  'Cantiere Comune',
  'Cantiere Acquasparta',
  'Cantiere Narni',
];

const paragraphs = [
  'Rifacimento tetto',
  'Cappotto termico',
  'Contenuto del paragrafo 3',
  'Contenuto del paragrafo 4',
  'Contenuto del paragrafo 5',
  'Contenuto del paragrafo 6',
];
const titleStyle = {
  color: '#36BCB7', // Colore del titolo
  fontSize: '16px', // Dimensione del carattere del titolo
  fontWeight: 'bold', // Grassetto del titolo
  // Altri stili personalizzati per il titolo...
  fontFamily: 'Muli',
  textTransform: 'uppercase'
};

const paragraphStyle = {
  color: '#616163', // Colore del paragrafo
  fontSize: '14px', // Dimensione del carattere del paragrafo
  fontFamily: 'Muli'
  
};

// Array di URL per le sei immagini diverse
const srcImages = [s1, s1, s1, s1, s1, s1];

const ImageGrid = () => {
  return (
    <div className="image-grid">
      <div className="row">
        {titles.slice(0, 3).map((title, index) => (
          <ImageWithOverlay
            key={index}
            src={srcImages[index]} // Utilizza l'URL dell'immagine corrispondente
            alt={`Immagine ${index + 1}`}
            title={title}
            paragraph={paragraphs[index]}
          />
        ))}
      </div>
      <div className="row">
        {titles.slice(3).map((title, index) => (
          <ImageWithOverlay
            key={index + 3} // Aggiusta la chiave per l'identificazione univoca
            src={srcImages[index + 3]} // Utilizza l'URL dell'immagine corrispondente
            alt={`Immagine ${index + 4}`} // Aggiusta il testo alternativo
            title={title}
            paragraph={paragraphs[index + 3]} // Aggiusta l'indice per i paragrafi
          />
        ))}
      </div>
    </div>
  );
};

const ImageWithOverlay = ({ src, alt, title, paragraph }) => {
  return (
    <div className="image-container">
      <div className="line"></div> 
      <img src={src} alt={alt} className="image" />
      <div className="overlay">
        <h3 style={titleStyle}>{title}</h3>
        <p style={paragraphStyle}>{paragraph}</p>
      </div>
    </div>
  );
};

export default ImageGrid;
