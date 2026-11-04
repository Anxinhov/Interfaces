
import Tarxeta from './Tarxeta.jsx'
import Navegador from './Navegador.jsx'
const contenido = [{id:1,nombre:"Pista 1",deporte:"Padel",tipo:"Pista cubierta",estado:"Pista de hierba",dispoñible:true,imagen: "Padel.jpg"},{id:2,nombre:"Pista 2",deporte:"Tenis",tipo:"Pista cubierta",estado:"Pista de tierra batida",dispoñible:false, imagen: "images.jpg"}]

const elementos = ["Reserva Ya", "inicio", "Deportes", "Mis reservas", "Perfil"]
export default function Tarjeta(){
    return<>
    <Navegador elementos={elementos}/>
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