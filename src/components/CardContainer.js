import React, { useState, useEffect } from 'react'
import Card from './Card';
/* CONSUMIENDO UNA API */

const CardContainer = () => {

    const [personaje, setPersonaje] = useState([]); /* Use state inicia en Array Vacio */

    useEffect(() => {
        async function getPersonajes() { /* Funcion sincronica, busca en la api y los guarda en el response...debe haber un await  */
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character');
                if (response.ok) { /* si la respuesta es OK la transforma en un JSON */
                    const data = await response.json();
                    setPersonaje(data.results); 
                } else {
                    console.error('Error al cargar personajes')
                }
            } catch (error) {
                console.error('Error al cargar personajes', error);
            }
        }
        getPersonajes();
    }, [])/* UseEffect Array Vacio */

    return (
        <div>
            <h2>Personajes Rick & Morty con Card Container que abre debajo</h2>
            {personaje ? (personaje.map((p)=>
            <Card key={p.id} character={p}/>))
            : (<p>Cargando personaje...</p>)
            
            }
        </div>
    )
}

export default CardContainer