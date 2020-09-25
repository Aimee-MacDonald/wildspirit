import React from 'react';

import './AccommodationOptions.sass'

import AccommodationOption from './AccommodationOption/AccommodationOption';


const accommodationData = [
  {
    "title": "DORMS",
    "description": "Our spacious, bunk-free dormitories sleep up to 8 people in comfortable single beds. Each dorm has en-suite bathroom facilities and a sun deck overlooking the mountains and indigenous forests of the Tsitsikamma National Park"
  }, {
    "title": "DOUBLE ROOMS",
    "description": "We have a range of private double and twin bedrooms, most of which have en-suite bathroom facilities and a view of the mountains and forests. Ideal for couples or friends travelling together"
  }, {
    "title": "TWIN ROOMS",
    "description": "We have a range of private double and twin bedrooms, most of which have en-suite bathroom facilities and a view of the mountains and forests. Ideal for couples or friends travelling togethe"
  }, {
    "title": "FAMILY ROOMS",
    "description": "Our private en-suite family rooms can comfortably sleep between 4 to 8 people. Ideal for families or a group of friend"
  }, {
    "title": "SAFARI TENTS",
    "description": "Our pre-pitched 3x3m canvas Safari tents are located in the forest garden and provide ideal budget accommodation for up to two people sharing. We offer double or twin bed options with shared bathroom facilities in the main Farmhouse"
  }, {
    "title": "FOREST CAMPING",
    "description": "Pitch your own tent under the stars and enjoy the experience of our off-the-grid Campsite including composting toilets. Communal fire-pits for cooking are located near the rustic self-catering bush kitchen"
  }
]

const AccommodationOptions = () => (
  <div id='AccommodationOptions'>
    {accommodationData.map(acc => (
      <AccommodationOption
        key={acc.title}
        title={acc.title}
        description={acc.description}
      />
    ))}
  </div>
);

export default AccommodationOptions;