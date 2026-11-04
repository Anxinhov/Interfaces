import './App.css'
import { useState } from "react"
import Button from './Button.jsx'
import { sculptureList } from './data.jsx'

export default function Galeria() {

  const [index, setIndex] = useState(0)
  const [mostrar, setMostrar] = useState(false)
  function onSeguinteClick() {
    if (index < sculptureList.length -1) {
      setIndex (index + 1) 
    } else {
      setIndex(0)
    } 
  } 
  
  function onDetalles() {
    if(mostrar == false){
      setMostrar(true)
    }else{
      setMostrar(false)
    }
    }

    let escultura = sculptureList[index]

    
      return (
      <>
        <Button onClick={onSeguinteClick}> Seguinte </Button>
        <h2>{escultura.name}</h2>
        <Button onClick={onDetalles}>{mostrar && "Ocultar detalles"}{!mostrar && "Mostrar detalles"}</Button>
        {mostrar &&<p>{escultura.description}</p>}
        <img src={escultura.url} alt={escultura.alt}/>
        <br></br>
        <h4>Imaxe {index + 1} de {sculptureList.length}</h4>
      </>
      )
}