import React from 'react';
import '../components/PerfilCard.css';



function PerfilCard({ nombre, edad, cargo, imagen}) { /* metodo Structuring / tmbn podemos usar props = >function PerfilCard (props) */

    return (

        <div className='perfil-card'>
            <img src={imagen} alt='img' className='perfil-img' />
            <h2 className='perfil-titulo'>Nombre: {nombre}</h2>
            <p className='perfil-detalle'>
                <span className='perfil-etiqueta'>Edad: {edad} años </span>
            </p>
            <p className='perfil-detalle'>
                <span className='perfil-etiqueta'>Profesión: {cargo} </span>
            </p>
        </div>
    )
}

export default PerfilCard