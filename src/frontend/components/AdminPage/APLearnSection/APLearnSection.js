import React, { useState, useEffect } from 'react'

import './APLearnSection.sass'

import Event from './Event/Event'

const APLearnSection = () => {
  const [ events, setEvents ] = useState([])

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(result => {if(result !== 'Not Found') setEvents(result)})
      .catch(error => console.log(error))
  }, [])

  const createEvent = () => {
    setEvents([...events, {
      _id: 'new',
      imgURL: '',
      imageID: '',
      imgAlt: '',
      title: '',
      subtitle: '',
      description: ''
    }])
  }

  return (
    <div id='APLearnSection'>
      {events.map(event => (
        <Event
          key={event._id}
          details={event}
        />
      ))}

      <button onClick={createEvent}>New Event</button>
    </div>
  )
}

export default APLearnSection







/* import React, {useState, useEffect} from 'react'

import EventsList from './EventsList/EventsList'
import EventEditor from './EventEditor/EventEditor'

import './APLearnSection.sass'

const APLearnSection = () => {
  const [events, setEvents] = useState([])
  const [selectedEvent, selectEvent] = useState()

  useEffect(() => {
    fetch('/api/events')
    .then(res => res.json())
    .then(response => {
      if(response !== 'Not Found'){
        setEvents([
          ...events,
          ...response
        ])
      }
    })
    .catch(error => console.log(error))
  }, [])

  const createNewEvent = () => {
    setEvents([
      ...events,
      {
        _id: 'new',
        description: '',
        imageID: '',
        imgAlt: '',
        imgURL: '',
        subtitle: '',
        title: ''
      }
    ])
    
    selectEvent('new')
  }

  return(
    <div id='APLearnSection'>
      <h1>Learn Section</h1>

      <EventsList
        events={events}
        selectEvent={selectEvent}
        createNewEvent={createNewEvent}
      />

      {selectedEvent && <EventEditor
        eventDetails={events.filter(event => event._id === selectedEvent)[0]}
        setEventDetails={ev => setEvents(events.map(event => event._id === selectedEvent ? ev : event))}
      />}
    </div>
  )
}

export default APLearnSection */