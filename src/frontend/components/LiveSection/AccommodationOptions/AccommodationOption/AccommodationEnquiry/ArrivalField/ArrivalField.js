import React from 'react';

import './ArrivalField.sass';

const ArrivalField = props => (
  <div className='ArrivalField'>
    <label htmlFor={props.accommodationType + '_arrival'}>Arrival Date: </label>
    <input id={props.accommodationType + '_arrival'} type='date'></input>
  </div>
);

export default ArrivalField;