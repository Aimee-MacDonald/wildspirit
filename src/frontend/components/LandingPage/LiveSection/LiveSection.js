import React, {useState, useEffect} from 'react'

import './LiveSection.sass'

import LiveSectionHeading from './LiveSectionHeading/LiveSectionHeading'
import AccommodationOptions from './AccommodationOptions/AccommodationOptions'
import AccommodationDetails from './AccommodationDetails/AccommodationDetails'

const LiveSection = () => {
  const [options, setOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState(-1)

  useEffect(() => {
    fetch('/api/accommodation')
      .then(res => res.json())
      .then(result => {
        if(result !== 'Not Found'){
          setOptions(result)
        }
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div id='LiveSection'>
      <LiveSectionHeading/>

      {selectedOption === -1 &&
        <AccommodationOptions
          options={options}
          selectOption={setSelectedOption}
        />
      }

      {selectedOption !== -1 &&
        <AccommodationDetails
          resetSelectedOption={() => setSelectedOption(-1)}
          optionDetails={options[selectedOption]}
        />
      }
    </div>
  )
}

export default LiveSection