import React from 'react';

const ThirdSection = () => {
  // Dati per ciascun elemento
  const items = [
    {
      title: "Titolo Elemento 1",
      description: "Descrizione Elemento 1",
      icon: "/icons/icon1.svg", // Percorso dell'icona o dell'SVG per l'elemento 1
    },
    {
      title: "Titolo Elemento 2",
      description: "Descrizione Elemento 2",
      icon: "/icons/icon2.svg", // Percorso dell'icona o dell'SVG per l'elemento 2
    },
    {
      title: "Titolo Elemento 3",
      description: "Descrizione Elemento 3",
      icon: "/icons/icon3.svg", // Percorso dell'icona o dell'SVG per l'elemento 3
    },
    {
      title: "Titolo Elemento 4",
      description: "Descrizione Elemento 4",
      icon: "/icons/icon4.svg", // Percorso dell'icona o dell'SVG per l'elemento 4
    },
  ];

  return (
    <div className="container mx-auto py-12 bg-white"> {/* Imposta il background bianco */}
      <div className="flex justify-between max-w-screen-xl mx-auto px-4"> {/* Estendi il contenuto orizzontalmente */}
        {items.map((item, index) => (
          <div key={index} className="w-1/4 text-center">
            <img src={item.icon} alt={`Icona ${index + 1}`} className="mx-auto h-16 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdSection;
