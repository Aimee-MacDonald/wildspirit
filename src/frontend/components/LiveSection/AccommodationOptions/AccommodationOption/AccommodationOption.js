import React from 'react';

import './AccommodationOption.sass';

import AccommodationPhotos from './AccommodationPhotos/AccommodationPhotos';
import AccommodationEnquiry from './AccommodationEnquiry/AccommodationEnquiry';

const AccommodationOption = props => (
  <div id='AccommodationOption'>
    <p>{props.title}</p>
    <p>{props.description}</p>
    <AccommodationPhotos />
    <AccommodationEnquiry accommodationType={props.title} />
  </div>
);

export default AccommodationOption;