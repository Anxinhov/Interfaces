function disponible(dispoñible){
    if(dispoñible){
        return"Libre✅"
    }else{
        return"Ocupada❌"
    }
}

export default function Tarxeta({pista}){
    return<article className="sport-card">
        <div className="sport-image padel">
            🎾
        </div>

        <div className="sport-info">
            <h2>{pista.nombre}</h2>
            <h3>{pista.deporte}</h3>
            <p>{disponible(pista.dispoñible)}</p>
            <p>{pista.tipo}</p>
            <p>{pista.estado}</p>
            
            <a href="pistas.html?deporte=padel" className="btn-primary">
                Reservar
            </a>
            </div>
        </article>
}