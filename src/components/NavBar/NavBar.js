import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import DboBco from '../NavBar/DboBco.png' /* Imagen importada, luego la llamamos en el <a> */
import './NavBar.css'
function NavBar() {
    return (
        <div className='navBar'>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="index.html"><img src={DboBco} alt='logo' /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href='/inicio'>Inicio</a>
                            <a class="nav-link" href="/productos">Productos</a>
                            <a class="nav-link" href="/contacto">Contacto</a>
                            <a class="nav-link" className="btnCarro" href='/carrito'><CartWidget /><p className='numero'>5</p></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;