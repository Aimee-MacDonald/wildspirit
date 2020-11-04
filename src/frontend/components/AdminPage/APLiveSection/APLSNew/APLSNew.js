import React from 'react';

const APLSNew = props => (
  <form onSubmit={props.addOption}>
    <label htmlFor='APLSNType'>New Accommodation Type: </label>
    <input id='APLSNType' />

    <button type='submit'>Add</button>
  </form>
);

export default APLSNew;