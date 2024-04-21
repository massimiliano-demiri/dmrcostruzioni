import React from 'react';

const ExploreComponent = () => {
  const containerStyle = {
    height: '300px',
    marginTop: '30px',
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Muli',
  };

  const verticalTextStyle = {
    fontSize: '20px',
    color: '#78cfcc',
    // marginRight: '20px', // Spazio tra "Esplora" e il testo orizzontale
    writingMode: 'vertical-lr',
    textOrientation: 'mixed',
    height: '100%',
    alignText: 'center'
  
  };

  const horizontalTextStyle = {
    fontSize: '47px',
    color: '#616163',
    marginRight: '10px',
  };

  const interventionTextStyle = {
    fontFamily: 'Russo One',
    fontSize: '47px',
    color: '#616163',
  };
  const boxVerticale = {
    display: 'flex', 
    flexDirection: 'column',
    color: '#616163',
    height:'20%'
  };
  const boxEsplora = {
    display: 'flex', 
    justifyContent: 'center',
    alignItemas: 'center',
    height: '20%',
    with: '100%',
    alignText: 'center'
  };
  return (
    <div style={containerStyle}>
      <div style={boxEsplora}>
      <span style={verticalTextStyle}>Esplora</span>
      </div>
      
      <div style={boxVerticale}>
      <span style={horizontalTextStyle}>Le nostre aree di</span>
      <span style={interventionTextStyle}>INTERVENTO</span>
      </div>
      
    </div>
  );
};

export default ExploreComponent;


