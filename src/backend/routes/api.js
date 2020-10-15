const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get('/weather', (req, res) => {
  axios.get(process.env.WEATHERDATA)
    .then(response => {
      const respac = {
        "description": response.data.weather[0].description,
        "temperature": Math.floor(response.data.main.temp - 273.15)
      }

      res.status(200).json(respac);
    })
    .catch(error => {
      res.status(504).json(null);
    });
});

router.get('/accommodation', (req, res) => {
  const respac = [
    {
      "title": "DORMS",
      "description": "Our spacious, bunk-free dormitories sleep up to 8 people in comfortable single beds. Each dorm has en-suite bathroom facilities and a sun deck overlooking the mountains and indigenous forests of the Tsitsikamma National Park",
      "images": [
        {
          "srcLink": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602595994/Bush_camp_sign_14_vgucf7.jpg",
          "altText": "Six cozy, wooden framed beds spaced apart and a door leading to a balcony."
        }, {
          "srcLink": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602596085/Bush_camp_sign_22_zboime.jpg",
          "altText": "Four cozy, wooden framed beds with a door leading to a lush outside."
        }
      ]
    }, {
      "title": "DOUBLE ROOMS",
      "description": "We have a range of private double and twin bedrooms, most of which have en-suite bathroom facilities and a view of the mountains and forests. Ideal for couples or friends travelling together",
      "images": []
    }, {
      "title": "TWIN ROOMS",
      "description": "We have a range of private double and twin bedrooms, most of which have en-suite bathroom facilities and a view of the mountains and forests. Ideal for couples or friends travelling togethe",
      "images": []
    }, {
      "title": "FAMILY ROOMS",
      "description": "Our private en-suite family rooms can comfortably sleep between 4 to 8 people. Ideal for families or a group of friend",
      "images": []
    }, {
      "title": "SAFARI TENTS",
      "description": "Our pre-pitched 3x3m canvas Safari tents are located in the forest garden and provide ideal budget accommodation for up to two people sharing. We offer double or twin bed options with shared bathroom facilities in the main Farmhouse",
      "images": []
    }, {
      "title": "FOREST CAMPING",
      "description": "Pitch your own tent under the stars and enjoy the experience of our off-the-grid Campsite including composting toilets. Communal fire-pits for cooking are located near the rustic self-catering bush kitchen",
      "images": []
    }
  ];

  res.status(200).json(respac);
});

module.exports = router;