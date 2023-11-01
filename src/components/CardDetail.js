import React from 'react'
/* la funcion OnClose la definimosen Card.js y lo invocamos en este componente */
const CardDetail = ({ character, onClose }) => {
    return (
        <div>
            <h2>Detalle del personaje</h2>
            <img src={character.image} alt={character.name} />
            <p>Nombre: {character.name}</p>
            <p>Descripcion:{character.species} - {character.gender} - {character.location.name}</p>
            <button onClick={onClose}>Cerrar</button> {/* cuando clickeemos ejecutamos la funcion onClose */}
        </div>
    )
}

export default CardDetail