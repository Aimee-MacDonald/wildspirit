import React, { useState } from 'react'

import './APLSRoomEditor.sass'

const APLSRoomEditor = ({ roomDetails, setRoomDetails, refreshRooms }) => {
  const setTitle = title => setRoomDetails({...roomDetails, title})
  const setPrice = price => setRoomDetails({...roomDetails, price})
  const setDescription = description => setRoomDetails({...roomDetails, description})
  
  const editorStates = [
    'default',
    'sending',
    'success',
    'fail'
  ]

  const [ editorState, setEditorState ] = useState(0)

  const save = e => {
    e.preventDefault()

    setEditorState(editorStates.indexOf('sending'))
    
    fetch('/api/accommodation', {
      method: 'post',
      body: new FormData(e.target)
    }).then(res => res.json())
      .then(result => {
        setEditorState(editorStates.indexOf('success'))
        refreshRooms()
      })
      .catch(error => setEditorState(editorStates.indexOf('fail')))
  }

  return(
    <div>
      {editorState === editorStates.indexOf('default') &&
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
      }

      {editorState === editorStates.indexOf('sending') &&
        <div className='enquiring'>
          <div className='spinner'><div></div></div>
          <h1>Saving</h1>
        </div>
      }

      {editorState === editorStates.indexOf('success') &&
        <div className='enquiring'>
          <h1>Saved</h1>
        </div>
      }

      {editorState === editorStates.indexOf('fail') &&
        <div className='enquiring'>
          <h1>Failed</h1>
        </div>
      }
    </div>
  )
}

export default APLSRoomEditor