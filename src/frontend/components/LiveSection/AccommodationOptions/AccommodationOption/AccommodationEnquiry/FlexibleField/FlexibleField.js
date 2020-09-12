import React from 'react';

const FlexibleField = props => (
  <div>
    <label htmlFor={props.accommodationType + '_flexible'}>Flexible? </label>
    <input id={props.accommodationType + '_flexible'} type='checkbox'></input>
  </div>
);

export default FlexibleField;