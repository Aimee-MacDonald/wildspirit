import React from 'react';

import './DepartureField.sass';

const DepartureField = props => (
  <div className='DepartureField'>
    <label htmlFor={props.accommodationType + '_departure'}>Departure Date: </label>
    <input id={props.accommodationType + '_departure'} type='date'></input>
  </div>
);

export default DepartureField;