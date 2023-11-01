import React from 'react'

const Personaje = ({img, name, job, id}) => { /*ESTE ES EL COMPONENTE GENERICO  prop con Structuring */
  return (
    <div className='col.lg-4'>
        <div className='text-center card box'>
        <div className='member-card pt-2 pb-2'> 
        <div className='thumb-lg member-thumb mx-auto'> 
        
        <img
        src={img}
        width='200px'
        height='200px'
        className='rounded-circle img-thumbnail'
        alt={name} /* podemos usar directamente el nombre de la prop para asi verla si no carga la imagen */
        />
        </div>
        <div className='name'>
            <h3>{id}</h3>
            <h3>{name}</h3>
            <p className='text-muted'>{job}</p>
        
        </div>
        </div>
        </div>
    </div>
  )
}

export default Personaje