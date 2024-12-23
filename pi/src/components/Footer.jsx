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
    <button className='botao'>Enviar</button>
  </div>

  <div className='redes'>
    <div className='insta'>
      <a href="https://www.instagram.com/mineracao.espacial/" className='nome'><p className='nome'>@mineracao.espacial</p></a>
      <img className='logoRede' src='../../public/insta.png'/>
    </div>
    <div className='email'>
      <p className='nome'> mineracaoespacial@gmail.com</p>
      <img className='logoRede' src='../../public/email.png'/>
    </div>
    </div>
</div>

    </>
  )
}

export default Footer
