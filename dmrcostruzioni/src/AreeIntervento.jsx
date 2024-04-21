import React, { useState } from 'react';
import './styles.css';

const columnBackgrounds = [
  'https://images.unsplash.com/photo-1543525324-268116894cd9?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1504306763499-721d07597b66?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1508188609340-e8068b599193?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1558227691-41ea78d1f631?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc3RydWN0aW9uJTIwd29ya2VyfGVufDB8MXwwfHx8Mg%3D%3D',
  'https://images.unsplash.com/photo-1598023707207-276835c2b5fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aWRyYXVsaWNvfGVufDB8MXwwfHx8Mg%3D%3D',
  'https://images.unsplash.com/photo-1455778977533-4a3ef39091c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1616320999187-3c004dad4f0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWRpbGl6aWElMjBjaXZpbGV8ZW58MHwxfDB8fHwy',
];

const containerBackgrounds = [
  'https://images.unsplash.com/photo-1565041931867-a1c38590a633?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1713458101343-ae063854e754?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'path_per_sfondo_container_4.jpg',
  'path_per_sfondo_container_5.jpg',
  'path_per_sfondo_container_6.jpg',
  'path_per_sfondo_container_7.jpg',
];

const columnTexts = [
  'Edilizia Residenziale',
  'Demolizioni',
  'Edilizia industriale',
  'Urbanizzazione e infrastrutture',
  'Opere idrauliche',
  'Ingegneria naturalistica',
  'Edilizia civile',
];
const columnTitles = [
    'Titolo 1',
    'Titolo 2',
    'Titolo 3',
    'Titolo 4',
    'Titolo 5',
    'Titolo 6',
    'Titolo 7',
  ];

// Array con i testi dei paragrafi per ogni colonna
const columnParagraphs = [
  'Testo per la colonna 1.',
  'Testo per la colonna 2.',
  'Testo per la colonna 3.',
  'Testo per la colonna 4.',
  'Testo per la colonna 5.',
  'Testo per la colonna 6.',
  'Testo per la colonna 7.',
];

// Array con gli SVG per ogni colonna
const columnSVGs = [
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3c-3.31 0-6 2.69-6 6 0 2.18 1.19 4.09 3 5.12V17c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2.88c1.81-1.03 3-2.94 3-5.12 0-3.31-2.69-6-6-6zm4 11c0 1.66-1.34 3-3 3H6c-1.66 0-3-1.34-3-3s1.34-3 3-3h12c1.66 0 3 1.34 3 3zm-6-9c-2.21 0-4 1.79-4 4h8c0-2.21-1.79-4-4-4z"/></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h-2v-6h2v6zm0-8h-2V7h2v4z"/></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h-2v-6h2v6zm0-8h-2V7h2v4z"/></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 10H3c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H21c1.1 0 2-.9 2-2v-6c0-1.1-.89-2-2-2zm0 8H3v-2h18v2zm0-4H3v-2h18v2zm0-4H3V8h18v2z"/></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 5H3c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.89 2 1.99 2H21c1.1 0 2-.9 2-2V7c0-1.1-.89-2-2-2zm0 12H3V7h18v10z"/></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h-2v-6h2v6zm0-8h-2V7h2v4z"/></svg>,
];

const Container = () => {
  const [hoveredColumn, setHoveredColumn] = useState(null);

  const handleColumnHover = (index) => {
    setHoveredColumn(index);
  };

  const handleContainerLeave = () => {
    setHoveredColumn(null);
  };

  const containerStyle = {
    display: 'flex',
    height: '630px',
    backgroundImage: `url(${containerBackgrounds[hoveredColumn]})`,
    backgroundSize: 'cover',
  };

  return (
    <div className="containerrr" style={containerStyle} onMouseLeave={handleContainerLeave}>
      {columnBackgrounds.map((background, index) => (
        <div
          key={index}
          className="columnnn"
          style={{ backgroundImage: `url(${background})` }}
          onMouseEnter={() => handleColumnHover(index)}
        >
          {/* Renderizza il testo solo se l'indice non corrisponde a hoveredColumn */}
          {index !== hoveredColumn && (
            <div className="text">{columnTexts[index]}</div>
          )}
          {/* Renderizza il paragrafo e l'SVG solo se l'indice corrisponde a hoveredColumn */}
          {index === hoveredColumn && (
            <div className="hovered-content">
                {columnSVGs[index]}
             {columnTitles[index]}
              <p>{columnParagraphs[index]}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Container;
