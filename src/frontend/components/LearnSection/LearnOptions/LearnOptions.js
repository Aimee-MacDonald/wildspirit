import React from 'react';

import './LearnOptions.sass';

import LearnOption from './LearnOption/LearnOption';

const LearnOptions = () => (
  <div id='LearnOptions'>
    <LearnOption
      title='Reforestation'
      subtitle='Recreating the indigenous forest'
      description='As part of the Greenpop initiative, we are planting over 300 trees in an area of cleared alien vegetation. Bring all your friends and a picnic basket and come join us in making a real and lasting difference to our natural environment.'
    />

    <LearnOption
      title='Concious Gardening'
      subtitle='Build the perfect garden and a mind to match it'
      description='A healthy mind promotes a healthy environment. A healthy environment promotes a healthy mind. Come join us and start your own journey to a happier, healthier you and a beautiful garden to enjoy it in.'
    />

    <LearnOption
      title='Music on the Deck'
      subtitle='Live music at Wild Spirit'
      description='Join us for an unforgettable night of live music and festivities at wild spirit.'
    />
  </div>
);

export default LearnOptions;