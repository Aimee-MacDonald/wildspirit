import React from 'react'

import './OptionsList.sass'

const OptionsList = ({categoryID, options, selectOption, createNewOption, deleteOption}) => (
  <div id='OptionsList'>
    {options && options.map(option => (
      <div className='option' key={option.imageID} onClick={() => selectOption(option.imageID)}>
        <p>{option.name}</p>
        <button onClick={() => deleteOption(categoryID, option.imageID)}>X</button>
      </div>
    ))}

    <button onClick={createNewOption}>Add Option</button>
  </div>
)

export default OptionsList