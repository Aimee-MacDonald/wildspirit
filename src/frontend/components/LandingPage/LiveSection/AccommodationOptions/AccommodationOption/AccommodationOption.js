import React, {useState} from 'react'

import './AccommodationOption.sass'

const AccommodationOption = ({optionDetails, selectOption}) => {
  const [isHovered, setHovered] = useState(false)

  return (
    <div
      id='AccommodationOption'
      onClick={selectOption}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      
      <div className='accommodationImage' style={{backgroundImage: `url(${optionDetails.images[0].srcLink})`}}>
        {(window.innerWidth < 600 || isHovered) && (
          <div className='hoverText'>
            <p>From:</p>
            <p>{optionDetails.price}</p>
          </div>
        )}
      </div>
      <h2 className='accommodationName'>{optionDetails.title}</h2>
    </div>
  )
}

export default AccommodationOption