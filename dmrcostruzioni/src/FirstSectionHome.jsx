import React from 'react';
import videoBackground from './immagini/video_first_section.mp4'; // Importa il video di sfondo

const FirstSectionHome = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-9dcf4c"> {/* Imposta lo sfondo con il colore #9dcf4c e l'altezza dello schermo */}
      {/* Video Background */}
      <div className="fixed inset-0 z-0 overflow-hidden" style={{ zIndex: -1 }}> {/* Applica posizionamento fisso al contenitore del video */}
        <video autoPlay loop muted className="w-full h-full object-cover blur-sm max-h-screen"> {/* Imposta l'ampiezza e l'altezza a pieno schermo e applica object-cover */}
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Contenuto sopra il video */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        {/* Text Overlay */}
        <div className="flex flex-col items-center text-white font-montserrat uppercase">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center font-bold">
            <span className="text-7xl sm:text-6xl lg:text-7xl font-bold">DMR COSTRUZIONI</span> <br /> Impresa edile a Terni
          </h1>
        </div>
      </div>

      {/* Links */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
        {/* Your links here */}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:v="https://svgstorm.com"
          viewBox = "0 0 1920 238"
          width="1920"
          height="238"
          style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 10 }}
            >

          <g fill="None" fill-opacity="0.0" stroke="#90C63D" stroke-opacity="0.06" stroke-width="0.3">
            <path d="
              M 0.00 12.00 
              C 49.37 38.11 92.38 57.23 145.22 76.78 C 198.07 96.32 248.93 112.13 305.67 126.33 C 362.41 140.52 423.14 151.35 484.00 159.00 C 544.86 166.64 620.39 169.46 684.00 167.00 C 747.62 164.54 812.54 157.10 873.02 145.02 C 933.51 132.95 981.69 116.61 1042.07 104.07 C 1102.46 91.54 1167.41 84.90 1231.00 82.00 C 1294.59 79.10 1370.15 82.81 1431.07 89.93 C 1492.00 97.04 1552.60 108.39 1609.22 122.78 C 1665.85 137.17 1716.98 152.26 1769.68 172.32 C 1822.37 192.38 1866.26 211.09 1915.00 238.00
              L 1920.00 238.00
              L 1920.00 0.00
              L 0.00 0.00
              L 0.00 12.00 Z"/>
          </g>
          <g fill="None" fill-opacity="0.0" stroke="#90C63D" stroke-opacity="1.00" stroke-width="0.3">
            <path d="
              M 0.00 238.00 
              L 1915.00 238.00
              C 1866.26 211.09 1822.37 192.38 1769.68 172.32 C 1716.98 152.26 1665.85 137.17 1609.22 122.78 C 1552.60 108.39 1492.00 97.04 1431.07 89.93 C 1370.15 82.81 1294.59 79.10 1231.00 82.00 C 1167.41 84.90 1102.46 91.54 1042.07 104.07 C 981.69 116.61 933.51 132.95 873.02 145.02 C 812.54 157.10 747.62 164.54 684.00 167.00 C 620.39 169.46 544.86 166.64 484.00 159.00 C 423.14 151.35 362.41 140.52 305.67 126.33 C 248.93 112.13 198.07 96.32 145.22 76.78 C 92.38 57.23 49.37 38.11 0.00 12.00
              L 0.00 238.00 Z"/>
          </g>
          <g fill="#90C63D" fill-opacity="0.06" stroke="None">
            <path d="
              M 0.00 12.00 
              C 49.37 38.11 92.38 57.23 145.22 76.78 C 198.07 96.32 248.93 112.13 305.67 126.33 C 362.41 140.52 423.14 151.35 484.00 159.00 C 544.86 166.64 620.39 169.46 684.00 167.00 C 747.62 164.54 812.54 157.10 873.02 145.02 C 933.51 132.95 981.69 116.61 1042.07 104.07 C 1102.46 91.54 1167.41 84.90 1231.00 82.00 C 1294.59 79.10 1370.15 82.81 1431.07 89.93 C 1492.00 97.04 1552.60 108.39 1609.22 122.78 C 1665.85 137.17 1716.98 152.26 1769.68 172.32 C 1822.37 192.38 1866.26 211.09 1915.00 238.00
              L 1920.00 238.00
              L 1920.00 0.00
              L 0.00 0.00
              L 0.00 12.00 Z"/>
          </g>
          <g fill="#90C63D" fill-opacity="1.00" stroke="None">
            <path d="
              M 0.00 238.00 
              L 1915.00 238.00
              C 1866.26 211.09 1822.37 192.38 1769.68 172.32 C 1716.98 152.26 1665.85 137.17 1609.22 122.78 C 1552.60 108.39 1492.00 97.04 1431.07 89.93 C 1370.15 82.81 1294.59 79.10 1231.00 82.00 C 1167.41 84.90 1102.46 91.54 1042.07 104.07 C 981.69 116.61 933.51 132.95 873.02 145.02 C 812.54 157.10 747.62 164.54 684.00 167.00 C 620.39 169.46 544.86 166.64 484.00 159.00 C 423.14 151.35 362.41 140.52 305.67 126.33 C 248.93 112.13 198.07 96.32 145.22 76.78 C 92.38 57.23 49.37 38.11 0.00 12.00
              L 0.00 238.00 Z"/>
          </g>
        </svg>
        {/* <FirstSectionHome /> */}
    </div>
  );
};

export default FirstSectionHome;
