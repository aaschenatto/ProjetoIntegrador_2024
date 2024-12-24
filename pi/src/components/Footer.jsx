import './Footer.css'
import { useState } from "react";

function Footer({ setCurrentPage }) {  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
      <a href="https://www.instagram.com/mineracao.espacial/" className='nome'>@mineracao.espacial</a>
      <img className='logoRede' src='../../public/insta.png'/>
    </div>
    <div className='email'>
    <a onClick={() => {setCurrentPage(6); toggleMenu()}} className='nome'>mineracaoespacial@gmail.com</a>
      <img className='logoRede' src='../../public/email.png'/>
    </div>
    </div>
</div>

    </>
  )
}

export default Footer
