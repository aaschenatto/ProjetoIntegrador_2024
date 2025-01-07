import './Desafios.css';

function Desafios() {
  const handleToggle = (event) => {
    const item = event.currentTarget;
    const content = item.nextElementSibling;

    // Alterna a classe "active" no título
    item.classList.toggle('active');

    // Alterna a exibição do conteúdo
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  };

  return (
    <>
      <div className="banner">
        <h1>DESAFIOS</h1>
        <img src="../../public/bannerDesafios.jpg" alt="Banner Desafios" />
      </div>

      <div className="int">
        <h2 className="tituloInt">Desafios E Suas Soluções</h2>

        <div className="col1">
          <p className="txtInt">
          Por mais que a mineração espacial ofereça uma solução para problemas que podemos enfrentar no futuro ainda existem diversos desafios que devem ser superados pelos pesquisadores para tornar a mineração uma realidade. Com o passar das décadas e com o desenvolvimento de novas técnologias pelas empresas em conjunto com os governos de países interessados estes desafios devem ser superados.
          </p>
          
        </div>

        <div className="timeline">
          <div className="line"></div>
          {[
            { id: 1, title: 'Transporte de materia e equipamento', content: 'A exploração espacial é um ramo caro e um dos principais fatores que influenciam este preço é o transporte. Para realizar a mineração espacial se deve utilzar varios equipamentos para a extração e estes podem ser muito volumosos e pesados. Essas características dificultam a logistica da operação e exigem o desenvolvimento de novas técnologias para o transporte e consequentemente um maior investimento financeiro em pesquisa e produção destes equipamentos.' },
            { id: 2, title: 'Manutenção da vida humana no espaço', content: 'O corpo humano demostra algumas necessidade básicas para sua sobrevivencia e o espaço sideral se mostra bastante perigoso para o funcionamento de nosso organismo. Por mais que já seja possivel manter um ser humano vivo no espaço é presciso desenvolver maneiras de uma sobrevivencia a longo prazo, levando em conta não somento o aspecto físico mas também o psicológico. Para solucionar este problema devemos considerar as missões não tripuladas como opção ou o desenvolvimento de um sistema de suporte à vida que suporte mais que 1 membro.' },
            { id: 3, title: 'Viabilidade econômica no mercado terrestre', content: 'O sistema social-econômica mais popular no mundo é o capitalismo, sistema que visa em primeiro lugar o lucro. Assim a única maneira de tornar a mineração realidade é quando ela gerar lucro. Como a mineração espacial e as técnologias que dão suporte a ela serçao caras, o elemento que vai ser minerado deve ser muito escasso ou simplesmente não existir no planeta terra. Somente assim esse ramo futurístico da mineração poderà ser viável ao mercado de matéria prima terrestre' },
            { id: 4, title: 'Falta de uma jurisdição clara', content: 'O desenvolvimento de uma serie de regras é necessário para a ordem de qualquer setor, e com o espaço não é diferente. Como a mineração é um setor que envolve uma grande quantidade de dinheiro, o desenvolvimento de regras por um órgão responsável iria tornar o setor mais confiável o que faria com que mais empresas investissem seu capital nesta área.' },
            { id: 5, title: 'A geração de energia no espaço', content: 'Para a mineração espacial acontecer os operadores devem contar com diversos aparelhos sendo muitos destes de grande porte. Assim surge o problema de como gerar energia para alimentar esta grande quantidade de equipamentos Em primeiro lugar podemos pensar no sol como fonte desta energia, mas vários lugares do universo não tem muita incidência de luz solar o que tornaria essa ideia improvável. Podemos considerar minerar primeiro elementos que poderiam ser usados como fonte energética para a missão.' },
          ].map((desafio) => (
            <div className="item" key={desafio.id}>
              <div className="circle"></div>
              <div className="item-title" onClick={handleToggle}>
                {desafio.title}
              </div>
              <div className="item-content" style={{ display: 'none' }}>
                {desafio.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Desafios;
