import React from 'react';

import './EmailField.sass';

const EmailField = props => (
  <div className='EmailField'>
    <label htmlFor={props.accommodationType + '_email'}>Email: </label>
    <input id={props.accommodationType + '_email'}></input>
  </div>
);

export default EmailField;