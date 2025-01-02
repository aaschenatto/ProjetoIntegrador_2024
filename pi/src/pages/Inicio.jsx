import { useState, useEffect } from 'react';
import './Inicio.css';

function Inicio() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <p></p>
      ) : (
        
        <div>
          <div className='banner'>
            <h1>MINERAÇÃO <br /> ESPACIAL</h1>
            <img src="../../public/bannerInicio.jpg" alt="Banner Mineração Espacial" />
          </div>

          <div className='div1'>
            <h2>Por Que Explorar o Espaço?</h2>
            <p>A busca por soluções inovadoras para suprir a crescente demanda por recursos minerais tem levado a humanidade a expandir seus horizontes para além da Terra...</p>
            <img id='nave' className='img1' src='../../public/nave.png'/>
          </div>

          <div className='div2'>
            <h2>Planeta Marte</h2>
            <p>Marte é o segundo menor planeta do sistema solar e assume a quarta posição depois do sol. Ele se classifica como planeta rochoso...</p>
            <img className='img2' src='../../public/marte.png' id='marte'/>
          </div>

          <div className='div1'>
            <h2>Asteroides</h2>
            <p>Um asteroide pode ser definido como um pedaço de rocha que orbita pelo sistema solar, e geralmente se encontra no cinturão de asteroides entre Júpiter e Marte...</p>
            <img className='img1' src='../../public/asteroide.png' id='asteroide'/>
          </div>

          <div className='div2'>
            <h2>Lua terrestre</h2>
            <p>A lua é um corpo celeste muito conhecido e é o quinto maior no nosso sistema solar...</p>
            <img className='img2' src='./lua.png' id='lua'/>
          </div>
        </div>
      )}
    </>
  );
}

export default Inicio;
