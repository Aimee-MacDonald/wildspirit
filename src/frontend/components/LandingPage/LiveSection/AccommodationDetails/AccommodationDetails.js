import React, {useState} from 'react'

import './AccommodationDetails.sass'

import AccommodationDetailsNav from './AccommodationDetailsNav/AccommodationDetailsNav'
import AccommodationPhotos from './AccommodationPhotos/AccommodationPhotos'
import AccommodationEnquiry from './AccommodationEnquiry/AccommodationEnquiry'

const AccommodationDetails = ({resetSelectedOption, optionDetails}) => {
  const enquiryStates = [
    'hidden',
    'enquiring',
    'enquirySent',
    'enquirySuccess',
    'enquiryFail'
  ]

  const [enquiryStatus, setEnquiryStatus] = useState(0)

  return (
    <div id='AccommodationDetails'>
      <AccommodationDetailsNav
        enquiring={enquiryStatus === enquiryStates.indexOf('enquiring')}
        setEnquiryStatus={setEnquiryStatus}
        optionDetails={optionDetails}
        resetSelectedOption={resetSelectedOption}
      />

      {enquiryStatus === enquiryStates.indexOf('hidden') &&
        <AccommodationPhotos
          photos={optionDetails.images}
        />
      }

      {enquiryStatus === enquiryStates.indexOf('enquiring') &&
        <AccommodationEnquiry
          enquiryStates={enquiryStates}
          setEnquiryStatus={setEnquiryStatus}
          accommodationType={optionDetails.title}
        />
      }

      {enquiryStatus === enquiryStates.indexOf('enquirySent') &&
        <div className='enquiring'>
          <div className='spinner'><div></div></div>
          <h1>Sending Enquiry</h1>
        </div>
      }

      {enquiryStatus === enquiryStates.indexOf('enquirySuccess') &&
        <div className='enquiring'>
          <h1>Enquiry Success</h1>
        </div>
      }

      {enquiryStatus === enquiryStates.indexOf('enquiryFail') &&
        <div className='enquiring'>
          <h1>Enquiry Failed</h1>
        </div>
      }
    </div>
  )
}

export default AccommodationDetails