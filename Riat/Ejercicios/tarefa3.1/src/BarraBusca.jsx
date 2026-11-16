export default function BarraBusca({ textoBusqueda, setTextoBusqueda}){
    
  return (
    <>
      <input type='text' value={textoBusqueda} onChange={(e) => setTextoBusqueda(e.target.value)}></input>
    </>)
}