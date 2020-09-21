import React from 'react';

import './AccommodationDescription.sass';

const AccommodationDescription = props => (
  <p className={'AccommodationDescription' + (props.open ? 'Open' : 'Closed')}>{props.description}</p>
);

export default AccommodationDescription;