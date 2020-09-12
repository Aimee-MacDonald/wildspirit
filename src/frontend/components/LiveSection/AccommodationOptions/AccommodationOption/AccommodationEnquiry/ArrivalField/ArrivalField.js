import React from 'react';

const ArrivalField = props => (
  <div>
    <label htmlFor={props.accommodationType + '_arrival'}>Arrival Date: </label>
    <input id={props.accommodationType + '_arrival'} type='date'></input>
  </div>
);

export default ArrivalField;