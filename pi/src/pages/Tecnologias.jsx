import './Tecnologias.css'
import '../../script.js'
import React, { useState, useEffect } from 'react';

function Tecnologias() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '../../public/c1.jpg',
    '../../public/c2.webp',
    '../../public/c3.jpeg',
    '../../public/c4.jpg',
    '../../public/c5.jpg',
    '../../public/c6.jpg',
    '../../public/c7.jpg',
    '../../public/c8.jpg',
    '../../public/c9.jpg',
    '../../public/c10.jpg',
    '../../public/c11.jpg',
    '../../public/c12.jpg',
    '../../public/c13.jpg',
    '../../public/c14.jpg',
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
        <h2>1944       </h2>
        <p>O foguete V2 foi uma arma usada pelos nazistas no fim da segunda guerra mundial. Por mais que tenha sido desenvolvido com esse fim, o V2 foi muito importante para o início da era espacial, o fato de ser o primeiro objeto artíficial a entrar no espaço simboliza este fato. Com o avanço dos aliados na alemanha, varios engenheiros que trabalhram no projeto V2 foram capiturados pelos EUA e URSS. Estes engenheiros viriam a ajudar estas nações com tecnologia para a corrida espacial.</p>
        <img src='../../public/V2.webp' />
      </div>


      <div className='divDireita'>
        <p></p>
        <img src='../../public/sputnik.jpg' />
        <h2>1957</h2>
        <p>Sputnik foi o programa que produziu a primeira série de satélites artificiais soviéticos, concebida para estudar as capacidades de lançamento de cargas úteis para o espaço e para estudar os efeitos da ausência de peso e da radiação sobre os organismos vivos. Serviu também para estudar as propriedades da superfície terrestre com vista à preparação do primeiro voo espacial tripulado. O Sputnik 1, era uma esfera de aproximadamente 58,5 cm e pesando 83,6 kg. Sua função básica era transmitir um sinal de rádio e orbitou a Terra por 6 mêses antes de cair.</p>
        <p></p>
      </div>

      <div className='divEsquerda'>
        <h2>1961</h2>
        <p>Vostok 1 foi a primeira missão do programa espacial soviético Vostok e a primeira missão espacial tripulada da História. A espaçonave foi lançada em 12 de abril de 1961, levando Yuri Gagarin, um cosmonauta e piloto da Força Aérea Soviética, ao espaço. O voo marcou a primeira vez que um ser humano foi ao espaço exterior e o primeiro voo orbital de uma nave tripulada.  Ele consistiu em uma única órbita em torno da Terra, com a duração de 1h46min. Após voltar a Terra Gagarin foi ejetado a 7000 metros e pousou bem.</p>
        <img src='../../public/vostok1.webp' />
      </div>

      <div className='divDireita'>
        <p></p>
        <img src='../../public/apollo.webp' />
        <h2>1969</h2>
        <p>Apollo 11 foi um voo espacial tripulado norte-americano responsável pelo primeiro pouso na Lua. Os astronautas Neil Armstrong e Buzz Aldrin alunissaram o módulo lunar Eagle em 20 de julho de 1969 às 20h17min UTC. Armstrong tornou-se o primeiro humano a pisar na superfície lunar seis horas depois já no dia 21, seguido por Aldrin vinte minutos depois. Os dois passaram por volta de duas horas e quinze minutos fora da espaçonave e coletaram 21,5 quilogramas de material para trazer de volta à Terra.</p>
        <p></p>
      </div>

      <div className='divEsquerda'>
        <h2>1998</h2>
        <p>A Estação Espacial Internacional, conhecida como ISS (International Space Station), é a maior estrutura já montada no espaço pelo homem. Produto do esforço de 15 países, a ISS é um moderno laboratório para observação da Terra e realização de experimentos em ambiente de baixa gravidade. A montagem da ISS iniciou-se em 1998 e foi oficialmente terminada em 8 de junho de 2011. Com um custo de aproximadamente 150 bilhões de dólares, a ISS foi montada pedaço por pedaço, e a maioria dos módulos que a constituem foi fornecida pelos Estados Unidos e pela Rússia.</p>
        <img src='../../public/iss.jpg' />
      </div>

      <div className='divDireita'>
        <p></p>
        <img src='../../public/blue.webp' />
        <h2>1969</h2>
        <p>As empresas de exploração espacial privada se mostram como o futura da exploração espacial. A partir de gigantes como SpaceX e BlueOrigin estas organizações desenvolvem novas tecnologias e realizam testes para tornar a explorção espacial mais viável. Para a mineração espacial estas empresas tem um papel impotânte, pois seriam destas que partiriam a iniciativa econômica para realizar estas missões. Se apresentam como alterativa para a exploração espacial depois do fim da guerra fria, visto que depois da guerra o investimento público na área decaiu.</p>
        <p></p>
      </div>

      <div className='divEsquerda'>
        <h2>Futuro</h2>
        <p>A extração de minérios de corpos celeste é uma meta para o futuro, vist que hoje nenhum governo ou empresa trabalha com esta atividade. Muito disso se deve ao fato de que a tecnologia necessária para a execução desta mineração ainda estar em fase inicial de desenvolvimento. No entando as tecnologias citadas anteriormente criam um efeito dominó que certamente levará a exploração mineral de outros corpos celestes no futuro! Algumas organizações já desenvolveram planos sobre como esta exploração ocorrerá, mas estes ainda estção sujeitos a alterações visto que ainda é uma área incerta.</p>
        <img src='../../public/satelite.jpg' />
      </div>
        
      


    </>
  )
}

export default Tecnologias
