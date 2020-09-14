import React from 'react';

import './PaxField.sass';

const PaxField = props => (
  <div className='PaxField'>
    <label htmlFor={props.accommodationType + '_pax'}>Number of People: </label>
    <input id={props.accommodationType + '_pax'}></input>
  </div>
);

export default PaxField;