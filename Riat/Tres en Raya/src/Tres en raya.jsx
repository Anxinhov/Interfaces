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

export default function xogo(){
const [historial, setHistorial] = useState([Array(9).fill(null)])
const [movementoActual, setMovementoActual] = useState(0)
const cadradosActuais = historial[movementoActual]
const xTurno =(movementoActual % 2 === 0)
const [ascendente, setAscendente] = useState(true)

function handleXogo(novosCadrados){
  const novoHistorial = [...historial.slice(0,movementoActual +1),novosCadrados]
  setHistorial (novoHistorial)
  setMovementoActual (novoHistorial.length - 1);
  
}

function ClickMovemento(index){
  novosCadrados
}

function saltarA(movemento) {
  setMovementoActual(movemento)
}

const movementos = historial.map(
  (movimiento, index) =><li key={index}>{index == movementoActual && <p>Estas en el turno #{movementoActual}</p>}{index != movementoActual && <button onClick={()=>saltarA(index)}>{index == 0 && "Ir al inicio del juego"}{index != 0 && "Ir al movimiento #"+index}</button>}</li>
)
  return<>
    <div className="game">
    <div className="game-info">
      <ol>
        {ascendente && movementos}{!ascendente && movementos.reverse()}
      </ol>
      <button onClick={() => setAscendente(!ascendente)}>Cambiar orden</button>
    </div>
    <div className="game-board">
      <Taboleiro xTurno={xTurno} cadrados={cadradosActuais} onXogar={handleXogo}/>
    </div>
    </div>
  </>
}
export function Taboleiro({xTurno, cadrados, onXogar}) {
  
  
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
    onXogar(novosCadrados)
    
  }
  return (
  <>
    
    <div>{estado}</div>
    <div>
    {cadrados.map((cadrado,index) =><span key={index}><Cadrado valor={cadrados[index]} onCadradoClick={() => handleClick(index)}/>{(index+1) % 3 === 0 && <div></div>}</span>)}
    </div>     
  </>);
}