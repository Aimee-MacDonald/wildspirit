import React from 'react';

import './APLearnSection.sass';

const APLearnSection = props => (
  <form id='APLearnSection' onSubmit={props.addEvent}>
    <label htmlFor='APLSImgURL'>Image URL</label>
    <input id='APLSImgURL' />

    <label htmlFor='APLSImgAlt'>Image Alt</label>
    <input id='APLSImgAlt' />

    <label htmlFor='APLSTitle'>Title</label>
    <input id='APLSTitle' />

    <label htmlFor='APLSSubtitle'>Subtitle</label>
    <input id='APLSSubtitle' />

    <label htmlFor='APLSDescription'>Description</label>
    <textarea id='APLSDescription' />

    <button type='submit'>Add</button>
  </form>
);

export default APLearnSection;