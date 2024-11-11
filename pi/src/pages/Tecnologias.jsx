import './Tecnologias.css'


function Tecnologias() {
  return (
    <>

     

      <div className='banner'>
        <h1>TECNOLOGIAS</h1>
        <img src='../../public/bannerInicio.jpg' />
      </div>

      <div class="container-slider">
        <button id="prev-button"><img src='../../public/arrow.png' alt="prev-button" /></button>
        <div class="container-images">
          <img src='../../public/bannerInicio.jpg' alt="img2" class="slider on" />
          <img src='../../public/bannerInicio.jpg' alt="img1" class="slider" />
        </div>
        <button id="next-button"><img src='../../public/arrow.png' alt="next-button" /></button>
      </div>

      <div className='divlinha'>
        <img className='linha' src='../../public/bannerInicio.jpg' />
      </div>


      <p className='titulo1'>Linha Do Tempo De Tecnologias</p>

      <div className='div3'>
        <p className='minititulo3'>Titulo W</p>
        <p className='txt3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum.</p>
        <img className='img3' src='../../public/bannerInicio.jpg' />
      </div>

      <p className='titulo1'>Vídeos Relacionados As Tecnologias</p>

      <div className='div2'>
        <img className='teste' src='../../public/bannerInicio.jpg'/>
        <p className='mini'>Titulo F</p>
        
        <p className='teste1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum.</p>
      </div>

      <div className='div3'>
        <p className='minititulo3'>Titulo W</p>
        <p className='txt3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum.</p>
        <img className='img3' src='../../public/bannerInicio.jpg' />
      </div>

   

    </>
  )
}

export default Tecnologias

