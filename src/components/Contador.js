import {useState} from 'react' /* HOOK USESTATE */ /* Si usamos HOOKS debemos importarlos */

const Contador = () => {

    const [contador, setContador] = useState(0); /* sintaxis useState */

    console.log (`El contador va por: ${contador}`) /* VER COMILLAS NO ME LLAMA LA FUNCION SOLO LO DEJA COMO STRING */
    console.log('El componente se renderizo')
    
return (
    <div> {/* CONTADOR donde agregamos el evento onClick y la funcion setContador + o - */}
    <h5>useState</h5>
<button onClick={()=> setContador(contador + 1)}>Sumar</button>

<button onClick={()=> setContador(contador - 1)}>Restar</button>

<h3>{contador}</h3>
<button onClick={() =>setContador(0)}>Reset</button>


    </div>
)
}

export default Contador


