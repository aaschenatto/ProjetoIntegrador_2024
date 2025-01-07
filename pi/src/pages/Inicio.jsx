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
        <div>
          <div className='banner'>
            <h1>MINERAÇÃO <br /> ESPACIAL</h1>
            <img src="../../public/bannerInicio.jpg" alt="Banner Mineração Espacial" />
            <br /><br /><br />
            
          <div className='card'>
            <h2>Por Que Explorar o Espaço?</h2>
            <p className='textodocard'>A exploração do espaço busca responder questões fundamentais sobre nossa existência e o universo. Ao olharmos para além do nosso planeta, buscamos entender nossas origens, descobrir se há vida fora da Terra e encontrar soluções para desafios globais, como mudanças climáticas e escassez de recursos.</p>
            <img className='imagemdocard' src='../../public/nave.png'/>
          </div>
          <br /><br /><br /><br /><br />
          <div className='card'>
            <h2>Expansão Científica</h2>
            <p className='textodocard'>A investigação espacial nos permite compreender fenômenos como a formação de estrelas, planetas e galáxias. Além disso, ela oferece insights sobre a origem do universo e as condições necessárias para a vida, enriquecendo nosso entendimento do cosmos e inspirando futuras gerações de cientistas.</p>
            <img className='imagemdocard2' src='../../public/marte.png'/>
          </div>
          <br /><br /><br /><br /><br />
          <div className='card'>
            <h2>Desenvolvimento de Tecnologias Avançadas</h2>
            <p className='textodocard'>A necessidade de superar os desafios do espaço impulsiona inovações tecnológicas com aplicações práticas no cotidiano. Satélites, sistemas de comunicação, GPS e avanços médicos são exemplos diretos de benefícios gerados por essa busca.</p>
            <img className='imagemdocard2' src='../../public/asteroide.png'/>
          </div><div className='card'>
          <br /><br /><br /><br /><br />
            <h2>Garantia do Futuro da Humanidade</h2>
            <p className='textodocard'>Com o crescimento populacional e o esgotamento dos recursos da Terra, explorar e colonizar outros planetas pode ser uma solução para garantir a sobrevivência da humanidade a longo prazo. O espaço oferece possibilidades de recursos ilimitados e novas fronteiras para expansão.</p>
            <img className='imagemdocard2' src='../../public/lua.png'/>
          </div>
          </div>
        </div>
      ) : (
        
        <div>
          <div className='banner'>
            <h1>MINERAÇÃO <br /> ESPACIAL</h1>
            <img src="../../public/bannerInicio.jpg" alt="Banner Mineração Espacial" />
          </div>

          <div className='div1'>
            <h2>Por Que Explorar o Espaço?</h2>
            <p>A busca por soluções inovadoras para suprir a crescente demanda por recursos minerais tem levado a humanidade a expandir seus horizontes para além da Terra. Nesse contexto, a mineração espacial surge como uma possibilidade , com o objetivo de explorar corpos celestes em busca de minerais valiosos, como platina e hélio-3, essenciais para o avanço tecnológico e para garantir a qualidade de vida global. Este tema envolve desafios técnicos, econômicos e legais, além de implicações diplomáticas e ambientais. Este trabalho analisa as perspectivas, dificuldades e potencialidades da mineração espacial, abordando desde os elementos químicos encontrados no espaço até os avanços tecnológicos e regulamentações necessárias para transformar essa visão em realidade.</p>
            <img id='nave' className='img1' src='../../public/nave.png'/>
          </div>

          <div className='div2'>
            <h2>Planeta Marte</h2>
            <p>Marte é o segundo menor planeta do sistema solar e assume a quarta posição depois do sol. Ele se classifica como planeta rochoso  e apresenta uma atmosfera fina. O planeta se torna um alvo muito grande para a mineração espacial, tendo em vista a grande quantidade de ferro presente, sendo sua massa composta por 19% a 25% de ferro. Pode-se encontrar também, outros minerais como magnésio, cálcio, enxofre, alumínio,etc. Além disso, por meio de pesquisas, futuramente Marte pode servir de base para pesquisa e até mesmo para colonização humana.</p>
            <img className='img2' src='../../public/marte.png' id='marte'/>
          </div>

          <div className='div1'>
            <h2>Asteroides</h2>
            <p>Um asteroide pode ser definido como um pedaço de rocha que orbita pelo sistema solar, e geralmente se encontra no cinturão de asteroides entre Júpiter e Marte. Esses corpos são o maior fornecedor de minérios valiosos, como ferro, níquel, cobalto e  platina. A maior vantagem em se explorar asteroides vem do fato das quantias desses mineiros serem muito superiores às presentes na terra, além de serem as mais próximas do nosso planeta.</p>
            <img className='img1' src='../../public/asteroide.png' id='asteroide'/>
          </div>

          <div className='div2'>
            <h2>Lua terrestre</h2>
            <p>A lua é um corpo celeste muito conhecido é o quinto maior no nosso sistema solar. Ela é o único e o maior satélite natural da Terra. O interesse em explorar a lua, vem principalmente pela sua proximidade ao nosso planeta e pela presença de elementos valiosos na sua superfície, como hélio-3,que tem grande potencial para fusão nuclear limpa, água congelada, que pode auxiliar em futuras expedições, e também metais raros como, alumínio e titânio.</p>
            <img className='img2' src='./lua.png' id='lua'/>
          </div>
        </div>
      )}
    </>
  );
}

export default Inicio;
