import React from 'react';
import IconElement1 from './IconElement1.svg';
import IconElement2 from './IconElement2.svg';
import IconElement3 from './IconElement3.svg';
import IconElement4 from './IconElement4.svg';

const ThirdSection = () => {
  // Dati per ciascun elemento
  const items = [
    {
      title: "Studio di Progettazione",
      description: "Progettazione con nostro studio tecnico interno. Scegliete sempre di farvi aiutare da un architetto nella progettazione.",
      icon: IconElement1, // Percorso dell'icona o dell'SVG per l'elemento 1
    },
    {
      title: "Consolidamenti Strutturali",
      description: "Perché il consolidamento delle fondazioni è sempre importante e lo possiamo valutare insieme",
      icon: IconElement2, // Percorso dell'icona o dell'SVG per l'elemento 2
    },
    {
      title: "Professional Team",
      description: "Un team professionale e specializzato completamente al tuo servizio",
      icon: IconElement3, // Percorso dell'icona o dell'SVG per l'elemento 3
    },
    {
      title: "Troviamo Soluzioni",
      description: "Ristrutturazioni con sgravio del 50% e del 65%. Per noi ogni intervento è importante e merita attenzione e cura",
      icon: IconElement4, // Percorso dell'icona o dell'SVG per l'elemento 4
    },
  ];

  return (
    <div className="container mx-auto py-12 bg-white" style={{ minWidth: '100%' }}>

      <div className="max-w-full min-w-full">
        <div className="flex justify-between px-4"> {/* Imposta max-w-full per estendere orizzontalmente */}
          {items.map((item, index) => (
            <div key={index} className="w-full md:w-1/4 text-center">
              <img src={item.icon} alt={`Icona ${index + 1}`} className="mx-auto h-16 mb-4" style={{ fill: '#78807d' }} />
              <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
