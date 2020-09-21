import React from 'react';

import './AccommodationPhotos.sass'

import AccommodationPhoto from './AccommodationPhoto/AccommodationPhoto';

const AccommodationPhotos = props => (
  <div className={'AccommodationPhotos' + (props.open ? 'Open' : 'Closed')}>
    <AccommodationPhoto />
    <AccommodationPhoto />
    <AccommodationPhoto />
    <AccommodationPhoto />
  </div>
);

export default AccommodationPhotos;