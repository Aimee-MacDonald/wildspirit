import React from 'react';

import './AccommodationDescription.sass';

const AccommodationDescription = props => (
  <div className='AccommodationDescription'>
    <p>{props.title}</p>
    <p className={'ADExtended' + (props.open ? 'Open' : 'Closed')}>{props.description}</p>
    <button className={'ADExtended' + (props.open ? 'Open' : 'Closed')}>View</button>
  </div>
);

export default AccommodationDescription;