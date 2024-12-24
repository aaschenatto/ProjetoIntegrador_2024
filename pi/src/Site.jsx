import { useState } from "react";

import NavBar from "./components/NavBar";
import Tecnologias from './pages/Tecnologias.jsx'
import Inicio from "./pages/Inicio.jsx";
import Recursos from "./pages/Recursos.jsx"
import Sobre from "./pages/Sobre.jsx";
import Desafios from "./pages/Desafios.jsx";
import Footer from "./components/Footer.jsx";

export default function Site() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <NavBar setCurrentPage={setCurrentPage} />
      {currentPage === 1 && <Inicio />}
      {currentPage === 2 && <Tecnologias />}
      {currentPage === 3 && <Recursos />}
      {currentPage === 4 && <Desafios />}
      {currentPage === 5 && <Sobre />}
      <Footer/>
    </>
  );
}
