import React from 'react';
import Slider from 'react-slick';
import SliderCertificazioni from './SliderCertificazioni';


const VerificaCertificazioni = () => {
    const containerStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start',
      fontFamily: 'Muli, sans-serif', // Applica il font Muli a tutti gli elementi figlio
      marginTop: '80px',
      marginLeft: '50px'
    };
  
    const verticalTextStyle = {
      writingMode: 'vertical-rl',
      transform: 'rotate(180deg)',
      whiteSpace: 'nowrap',
      marginRight: '20px', // Spazio tra le due scritte
      fontSize: '20px', // Dimensione del testo verticale
      fontWeight: 'bold', // Grassetto per il testo verticale
      fontFamily: 'Muli, sans-serif', // Applica il font Muli al testo verticale
      color: '#36BCB7'
    };
  
    const horizontalTextStyle = {
      fontSize: '47px', // Dimensione del testo orizzontale
      fontFamily: 'Muli, sans-serif', // Applica il font Muli al testo orizzontale
      color: '#616163'
    };
  
    const certificationTextStyle = {
      fontSize: '36px', // Dimensione del testo per "CERTIFICAZIONI"
      fontFamily: 'Russian One, sans-serif', // Applica il font Russian One
      fontWeight: 'bold', // Imposta il peso del carattere su strong
      color: '#616163'
    };
  
  return (
      <div>
    <div style={containerStyle}>
      <div style={verticalTextStyle}>Verifica</div>
      <div>
        <p style={horizontalTextStyle}>Le <span style={certificationTextStyle}>CERTIFICAZIONI</span> di </p>
        <p style={horizontalTextStyle}>DMR Costruzioni Srl</p>
      </div>
      
    </div>
    <SliderCertificazioni /> {/* Aggiungi lo slider qui */}
    </div>
  );
};

export default VerificaCertificazioni;
