import React from 'react';

const APLSEdit = props => (
  <div>
    <form onSubmit={props.saveOption}>
      <label htmlFor='APLSETitle'>Title</label>
      <input id='APLSETitle' value={props.title} onChange={props.updateTemp} />

      <label htmlFor='APLSEDescription'>Description</label>
      <textarea id='APLSEDescription' value={props.description} onChange={props.updateTemp} />

      <button type='submit'>Save</button>
    </form>

    <form onSubmit={props.addImage}>
      <label htmlFor='APLSEImgURL'>Image URL</label>
      <input id='APLSEImgURL' />

      <label htmlFor='APLSEAltText'>Image Description</label>
      <input id='APLSEAltText' />

      <button type='submit'>Add</button>
    </form>
  </div>
);

export default APLSEdit;