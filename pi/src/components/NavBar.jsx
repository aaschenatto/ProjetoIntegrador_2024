import './NavBar.css'
import { useState } from "react";

function NavBar({ setCurrentPage }) {  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className='botões'>
      <a onClick={() => {setCurrentPage(1); toggleMenu()}}>Inicio</a>
      <a onClick={() => {setCurrentPage(2); toggleMenu()}}>Tecnologias</a>
      <a onClick={() => {setCurrentPage(3); toggleMenu()}}>Recursos</a>
      <a onClick={() => {setCurrentPage(4); toggleMenu()}}>Desafios</a>
      <a onClick={() => {setCurrentPage(5); toggleMenu()}}>Sobre Nós</a>
    </div>
      
    </>
  )
}

export default NavBar
