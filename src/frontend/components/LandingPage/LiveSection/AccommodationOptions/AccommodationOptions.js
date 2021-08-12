import React from 'react'

import './AccommodationOptions.sass'

import AccommodationOption from './AccommodationOption/AccommodationOption'

const AccommodationOptions = ({options, selectOption}) => (
  <div id='AccommodationOptions'>
    {options.map((option, optionIndex) => (
      <AccommodationOption
        key={option._id}
        optionDetails={option}
        selectOption={() => selectOption(optionIndex)}
      />
    ))}
  </div>
)

export default AccommodationOptions