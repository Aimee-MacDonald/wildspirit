import React from 'react';

import './APLiveSection.sass';

const APLiveSection = props => (
  <form id='APLiveSection' onSubmit={props.addAccommodation}>
    <h2>Add Accommodation</h2>

    <label htmlFor='APLSType'>Accommodation Type</label>
    <input id='APLSType' />

    <label htmlFor='APLSDescription'>Accommodation Description</label>
    <textarea id='APLSDescription' />

    <label htmlFor='APLSImgURL'>Image URL</label>
    <input id='APLSImgURL' />

    <label htmlFor='APLSAltText'>Image ALT Text</label>
    <input id='APLSAltText' />

    <button type='submit'>Add</button>
  </form>
);

export default APLiveSection;