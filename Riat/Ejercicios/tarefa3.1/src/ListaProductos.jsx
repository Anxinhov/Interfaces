

export default function ListaProductos({productosFiltrados, textoBusqueda}){
    return(<>
        {productosFiltrados.length > 0 &&<ul>{productosFiltrados.map((producto) => <li key={producto}>{producto}</li>)}</ul>}
      {productosFiltrados.length == 0 &&<p>Non se atoparon resultados para: {textoBusqueda}</p>}
      </>
    )
}