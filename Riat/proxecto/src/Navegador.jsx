export default function Navegador({nombreAplicación,elemento1,elemento2,elemento3,elemento4}){
    return(<nav className="navbar sm:navbar-expand bg-1 fg-2">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{nombreAplicación}</a>
    <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" aria-hidden="true"></span>
    </button>
    <dialog className="drawer drawer-end" tabindex="-1" id="navbarNavAltMarkup" aria-labelledby="navbarNavAltMarkupLabel">
      <div className="drawer-header">
        <h5 className="drawer-title" id="navbarNavAltMarkupLabel">Menu</h5>
        <button type="button" class="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
      </div>
      <div className="drawer-body">
        <div className="nav nav-pills navbar-nav">
          <a className="nav-link active" aria-current="page" href="#">{elemento1}</a>
          <a className="nav-link" href="#">{elemento2}</a>
          <a className="nav-link" href="#">{elemento3}</a>
          <a className="nav-link disabled" aria-disabled="true">{elemento4}</a>
        </div>
      </div>
    </dialog>
  </div>
</nav>)
}