import React from 'react';

import './APLearnSection.sass';

const APLearnSection = props => (
  <form id='APLearnSection' onSubmit={props.addEvent}>
    <label htmlFor='APLSImg'>Image URL</label>
    <input type='file' id='APLSImg' name='APLSImg' />

    <label htmlFor='APLSImgAlt'>Image Alt</label>
    <input id='APLSImgAlt' name='APLSImgAlt' />

    <label htmlFor='APLSTitle'>Title</label>
    <input id='APLSTitle' name='APLSTitle' />

    <label htmlFor='APLSSubtitle'>Subtitle</label>
    <input id='APLSSubtitle' name='APLSSubtitle' />

    <label htmlFor='APLSDescription'>Description</label>
    <textarea id='APLSDescription' name='APLSDescription' />

    <button type='submit'>Add</button>
  </form>
);

export default APLearnSection;