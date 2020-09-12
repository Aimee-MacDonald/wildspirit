import React from 'react';

const DepartureField = props => (
  <div>
    <label htmlFor={props.accommodationType + '_departure'}>Departure Date: </label>
    <input id={props.accommodationType + '_departure'} type='date'></input>
  </div>
);

export default DepartureField;