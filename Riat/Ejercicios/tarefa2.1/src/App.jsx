// Versión estática: solo JSX, map y key (contenido de la unidad)

import { useState } from "react";


function Cadrado({valor, onCadradoClick}) {
  return (
  <button
    className="square"
    onClick={onCadradoClick}>
      {valor}
  </button>
  )
}

function calcularGanador(cadrados) {
  const ganadoras = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  let ganador = null;
  for (let i = 0; i <ganadoras.length; i++){
    const [a,b,c] = ganadoras[i]
    if (cadrados[a] && cadrados[a] == cadrados[b] && cadrados[a] == cadrados[c]){
      ganador=cadrados[a]
    }
  }
  return ganador
}
export default function Taboleiro() {
  const [xTurno, setXturno] = useState(true)
  const [cadrados, setCadrados] = useState(Array(9).fill(null));
  let estado;
  const ganador = calcularGanador(cadrados);  

  if (ganador != null){
    estado = "Ganador: " + ganador;
  }else{
    estado = "Siguiente xogador: " + (xTurno? "X" : "O");
  }

  function handleClick(i){
    const novosCadrados = cadrados.slice();
    
    if (xTurno){
    novosCadrados[i] = "X";
    }else{
    novosCadrados[i] = "O";
    }
    setCadrados(novosCadrados);
    setXturno (!xTurno)
  }
  return (
  <>
    <div>{estado}</div>
    <div>
      <Cadrado valor={cadrados[0]} onCadradoClick={() => handleClick(0)}/>
      <Cadrado valor={cadrados[1]} onCadradoClick={() => handleClick(1)}/>
      <Cadrado valor={cadrados[2]} onCadradoClick={() => handleClick(2)}/>    
    </div>
    <div>
      <Cadrado valor={cadrados[3]} onCadradoClick={() => handleClick(3)}/>
      <Cadrado valor={cadrados[4]} onCadradoClick={() => handleClick(4)}/>
      <Cadrado valor={cadrados[5]} onCadradoClick={() => handleClick(5)}/>    
    </div>
    <div>
      <Cadrado valor={cadrados[6]} onCadradoClick={() => handleClick(6)}/>
      <Cadrado valor={cadrados[7]} onCadradoClick={() => handleClick(7)}/>
      <Cadrado valor={cadrados[8]} onCadradoClick={() => handleClick(8)}/>    
    </div>       
  </>);
}
  {/*Ejercicio 1
  const produtos = [
  { id: 1, nome: "Teclado", prezo: 25 },
  { id: 2, nome: "Rato", prezo: 15 },
];
export default function Tenda() {
  return (<>
    
      <h1 className="titulo">Tenda</h1>
      <img src="logo.png" alt="Logo"></img>
      <ul>
        {produtos.map((p) => (
          <li key={p.id}>{p.nome} - {p.prezo} €</li>
        ))}
      </ul>
      </>);
} 
  Ejercicio2
let nome ="Lucía Pérez";
let rol = "Deseñadora web";
let foto = "foto.jpg";
let inicio = 2019;
export default function Lucia(){
  return(
  <>
    <h1>{nome}</h1>
    <img src={foto} alt="Foto de Lucía" className="foto" style={{maxHeight:500, maxWidth: 320}}></img>
    <p className="rol">{rol}</p>
    <p>{nome} anos de experiencia: {2026-inicio}</p>
    <label htmlFor="correo">Correo</label>
    <input id="correo" type="email" tabIndex={1}></input>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
    <p style={{color: "gray", fontSize: 14}}>Dispoñible para proxectos</p>
  </>);
}

let nome ="Anxo Vázquez";
let rol = "programador";
let foto = "images.jpg";
export default function perfil(){
  return(
    <>
      <h1>{nome}</h1>
    <img src={foto} alt="Foto de Anxo" className="foto" style={{maxHeight:500, maxWidth: 320}}></img>
    <p className="rol">{rol}</p>
    
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
    <p style={{color: "gray", fontSize: 14}}>Dispoñible para proxectos</p>
    </>
  )
}*/}