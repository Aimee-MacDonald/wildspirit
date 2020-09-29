import React from 'react';

import './AccommodationOption.sass';

import AccommodationDescription from './AccommodationDescription/AccommodationDescription';
import AccommodationPhotos from './AccommodationPhotos/AccommodationPhotos';
import AccommodationEnquiry from './AccommodationEnquiry/AccommodationEnquiry';

const AccommodationOption = props => (
  <div className='AccommodationOptionClosed'>
    <AccommodationDescription
      open={true}
      title={props.title}
      description={props.description}
    />

    <AccommodationPhotos open={false} />

    <AccommodationEnquiry
      open={false}
      accommodationType={props.title}
    />
  </div>
);

export default AccommodationOption;