import React, { useState } from 'react'

import './OptionEditor.sass'

const OptionEditor = ({optionDetails, setOptionDetails, categoryDetails}) => {
  const setName = name => setOptionDetails({...optionDetails, name})
  const setDescription = description => setOptionDetails({...optionDetails, description})
  const setImageAlt = imageAlt => setOptionDetails({...optionDetails, imageAlt})

  const postingStates = [
    'default',
    'posting',
    'success',
    'failed'
  ]

  const [ postingState, setPostingState ] = useState(0)

  const saveOption = e => {
    e.preventDefault()

    setPostingState(postingStates.indexOf('posting'))
    
    fetch('/api/explore/option', {
      method: 'post',
      body: new FormData(e.target)
    }).then(res => res.json())
      .then(result => {
        if(result === 'Created') {
          setPostingState(postingStates.indexOf('success'))
        }
      })
      .catch(error => setPostingState(postingStates.indexOf('failed')))
  }

  return(
    <div>
      {postingState === postingStates.indexOf('default') &&
        <form id='OptionEditor' onSubmit={saveOption}>
          <input
            name='categoryID'
            value={categoryDetails._id}
            readOnly
            hidden
          />

          <input
            name='categoryName'
            value={categoryDetails.name}
            readOnly
            hidden
          />

          <input
            name='imageID'
            value={optionDetails.imageID}
            readOnly
            hidden
          />

          <label htmlFor='optionName'>Name</label>
          <input
            id='optionName'
            name='optionName'
            value={optionDetails.name}
            onChange={e => setName(e.target.value)}
          />

          <label htmlFor='optionDescription'>Description</label>
          <textarea
            id='optionDescription'
            name='optionDescription'
            value={optionDetails.description}
            onChange={e => setDescription(e.target.value)}
          />

          <input type='file' name='image'/>
          <input
            placeholder='ImageDescription'
            name='imgAlt'
            value={optionDetails.imageAlt}
            onChange={e => setImageAlt(e.target.value)}
          />

          <button type='submit'>Save</button>
        </form>
      }

      {postingState === postingStates.indexOf('posting') &&
        <div className='enquiring'>
          <div className='spinner'><div></div></div>
          <h1>Saving</h1>
        </div>
      }

      {postingState === postingStates.indexOf('success') &&
        <div className='enquiring'>
          <h1>Success</h1>
          <button onClick={() => setPostingState(postingStates.indexOf('default'))}>Reset</button>
        </div>
      }

      {postingState === postingStates.indexOf('failed') &&
        <div className='enquiring'>
          <h1>Failed</h1>
          <button onClick={() => setPostingState(postingStates.indexOf('default'))}>Reset</button>
        </div>
      }
    </div>
  )
}

export default OptionEditor