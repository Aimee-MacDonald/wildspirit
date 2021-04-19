import React from 'react';

import './AccommodationDetailsNav.sass';

const AccommodationDetailsNav = props => (
  <div id='AccommodationDetailsNav'>
    <button id='closeButton' onClick={props.closeDetails}>Close</button>
    <h4>{props.accommodationDetails.title}</h4>
    <p>{props.accommodationDetails.description}</p>

    {!props.photosActive &&
      <button id='photosButton' onClick={props.showPhotos}>Photos</button>
    }
      
    {!props.enquiryActive &&
      <button id='enquiryButton' onClick={props.showEnquiry}>Booking Enquiry</button>
    }

    {!props.enquiryActive &&
      <div id='imageNav'>
        <button className='left' onClick={props.showPreviousPhoto}></button>
        {props.photos.map((photo, index) => (
          <span
            key={`indicator_${index}`}
            className={props.selectedPhoto === index ? 'active' : 'inactive'}
          ></span>
        ))}
        <button className='right' onClick={props.showNextPhoto}></button>
      </div>
    }
  </div>
);

export default AccommodationDetailsNav;