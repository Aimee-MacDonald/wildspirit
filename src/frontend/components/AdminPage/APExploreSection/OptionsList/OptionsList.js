import React from 'react'

import './OptionsList.sass'

const OptionsList = props => (
  <div id='OptionsList'>
    {props.options.map(option => (
      <div className='option' key={option.imageID} onClick={() => props.selectOption(option.imageID)}>
        <p>{option.name}</p>
        <button>X</button>
      </div>
    ))}
  </div>
)

export default OptionsList