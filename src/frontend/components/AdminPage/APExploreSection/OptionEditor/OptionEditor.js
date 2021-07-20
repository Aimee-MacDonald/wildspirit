import React from 'react'

import './OptionEditor.sass'

const OptionEditor = props => (
  <form id='OptionEditor'>
    <h1>Option Editor</h1>
    <label>Name</label>
    <input/>

    <label>Description</label>
    <textarea/>

    <input type='file'/>
    <input/>

    {/*
      props.optionDetails:

      Name
      Description
      imageID
      imageURL
      links (3)
        title
        URL
    */}
  </form>
)

export default OptionEditor