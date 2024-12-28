import './Tecnologias.css'
import '../../script.js'
import React, { useState, useEffect } from 'react';

function Tecnologias() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '../../public/bannerTecnologias.jpg',
    '../../public/bannerInicio.jpg',
    '../../public/bannerRecursos.jpg',
    // Add more image paths as needed
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className='banner'>
        <h1>TECNOLOGIAS</h1>
        <img src='../../public/bannerTecnologias.jpg' />
      </div>

      <div className='carousel-container'>
        <div className='carousel'>
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              className={`carousel-image ${index === currentSlide ? 'active' : ''}`}
            />
          ))}
          <button className='carousel-button prev' onClick={prevSlide}>&#10094;</button>
          <button className='carousel-button next' onClick={nextSlide}>&#10095;</button>
        </div>
      </div>

      <div className='divlinha'>
        <img className='linha' src='../../public/bannerInicio.jpg' />
      </div>


      <h2 className='titulo1'>Linha Do Tempo De Tecnologias</h2>

      <div className='divEsquerda'>
        <h2>Titulo W</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum.</p>
        <img src='../../public/bannerInicio.jpg' />
      </div>

      <h2 className='titulo1'>Vídeos Relacionados As Tecnologias</h2>

      <div className='divDireita'>
        <p></p>
        <img src='../../public/bannerInicio.jpg' />
        <h2>Titulo F</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum.</p>
        <p></p>
      </div>

      <div className='divEsquerda'>
        <h2>Titulo W</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum.</p>
        <img src='../../public/bannerInicio.jpg' />
      </div>


    </>
  )
}

export default Tecnologias
