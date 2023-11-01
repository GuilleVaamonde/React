import React from 'react'

const ProductCard = ({ img, title, price, children }) => { /* Props normales */
    return (

        <div>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <p>${price}</p>


            <div>
                {children} {/* prop children */}
            </div>
        </div>
    )
}

export default ProductCard







