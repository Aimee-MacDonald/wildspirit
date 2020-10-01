import React from 'react';

import './AccommodationDescription.sass';

const AccommodationDescription = props => (
  <div className='AccommodationDescription'>
    <button className={'ADExtended' + (props.open ? 'Open' : 'Closed')} onClick={props.shrinkOption}>Close</button>
    <p>{props.title}</p>
    <p className={'ADExtended' + (props.open ? 'Open' : 'Closed')}>{props.description}</p>
    <button className={'ADExtended' + (props.open ? 'Open' : 'Closed')} onClick={props.growOption}>View</button>
  </div>
);

export default AccommodationDescription;