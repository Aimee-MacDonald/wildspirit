import React from 'react';

import './AccommodationEnquiry.sass';

import ArrivalField from './ArrivalField/ArrivalField';
import DepartureField from './DepartureField/DepartureField';
import EmailField from './EmailField/EmailField';
import FlexibleField from './FlexibleField/FlexibleField';
import MessageField from './MessageField/MessageField';
import NameField from './NameField/NameField';
import PaxField from './PaxField/PaxField';
import SendButton from './SendButton/SendButton';

const AccommodationEnquiry = props => (
  <form className='AccommodationEnquiry'>
    <NameField accommodationType={props.accommodationType} />
    <EmailField accommodationType={props.accommodationType} />
    <PaxField accommodationType={props.accommodationType} />
    <ArrivalField accommodationType={props.accommodationType} />
    <DepartureField accommodationType={props.accommodationType} />
    <FlexibleField accommodationType={props.accommodationType} />
    <MessageField accommodationType={props.accommodationType} />
    <SendButton />
  </form>
);

export default AccommodationEnquiry;
