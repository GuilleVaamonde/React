import React from 'react'

const ItemListContainer = ({greeting}) => { /* greeting es el prop */
  return (
    <div>
      <h3>{greeting}</h3>
    </div>
  )
}

export default ItemListContainer