const express = require("express");
const router = express.Router();
const axios = require('axios');
const nodemailer = require('nodemailer');
const path = require('path');

const Accommodation = require(path.join(__dirname, '../dbmodels/Accommodation.js'));
const Event = require(path.join(__dirname, '../dbmodels/Event.js'));

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
  Accommodation.find({}, (err, docs) => {
    if(err){
      res.status(500).json("Internal Server Error");
    } else if(docs.length < 1){
      res.status(404).json("Not Found");
    } else {
      res.status(200).json(docs);
    }
  });
});

router.post('/accommodation', (req, res) => {
  const newAccommodation = new Accommodation({
    title: 'Dorms',
    description: 'Our spacious, bunk-free dormitories sleep up to 8 people in comfortable single beds. Each dorm has en-suite bathroom facilities and a sun deck overlooking the mountains and indigenous forests of the Tsitsikamma National Park',
    images: []
  });

  newAccommodation.save(err => {
    if(err){
      res.status(304).json('Not Modified');
    } else {
      res.status(201).json('Created');
    }
  });
});

router.post('/event', (req, res) => {
  const newEvent = new Event({
    imgURL: "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg",
    imgAlt: "A happy group of friends planting trees together",
    title: "Reforestation",
    subtitle: "Recreating the indigenous forest",
    description: "As part of the Greenpop initiative, we are planting over 300 trees in an area of cleared alien vegetation. Bring all your friends and a picnic basket and come join us in making a real and lasting difference to our natural environment."
  });

  newEvent.save(err => {
    if(err){
      res.status(304).json('Not Modified');
    } else {
      res.status(201).json('Created');
    }
  });
});

router.get('/events', (req, res) => {
  Event.find({}, (err, docs) => {
    if(err){
      res.status(500).json("Internal Server Error");
    } else if(docs.length < 1){
      res.status(404).json("Not Found");
    } else {
      res.status(200).json(docs);
    }
  });
});

router.get('/activities', (req, res) => {
  const respac = [{
    "name": "Onsite",
    "activities": [{
      "name": "Breakfast",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Dinner",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Self Catering Kitchens",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Shuttles",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Free WiFi",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Yoga Barn",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Mountain Bikes",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }]
  }, {
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
      "name": "River Canyoning",
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
    }, {
      "name": "Jukani",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Whale Watching",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Snake Sanctuary",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Swim with seals",
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
  }, {
    "name": "Restaurants",
    "activities": [{
      "name": "Pepper mill",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Farmstall",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Bread & Brew",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Moss & Maple",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Thyme & Again",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Enrico's",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }, {
      "name": "Nature's Valley Pub",
      "description": "activity description",
      "image": "https://res.cloudinary.com/dcmdpotqs/image/upload/v1602604754/LearnOptions/IMG-20200808-WA0026_jokxd5.jpg"
    }]
  }];

  res.status(200).json(respac);
});

router.post('/accommodationEnquiry', (req, res) => {
  if(req.body.enquiry){
    const enquiryData = req.body.enquiry;

    var mailoptions = {
      'from': process.env.MAILUSER,
      'to': process.env.MAILUSER,
      'subject': 'WSW Accommodation Enquiry',
      'text': `WSW Accommodation Enquiry`,
      'html':`<p>${enquiryData.name} just made an enquiry via the website.</p>
              <p>Enquiry Details:</p>
              <table>
                <tr>
                  <td>Accommodation Type:</td>
                  <td>${enquiryData.accommodationType}</td>
                </tr>
                <tr>
                  <td>Name:</td>
                  <td>${enquiryData.name}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>${enquiryData.email}</td>
                </tr>
                <tr>
                  <td>Pax:</td>
                  <td>${enquiryData.pax}</td>
                </tr>
                <tr>
                  <td>Arrival:</td>
                  <td>${enquiryData.arrival}</td>
                </tr>
                <tr>
                  <td>Departure:</td>
                  <td>${enquiryData.departure}</td>
                </tr>
                <tr>
                  <td>Flexible:</td>
                  <td>${enquiryData.flexible}</td>
                </tr>
                <tr>
                  <td>Message:</td>
                  <td>${enquiryData.message}</td>
                </tr>
              </table>`
    };

    sendEmail(mailoptions);

    res.status(200).json({'text': 'Success'});
  } else {
    res.status(400).json({'text': 'No form data'});
  }
});

router.post('/learnEnquiry', (req, res) => {
  if(req.body.enquiry){
    const enquiryData = req.body.enquiry;

    var mailoptions = {
      'from': process.env.MAILUSER,
      'to': process.env.MAILUSER,
      'subject': 'WSW Event Enquiry',
      'text': `WSW Event Enquiry`,
      'html':`<p>${enquiryData.name} just made an enquiry via the website.</p>
              <p>Enquiry Details:</p>
              <table>
                <tr>
                  <td>Event:</td>
                  <td>${enquiryData.event}</td>
                </tr>
                <tr>
                  <td>Name:</td>
                  <td>${enquiryData.name}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>${enquiryData.email}</td>
                </tr>
                <tr>
                  <td>Message:</td>
                  <td>${enquiryData.message}</td>
                </tr>
              </table>`
    };

    sendEmail(mailoptions);

    res.status(200).json({'text': 'Success'});
  } else {
    res.status(400).json({'text': 'No form data'});
  }
});

router.post('/sendMessage', (req, res) => {
  if(req.body.message){
    const messageData = req.body.message;


    var mailoptions = {
      'from': process.env.MAILUSER,
      'to': process.env.MAILUSER,
      'subject': 'WSW Message',
      'text': `WSW Message`,
      'html':`<p>${messageData.name} just sent a message via the website.</p>
              <p>Details:</p>
              <table>
                <tr>
                  <td>Name:</td>
                  <td>${messageData.name}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>${messageData.email}</td>
                </tr>
                <tr>
                  <td>Message:</td>
                  <td>${messageData.message}</td>
                </tr>
              </table>`
    };

    sendEmail(mailoptions);

    res.status(200).json({'text': 'Success'});
  } else {
    res.status(400).json({'text': 'No form data'});
  }
});

function sendEmail(mailoptions){
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAILUSER,
      pass: process.env.MAILPASS
    }
  });

  transporter.sendMail(mailoptions, (err, info) => {
    if(err) throw err;
  });
}

module.exports = router;