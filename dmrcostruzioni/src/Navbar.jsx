import React, { useState, useEffect } from "react";
import logo from "./immagini/logopng.png"; // Importa il logo nell'ambito del componente
import "./navbar.css"; // Importa il file CSS contenente le regole di stile aggiuntive

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar-container" style={{ overflow: "hidden" }}>
      <div
        className={`w-full z-50 transition-all duration-300 fixed top-0 left-0 right-0 ${isScrolled ? "bg-white text-black" : "bg-transparent text-white"}`}
        style={{ fontFamily: 'Muli', height: "120px", padding: "50px", fontSize: "20px", zIndex: 99999999999 }} // Aumentato il valore di z-index
      >
        {/* Logo Container */}
        <div className="flex justify-between items-center h-full mb-4 px-4 transition duration-200">
          {/* Elementi a sinistra */}
          <a
            href="#"
            className={`nav-link px-4 py-3 rounded-md text-base font-muli font-medium nav-link relative ${isScrolled ? "text-3E3E41" : "text-white"} hover:text-green-500  h-full flex items-center`}
          >
            <span className={`relative z-10 ${isScrolled ? "" : "opacity-75"}`}>
              Home
              <span className="line-before"></span>
              <span className="line-after"></span>
            </span>
          </a>
          
          {/* Logo Container */}
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          
          {/* Elementi a destra */}
          <div className="flex items-center">
            <a
              href="#"
              className={`px-4 py-3 rounded-md text-base font-muli font-medium  relative ${isScrolled ? "text-3E3E41" : "text-white"} hover:text-green-500 hover:underline h-full flex items-center`}
            >
              <span className={`relative z-10 ${isScrolled ? "" : "opacity-75"}`}>
                Galleria
              </span>
            </a>
            <a
              href="#"
              className={`px-4 py-3 rounded-md text-base font-muli font-medium  relative ${isScrolled ? "text-3E3E41" : "text-white"} hover:text-green-500 hover:underline h-full flex items-center`}
            >
              <span className={`relative z-10 ${isScrolled ? "" : "opacity-75"}`}>
                Offerte
              </span>
            </a>
            <a
              href="#"
              className={`px-4 py-3 rounded-md text-base font-muli font-medium  relative ${isScrolled ? "text-3E3E41" : "text-white"} hover:text-green-500 hover:underline h-full flex items-center`}
            >
              <span className={`relative z-10 ${isScrolled ? "" : "opacity-75"}`}>
                Contatti
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
