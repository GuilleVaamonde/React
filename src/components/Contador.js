import {useState} from 'react' /* HOOK USESTATE */

const Contador = () => {

    const [contador, setContador] = useState(0);

console.log('El contador va por: ${contador}') /* VER COMILLAS NO ME LLAMA LA FUNCION SOLO LO DEJA COMO STRING */
console.log('El componente se renderizo')




return (
    <div> {/* CONTADOR donde agregamos el evento onClick y la funcion setContador + o - */}
<button onClick={()=> setContador(contador + 1)}>Sumar</button>
<h3>{contador}</h3>
<button onClick={()=> setContador(contador - 1)}>Restar</button>

    </div>
)
}

export default Contador