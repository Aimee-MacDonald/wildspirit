import React from 'react'

import './CategoriesList.sass'

const CategoriesList = ({categories, selectCategory, createNewCategory}) => {
  const deleteCategory = categoryID => {
    console.log(`Delete Category: '${categoryID}'`)
  }

  return(
    <div id='CategoriesList'>
      {categories && categories.map(category => (
        <div key={category._id} className='category' onClick={() => selectCategory(category._id)}>
          <p>{category.name}</p>
          <button onClick={() => deleteCategory(category._id)}>X</button>
        </div>
      ))}

      <button onClick={createNewCategory}>Add Category</button>
    </div>
  )
}

export default CategoriesList