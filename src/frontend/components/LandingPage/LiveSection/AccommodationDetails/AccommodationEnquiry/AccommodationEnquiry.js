import React from 'react';

import './AccommodationEnquiry.sass';

const AccommodationEnquiry = props => (
  <form id='AccommodationEnquiry' onSubmit={props.makeEnquiry}>
    <input
      value={props.accommodationType}
      hidden={true} name='accommodationType'
      readOnly={true}
      required={true}
    ></input>

    <div className='ae_item'>
      <label htmlFor='ae_name'>Name:</label>
      <input id='ae_name' name='ae_name' required={true}></input>
    </div>  

    <div className='ae_item'>
      <label htmlFor='ae_email'>Email:</label>
      <input id='ae_email' name='ae_email' required={true} type='email'></input>
    </div>

    <div className='ae_item'>
      <label htmlFor='ae_pax'>Number of People:</label>
      <input id='ae_pax' name='ae_pax' required={true}></input>
    </div>

    <div id='datePickers'>
      <div className='ae_item'>
        <label htmlFor='ae_arrival'>Arrival</label>
        <input id='ae_arrival' type='date' name='ae_arrival' required={true}></input>
      </div>

      <div className='ae_item'>
        <label htmlFor='ae_departure'>Departure</label>
        <input id='ae_departure' type='date' name='ae_departure' required={true}></input>
      </div>
    </div>

    <div className='ae_row'>
      <label htmlFor='ae_flexible'>Flexible?</label>
      <input id='ae_flexible' type='checkbox' name='ae_flexible'></input>
    </div>

    <div className='ae_item'>
      <label htmlFor='ae_message'>Message:</label>
      <textarea id='ae_message' name='ae_message'></textarea>
    </div>

    <button>Send</button>
  </form>
);

export default AccommodationEnquiry;