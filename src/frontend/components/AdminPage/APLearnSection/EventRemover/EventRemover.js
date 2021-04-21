import React from 'react';

const EventRemover = props => (
  <div>
    {props.events.length && props.events.map(event => (
      <div key={`event_${event.title}`}>
        <p>{event.title}</p>
        <button onClick={() => props.removeEvent(event._id)}>Delete</button>
      </div>
    ))}
  </div>
);

export default EventRemover;