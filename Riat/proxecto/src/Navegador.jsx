function Bucle({elementos}){
  const objetos = []
  for(let i=2;i<elementos.lenght;i++){
    objetos.push(<a className="nav-link" href="#">{elementos[i]}</a>)
  }
  return objetos
}

export default function Navegador({elementos}){
    return(<nav className="navbar sm:navbar-expand bg-1 fg-2">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{elementos[0]}</a>
    <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" aria-hidden="true"></span>
    </button>
    <dialog className="drawer drawer-end" tabIndex="-1" id="navbarNavAltMarkup" aria-labelledby="navbarNavAltMarkupLabel">
      <div className="drawer-header">
        <h5 className="drawer-title" id="navbarNavAltMarkupLabel">Menu</h5>
        <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
      </div>
      <div className="drawer-body">
        <div className="nav nav-pills navbar-nav">
          <a className="nav-link active" aria-current="page" href="#">{elementos[1]}</a>
          <Bucle elementos={elementos}/>
        </div> 
      </div>
    </dialog>
  </div>
</nav>)
}