import React from 'react';
import gruImage from './immagini/gru.jpg'; // Importa l'immagine

const ParagrafoHome = () => {
  const widgetTextStyle = {
    fontFamily: 'Russo One',
    fontSize: '30px',
    fontWeight: 'normal',
    lineHeight: '1.5',
    color: '#616163',
    // marginBottm: '2px'
   
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
        <div className="absolute top-1/2 right-0 pr-10 transform -translate-y-1/2 flex flex-col gap-4 bg-white p-4 rounded-md" style={{ maxWidth: '900px', width: '50%', height: '424px', paddingRight: '150px', zIndex: '200' }}>
          {/* Aggiorna la posizione del wrapper e aggiungi spaziatura */}
          <div style={{ marginLeft: '10px', position: 'relative', display: 'flex' }}>
            <div style={{ writingMode: 'vertical-lr', position: 'absolute', top: '70%', left:'-10px', transform: 'translateY(-50%)', height:'100%' }}>
              <span style={{ ...widgetTextStyle, fontSize: '13px', textAlign: 'center', color:'#36bcb7' }}>L'impatto'</span>
            </div>
            <div style={{ marginLeft: '20px' }}>
              <strong style={widgetTextStyle}>EFFICIENZA E </strong>
              <br />
              <strong style={widgetTextStyle}>SICUREZZA</strong>
            </div>
          </div>
          <p style={{ ...muliTextStyle, marginLeft: '10px' }}>La nostra impresa edile crea comfort e sicurezza nel territorio, collaborando con committenti pubblici e privati per una gestione efficiente e ottimizzata. Le nostre competenze sono al servizio della comunità per garantire un ambiente abitativo migliore.</p>
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
        <img src={gruImage} alt="Immagine" className="absolute left-0 w-3/4 h-full" style={{ maxHeight: '634.2px', objectFit: 'cover' }} />
      </div>
    </div>
  );
};

export default ParagrafoHome;
