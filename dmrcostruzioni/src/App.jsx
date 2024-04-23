import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar"
import TopHeader from "./TopHeader"

import FirstSectionHome from "./FirstSectionHome"
import SecondSectionHome from './SecondSectionHome';
import ThirdSectionHome from './ThirdSectionHome';
import FourthSection from './FourthSection'
import FivethSection from './FivethSection'
import AreeIntervento from './AreeIntervento'
import Timelapse from './Timelapse'
import Certificazioni from './Certificazioni'
import ParagrafoHome from './ParagrafoHome';
// import LavoriHome from './LavoriHome';
import ServiziHome from './ServiziHome'

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    // Ottieni l'altezza della navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* <TopHeader /> */}
      <div style={{ paddingTop: navbarHeight }}> {/* Aggiungi lo spazio sopra al contenuto principale */}
        <Navbar scrollPosition={scrollPosition} />
        <FirstSectionHome />
        <SecondSectionHome />
        {/* <ThirdSectionHome /> */}
        <FourthSection />
        <FivethSection />
        <AreeIntervento />
        <Timelapse videoUrl={'https://www.youtube.com/watch?v=t-qKVR-Figg'}/>
        <Certificazioni />
        {/* <LavoriHome /> */}
        <ParagrafoHome />
        <ServiziHome />
      </div>
    </div>
  );
}

export default App;