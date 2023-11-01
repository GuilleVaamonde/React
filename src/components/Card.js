import React, { useState } from 'react'
import CardDetail from './CardDetail'
/* CARD ES COMPONENTE PADE DE CARDDETAIL */

const Card = ({ character }) => {

    const [showDetail, setShowDetail] = useState(false); /* cuando se ejecute openDetail este false pasa al true de linea 9 */
    const openDetail = () => {
        setShowDetail(true);
    }
    const closeDetail = () => { /* cuando se ejecute el useState pasa a falso de nuevo */
        setShowDetail(false);
    }


    return (
        <div>{/* tambien podemos poner onClick en los divs */}
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>Haz click para mayor info</p>
            <button onClick={openDetail}>👉 Click</button>
            {showDetail && <CardDetail character={character} onClose={closeDetail} />}
        </div>
    )
}

export default Card