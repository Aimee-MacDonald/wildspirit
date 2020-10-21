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

router.get('/events', (req, res) => {
  const respac = [{
    "imgURL": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg",
    "imgAlt": "A happy group of friends planting trees together",
    "title": "Reforestation",
    "subtitle": "Recreating the indigenous forest",
    "description": "As part of the Greenpop initiative, we are planting over 300 trees in an area of cleared alien vegetation. Bring all your friends and a picnic basket and come join us in making a real and lasting difference to our natural environment."
  }, {
    "imgURL": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604745/LearnOptions/Bush_camp_sign_20_mdesil.jpg",
    "imgAlt": "A Gardener and his tools meditating with a horse",
    "title": "Concious Gardening",
    "subtitle": "Build the perfect garden and a mind to match it",
    "description": "A healthy mind promotes a healthy environment. A healthy environment promotes a healthy mind. Come join us and start your own journey to a happier, healthier you and a beautiful garden to enjoy it in."
  }, {
    "imgURL": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604744/LearnOptions/Bush_camp_sign_18_jkco8r.jpg",
    "imgAlt": "A group of people watching a band playing live outside.",
    "title": "Music on the Deck",
    "subtitle": "Live music at Wild Spirit",
    "description": "Join us for an unforgettable night of live music and festivities at wild spirit."
  }];

  res.status(200).json(respac);
});

router.get('/activities', (req, res) => {
  const respac = [{
    "name": "Hiking Trails",
    "activities": [{
      "name": "Harkerville Forest",
      "description": "activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description activity description ",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Salt River Hike",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Kalanderkloof Hike",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Otter Trail",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Robberg Nature Reserve",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }]
  }, {
    "name": "Beaches",
    "activities": [{
      "name": "Nature's Valley Beach",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Keurbooms Beach",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Central Beach",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Robberg Beach",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }]
  }, {
    "name": "Water Activities",
    "activities": [{
      "name": "Sea Kayaking Robberg",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Keurbooms River Canooing",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Groot River Lagoon Canooing",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }]
  }, {
    "name": "Animal Activities",
    "activities": [{
      "name": "Monkey Land",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Birds of Eden",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Tenikwa Wildlife Rehabilitation",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Elephant Sanctuary",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }]
  }, {
    "name": "Adrenaline Activities",
    "activities": [{
      "name": "Skydive Plett",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Bloukrans Bungy Jump",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }]
  }];

  res.status(200).json(respac);
});

module.exports = router;