import React, {useState, useEffect} from 'react'

import './APLiveSection.sass'

import APLSRoomsList from './APLSRoomsList/APLSRoomsList'
import APLSRoomEditor from './APLSRoomEditor/APLSRoomEditor'
import APLSRoomImages from './APLSRoomImages/APLSRoomImages'

const APLiveSection = () => {
  const [rooms, setRooms] = useState([])
  const [selectedRoom, selectRoom] = useState()

  useEffect(() => {
    fetch('/api/accommodation')
      .then(res => res.json())
      .then(result => {
        if(result !== 'Not Found'){
          setRooms([
            ...rooms,
            ...result
          ])
        }
      })
      .catch(error => console.log(error))
  }, [])

  const createNewRoom = () => {
    setRooms([
      ...rooms,
      {
        _id: 'new',
        title: '',
        description: '',
        images: []
      }
    ])

    selectRoom('new')
  }

  return(
    <div id='APLiveSection'>
      <h1>Live Section</h1>

      <APLSRoomsList
        rooms={rooms}
        selectRoom={selectRoom}
        createNewRoom={createNewRoom}
      />

      {selectedRoom && <APLSRoomEditor
        roomDetails={rooms.filter(room => room._id === selectedRoom)[0]}
        setRoomDetails={rd => setRooms(rooms.map(room => room._id === selectedRoom ? rd : room))}
      />}

      {selectedRoom && <APLSRoomImages
        roomImages={rooms.filter(room => room._id === selectedRoom)[0].images}
        roomId={selectedRoom}
      />}
    </div>
  )
}

export default APLiveSection