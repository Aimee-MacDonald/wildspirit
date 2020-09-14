import React from 'react';

import './NameField.sass'

const NameField = props => (
  <div className='NameField'>
    <label htmlFor={props.accommodationType + '_name'}>Name: </label>
    <input id={props.accommodationType + '_name'}></input>
  </div>
);

export default NameField;