import React from 'react';

const NameField = props => (
  <div>
    <label htmlFor={props.accommodationType + '_name'}>Name: </label>
    <input id={props.accommodationType + '_name'}></input>
  </div>
);

export default NameField;