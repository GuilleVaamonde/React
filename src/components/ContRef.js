import {useRef} from 'react' /* Si usamos HOOKS debemos importarlos */

const ContRef = () => {

    const contador = useRef(0);

    const handleClick = (condicion) =>{ /* funcion handleClick para que actue cuando al hacer click se produce un cambio */

    if (condicion){
        contador.current++; /* current, sintaxis de useRef, el ++ o -- indica q hace cada accion. */
    } else{
        contador.current--;
    }
    }
/* la interfaz siempre muestra lo que esta dentro del return   */
  return (


    <div>
<h5>useRef</h5>
<button onClick={()=>handleClick(true)}>Sumar</button>

<button onClick={()=>handleClick(false)}>Restar</button>


    </div>
  )
}

export default ContRef