import React from 'react';

const useStyles = () => {
  const titleFontFamily = 'Montserrat'; // Font-family per il titolo
  const titleFontSize = '30px'; // Dimensione del font-size del titolo
  const paragraphFontSize = '16px'; // Dimensione del font-size del paragrafo
  const padding = '60px'; // Increased padding
  const marginBottom = '20px';
  const borderColor = '#84b73d';

  return {
    customDivWrapper: {
      width: '100%', // Larghezza al 100% della pagina
      height: '316px', // Altezza desiderata
      margin: '0 auto', // Per centrare il contenuto
      backgroundColor: '#90c63d', // Colore di sfondo per estendere su tutta la pagina
      display: 'flex', // Imposta il display a flex per allineare verticalmente il contenuto
      justifyContent: 'center', // Centra il contenuto orizzontalmente
      alignItems: 'center', // Centra il contenuto verticalmente
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Aggiunge un'ombra leggera
    },
    customDiv: {
      color: 'white',
      padding: padding,
      textAlign: 'center',
      fontFamily: 'Roboto', // Font-family per tutto tranne il titolo
      borderRadius: '5px',
      maxWidth: '986px', // Larghezza desiderata per il wrapper del testo
      width: '100%', // Larghezza al 100% del wrapper del testo
    },
    title: {
      fontSize: titleFontSize,
      marginBottom: '10px',
      fontFamily: titleFontFamily, // Applica il font-family specifico al titolo
      textShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Aggiunge un'ombra leggera al titolo
    },
    paragraph: {
      fontSize: paragraphFontSize,
      margin: 0,
      fontWeight: 'normal', // Imposta il font-weight a normale
    },
    boldKeyword: {
      fontWeight: 'bold', // Imposta il font-weight a bold per le parole chiave
    },
  };
};

const CustomDiv = () => {
  const styles = useStyles();

  return (
    <div style={styles.customDivWrapper}>
      <div style={styles.customDiv}>
        <h4 style={styles.title}>Esperienza e Professionalità da oltre 30 anni</h4>
        <p style={styles.paragraph}>
          DMR Costruzioni offre servizi di costruzioni, manutenzione e <span style={styles.boldKeyword}>ristrutturazione</span> edile. Grazie all'<span style={styles.boldKeyword}>esperienza</span>, maturata nelle 3 generazioni di attività della famiglia Demiri, e alla <span style={styles.boldKeyword}>passione</span> e la <span style={styles.boldKeyword}>serietà</span>, che contraddistinguono il modo di lavorare dell'azienda, DMR Costruzioni si è presto contraddistinta come punto di riferimento per ogni intervento nell'edilizia a Terni e hinterland.
        </p>
        <p style={styles.paragraph}>
          DMR Costruzioni è specializzata negli interventi di piccoli e grandi restauri e nella manutenzione globale degli edifici, dal <span style={styles.boldKeyword}>restauro</span> architettonico degli esterni e delle facciate degli edifici alla semplice tinteggiatura esterna con prodotti garantiti da garanzia ultra decennale, per offrirvi sempre un servizio a 360 gradi.
        </p>
      </div>
    </div>
  );
};

export default CustomDiv;
