import React from 'react'

import './AccommodationDetailsNav.sass'

const AccommodationDetailsNav = ({enquiring, setEnquiryStatus, resetSelectedOption, optionDetails}) => (
  <div id='AccommodationDetailsNav'>
    <div>
      <button
        onClick={resetSelectedOption}
        className='close'
      >Close</button>

      <h2>{optionDetails.title}</h2>
      <p>{optionDetails.description}</p>
    </div>

    {enquiring && (
      <button onClick={() => setEnquiryStatus(0)}>Photos</button>
    )}

    {!enquiring && (
      <button onClick={() => setEnquiryStatus(1)}>Booking Enquiry</button>
    )}
  </div>
)

export default AccommodationDetailsNav
































