
import Tarxeta from './Tarxeta.jsx'
import Navegador from './Navegador.jsx'
const contenido = [{id:1,nombre:"Pista 1",deporte:"Padel",tipo:"Pista cubierta",estado:"Pista de hierba",dispoñible:true},{id:2,nombre:"Pista 2",deporte:"Tenis",tipo:"Pista cubierta",estado:"Pista de tierra batida",dispoñible:false}]
export default function Tarjeta(){
    return<>
    <Navegador nombreAplicación="Reserva Ya" elemento1="inicio" elemento2="Deportes" elemento3="Mis reservas" elemento4="Perfil"/>
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