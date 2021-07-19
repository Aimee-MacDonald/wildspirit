import React from 'react'

import './APLSRoomsList.sass'

const APLSRoomsList = props => {
  const removeRoom = roomId => {
    fetch('/api/removeAccommodation', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({roomId})
    }).then(res => res.json())
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }

  return(
    <div id='APLSRoomsList'>
      {props.rooms.map(room => (
        <div key={room._id} className='room' onClick={() => props.selectRoom(room._id)}>
          <p>{room.title}</p>
          <button onClick={() => removeRoom(room._id)}>X</button>
        </div>
      ))}

      <button onClick={props.createNewRoom}>Add Room</button>
    </div>
  )
}

export default APLSRoomsList