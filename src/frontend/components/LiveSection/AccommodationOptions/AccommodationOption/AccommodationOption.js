import React from 'react';

import './AccommodationOption.sass';

const AccommodationOption = props => (
  <div id='AccommodationOption'>
    <p>{props.title}</p>
    <p>{props.description}</p>
  </div>
);

export default AccommodationOption;