import { useState } from "react";

import NavBar from "./components/NavBar";
import Tecnologias from './pages/Tecnologias.jsx'
import Inicio from "./pages/Inicio.jsx";
import Footer from "./components/Footer.jsx";

export default function Site() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <NavBar setCurrentPage={setCurrentPage} />
      {currentPage === 1 && <Inicio />}
      {currentPage === 2 && <Tecnologias />}
      <Footer/>
    </>
  );
}
