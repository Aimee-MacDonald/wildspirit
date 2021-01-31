import React from 'react';

import './LearnOption.sass';

import {FacebookShareButton, FacebookIcon} from 'react-share';

const LearnOption = props => (
  <div id='LearnOption'>
    <div className='imageArea' role='img' aria-label={props.eventDetails.imgAlt} style={{backgroundImage: `url('${props.eventDetails.imgURL}')`}} />
 
    <div className='enquiryArea'>
      {props.eventDetails.enquiryDetails && (
        <div className='enquiryDetails'>
          <h1>{props.eventDetails.title}</h1>
          <h2>{props.eventDetails.subtitle}</h2>
          <p>{props.eventDetails.description}</p>

          <div className='enquiryButtons'>
            <button className='enquire' onClick={props.showEnquiryForm}>Enquire</button>

            <FacebookShareButton
              url={'https://wildspiritlodge.herokuapp.com/#LearnSection'}
              quote={`${props.eventDetails.title}: ${props.eventDetails.subtitle}`}
              hashtag='#wildspirit'>
              <FacebookIcon size={36} />
            </FacebookShareButton>
          </div>
        </div>
      )}

      {props.eventDetails.enquiryForm && (
        <form className='enquiryForm' onSubmit={props.sendEnquiry}>
          <label htmlFor='LOEName'>Name:</label>
          <input id='LOEName' name='LOEName' required></input>

          <label htmlFor='LOEEmail'>Email:</label>
          <input id='LOEEmail' type='email' name='LOEEmail' required></input>

          <label htmlFor='LOEMessage'>Message:</label>
          <textarea id='LOEMessage' name='LOEMessage'></textarea>

          <input value={props.eventName} name={'LOEEvent'} hidden={true} readOnly={true}></input>

          <div className='LOEButtons'>
            <button type='submit'>Send</button>
            <button type='reset' onClick={props.reset}>Cancel</button>
          </div>
        </form>
      )}

      {props.eventDetails.enquiryLoading && (
        <div className='enquiryLoading'>
          <div className='spinner'><div></div></div>
          <h1>Loading</h1>
        </div>
      )}

      {props.eventDetails.enquirySuccess && (
        <div className='enquirySuccess'>
          <h1>Enquiry Success</h1>
          <p>Thank you for your enquiry, we will respond to you as soon as possible.</p>
        </div>
      )}

      {props.eventDetails.enquiryFail && (
        <div className='enquiryFail'>
          <h1>Enquiry Failed</h1>
          <p>An error occured, please check your connection and try again.</p>
        </div>
      )}
    </div>
  </div>
);

export default LearnOption;