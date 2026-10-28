// Versión estática: solo JSX, map y key (contenido de la unidad)


{/*function Cadrado() {
  const cuadrados = []
  for(let i = 1; i <= 9; i = i + 3){
  cuadrados.push(
  <div className="board-row">
  <button className="square"> {i}</button>
  <button className="square"> {i+1}</button>
  <button className="square"> {i+2}</button>
  </div>
  )
  }
  return cuadrados;
}
export default function Taboleiro() {
  
  return (
  <>
    <Cadrado/>        
  </>);
}
  Ejercicio 1
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
import Tarxeta from './Tarxeta.jsx'
const contenido = [{id:1,nombre:"Pista 1",deporte:"Padel",tipo:"Pista cubierta",estado:"Pista de hierba",dispoñible:true},{id:2,nombre:"Pista 2",deporte:"Tenis",tipo:"Pista cubierta",estado:"Pista de tierra batida",dispoñible:false}]
export default function Tarjeta(){
    return<>
    {contenido.map(pista =>
      <div key={pista.id}>
        <Tarxeta 
          key={pista.id}
          pista={pista}/>
      <br></br>
      </div>
    )}
    </>
    }