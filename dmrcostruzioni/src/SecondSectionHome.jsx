import React, { useState, useEffect } from "react";
import Counter from "./Counter";

const TwoSectionLayout = () => {
  // Stato e funzione per gestire il contatore nella seconda sezione
  const [secondSectionCounter, setSecondSectionCounter] = useState(0);

  // Funzione per incrementare il contatore della seconda sezione fino a 243
  useEffect(() => {
    const interval = setInterval(() => {
      if (secondSectionCounter < 243) {
        setSecondSectionCounter(prevCounter => prevCounter + 1);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [secondSectionCounter]);

  // Array di dati per le colonne della seconda sezione
  const columnsData = [
    { label: "Aree Demolite", targetNumber: 665, backgroundColor: "#F4F4F4" },
    { label: "Nuove Costruzioni:", targetNumber: 112, backgroundColor: "#F4F4F4" },
    { label: "Ristrutturazioni:", targetNumber: 64, backgroundColor: "#F4F4F4" },
    { label: "Collaboratori", targetNumber: 44, backgroundColor: "#F4F4F4" },
    { label: "Clienti Soddisfatti", targetNumber: 229, backgroundColor: "#F4F4F4" }
  ];

  return (
    <div style={{ display: "flex", gap:'10px', flexDirection: "column", backgroundColor: '#F4F4F4', margin: '0 150px 0 150px' }}>
      {/* Prima sezione */}
      <div style={{ flex: 1, backgroundColor: '#F4F4F4', display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '15px 0', marginLeft: '-10px', marginBottom: '-210px', height:'calc(50% - 20px)' }}>
        {/* Colonna "Chi siamo?" */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: '20px' }}>
          <h6 style={{ fontFamily: 'Muli', lineHeight: '1em', letterSpacing: '.02em', color: '#36BCB7', fontSize: '20px', textTransform: 'none', margin: '0', transform: 'rotate(-90deg)', whiteSpace: 'nowrap', marginBottom: '100px' }}>Chi siamo?</h6>
        </div>
        {/* Colonna "Scopri la nostra" */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', marginLeft: '-30px' }}>
          <h2 style={{ color: '#616163', fontFamily: 'Muli', fontSize: '45px', marginBottom: '1px', textAlign: 'left' }}>Scopri la nostra</h2>
          <h2 style={{ color: '#616163', fontFamily: 'Russo One', fontSize: '45px', marginBottom: '1px', textAlign: 'left' }}>IMPRESA DI</h2>
          <h2 style={{ color: '#616163', fontFamily: 'Russo One', fontSize: '45px', marginBottom: '1px', textAlign: 'left' }}>COSTRUZIONI</h2>
          <div style={{display: 'flex'}}>
          <h2 style={{ color: '#96C940', fontFamily: 'Muli', fontSize: '15px', textAlign: 'left' }}>SCOPRI</h2>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#96C940"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: '0.5rem' }}
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H5"></path>
            </svg>
          </div>
         
        </div>
        {/* Colonna centrale con counter */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: "#F4F4F4", padding: '20px 0' }}>
          <h6 style={{ fontFamily: 'Muli', lineHeight: '1em', letterSpacing: '.02em', color: '#36BCB7', fontSize: '20px', textTransform: 'none', margin: '0', whiteSpace: 'nowrap', marginBottom: '10px' }}>Cantieri terminati: </h6>
          <Counter targetNumber={1332} />
        </div>
        {/* Terza colonna */}
        <div style={{ flex: 1, backgroundColor: "F4F4F4", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '20px', textAlign: 'left' }}>
          <p style={{ fontFamily: 'Muli', fontSize: '20px', color: '#616163' }}>Fin dal 2005, a guidarci è la voglia di “fare bene” e di diventare un referente affidabile per i tuoi progetti più impegnativi.</p>
        </div>
      </div>

      {/* Seconda sezione */}
      <div style={{ display: "flex", flexDirection: "row", height: "50%", backgroundColor: '#F4F4F4', marginTop: '180px' }}>
        {/* Mapping delle colonne */}
        {columnsData.map((column, index) => (
          <div key={index} style={{ flex: 1, backgroundColor: '#F4F4F4', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px 0' }}>
            <h6 style={{ fontFamily: 'Muli', lineHeight: '1em', letterSpacing: '.02em', color: '#36BCB7', fontSize: '20px', textTransform: 'none', margin: '0', whiteSpace: 'nowrap', marginBottom: '10px' }}>{column.label}</h6>
            <Counter targetNumber={column.targetNumber} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwoSectionLayout;
