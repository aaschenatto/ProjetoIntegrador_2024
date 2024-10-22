import './Footer.css'

function Footer() {  

  return (
    <>

      <div className='footerContainer'>
        <img src='./../../public/logoIFC.png' className='logo' />

        <div className='newsletter'>
          <p className='titulonews'>Quer receber notícias relacionadas ao nosso conteúdo?</p>
          <p className='titulonews'>Preencha o campo abaixo com seu e-mail:</p>
          <input placeholder='E-mail...'></input>
          <button>Enviar</button>
        </div>

      </div>

    </>
  )
}

export default Footer
