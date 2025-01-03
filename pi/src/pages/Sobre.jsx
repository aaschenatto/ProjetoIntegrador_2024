import { useState, useEffect } from 'react';
import './Sobre.css';

function Sobre() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <div>
          <div className='banner'>
            <h1>SOBRE NÓS</h1>
            <img src="../../public/bannerSobre.jpg" alt="Banner Mineração Espacial" />
            <br /><br /><br />
            
          <div className='card'> 
            <h2>IFC - Campus Concórdia</h2>
            <img className='imagemdocard' src='../../public/ifc.jpeg'/>
            <p className='textodocard'>O IFC-Concórdia é uma instituição de ensino que oferece educação de nível básico, técnico e superior em diferentes modalidades e áreas do conhecimento. O campus ministra os cursos: Técnico em Alimentos, Técnico em Agropecuária e Técnico em Informática para Internet – integrados ao ensino médio; cursos superiores de: Agronomia – Bacharelado, Engenharia de Alimentos – Bacharelado, Física – Licenciatura, Matemática – Licenciatura, e Medicina Veterinária – Bacharelado, Mestrado Profissional Produção e Sanidade Animal. Oferece também formação inicial e continuada, pós-graduação, educação de jovens e adultos, além de programas sociais do governo federal.</p>
          </div>
          <br /><br /><br /><br /><br />
          <div className='card'>
            <h2>Curso técnico em informática</h2>
            <img className='imagemdocard2' src='../../public/tec.jpg'/>
            <p className='textodocard'>O curso de técnico em informática é um dos cursos ofertados pelo IFC Concórdia. Forma profissionais de nível técnico que sejam éticos e comprometidos com o desenvolvimento social, intelectual e profissional para atuar na área de informática como desenvolvedores de produtos para web e dispositivos móveis, de modo que possam planejar, desenvolver e implementar programas usando tecnologias atuais às novas tendências de mercado, dando ênfase à utilização de ferramentas livres e entregar a sociedade profissionais que participem da formação de uma consciência coletiva da informática na economia.</p>
            
          </div>
          <br /><br /><br /><br /><br />
          <div className='card'>
            <h2>Projeto Integrador</h2>
            <img className='imagemdocard2' src='../../public/pi.jpg'/>
            <p className='textodocard'>O projeto integrador é uma disciplina do curso técnico em informática, tendo fito de promover a interdisciplinaridade e integração dos conteúdos, além de desenvolver um trabalho de ensino, de extensão, de pesquisa e/ou inovação sob a supervisão de um professor titular da disciplina Projeto Integrador em conjunto com os docentes das disciplinas participantes, demonstrando a capacidade discente de escolha de um determinado tema conforme o escopo definido pela ementa do respectivo PI.</p>
          </div>
          </div>
        </div>
      ) : (
        
        <div>
          <div className='banner'>
          <h1>SOBRE NÓS</h1>
          <img src='../../public/bannerSobre.jpg'/>
      </div>
      <div className='div1'>
        <h2>IFC - Campus Concórdia</h2>
        <p>O IFC-Concórdia é uma instituição de ensino que oferece educação de nível básico, técnico e superior em diferentes modalidades e áreas do conhecimento. O campus ministra os cursos: Técnico em Alimentos, Técnico em Agropecuária e Técnico em Informática para Internet – integrados ao ensino médio; cursos superiores de: Agronomia – Bacharelado, Engenharia de Alimentos – Bacharelado, Física – Licenciatura, Matemática – Licenciatura, e Medicina Veterinária – Bacharelado, Mestrado Profissional Produção e Sanidade Animal. Oferece também formação inicial e continuada, pós-graduação, educação de jovens e adultos, além de programas sociais do governo federal.</p>
        <img className='img1' src='../../public/ifc.jpeg'/>
      </div>
      <div className='div2'>
        <h2>Curso técnico em informática</h2>
        <p>O curso de técnico em informática é um dos cursos ofertados pelo IFC Concórdia. Forma profissionais de nível técnico que sejam éticos e comprometidos com o desenvolvimento social, intelectual e profissional para atuar na área de informática como desenvolvedores de produtos para web e dispositivos móveis, de modo que possam planejar, desenvolver e implementar programas usando tecnologias atuais às novas tendências de mercado, dando ênfase à utilização de ferramentas livres e entregar a sociedade profissionais que participem da formação de uma consciência coletiva da informática na economia.</p>
        <img className='img2' src='../../public/tec.jpg'/>vel.
      </div>
      <div className='div1'>
        <h2>Projeto Integrador</h2>
        <p>O projeto integrador é uma disciplina do curso técnico em informática, tendo fito de promover a interdisciplinaridade e integração dos conteúdos, além de desenvolver um trabalho de ensino, de extensão, de pesquisa e/ou inovação sob a supervisão de um professor titular da disciplina Projeto Integrador em conjunto com os docentes das disciplinas participantes, demonstrando a capacidade discente de escolha de um determinado tema conforme o escopo definido pela ementa do respectivo PI</p>
        <img className='img1' src='../../public/pi.jpg'/>
        </div>
        </div>
      )}
    </>
  );
}

export default Sobre;
