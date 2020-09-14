import React from 'react';

import './FlexibleField.sass'

const FlexibleField = props => (
  <div className='FlexibleField'>
    <label htmlFor={props.accommodationType + '_flexible'}>Flexible: </label>
    <input id={props.accommodationType + '_flexible'} type='checkbox'></input>
  </div>
);

export default FlexibleField;