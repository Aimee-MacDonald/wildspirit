import React from 'react'

import './EventsList.sass'

const EventsList = props => {
  const removeEvent = eventID => {
    fetch('/api/removeEvent', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({eventID})
    }).then(res => res.json())
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }

  return(
    <div id='EventsList'>
      {props.events.map(event => (
        <div key={event._id} className='event' onClick={() => props.selectEvent(event._id)}>
          <p>{event.title}</p>
          <button onClick={() => removeEvent(event._id)}>X</button>
        </div>
      ))}
      
      <button onClick={props.createNewEvent}>Add Event</button>
    </div>
  )
}

export default EventsList