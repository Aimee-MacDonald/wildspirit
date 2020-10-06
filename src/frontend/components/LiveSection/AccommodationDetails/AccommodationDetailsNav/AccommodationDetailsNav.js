import React from 'react';

import './AccommodationDetailsNav.sass';

const AccommodationDetailsNav = props => (
  <div id='AccommodationDetailsNav'>
    <button onClick={props.closeDetails}>Close</button>
    <h4>{props.accommodationDetails.title}</h4>
    <p>{props.accommodationDetails.description}</p>

    {!props.photosActive &&
      <button onClick={props.showPhotos}>Photos</button>
    }
      
    {!props.enquiryActive &&
      <button onClick={props.showEnquiry}>Booking Enquiry</button>
    }
  </div>
);

export default AccommodationDetailsNav;