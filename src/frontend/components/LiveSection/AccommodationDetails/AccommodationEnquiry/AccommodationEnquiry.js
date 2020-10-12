import React from 'react';

import './AccommodationEnquiry.sass';

const AccommodationEnquiry = () => (
  <form id='AccommodationEnquiry'>
    <div className='ae_item'>
      <label htmlFor='ae_name'>Name:</label>
      <input id='ae_name'></input>
    </div>  

    <div className='ae_item'>
      <label htmlFor='ae_email'>Email:</label>
      <input id='ae_email'></input>
    </div>

    <div className='ae_item'>
      <label htmlFor='ae_pax'>Number of People:</label>
      <input id='ae_pax'></input>
    </div>

    <div id='datePickers'>
      <div className='ae_item'>
        <label htmlFor='ae_arrival'>Arrival</label>
        <input id='ae_arrival' type='date'></input>
      </div>

      <div className='ae_item'>
        <label htmlFor='ae_departure'>Departure</label>
        <input id='ae_departure' type='date'></input>
      </div>
    </div>

    <div className='ae_row'>
      <label htmlFor='ae_flexible'>Flexible?</label>
      <input id='ae_flexible' type='checkbox'></input>
    </div>

    <div className='ae_item'>
      <label htmlFor='ae_message'>Message:</label>
      <textarea id='ae_message'></textarea>
    </div>

    <button>Send</button>
  </form>
);

export default AccommodationEnquiry;