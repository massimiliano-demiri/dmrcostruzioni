import React from 'react';
import logo from './immagini/logopng.png'; // Importa il logo nell'ambito del componente

const Navbar = () => {
  const isHome = window.location.pathname === '/'; // Controlla se siamo nella home

  return (
    <div className="bg-white w-full z-50"> {/* Imposta la navbar in alto con posizione fissa */}
      {/* Logo Container */}
      <div className="flex justify-center items-center h-36 mb-4"> {/* Riduci lo spazio verticale a h-48 */}
        <img src={logo} alt="Logo" className="h-21" /> {/* Aumenta la dimensione del logo a h-24 */}
      </div>

      {/* Sections Container */}
      <div className="bg-gray-800 text-white"> {/* Cambia il colore dello sfondo a bg-gray-800 e il testo a text-white */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center py-1"> {/* Riduci lo spazio verticale a py-4 */}
            {/* Links */}
            <div className="flex items-center space-x-6"> {/* Aumenta il gap tra le scritte a space-x-6 */}
              <a href="#" className={`px-4 py-3 rounded-md text-sm font-montserrat uppercase relative ${isHome ? 'hover:text-gray-300' : ''}`}>
                <span className={isHome ? 'opacity-75 transition duration-200' : 'opacity-75 transition duration-200'}></span>
                <span className="relative z-10">HOME</span>
              </a>
              <a href="#" className="hover:text-gray-300 px-4 py-3 rounded-md text-sm font-montserrat uppercase relative">
                <span className="opacity-75 transition duration-200"></span>
                <span className="relative z-10">AZIENDA</span>
              </a>
              <a href="#" className="hover:text-gray-300 px-4 py-3 rounded-md text-sm font-montserrat uppercase relative">
                <span className="opacity-75 transition duration-200"></span>
                <span className="relative z-10">COSTRUZIONI</span>
              </a>
              <a href="#" className="hover:text-gray-300 px-4 py-3 rounded-md text-sm font-montserrat uppercase relative">
                <span className="opacity-75 transition duration-200"></span>
                <span className="relative z-10">RISTRUTTURAZIONI</span>
              </a>
              <a href="#" className="hover:text-gray-300 px-4 py-3 rounded-md text-sm font-montserrat uppercase relative">
                <span className="opacity-75 transition duration-200"></span>
                <span className="relative z-10">GALLERIA</span>
              </a>
              <a href="#" className="hover:text-gray-300 px-4 py-3 rounded-md text-sm font-montserrat uppercase relative">
                <span className="opacity-75 transition duration-200"></span>
                <span className="relative z-10">OFFERTE</span>
              </a>
              <a href="#" className="hover:text-gray-300 px-4 py-3 rounded-md text-sm font-montserrat uppercase relative">
                <span className="opacity-75 transition duration-200"></span>
                <span className="relative z-10">CONTATTI</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;