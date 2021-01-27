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
      photos={props.photos}
      selectedPhoto={props.selectedPhoto}
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

    {props.enquiringActive &&
      <div className='enquiring'>
        <div className='spinner'><div></div></div>
        <h1>Loading</h1>
      </div>
    }

    {props.enquirySuccess === 1 &&
      <div className='enquiryResponse'>
        <h1>Success</h1>
        <p>Thank you for your enquiry, we will respond to you as soon as possible.</p>
      </div>
    }

    {props.enquirySuccess === -1 &&
      <div className='enquiryResponse'>
        <h1>Failed</h1>
        <p>An error occured, please check your connection and try again.</p>
      </div>
    }
  </div>
);

export default AccommodationDetails;