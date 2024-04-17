import React from 'react';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io5';

const Banner = () => {
  return (
    <div style={{ backgroundColor: "#ffffff" }} className="text-black py-2 px-8 flex justify-between items-center">
      {/* Contenitore dei contatti */}
      <div className="flex items-center space-x-8 ml-8 flex-grow"> {/* Margini e spazio aggiunto */}
        <p className="text-sm mb-0">
          Prenotate un appuntamento al <a href="tel:+393398438160" className="text-black font-bold"><b>+39 3398438160</b></a> | <a href="mailto:s.demiri@hotmail.it" className="text-black font-bold"><b>s.demiri@hotmail.it</b></a>
        </p>
      </div>
      
      {/* Contenitore dei social media */}
      <div className="flex items-center space-x-4 mr-8"> {/* Margini aggiunti */}
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><IoLogoFacebook className="text-lg" /></a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><IoLogoTwitter className="text-lg" /></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><IoLogoInstagram className="text-lg" /></a>
      </div>
    </div>
  );
};

export default Banner;
