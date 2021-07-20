import React from 'react'

import './CategoriesList.sass'

const CategoriesList = ({categories, selectCategory}) => (
  <div id='CategoriesList'>
    {categories.map(category => (
      <div key={category._id} className='category' onClick={() => selectCategory(category._id)}>
        <p>{category.name}</p>
        <button>X</button>
      </div>
    ))}
  </div>
)

export default CategoriesList