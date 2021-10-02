import React, { useState } from 'react'

import './APLSRoomImages.sass'

const APLSRoomImages = ({ roomImages, roomId, refreshRooms }) => {
  const postingStates = [
    'default',
    'posting',
    'success',
    'failed'
  ]

  const [ postingState, setPostingState ] = useState(0)

  const addImage = e => {
    e.preventDefault()
    setPostingState(postingStates.indexOf('posting'))
    
    fetch('/api/accommodation/addImage', {
      method: 'post',
      body: new FormData(e.target)
    }).then(res => res.json())
      .then(result => {
        setPostingState(postingStates.indexOf('success'))
        refreshRooms()
      })
      .catch(error => setPostingState(postingStates.indexOf('failed')))
  }
  
  const removeImage = (RID, IID) => {
    setPostingState(postingStates.indexOf('posting'))

    fetch('/api/accommodation/removeImage', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        roomId: RID,
        imageId: IID
      })
    }).then(res => res.json())
      .then(result => {
        setPostingState(postingStates.indexOf('success'))
        refreshRooms()
      })
      .catch(error => setPostingState(postingStates.indexOf('failed')))
  }

  return(
    <div id='APLSRoomImages'>
      {postingState === postingStates.indexOf('default') &&
        <div>
          <form onSubmit={addImage}>
            <input name='roomId' value={roomId} readOnly hidden/>
            <input name='roomImage' type='file' required/>
            <input name='imgAlt' required placeholder='Image Description'/>
            <button type='submit'>Add Image</button>
          </form>

          <div id='roomImages'>
            {roomImages.map((image, i) => (
              <div key={`roomImage${i}`} className='roomImage'>
                <button onClick={() => removeImage(roomId, image.imgID)}>Remove</button>
                <img src={image.srcLink}/>
              </div>
            ))}
          </div>
        </div>
      }

      {postingState === postingStates.indexOf('posting') &&
        <div className='enquiring'>
          <div className='spinner'><div></div></div>
          <h1>Updating</h1>
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

export default APLSRoomImages