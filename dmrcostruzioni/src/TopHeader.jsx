import React from 'react';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io5';

const Banner = () => {
  return (
    <div className="bg-white text-black py-2 px-8 flex justify-center items-center gap-40">
      {/* Testo a sinistra */}
      <div className="flex items-center space-x-4"> {/* Updated */}
        <p className="text-sm mb-0">
          Prenotate un appuntamento al <a href="tel:+390556121290"><b>+39 055 6121 290</b></a> | <a href="mailto:s.demiri@hotmail.it"><b>s.demiri@hotmail.it</b></a>
        </p>
      </div>
      
      {/* Icone social a destra */}
      <div className="flex space-x-2">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><IoLogoFacebook className="text-xl" /></a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><IoLogoTwitter className="text-xl" /></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><IoLogoInstagram className="text-xl" /></a>
      </div>
    </div>
  );
};

export default Banner;
