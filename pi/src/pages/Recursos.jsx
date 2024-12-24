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
    if (n == 3){
     elemento = n
     titulo = 'AAAAAA'
     texto = 'Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1 Texto1'
    }
    else if (n == 48){
      elemento = n
      titulo = 'BBBBBBB'
      texto = 'Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 Texto2 '
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
            <a onClick={()=>Atualizar(3)}><Elemento classe= {"elemento-clicavel"} n_atomico = {3} simbolo = {"Li"} nome = {"Lítio"} peso = "6,94"></Elemento></a>
            <Elemento classe= {"elemento"} n_atomico = {4} simbolo = {"Be"} nome = {"Berílio"} peso = "9,0122"></Elemento>

            <section className="col-hidden col-span10"></section>

            <Elemento classe= {"elemento"} n_atomico = {5} simbolo = {"B"} nome = {"Boro"} peso = "10,81"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {6} simbolo = {"C"} nome = {"Carbono"} peso = "12,011"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {7} simbolo = {"N"} nome = {"Nitrogênio"} peso = "14,007"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {8} simbolo = {"O"} nome = {"Oxigênio"} peso = "15,999"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {9} simbolo = {"F"} nome = {"Flúor"} peso = "18,998"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {10} simbolo = {"Ne"} nome = {"Neônio"} peso = "20,180"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {11} simbolo = {"Na"} nome = {"Sódio"} peso = "22,990"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {12} simbolo = {"Mg"} nome = {"Magnésio"} peso = "24,305"></Elemento>


            <section className="col-hidden col-span10"></section>

            <Elemento classe= {"elemento"} n_atomico = {13} simbolo = {"Al"} nome = {"Alumínio"} peso = "26,982"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {14} simbolo = {"Si"} nome = {"Silício"} peso = "28,085"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {15} simbolo = {"P"} nome = {"Fósforo"} peso = "30,974"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {16} simbolo = {"S"} nome = {"Enxofre"} peso = "32,06"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {17} simbolo = {"Cl"} nome = {"Cloro"} peso = "35,45"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {18} simbolo = {"Ar"} nome = {"Argônio"} peso = "39,95"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {19} simbolo = {"K"} nome = {"Potássio"} peso = "39,098"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {20} simbolo = {"Ca"} nome = {"Cálcio"} peso = "40,078"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {21} simbolo = {"Sc"} nome = {"Escândio"} peso = "44,956"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {22} simbolo = {"Ti"} nome = {"Titânio"} peso = "47,867"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {23} simbolo = {"V"} nome = {"Vanádio"} peso = "50,942"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {24} simbolo = {"Cr"} nome = {"Cromo"} peso = "51,996"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {25} simbolo = {"Mn"} nome = {"Manganês"} peso = "54,938"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {26} simbolo = {"Fe"} nome = {"Ferro"} peso = "55,845"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {27} simbolo = {"Co"} nome = {"Cobalto"} peso = "58,933"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {28} simbolo = {"Ni"} nome = {"Níquel"} peso = "58,693"></Elemento>
            <Elemento classe= {"elemento"} n_atomico = {29} simbolo = {"Cu"} nome = {"Cobre"} peso = "63,546"></Elemento>
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
            <a onClick={()=>Atualizar(48)}><Elemento classe= {"elemento-clicavel"} n_atomico = {48} simbolo = {"Cd"} nome = {"Cádmio"} peso = "112,41"></Elemento></a>
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
            <Elemento classe= {"elemento"} n_atomico = {78} simbolo = {"Pt"} nome = {"Platina"} peso = "195,08"></Elemento>
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
          {elemento == 3 && <InfoElemento classe= {"elemento"} n_atomico = {3} simbolo = {"Li"} nome = {"Lítio"} peso = "6,94"></InfoElemento>}
          {elemento == 48 && <InfoElemento classe= {"elemento"} n_atomico = {48} simbolo = {"Cd"} nome = {"Cádmio"} peso = "112,41"></InfoElemento>}
        </main>
      </div>
    </>
  )
}

export default Recursos

