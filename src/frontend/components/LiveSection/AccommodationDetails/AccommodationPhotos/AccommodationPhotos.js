import React from 'react';

import './AccommodationPhotos.sass';

const AccommodationPhotos = props => (
  //props.photos
  //props.selectedPhoto
  <div id='AccommodationPhotos'>
    {props.photos.map((photo, photoIndex) => (
      <img
        className={'accommodationPhoto' + (photoIndex === props.selectedPhoto ? 'Open' : 'Closed')}
        src={photo.srcLink}
        alt={photo.altText}
      ></img>
    ))}
  </div>
);

export default AccommodationPhotos;