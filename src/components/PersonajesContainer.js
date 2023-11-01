import Personaje from './Personaje';
import { useState } from 'react';




const PersonajesContainer = () => {
    const [persona, setPersona] = useState(   
        [
            {
                id: 1,
                name: 'Homero',
                job: 'Inspector de seguridad sector 7-G',
                img: 'https://i.pinimg.com/564x/5e/4a/31/5e4a31e3600a796b163cd306614617cb.jpg',
            },
            {
                id: 2,
                name: 'Clancy',
                job: 'Jefe del departamento de policia',
                img: 'https://i.pinimg.com/564x/89/8a/df/898adf7077fece017873a742e04a355d.jpg',


            },
            {
                id: 3,
                name: 'Disco Stu',
                job: 'musico',
                img: 'https://i.pinimg.com/564x/97/c1/f7/97c1f79fa8044378bce749f4ae29e4c4.jpg',
            },
            {
                id: 4,
                name: 'Ned',
                job: 'Comerciante',
                img: 'https://i.pinimg.com/564x/33/c2/87/33c28752064c01ce7629f21dd22f5e94.jpg'
            },
        ]);

    return ( /* IMPORTAMOS LOS ELEMENTOS DE PERSONAJE.JS Y LO MOSTRAMOS EN LA INTERFAZ */
        <div className='col.lg-4'>{/* CLASE 7   */}
            {persona.map((p) => { /* METODO MAP */
                return (
                    <div>
                        <h2> Hola soy un personaje </h2>
                        <Personaje
                            key={p.id}
                            name={p.name}
                            job={p.job}
                            img={p.img}
                            id={p.id}
                        /> {/* termina PERSONAJE */}
                    </div>
                )
            })}


        </div>
    )
}

export default PersonajesContainer