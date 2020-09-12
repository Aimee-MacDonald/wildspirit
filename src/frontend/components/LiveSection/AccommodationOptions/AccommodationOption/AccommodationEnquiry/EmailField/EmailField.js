import React from 'react';

const EmailField = props => (
  <div>
    <label htmlFor={props.accommodationType + '_email'}>Email: </label>
    <input id={props.accommodationType + '_email'}></input>
  </div>
);

export default EmailField;