import React from 'react';
import logo from './immagini/logopng.png'; // Importa il logo nell'ambito del componente

const Navbar = () => {
  const isHome = window.location.pathname === '/'; // Controlla se siamo nella home

  return (
    <div className="bg-gradient-to-r from-a0c959 to-3a393f">
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
              <a href="#" className={`px-4 py-3 rounded-md text-lg relative ${isHome ? 'hover:bg-95ca3a' : ''}`}>
                <span className={isHome ? 'bg-95ca3a absolute inset-0 opacity-75 transition duration-200' : 'hover:bg-95ca3a absolute inset-0 opacity-75 transition duration-200'}></span>
                <span className="relative z-10">Home</span>
              </a>
              <a href="#" className="hover:bg-green-400 px-4 py-3 rounded-md text-lg relative">
                <span className="hover:bg-95ca3a absolute inset-0 opacity-75 transition duration-200"></span>
                <span className="relative z-10">Chi siamo</span>
              </a>
              <a href="#" className="hover:bg-green-400 px-4 py-3 rounded-md text-lg relative">
                <span className="hover:bg-95ca3a absolute inset-0 opacity-75 transition duration-200"></span>
                <span className="relative z-10">Servizi</span>
              </a>
              <a href="#" className="hover:bg-green-400 px-4 py-3 rounded-md text-lg relative">
                <span className="hover:bg-95ca3a absolute inset-0 opacity-75 transition duration-200"></span>
                <span className="relative z-10">Sanificazioni</span>
              </a>
              <a href="#" className="hover:bg-green-400 px-4 py-3 rounded-md text-lg relative">
                <span className="hover:bg-95ca3a absolute inset-0 opacity-75 transition duration-200"></span>
                <span className="relative z-10">I nostri lavori</span>
              </a>
              <a href="#" className="hover:bg-green-400 px-4 py-3 rounded-md text-lg relative">
                <span className="hover:bg-95ca3a absolute inset-0 opacity-75 transition duration-200"></span>
                <span className="relative z-10">Contatti</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
