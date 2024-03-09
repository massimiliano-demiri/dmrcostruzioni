import React from 'react';
import logo from './immagini/logo.jpeg'; // Importa il logo nell'ambito del componente

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-a0c959 to-3a393f">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-21"> {/* Altezza aumentata a h-20 */}
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="Logo" className="h-16,1 py-1" /> {/* Aumenta la dimensione del logo a h-17 e aggiunge spazio sopra e sotto */}
          </div>
          {/* Links */}
          <div className="hidden md:block">
            <div className="ml-auto flex items-center space-x-4"> {/* Utilizza ml-auto per allineare i link a destra */}
              <a href="#" className="text-black hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="#" className="text-black hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Servizi
              </a>
              <a href="#" className="text-black hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Progetti
              </a>
              <a href="#" className="text-black hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Contatti
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
