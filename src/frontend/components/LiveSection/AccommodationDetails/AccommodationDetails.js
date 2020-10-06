import React from 'react';

import './AccommodationDetails.sass';

import AccommodationDetailsNav from './AccommodationDetailsNav/AccommodationDetailsNav';
import AccommodationPhotos from './AccommodationPhotos/AccommodationPhotos';
import AccommodationEnquiry from './AccommodationEnquiry/AccommodationEnquiry';

const AccommodationDetails = props => (
  <div id='AccommodationDetails'>
    <AccommodationDetailsNav
      accommodationDetails={props.accommodationDetails}
      closeDetails={props.closeDetails}
      showPhotos={props.showPhotos}
      showEnquiry={props.showEnquiry}
      photosActive={props.photosActive}
      enquiryActive={props.enquiryActive}
    />

    {props.photosActive &&
      <AccommodationPhotos />
    }

    {props.enquiryActive &&
      <AccommodationEnquiry />
    }
  </div>
);

export default AccommodationDetails;