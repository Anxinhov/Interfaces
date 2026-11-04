function disponible(dispoñible){
    if(dispoñible){
        return"Libre✅"
    }else{
        return"Ocupada❌"
    }
}

export default function Tarxeta({pista}){
    return<section className="card" style={{maxWidth: '320px'}}>
  <img src={pista.imagen} className="card-img-top" alt="..." style={{maxWidth: '320px'}}></img>
  <div className="card-body">
    <h4 className="card-title">{pista.nombre}</h4>
    <p className="card-text">{disponible(pista.dispoñible)}</p>
    <p className="card-text">{pista.tipo}</p>
    <p className="card-text">{pista.estado}</p>
    <a href="#" className="btn-solid theme-primary">reservar</a>
  </div>
</section>
}