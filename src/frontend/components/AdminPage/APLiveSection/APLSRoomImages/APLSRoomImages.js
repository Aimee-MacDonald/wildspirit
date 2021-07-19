import React from 'react'

import './APLSRoomImages.sass'

const APLSRoomImages = ({roomImages, roomId}) => {
  const addImage = e => {
    e.preventDefault()
    
    fetch('/api/addAccommodationImage', {
      method: 'post',
      body: new FormData(e.target)
    }).then(res => res.json())
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }
  
  const removeImage = (RID, IID) => {
    fetch('/api/removeAccommodationImage', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        roomId: RID,
        imageId: IID
      })
    }).then(res => res.json())
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }

  return(
    <div id='APLSRoomImages'>
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
  )
}

export default APLSRoomImages