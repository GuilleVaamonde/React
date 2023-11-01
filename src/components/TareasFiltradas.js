import React, { useState, useEffect } from 'react';
/* LISTA DE TAREAS CON FILTROS */
function TareasFiltradas() {

    const [tasks, setTasks] = useState([]);/* inicia con un Array vacio, ya que lo que sigue es un array de objetos*/

    const [filter, setFilter] = useState('all');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')/* LA API A USAR */
            .then((response) => {
                if (!response.ok) { /* if para activarse si existe un error */
                    throw new Error("Error al cargar tareas");
                }
                return response.json(); /* si esta todo bien retorna las tareas y las transforma en un Json */
            })
            .then((data) => { /* capturamos la data transformada en un Json y planteo un filtrado */
                const filteredTasks = data.filter((t) => { /* t=tasks */
                    if (filter === 'all') {
                        return true;
                    }
                    return filter === 'completed' ? t.completed : !t.completed; /*  */
                });
                setTasks(filteredTasks);
            })
            .catch((error) => { /* manejamos la promesa y capturamos el error con un catch */
                console.error('Error', error);
            })
    }, [filter]); /* usamos este metodo para que lo anterior se ejecute mas de una vez, sino queda vacio */

    return (
        <div>
            <h2>Lista de tareas: ({filter})</h2>
            <div>
                <button onClick={()=> setFilter('all')}>Todas</button>
                <button onClick={()=> setFilter('pending')}>Pendientes</button>
                <button onClick={()=> setFilter('completed')}>Completas</button>
            </div>
            <ul>
                {tasks.map((t) => ( /* mapeo de las tareas */
                    <li key={t.id}>
                        {t.title} - {t.completed ? 'Completada' : 'Pendiente'}
                        </li>  /* condicional para q muestre el estado de la tarea */
                ))}

            </ul>
        </div>
    );
}

export default TareasFiltradas