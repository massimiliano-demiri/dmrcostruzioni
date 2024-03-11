import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HeaderCarousel = () => {
  return (
    <div className="relative bg-gray-800">
      {/* Box trasparente sopra lo slider */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-lg p-8 bg-white bg-opacity-50 shadow-lg">
        <h1 className="text-gray-800 text-xl font-semibold text-center">La tua impresa edile a Terni</h1>
      </div>

      {/* Slide delle immagini */}
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="z-0" stopOnHover={false}>
        <div>
          <div className="relative">
            <svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto absolute bottom-0 left-0 z-10">
              <path d="M0,10 Q15,15 30,10 Q45,5 60,10 Q75,15 100,10 L100,20 L0,20 Z" fill="#718096" />
            </svg>
            <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" style={{ maxHeight: "calc(100vh - 100px)" }} />
          </div>
        </div>
        <div>
          <div className="relative">
            <svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto absolute bottom-0 left-0 z-10">
              <path d="M0,10 Q15,15 30,10 Q45,5 60,10 Q75,15 100,10 L100,20 L0,20 Z" fill="#718096" />
            </svg>
            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 2" style={{ maxHeight: "calc(100vh - 100px)" }} />
          </div>
        </div>
        <div>
          <div className="relative">
            <svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto absolute bottom-0 left-0 z-10">
              <path d="M0,10 Q15,15 30,10 Q45,5 60,10 Q75,15 100,10 L100,20 L0,20 Z" fill="#718096" />
            </svg>
            <img src="https://images.unsplash.com/photo-1571843439991-dd2b8e051966?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 3" style={{ maxHeight: "calc(100vh - 100px)" }} />
          </div>
        </div>
      </Carousel>

      {/* Div sottostante con sfondo grigio */}
      <div className="absolute bottom-0 left-0 w-full bg-gray-800 p-8">
        <p className="text-white">
          La Tosca SRL da oltre 70 anni si occupa di costruzioni, manutenzione e ristrutturazione edile.
          Grazie all'esperienza, maturata nelle 3 generazioni di attività della famiglia Tosto, e alla passione e la serietà,
          che contraddistinguono il modo di lavorare dell’azienda, la Tosca SRL si è presto contraddistinta come punto di riferimento
          per ogni intervento nell'edilizia a Firenze e hinterland.
        </p>
        <p className="text-white">
          La Tosca SRL è specializzata negli interventi di piccoli e grandi restauri e nella manutenzione globale degli edifici,
          dal restauro architettonico degli esterni e delle facciate degli edifici alla semplice tinteggiatura esterna con prodotti
          garantiti da garanzia ultra decennale, per offrirvi sempre un servizio a 360 gradi.
        </p>
      </div>
    </div>
  );
};

export default HeaderCarousel;
