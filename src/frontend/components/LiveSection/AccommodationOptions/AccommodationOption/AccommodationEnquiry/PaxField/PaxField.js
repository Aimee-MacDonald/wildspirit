import React from 'react';

const PaxField = props => (
  <div>
    <label htmlFor={props.accommodationType + '_pax'}>Number of People: </label>
    <input id={props.accommodationType + '_pax'}></input>
  </div>
);

export default PaxField;