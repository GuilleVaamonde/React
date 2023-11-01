import React, { useState, useEffect } from 'react'


/* CONSUMIENDO UNA API */

const Actividad = () => {

    const [products, setProducts] = useState([]); /* Use state inicia en Array Vacio */
    useEffect(() => {
        async function fetchProducts() { /* Funcion sincronica, debe haber un await  */
            try {
                const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=producto');
                if (response.ok) {
                    const data = await response.json();
                    const firstTenProducts = data.results.slice(0, 10);/*pedimos entrar a results, donde esta la info que buscamos  si esta bien nos muestra los primeros 10 */
                    setProducts(firstTenProducts);/* es lo que queremos mostrar en Pantalla */
                } else {
                    console.error('Error al cargar productos')
                }
            } catch (error) {
                console.error('Error al cargar productos', error);
            }
        }
        fetchProducts();
    }, [])/* UseEffect Array Vacio */

    return (
        <div>
            <h2>Productos de Mercado Libre</h2>
            <ul>
                {products.map((p) => (
                    <li key={p.id}>{/* elegimos que queremos ver del producto(p) de la api, en este caso id y titulo */}
                        {p.title} <br></br>
                        {" 💲"+ p.price}
                        </li>
                ))}

            </ul>
        </div>
    )
}

export default Actividad