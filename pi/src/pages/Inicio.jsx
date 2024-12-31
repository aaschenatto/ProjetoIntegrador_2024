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
      {/* Versão Mobile */}
      {isMobile ? (
        <div>
          <div className='banner'>
            <h2>Mineração Espacial</h2>
            <img src="../../public/bannerInicio.jpg" alt="Banner Mineração Espacial" />
          </div>

          <div className='div1'>
            <h2>Por Que Explorar?</h2>
            <p>A mineração espacial visa explorar recursos valiosos no espaço, como platina e hélio-3.</p>
            <img className='img1' src='../../public/nave.png'/>
          </div>

          <div className='div2'>
            <h2>Marte</h2>
            <p>Marte possui minerais como ferro e magnésio, sendo um alvo ideal para a mineração espacial.</p>
            <img className='img2' src='../../public/marte.png' />
          </div>

          <div className='div1'>
            <h2>Asteroides</h2>
            <p>Os asteroides são fontes ricas de ferro, níquel e platina.</p>
            <img className='img1' src='../../public/asteroide.png'/>
          </div>

          <div className='div2'>
            <h2>Lua</h2>
            <p>A lua possui elementos valiosos, como hélio-3 e metais raros.</p>
            <img className='img2' src='./lua.png' />
          </div>
        </div>
      ) : (
        /* Versão Desktop */
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