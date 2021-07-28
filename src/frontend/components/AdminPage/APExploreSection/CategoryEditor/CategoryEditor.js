import React from 'react'

import './CategoryEditor.sass'

import OptionsList from '../OptionsList/OptionsList'

const CategoryEditor = ({categoryDetails, setCategoryDetails, selectOption, createNewOption, deleteOption}) => {
  const setName = name => setCategoryDetails({...categoryDetails, name})

  return(
    <div>
      <div id='CategoryEditor'>
        <label htmlFor='name'>Category Name:</label>

        <input
          value={categoryDetails.name}
          onChange={e => setName(e.target.value)}
          id='name'
          name='name'
        />
      </div>

      <OptionsList
        categoryID={categoryDetails._id}
        options={categoryDetails.options}
        selectOption={selectOption}
        createNewOption={createNewOption}
        deleteOption={deleteOption}
      />
    </div>
  )
}

export default CategoryEditor