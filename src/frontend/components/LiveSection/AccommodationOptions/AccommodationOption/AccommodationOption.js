import React from 'react';

import './AccommodationOption.sass';

import AccommodationDescription from './AccommodationDescription/AccommodationDescription';
import AccommodationPhotos from './AccommodationPhotos/AccommodationPhotos';
import AccommodationEnquiry from './AccommodationEnquiry/AccommodationEnquiry';

const AccommodationOption = props => (
  <div className={'AccommodationOption' + (props.open ? 'Open' : 'Closed')}
       onMouseEnter={() => props.showDescription(props.index)}
       onMouseLeave={() => props.hideDescription(props.index)}>
    <AccommodationDescription
      open={props.descriptionOpen}
      title={props.title}
      description={props.description}
      growOption={() => props.growOption(props.index)}
      shrinkOption={() => props.shrinkOption(props.index)}
    />

    <AccommodationPhotos open={false} />

    <AccommodationEnquiry
      open={false}
      accommodationType={props.title}
    />
  </div>
);

export default AccommodationOption;