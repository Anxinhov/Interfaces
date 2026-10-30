
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