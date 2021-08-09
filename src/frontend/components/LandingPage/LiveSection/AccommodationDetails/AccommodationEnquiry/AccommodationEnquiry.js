import React from 'react'

import './AccommodationEnquiry.sass'

const AccommodationEnquiry = props => {
  const makeEnquiry = e => {
    e.preventDefault()
    props.setEnquiryStatus(props.enquiryStates.indexOf('enquirySent'))
    
    const formData = {
      'accommodationType': e.target.accommodationType.value,
      'name': e.target.ae_name.value,
      'email': e.target.ae_email.value,
      'pax': e.target.ae_pax.value,
      'arrival': e.target.ae_arrival.value,
      'departure': e.target.ae_departure.value,
      'flexible': e.target.ae_flexible.checked,
      'message': e.target.ae_message.value
    }

    fetch('/api/accommodationEnquiry', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({'enquiry': formData})
    }).then(res => res.json())
      .then(result => {
        if(result === 'Success'){
          props.setEnquiryStatus(props.enquiryStates.indexOf('enquirySuccess'))
        } else {
          props.setEnquiryStatus(props.enquiryStates.indexOf('enquiryFail'))
        }
      })
      .catch(error => props.setEnquiryStatus(props.enquiryStates.indexOf('enquiryFail')))
  }

  return (
    <form id='AccommodationEnquiry' onSubmit={makeEnquiry}>
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
        <input
          id='ae_pax'
          name='ae_pax'
          required={true}
          onChange={props.calculateCost}
        ></input>
      </div>

      <div id='datePickers'>
        <div className='ae_item'>
          <label htmlFor='ae_arrival'>Arrival</label>
          <input
            id='ae_arrival'
            type='date'
            name='ae_arrival'
            required={true}
            onChange={props.calculateCost}
          ></input>
        </div>

        <div className='ae_item'>
          <label htmlFor='ae_departure'>Departure</label>
          <input
            id='ae_departure'
            type='date'
            name='ae_departure'
            required={true}
            onChange={props.calculateCost}
          ></input>
        </div>
      </div>

      <div className='ae_row'>
        <div>
          <input id='ae_flexible' type='checkbox' name='ae_flexible'></input>
          <label htmlFor='ae_flexible'>Flexible?</label>
        </div>
        <p>{`Estimated Total: R${props.estimation}`}</p>
      </div>

      <div className='ae_item'>
        <label htmlFor='ae_message'>Message:</label>
        <textarea id='ae_message' name='ae_message'></textarea>
      </div>

      <button>Send</button>
    </form>
  )
}

export default AccommodationEnquiry