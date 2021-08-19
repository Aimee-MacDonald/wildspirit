import React, { useState } from 'react'

import './EventEditor.sass'

const EventEditor = ({eventDetails, setEventDetails}) => {
  const setTitle = title => setEventDetails({...eventDetails, title})
  const setSubTitle = subtitle => setEventDetails({...eventDetails, subtitle})
  const setDescription = description => setEventDetails({...eventDetails, description})
  const setImgAlt = imgAlt => setEventDetails({...eventDetails, imgAlt})

  const postingStates = [
    'default',
    'posting',
    'success',
    'failed'
  ]

  const [ postingState, setPostingState ] = useState(0)

  const save = e => {
    e.preventDefault()

    setPostingState(postingStates.indexOf('posting'))

    fetch('/api/event', {
      method: 'post',
      body: new FormData(e.target)
    }).then(res => res.json())
      .then(result => {
        if(result === 'Created' || result === 'Updated'){
          setPostingState(postingStates.indexOf('success'))
        } else {
          console.log(result)
          setPostingState(postingStates.indexOf('failed'))
        }
      })
      .catch(error => setPostingState(postingStates.indexOf('failed')))
  }

  return(
    <div>
      {postingState === postingStates.indexOf('default') &&
        <form id='EventEditor' onSubmit={save}>
          <input
            name='_id'
            value={eventDetails._id}
            readOnly
            hidden
          />

          <label htmlFor='APLSTitle'>Title</label>
          <input
            id='APLSTitle'
            name='APLSTitle'
            value={eventDetails.title}
            onChange={e => setTitle(e.target.value)}
          />

          <label htmlFor='APLSSubtitle'>Subtitle</label>
          <input
            id='APLSSubtitle'
            name='APLSSubtitle'
            value={eventDetails.subtitle}
            onChange={e => setSubTitle(e.target.value)}
          />

          <label htmlFor='APLSDescription'>Description</label>
          <textarea
            id='APLSDescription'
            name='APLSDescription'
            value={eventDetails.description}
            onChange={e => setDescription(e.target.value)}
          />
          
          <label htmlFor='APLSImg'>Image URL</label>
          <input type='file' id='APLSImg' name='APLSImg'/>

          <label htmlFor='APLSImgAlt'>Image Alt</label>
          <input
            id='APLSImgAlt'
            name='APLSImgAlt'
            value={eventDetails.imgAlt}
            onChange={e => setImgAlt(e.target.value)}
          />

          <button type='submit'>Save</button>
        </form>
      }

      {postingState === postingStates.indexOf('posting') &&
        <div className='enquiring'>
          <div className='spinner'><div></div></div>
          <h1>Posting</h1>
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

export default EventEditor