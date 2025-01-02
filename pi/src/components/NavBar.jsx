import './NavBar.css';
import { useState, useEffect } from "react";

function NavBar({ setCurrentPage }) {  
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Atualiza o estado `isMobile` ao redimensionar a janela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isMobile && (
        <i id='burguer' className="material-icons" onClick={toggleMenu}>
          menu
        </i>
      )}
      <div id='botoes' style={{ display: isMobile ? (isOpen ? 'flex' : 'none') : 'flex' }}>
        <a onClick={() => { setCurrentPage(1); setIsOpen(false); }}>Inicio</a>
        <a onClick={() => { setCurrentPage(2); setIsOpen(false); }}>Tecnologias</a>
        <a onClick={() => { setCurrentPage(3); setIsOpen(false); }}>Recursos</a>
        <a onClick={() => { setCurrentPage(4); setIsOpen(false); }}>Desafios</a>
        <a onClick={() => { setCurrentPage(5); setIsOpen(false); }}>Sobre Nós</a>
      </div>
    </>
  );
}

export default NavBar;
