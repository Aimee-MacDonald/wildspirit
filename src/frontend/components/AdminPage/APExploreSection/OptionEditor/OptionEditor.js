import React from 'react'

import './OptionEditor.sass'

const OptionEditor = ({optionDetails, setOptionDetails, categoryDetails}) => {
  const setName = name => setOptionDetails({...optionDetails, name})
  const setDescription = description => setOptionDetails({...optionDetails, description})
  const setImageAlt = imageAlt => setOptionDetails({...optionDetails, imageAlt})

  const saveOption = e => {
    e.preventDefault()
    
    fetch('/api/exploreOption', {
      method: 'post',
      body: new FormData(e.target)
    }).then(res => res.json())
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }

  return(
    <form id='OptionEditor' onSubmit={saveOption}>
      <input
        name='categoryID'
        value={categoryDetails._id}
        readOnly
        hidden
      />

      <input
        name='categoryName'
        value={categoryDetails.name}
        readOnly
        hidden
      />

      <input
        name='imageID'
        value={optionDetails.imageID}
        readOnly
        hidden
      />

      <label htmlFor='optionName'>Name</label>
      <input
        id='optionName'
        name='optionName'
        value={optionDetails.name}
        onChange={e => setName(e.target.value)}
      />

      <label htmlFor='optionDescription'>Description</label>
      <textarea
        id='optionDescription'
        name='optionDescription'
        value={optionDetails.description}
        onChange={e => setDescription(e.target.value)}
      />

      {/*
        Image Selection
        3 Links
      */}

      <input type='file' name='image'/>
      <input
        placeholder='ImageDescription'
        name='imgAlt'
        value={optionDetails.imageAlt}
        onChange={e => setImageAlt(e.target.value)}
      />

      <button type='submit'>Save</button>
    </form>
  )
}

export default OptionEditor