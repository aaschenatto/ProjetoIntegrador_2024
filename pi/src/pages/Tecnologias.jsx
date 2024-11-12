import './Tecnologias.css'
import '../../script.js'

function Tecnologias() {
  
  return (
    <>
      <div className='banner'>
        <h1>TECNOLOGIAS</h1>
        <img src='../../public/bannerTecnologias.jpg' />
      </div>

      <div className="container-slider">
        <button id="prev-button"><img src='../../public/arrow.png' alt="prev-button" /></button>
        <div className="container-images">
          <img src='../../public/bannerInicio.jpg' alt="img2" className="slider on" />
          <img src='../../public/bannerInicio.jpg' alt="img1" className="slider" />
        </div>
        <button id="next-button"><img src='../../public/arrow.png' alt="next-button" /></button>
      </div>

      <div className='divlinha'>
        <img className='linha' src='../../public/bannerInicio.jpg' />
      </div>


      <p className='titulo1'>Linha Do Tempo De Tecnologias</p>

      <div className='divEsquerda'>
        <h2>Titulo W</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum.</p>
        <img src='../../public/bannerInicio.jpg' />
      </div>

      <p className='titulo1'>Vídeos Relacionados As Tecnologias</p>

      <div className='divDireita'>
        <img src='../../public/bannerInicio.jpg'/>
        <h2>Titulo F</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum.</p>
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
