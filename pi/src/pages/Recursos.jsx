import './Recursos.css'
import Elemento from '../components/Elemento'
import InfoElemento from '../components/InfoElemento'
import { useState } from 'react'



let elemento = 0
let titulo = ''
let texto = ''
function Recursos() {
  const [key, setKey] = useState(0);

  const recarregar = () => {
    setKey(prevKey => prevKey + 1); // Incrementa a chave para forçar o recarregamento
  };

  function Atualizar(n) {
    if (n == 26){
     elemento = n
     titulo = 'Ferro'
     texto = 'O ferro (Fe) é um elemento químico metálico, pertencente ao grupo 8 e período 4 da Tabela Periódica, classificado como um metal de transição. Ele é conhecido por suas propriedades de ductilidade e maleabilidade. Com número atômico 26 e massa atômica 55,845, o ferro desempenha um papel crucial em diversos processos industriais e tecnológicos. Sua principal aplicação está na produção de aço, uma liga metálica essencial para a fabricação de ferramentas, máquinas, veículos de transporte e equipamentos utilizados em pesquisa científica. Além disso, o ferro é encontrado em grandes quantidades em asteroides, e a possibilidade de sua extração fora da Terra pode se tornar uma solução para a escassez desse recurso na superfície terrestre.'
    }
    else if (n == 12){
      elemento = n
      titulo = 'Magnésio'
      texto = 'O magnésio (Mg) é um elemento químico metálico pertencente ao grupo 2 e período 3 da Tabela Periódica, classificado como um metal alcalino-terroso. Ele possui número atômico 12 e massa atômica 24,3050. Uma de suas características mais notáveis é a capacidade de produzir uma luz branca de alta intensidade e brilho quando queimado, o que o torna um componente essencial na fabricação de fogos de artifício. Além disso, o magnésio destaca-se na produção de ligas metálicas, sendo amplamente utilizado nos setores de construção civil, na fabricação de aeronaves e em instrumentos ópticos e eletrônicos. Ele também está presente em alguns planetas, com destaque para Marte. A extração de magnésio fora da Terra apresenta potencial para suprir a demanda deste elemento em tecnologias que contribuem para o cotidiano e para avanços científicos.'
    }
    else if (n == 16){
      elemento = n
      titulo = 'Enxofre'
      texto = 'O enxofre (S) é um elemento químico não metálico localizado no grupo 16 e período 3 da Tabela Periódica, pertencente à família dos calcogênios. Ele possui número atômico 16 e massa atômica 32,06. Esse elemento é amplamente utilizado em diversos setores industriais e tecnológicos.  Entre suas aplicações mais relevantes está a produção de ácido sulfúrico, um dos compostos químicos mais importantes para a indústria, usado na fabricação de fertilizantes, produtos químicos e baterias. O enxofre também é utilizado na fabricação de pneus, no tratamento de água e na produção de medicamentos e fungicidas. O elemento pode ser encontrado em depósitos naturais na Terra, como em regiões vulcânicas, além de estar presente em luas e planetas no Sistema Solar. A exploração do enxofre em outros corpos celestes poderia ser uma solução para ampliar sua disponibilidade e atender à crescente demanda em áreas estratégicas, como a agricultura e a ciências.'
    }
    else if (n == 13){
      elemento = n
      titulo = 'Alumínio'
      texto = 'O alumínio (Al) é um elemento químico metálico localizado no grupo 13 e período 3 da Tabela Periódica, pertencente à família dos metais representativos. Ele possui número atômico 13 e massa atômica 26,9815. É um metal leve, maleável e altamente resistente à corrosão, características que o tornam um dos materiais mais utilizados na indústria moderna. O alumínio é amplamente empregado na fabricação de componentes para aviação, automóveis, construção civil e embalagens, como latas e folhas metálicas. Além disso, é essencial na produção de ligas metálicas, equipamentos eletrônicos e utensílios domésticos. Sua alta condutividade térmica e elétrica o destaca em aplicações que exigem eficiência energética. Na natureza, o alumínio é encontrado principalmente em minerais como a bauxita, mas sua presença também é detectada em corpos celestes, incluindo a Lua e asteroides. A exploração de alumínio fora da Terra pode oferecer uma alternativa para suprir a crescente demanda industrial e apoiar avanços tecnológicos que contribuam para a sustentabilidade e o desenvolvimento científico.'
    }
    else if (n == 17){
      elemento = n
      titulo = 'Cloro'
      texto = 'O cloro (Cl) é um elemento químico não metálico localizado no grupo 17 e período 3 da Tabela Periódica, pertencente à família dos halogênios. Ele possui número atômico 17 e massa atômica 35,45. Em sua forma pura, o cloro é um gás amarelo-esverdeado, altamente reativo e tóxico, com um odor característico. O cloro desempenha um papel crucial na indústria e na vida cotidiana. Ele é amplamente utilizado na desinfecção de água potável e piscinas, sendo eficaz no combate a microrganismos. Também é empregado na produção de compostos químicos, como o PVC, e na fabricação de produtos de limpeza, medicamentos e pesticidas. Na natureza, o cloro é encontrado principalmente em forma de cloretos, como o cloreto de sódio (sal de cozinha), presente em grandes quantidades nos oceanos. Embora raro, o cloro também pode ser detectado em outros corpos celestes. Sua exploração em ambientes extraterrestres pode contribuir para a obtenção de recursos estratégicos e para o avanço de tecnologias essenciais à vida humana.'
    }
    else if (n == 22){
      elemento = n
      titulo = 'Titânio'
      texto = 'O titânio (Ti) é um elemento químico metálico localizado no grupo 4 e período 4 da Tabela Periódica, pertencente à classe dos metais de transição. Ele possui número atômico 22 e massa atômica 47,867. É conhecido por sua alta resistência mecânica, leveza e excelente resistência à corrosão, sendo amplamente utilizado em aplicações industriais e tecnológicas. O titânio é essencial na fabricação de ligas metálicas empregadas na indústria aeroespacial, naval e automobilística. Além disso, ele é utilizado em implantes médicos, como próteses e dispositivos ortopédicos, devido à sua biocompatibilidade. O elemento também é aplicado na produção de pigmentos para tintas, papel e plásticos, por meio do dióxido de titânio. Na natureza, o titânio é encontrado em minerais como a ilmenita e o rutilo, além de estar presente em corpos celestes, incluindo a Lua e meteoritos. A exploração do titânio fora da Terra representa uma possibilidade promissora para atender à demanda crescente desse elemento em setores estratégicos e para impulsionar inovações tecnológicas que beneficiem a ciência e a indústria.'
    }
    else if (n == 78){
      elemento = n
      titulo = 'Platina'
      texto = 'A platina (Pt) é um elemento químico metálico localizado no grupo 10 e período 6 da Tabela Periódica, classificado como um metal de transição. Possui número atômico 78 e massa atômica 195,084. É conhecida por sua elevada resistência à corrosão, alta densidade e excelente maleabilidade, características que a tornam extremamente valiosa em diversas aplicações. A platina é amplamente utilizada na fabricação de catalisadores para automóveis e processos químicos, em joias de alta qualidade e em componentes de dispositivos eletrônicos, como discos rígidos e eletrodos. Além disso, ela é essencial em procedimentos médicos, sendo empregada em equipamentos e medicamentos, como agentes para tratamentos contra o câncer. Embora rara na crosta terrestre, a platina pode ser encontrada em asteroides e em outras formações celestes, o que desperta interesse em sua exploração espacial. A obtenção de platina fora da Terra tem o potencial de suprir sua demanda crescente, impulsionando avanços tecnológicos e científicos em diferentes setores.'
    }
    else if (n == 6){
      elemento = n
      titulo = 'Carbono'
      texto = 'O carbono (C) é um elemento químico não metálico localizado no grupo 14 e período 2 da Tabela Periódica, com número atômico 6 e massa atômica 12,011. É conhecido por sua versatilidade química, formando uma ampla variedade de compostos e estruturas que incluem moléculas orgânicas, diamantes, grafite e os revolucionários fulerenos e nanotubos de carbono. O carbono é essencial para a vida na Terra, sendo o principal elemento estrutural das moléculas biológicas, como proteínas, lipídios, carboidratos e ácidos nucleicos. Na área industrial, é amplamente utilizado na produção de combustíveis fósseis, plásticos, materiais compósitos e em tecnologias avançadas, como eletrônicos e baterias. Suas formas alotrópicas, como o grafeno, têm aplicações promissoras em setores como energia, eletrônica e medicina. Embora o carbono seja abundante na Terra, ele também é encontrado em grande quantidade em meteoritos e outros corpos celestes. A exploração de carbono fora do planeta pode abrir novas possibilidades para a fabricação de materiais avançados e para o desenvolvimento de tecnologias espaciais e terrestres.'
    }
    else if (n == 29){
      elemento = n
      titulo = 'Cobre'
      texto = 'O cobre (Cu) é um elemento químico metálico localizado no grupo 11 e período 4 da Tabela Periódica, classificado como um metal de transição. Ele possui número atômico 29 e massa atômica 63,546. O cobre destaca-se por sua excelente condutividade elétrica e térmica, além de sua ductilidade e resistência à corrosão, tornando-o um dos metais mais utilizados pela humanidade. Industrialmente, o cobre é essencial na fabricação de fios elétricos, cabos, componentes eletrônicos e sistemas de aquecimento e refrigeração. Ele também é amplamente empregado em ligas metálicas, como o bronze e o latão, além de ser utilizado em tubulações, telhados e moedas. Na biologia, o cobre desempenha um papel vital como micronutriente essencial para diversos organismos. Embora seja encontrado em abundância na crosta terrestre, o cobre também está presente em asteroides e outros corpos celestes. A exploração espacial do cobre pode representar uma alternativa sustentável para atender à crescente demanda por esse metal em aplicações tecnológicas e industriais, contribuindo para o avanço da ciência e da engenharia.'
    }
    else if (n == 28){
      elemento = n
      titulo = 'Níquel'
      texto = 'O níquel (Ni) é um elemento químico metálico localizado no grupo 10 e período 4 da Tabela Periódica, classificado como um metal de transição. Ele possui número atômico 28 e massa atômica 58,6934. Conhecido por sua alta resistência à corrosão e capacidade de formar ligas metálicas, o níquel é amplamente utilizado em diversas aplicações industriais. Sua principal utilização está na produção de aços inoxidáveis e ligas super-resistentes, essenciais para a construção de equipamentos industriais, turbinas aeronáuticas e submarinos. O níquel também é empregado em baterias recarregáveis, como as de íon-lítio e níquel-cádmio, que alimentam dispositivos eletrônicos e veículos elétricos. Além disso, ele tem aplicações importantes em revestimentos metálicos e na cunhagem de moedas. Embora o níquel seja encontrado em grande quantidade na crosta terrestre, ele também é abundante em meteoritos e asteroides metálicos. A exploração espacial desse metal pode abrir novas possibilidades para suprir a demanda crescente e impulsionar avanços tecnológicos, especialmente no desenvolvimento de tecnologias limpas e sustentáveis.'
    }
    recarregar()
  }

  return (
    <>
      <div className='banner'>
          <h1>RECURSOS</h1>
          <img src='../../public/bannerRecursos.jpg' />
      </div>

      <h2 className='titulo'>Tabela Periódica</h2>

      <div className='tabela'>
        <main>
          <div id="grid-container"> 
            <Elemento classe= {"elemento"} n_atomico = {1} simbolo = {"H"} nome = {"Hidrogênio"} peso = "1,008"></Elemento>

            <section className="col-hidden col-span16"></section>

            <Elemento classe= {"elemento"} n_atomico = {2} simbolo = {"He"} nome = {"Hélio"} peso = "4,003"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {3} simbolo = {"Li"} nome = {"Lítio"} peso = "6,94"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {4} simbolo = {"Be"} nome = {"Berílio"} peso = "9,0122"></Elemento>

            <section className="col-hidden col-span10"></section>

            <Elemento classe= {"elemento"} n_atomico = {5} simbolo = {"B"} nome = {"Boro"} peso = "10,81"></Elemento>
            <a onClick={()=>Atualizar(6)}><Elemento classe= {"elemento-clicavel"} n_atomico = {6} simbolo = {"C"} nome = {"Carbono"} peso = "12,011"></Elemento></a>
            <Elemento classe= {"elemento"} n_atomico = {7} simbolo = {"N"} nome = {"Nitrogênio"} peso = "14,007"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {8} simbolo = {"O"} nome = {"Oxigênio"} peso = "15,999"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {9} simbolo = {"F"} nome = {"Flúor"} peso = "18,998"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {10} simbolo = {"Ne"} nome = {"Neônio"} peso = "20,180"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {11} simbolo = {"Na"} nome = {"Sódio"} peso = "22,990"></Elemento>
            <a onClick={()=>Atualizar(12)}><Elemento classe= {"elemento-clicavel"} n_atomico = {12} simbolo = {"Mg"} nome = {"Magnésio"} peso = "24,305"></Elemento></a>


            <section className="col-hidden col-span10"></section>

            <a onClick={()=>Atualizar(13)}><Elemento classe= {"elemento-clicavel"} n_atomico = {13} simbolo = {"Al"} nome = {"Alumínio"} peso = "26,982"></Elemento></a>
            <Elemento classe= {"elemento"} n_atomico = {14} simbolo = {"Si"} nome = {"Silício"} peso = "28,085"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {15} simbolo = {"P"} nome = {"Fósforo"} peso = "30,974"></Elemento>
            <a onClick={()=>Atualizar(16)}><Elemento classe= {"elemento-clicavel"} n_atomico = {16} simbolo = {"S"} nome = {"Enxofre"} peso = "32,06"></Elemento></a>
            <a onClick={()=>Atualizar(17)}><Elemento classe= {"elemento-clicavel"} n_atomico = {17} simbolo = {"Cl"} nome = {"Cloro"} peso = "35,45"></Elemento></a>
            <Elemento classe= {"elemento"} n_atomico = {18} simbolo = {"Ar"} nome = {"Argônio"} peso = "39,95"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {19} simbolo = {"K"} nome = {"Potássio"} peso = "39,098"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {20} simbolo = {"Ca"} nome = {"Cálcio"} peso = "40,078"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {21} simbolo = {"Sc"} nome = {"Escândio"} peso = "44,956"></Elemento>
            <a onClick={()=>Atualizar(22)}><Elemento classe= {"elemento-clicavel"} n_atomico = {22} simbolo = {"Ti"} nome = {"Titânio"} peso = "47,867"></Elemento></a>
            <Elemento classe= {"elemento"} n_atomico = {23} simbolo = {"V"} nome = {"Vanádio"} peso = "50,942"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {24} simbolo = {"Cr"} nome = {"Cromo"} peso = "51,996"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {25} simbolo = {"Mn"} nome = {"Manganês"} peso = "54,938"></Elemento>
            <a onClick={()=>Atualizar(26)}><Elemento classe= {"elemento-clicavel"} n_atomico = {26} simbolo = {"Fe"} nome = {"Ferro"} peso = "55,845"></Elemento></a>
            <Elemento classe= {"elemento"} n_atomico = {27} simbolo = {"Co"} nome = {"Cobalto"} peso = "58,933"></Elemento>
            <a onClick={()=>Atualizar(28)}><Elemento classe= {"elemento-clicavel"} n_atomico = {28} simbolo = {"Ni"} nome = {"Níquel"} peso = "58,693"></Elemento></a>
            <a onClick={()=>Atualizar(29)}><Elemento classe= {"elemento-clicavel"} n_atomico = {29} simbolo = {"Cu"} nome = {"Cobre"} peso = "63,546"></Elemento></a>
            <Elemento classe= {"elemento"} n_atomico = {30} simbolo = {"Zn"} nome = {"Zinco"} peso = "65,38"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {31} simbolo = {"Ga"} nome = {"Gálio"} peso = "69,723"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {32} simbolo = {"Ge"} nome = {"Germânio"} peso = "72,63"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {33} simbolo = {"As"} nome = {"Arsênio"} peso = "74,922"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {34} simbolo = {"Se"} nome = {"Selênio"} peso = "78,96"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {35} simbolo = {"Br"} nome = {"Bromo"} peso = "79,904"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {36} simbolo = {"Kr"} nome = {"Criptônio"} peso = "83,798"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {37} simbolo = {"Rb"} nome = {"Rubídio"} peso = "85,468"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {38} simbolo = {"Sr"} nome = {"Estrôncio"} peso = "87,62"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {39} simbolo = {"Y"} nome = {"Ítrio"} peso = "88,906"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {40} simbolo = {"Zr"} nome = {"Zircônio"} peso = "91,224"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {41} simbolo = {"Nb"} nome = {"Nióbio"} peso = "92,906"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {42} simbolo = {"Mo"} nome = {"Molibdênio"} peso = "95,95"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {43} simbolo = {"Tc"} nome = {"Tecnécio"} peso = "(98)"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {44} simbolo = {"Ru"} nome = {"Rutênio"} peso = "101,07"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {45} simbolo = {"Rh"} nome = {"Ródio"} peso = "102,91"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {46} simbolo = {"Pd"} nome = {"Paládio"} peso = "106,42"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {47} simbolo = {"Ag"} nome = {"Prata"} peso = "107,87"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {48} simbolo = {"Cd"} nome = {"Cádmio"} peso = "112,41"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {49} simbolo = {"In"} nome = {"Índio"} peso = "114,82"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {50} simbolo = {"Sn"} nome = {"Estanho"} peso = "118,71"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {51} simbolo = {"Sb"} nome = {"Antimônio"} peso = "121,76"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {52} simbolo = {"Te"} nome = {"Telúrio"} peso = "127,6"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {53} simbolo = {"I"} nome = {"Iodo"} peso = "126,90"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {54} simbolo = {"Xe"} nome = {"Xenônio"} peso = "131,29"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {55} simbolo = {"Cs"} nome = {"Césio"} peso = "132,91"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {56} simbolo = {"Ba"} nome = {"Bário"} peso = "137,33"></Elemento>

            <section className="elemento">
              <span>57 - 71</span>
              <h2>* *</h2>
            </section>

            <Elemento classe= {"elemento"} n_atomico = {72} simbolo = {"Hf"} nome = {"Háfnio"} peso = "178,49"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {73} simbolo = {"Ta"} nome = {"Tântalo"} peso = "180,95"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {74} simbolo = {"W"} nome = {"Tungstênio"} peso = "183,84"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {75} simbolo = {"Re"} nome = {"Rênio"} peso = "186,21"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {76} simbolo = {"Os"} nome = {"Ósmio"} peso = "190,23"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {77} simbolo = {"Ir"} nome = {"Irídio"} peso = "192,22"></Elemento>
            <a onClick={()=>Atualizar(78)}><Elemento classe= {"elemento-clicavel"} n_atomico = {78} simbolo = {"Pt"} nome = {"Platina"} peso = "195,08"></Elemento></a>
            <Elemento classe= {"elemento"} n_atomico = {79} simbolo = {"Au"} nome = {"Ouro"} peso = "196,97"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {80} simbolo = {"Hg"} nome = {"Mercúrio"} peso = "200,59"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {81} simbolo = {"Tl"} nome = {"Tálio"} peso = "204,38"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {82} simbolo = {"Pb"} nome = {"Chumbo"} peso = "207,2"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {83} simbolo = {"Bi"} nome = {"Bismuto"} peso = "208,98"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {84} simbolo = {"Po"} nome = {"Polônio"} peso = "209"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {85} simbolo = {"At"} nome = {"Astato"} peso = "210"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {86} simbolo = {"Rn"} nome = {"Radônio"} peso = "222"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {87} simbolo = {"Fr"} nome = {"Frâncio"} peso = "223"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {88} simbolo = {"Ra"} nome = {"Rádio"} peso = "226"></Elemento>

            <section className="elemento">
              <span>89 - 103</span>
              <h2>* *</h2>
            </section>

            <Elemento classe= {"elemento"} n_atomico = {104} simbolo = {"Rf"} nome = {"Rutherfórdio"} peso = "267"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {105} simbolo = {"Db"} nome = {"Dúbnio"} peso = "270"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {106} simbolo = {"Sg"} nome = {"Seabórgio"} peso = "271"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {107} simbolo = {"Bh"} nome = {"Bóhrio"} peso = "270"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {108} simbolo = {"Hs"} nome = {"Hássio"} peso = "277"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {109} simbolo = {"Mt"} nome = {"Meitnério"} peso = "278"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {110} simbolo = {"Ds"} nome = {"Darmstádio"} peso = "281"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {111} simbolo = {"Rg"} nome = {"Roentgênio"} peso = "282"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {112} simbolo = {"Cn"} nome = {"Copernício"} peso = "285"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {113} simbolo = {"Nh"} nome = {"Nihônio"} peso = "286"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {114} simbolo = {"Fl"} nome = {"Fleróvio"} peso = "289"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {115} simbolo = {"Mc"} nome = {"Moscóvio"} peso = "290"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {116} simbolo = {"Lv"} nome = {"Livermório"} peso = "293"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {117} simbolo = {"Ts"} nome = {"Tenessino"} peso = "294"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {118} simbolo = {"Og"} nome = {"Oganessônio"} peso = "294"></Elemento>
          </div>
        </main>
      </div>
      
      <div className='elemento-clique' key={key}>
        <main>
          <div className='texto-elemento'>
            <h2>{titulo}</h2>
            <p>{texto}</p>
          </div>
          {elemento == 26 && <InfoElemento classe= {"elemento"} n_atomico = {26} simbolo = {"Fe"} nome = {"Ferro"} peso = "55,845"></InfoElemento>}
          {elemento == 12 && <InfoElemento classe= {"elemento"} n_atomico = {12} simbolo = {"Mg"} nome = {"Magnésio"} peso = "24,305"></InfoElemento>}
          {elemento == 16 && <InfoElemento classe= {"elemento"} n_atomico = {16} simbolo = {"S"} nome = {"Enxofre"} peso = "32,06"></InfoElemento>}
          {elemento == 13 && <InfoElemento classe= {"elemento"} n_atomico = {13} simbolo = {"Al"} nome = {"Alumínio"} peso = "26,982"></InfoElemento>}
          {elemento == 17 && <InfoElemento classe= {"elemento"} n_atomico = {17} simbolo = {"Cl"} nome = {"Cloro"} peso = "35,45"></InfoElemento>}
          {elemento == 78 && <InfoElemento classe= {"elemento"} n_atomico = {78} simbolo = {"Pt"} nome = {"Platina"} peso = "195,08"></InfoElemento>}
          {elemento == 22 && <InfoElemento classe= {"elemento"} n_atomico = {22} simbolo = {"Ti"} nome = {"Titânio"} peso = "47,867"></InfoElemento>}
          {elemento == 6 && <InfoElemento classe= {"elemento"} n_atomico = {6} simbolo = {"C"} nome = {"Carbono"} peso = "12,011"></InfoElemento>}
          {elemento == 28 && <InfoElemento classe= {"elemento"} n_atomico = {28} simbolo = {"Ni"} nome = {"Níquel"} peso = "58,693"></InfoElemento>}
          {elemento == 29 && <InfoElemento classe= {"elemento"} n_atomico = {29} simbolo = {"Cu"} nome = {"Cobre"} peso = "63,546"></InfoElemento>}
        </main>
      </div>
    </>
  )
}

export default Recursos

