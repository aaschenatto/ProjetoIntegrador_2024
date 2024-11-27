import './Inicio.css'

function Inicio() {
  return (
    <>
      <div className='banner'>
          <h1>MINERAÇÃO <br/> ESPACIAL</h1>
          <img src='../../public/bannerInicio.jpg'/>
      </div>

      <div className='div1'>
        <h2>Por Que Explorar o Espaço?</h2>
        <p>A busca por soluções inovadoras para suprir a crescente demanda por recursos minerais tem levado a humanidade a expandir seus horizontes para além da Terra. Nesse contexto, a mineração espacial surge como uma possibilidade , com o objetivo de explorar corpos celestes em busca de minerais valiosos, como platina e hélio-3, essenciais para o avanço tecnológico e para garantir a qualidade de vida global. Este tema envolve desafios técnicos, econômicos e legais, além de implicações diplomáticas e ambientais. Este trabalho analisa as perspectivas, dificuldades e potencialidades da mineração espacial, abordando desde os elementos químicos encontrados no espaço até os avanços tecnológicos e regulamentações necessárias para transformar essa visão em realidade.
        </p>
        <img className='img1' src='../../public/nave.png'/>
      </div>

      <br/>


      <div className='div2'>
        <h2>Planeta Marte</h2>
        <p>Marte é o segundo menor planeta do sistema solar e assume a quarta posição depois do sol. Ele se classifica como planeta rochoso  e apresenta uma atmosfera fina. O planeta se torna um alvo muito grande para a mineração espacial, tendo em vista a grande quantidade de ferro presente, sendo sua massa composta por 19% a 25% de ferro. Pode-se encontrar também, outros minerais como magnésio, cálcio, enxofre, alumínio,etc. Além disso, por meio de pesquisas, futuramente Marte pode servir de base para pesquisa e até mesmo para colonização humana</p>
        <img className='img2' src='../../public/marte.png'/>
      </div>

      <br/>

      <div className='div1'>
        <h2>Asteroides</h2>
        <p>Um asteroide pode ser definido como um pedaço de rocha que orbita pelo sistema solar, e geralmente se encontra no cinturão de asteroides entre Júpiter e Marte. Esses corpos são o maior fornecedor de minérios valiosos, como ferro, níquel, cobalto e  platina. A maior vantagem em se explorar asteroides vem do fato das quantias desses mineiros serem muito superiores às presentes na terra, além de serem as mais próximas do nosso planeta.</p>
        <img className='img1' src='../../public/asteroide.png'/>
      </div>
      
      <br/>

      <div className='div2'>
        <h2>Lua terrestre</h2>
        <p>A lua é um corpo celeste muito conhecido é o quinto maior no nosso sistema solar. Ela é o único e o maior satélite natural da Terra. O interesse em explorar a lua, vem principalmente pela sua proximidade ao nosso planeta e pela presença de elementos valiosos na sua superfície, como hélio-3,que tem grande potencial para fusão nuclear limpa, água congelada, que pode auxiliar em futuras expedições, e também metais raros como, alumínio e titânio.  </p>
        <img className='img2' src='../../public/lua.png'/>
      </div>


    </>
  )
}

export default Inicio
