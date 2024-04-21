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
          <div className="text">{columnTexts[index]}</div>
        </div>
      ))}
    </div>
  );
};

export default Container;