import React, { useState, useEffect } from 'react'

import './Event.sass'

const Event = props => {
  const [ details, setDetails ] = useState({})

  useEffect(() => setDetails(props.details), [ props.details ])

  const saveEvent = e => {
    e.preventDefault()

    fetch('/api/events/add', {
      method: 'post',
      body: new FormData(e.target)
    }).then(res => res.json())
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }

  const deleteEvent = eventID => {
    fetch('/api/events/remove', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({eventID})
    }).then(res => res.json())
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }

  return (
    <form id='Event' onSubmit={saveEvent}>
      <div className='eventImage' role='img' aria-label={details.imgAlt} style={{backgroundImage: `url('${details.imgURL}')`}}>
        <input type='file' id='APLSImg' name='APLSImg'/>

        <label htmlFor='APLSImgAlt'>Image Description</label>
        <input
          id='APLSImgAlt'
          name='APLSImgAlt'
          value={details.imgAlt}
          onChange={e => setDetails({ ...details, imgAlt: e.target.value })}
          required
        />
      </div>

      <input
        name='_id'
        value={details._id}
        readOnly
        hidden
        required
      />

      <div className='eventDetails'>
        <input
          id='APLSTitle'
          name='APLSTitle'
          value={details.title}
          onChange={e => setDetails({ ...details, title: e.target.value })}
          required
        />

        <input
          id='APLSSubtitle'
          name='APLSSubtitle'
          value={details.subtitle}
          onChange={e => setDetails({ ...details, subtitle: e.target.value })}
          required
        />

        <textarea
          id='APLSDescription'
          name='APLSDescription'
          value={details.description}
          onChange={e => setDetails({ ...details, description: e.target.value })}
          required
        />

        <input
          id='APLSLinkText'
          name='APLSLinkText'
          value={details.linkText}
          onChange={e => setDetails({ ...details, linkText: e.target.value })}
        />

        <input
          id='APLSLinkURL'
          name='APLSLinkURL'
          value={details.linkURL}
          onChange={e => setDetails({ ...details, linkURL: e.target.value })}
        />

        <button type='button' onClick={() => deleteEvent(details._id)}>Delete</button>
        <button type='submit'>Save</button>
      </div>
    </form>
  )
}

export default Event