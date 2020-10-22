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
      showNextPhoto={props.showNextPhoto}
      showPreviousPhoto={props.showPreviousPhoto}
      showEnquiry={props.showEnquiry}
      photosActive={props.photosActive}
      enquiryActive={props.enquiryActive}
    />

    {props.photosActive &&
      <AccommodationPhotos
        photos={props.accommodationDetails.images}
        selectedPhoto={props.selectedPhoto}
      />
    }

    {props.enquiryActive &&
      <AccommodationEnquiry
        accommodationType={props.accommodationDetails.title}
        makeEnquiry={props.makeEnquiry}
      />
    }
  </div>
);

export default AccommodationDetails;