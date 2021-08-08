import React from 'react'

import './APLSRoomEditor.sass'

const APLSRoomEditor = ({roomDetails, setRoomDetails}) => {
  const setTitle = title => setRoomDetails({...roomDetails, title})
  const setPrice = price => setRoomDetails({...roomDetails, price})
  const setDescription = description => setRoomDetails({...roomDetails, description})

  const save = e => {
    e.preventDefault()
    
    fetch('/api/accommodation', {
      method: 'post',
      body: new FormData(e.target)
    }).then(res => res.json())
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }

  const removeImage = (roomId, imgURL) => {
    console.log(`Remove Image: ${roomId}, ${imgURL}`)

    fetch('/api/removeAccommodationImage', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({roomId, imgURL})
    }).then(res => res.json())
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }

  return(
    <form id='APLSRoomEditor' onSubmit={save}>
      <input
        name='_id'
        value={roomDetails._id}
        readOnly
        hidden
      />

      <label htmlFor='title'>Title</label>
      <input
        id='title'
        name='title'
        value={roomDetails.title}
        onChange={e => setTitle(e.target.value)}
      />

      <label htmlFor='price'>Price</label>
      <input
        id='price'
        name='price'
        value={roomDetails.price}
        onChange={e => setPrice(e.target.value)}
      />

      <label htmlFor='description'>Description</label>
      <textarea
        id='description'
        name='description'
        value={roomDetails.description}
        onChange={e => setDescription(e.target.value)}
      />

      <button type='submit'>Save</button>
    </form>
  )
}

export default APLSRoomEditor