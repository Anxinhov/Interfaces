import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import BarraBusca from './BarraBusca'
import ListaProductos from './ListaProductos'

function App() {
  const [textoBusqueda, setTextoBusqueda] = useState("")
  const PRODUCTOS = [
    'Teclado mecánico',
    'Rato sen fíos',
    'Monitor 4K',
    'Auriculares bluetooth',
    'Alfombrilla RGB',
    'Cámara web HD'
  ]
  const productosFiltrados = PRODUCTOS.filter((producto) => producto.toLowerCase().includes(textoBusqueda.toLowerCase()))
  return(<>
      <BarraBusca textoBusqueda={textoBusqueda} setTextoBusqueda={setTextoBusqueda}></BarraBusca>
      <ListaProductos productosFiltrados={productosFiltrados} textoBusqueda={textoBusqueda}></ListaProductos>
    </>)
}

export default App
