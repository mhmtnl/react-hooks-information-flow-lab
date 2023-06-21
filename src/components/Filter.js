import React from 'react'

function Filter({onCategoryChange}) {
  return (
    <select onChange={onCategoryChange} name="category" id="category">
      <option value="All">Filter by category</option>
      <option value="Dairy">Dairy</option>
      <option value="Produce">Produce</option>
      <option value="Dessert">Dessert</option>
    </select>
  )
}

export default Filter