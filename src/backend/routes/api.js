const express = require("express");
const router = express.Router();
const path = require('path');
const pepipost = require('pepipost');
const cloudinary = require("cloudinary").v2;

pepipost.Configuration.apiKey = process.env.EMAILKEY;

const Event = require(path.join(__dirname, '../dbmodels/Event.js'));
const ExploreCategory = require("../dbmodels/ExploreCategory");

const weatherRoute = require(path.join(__dirname, 'api/weather'))
const accommodationRoute = require(path.join(__dirname, 'api/accommodation'))
const quotesRoute = require(path.join(__dirname, 'api/quotes'))
const eventsRoute = require(path.join(__dirname, 'api/events'))

router.use('/weather', weatherRoute)
router.use('/accommodation', accommodationRoute)
router.use('/quotes', quotesRoute)
router.use('/events', eventsRoute)

router.get('/exploreCategories', (req, res) => {
  ExploreCategory.find({}, (error, docs) => {
    if(error){
      res.status(500).json("Internal Server Error");
    } else {
      if(docs.length < 1){
        res.status(404).json("Not Found");
      } else {
        res.status(200).json(docs);
      }
    }
  });
});

router.post('/exploreOption', (req, res) => {
  if(req.isAuthenticated()){
    if(req.body.optionName && req.body.optionDescription){
      if(req.body.categoryID === 'new'){
        if(req.body.categoryName && !!req.files){
          const file = req.files.image

          cloudinary.uploader.upload(file.tempFilePath, (error, result) => {
            if(error){
              res.status(500).json("Internal Server Error")
            } else {
              const newExploreCategory = new ExploreCategory({
                name: req.body.categoryName,
                options: [{
                  name: req.body.optionName,
                  description: req.body.optionDescription,
                  imageID: result.public_id,
                  imageURL: result.secure_url,
                  imageAlt: req.body.imgAlt,
                  links: []
                }]
              })

              newExploreCategory.save(error => {
                if(error){
                  res.status(500).json("Internal Server Error");
                } else {
                  res.status(201).json('Created');
                }
              })
            }
          })
        } else {
          res.status(400).json('Invalid Request Error')
        }
      } else {
        if(req.body.categoryID){
          ExploreCategory.findById(req.body.categoryID, (error, doc) => {
            if(error){
              res.status(500).json("Internal Server Error")
            } else {
              const optionExists = !!doc.options.filter(option => option.imageID === req.body.imageID)[0]

              if(optionExists){
                if(!!req.files){
                  cloudinary.api.delete_resources(req.body.imageID, error => {
                    if(error){
                      res.status(500).json("Internal Server Error")
                    } else {
                      const file = req.files.image

                      cloudinary.uploader.upload(file.tempFilePath, (error, result) => {
                        if(error){
                          res.status(500).json("Internal Server Error")
                        } else {
                          doc.options = doc.options.map(option => option.imageID !== req.body.imageID ? option : {
                            name: req.body.optionName,
                            description: req.body.optionDescription,
                            imageURL: result.secure_url,
                            imageID: result.public_id,
                            imageAlt: req.body.imgAlt,
                            links: []
                          })
                          
                          doc.save(error => {
                            if(error){
                              res.status(500).json("Internal Server Error")
                            } else {
                              res.status(201).json('Created')
                            }
                          })
                        }
                      })
                    }
                  })
                } else {
                  doc.options = doc.options.map(option => option.imageID !== req.body.imageID ? option : {
                    name: req.body.optionName,
                    description: req.body.optionDescription,
                    imageID: option.imageID,
                    imageURL: option.imageURL,
                    imageAlt: req.body.imgAlt,
                    links: []
                  })

                  doc.save(error => {
                    if(error){
                      res.status(500).json("Internal Server Error")
                    } else {
                      res.status(201).json('Created')
                    }
                  })
                }
              } else {
                if(!!req.files){
                  const file = req.files.image

                  cloudinary.uploader.upload(file.tempFilePath, (error, result) => {
                    if(error){
                      res.status(500).json("Internal Server Error")
                    } else {
                      doc.options = [
                        ...doc.options,
                        {
                          name: req.body.optionName,
                          description: req.body.description,
                          imageURL: result.secure_url,
                          imageID: result.public_id,
                          links: []
                        }
                      ]

                      doc.save(error => {
                        if(error){
                          res.status(500).json("Internal Server Error")
                        } else {
                          res.status(201).json('Created')
                        }
                      })
                    }
                  })
                } else {
                  res.status(400).json('Invalid Request Error')
                }
              }
            }
          })
        } else {
          res.status(400).json('Invalid Request Error')
        }
      }
    } else {
      res.status(400).json('Invalid Request Error')
    }
  } else {
    res.status(403).json('Forbidden')
  }
})

router.post('/deleteExploreOption', (req, res) => {
  if(req.isAuthenticated()){
    ExploreCategory.findById(req.body.categoryID, (error, doc) => {
      if(error){
        res.status(500).json("Internal Server Error")
      } else {
        doc.options = doc.options.filter(option => option.imageID !== req.body.optionID)
        
        doc.save(error => {
          if(error){
            res.status(500).json("Internal Server Error")
          } else {
            res.status(201).json('Deleted')
          }
        })
      }
    })
  } else {
    res.status(403).json('Forbidden')
  }
})

router.post('/deleteExploreCategory', (req, res) => {
  if(req.isAuthenticated()){
    ExploreCategory.findById(req.body.categoryID, (error, doc) => {
      if(error){
        res.status(500).json("Internal Server Error")
      } else {
        doc.options.forEach(option => {
          cloudinary.api.delete_resources(option.imageID, error => {
            if(error){
              res.status(500).json("Internal Server Error")
            }
          })
        })

        ExploreCategory.deleteOne({_id: req.body.categoryID}, error => {
          if(error){
            res.status(500).json("Internal Server Error")
          } else {
            res.status(201).json('Deleted')
          }
        })
      }
    })
  } else {
    res.status(403).json('Forbidden')
  }
})

router.post('/accommodationEnquiry', (req, res) => {
  if(req.body.enquiry){
    const enquiryData = req.body.enquiry;
    const emailDetails = {
      subject: `Accomodation Enquiry - ${enquiryData.name}`,
      content: `
        <p>${enquiryData.name} just made an enquiry via the website.</p>
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
        </table>

        <p>This is an automated email, DO NOT REPLY</p>
      `
    };

    sendEmail(emailDetails)
      .then(response => {res.status(200).json('Success')})
      .catch(error => {res.status(500).json('Internal Server Error')})
  } else {
    res.status(400).json({'text': 'No form data'});
  }
});

router.post('/learnEnquiry', (req, res) => {
  if(req.body.enquiry){
    const enquiryData = req.body.enquiry;

    const emailDetails = {
      subject: `Event Enquiry - ${enquiryData.name}`,
      content: `
        <p>${enquiryData.name} just made an enquiry via the website.</p>
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
        </table>

        <p>This is an automated email, DO NOT REPLY</p>
      `
    };

    sendEmail(emailDetails)
      .then(response => {res.status(200).json('Success')})
      .catch(error => {res.status(500).json('Internal Server Error')})

  } else {
    res.status(400).json({'text': 'No form data'});
  }
});

router.post('/sendMessage', (req, res) => {
  if(req.body.message){
    const messageData = req.body.message;

    const emailDetails = {
      subject: `General Enquiry - ${messageData.name}`,
      content: `
        <p>${messageData.name} just sent a message via the website.</p>
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
        </table>

        <p>This is an automated email, DO NOT REPLY</p>
      `
    };

    sendEmail(emailDetails)
      .then(response => {res.status(200).json('Success')})
      .catch(error => {res.status(500).json('Internal Server Error')})
  } else {
    res.status(400).json({'text': 'No form data'});
  }
});

function sendEmail(emailDetails){
  let newEmail = new pepipost.Send();

  newEmail.from = new pepipost.From();
  newEmail.from.email = process.env.EMAILFROM;
  newEmail.from.name = 'Wild Spirit Website';
  newEmail.subject = emailDetails.subject;

  newEmail.content = [];
  newEmail.content[0] = new pepipost.Content();
  newEmail.content[0].type = pepipost.TypeEnum.HTML;
  newEmail.content[0].value = emailDetails.content;

  newEmail.personalizations = [];
  newEmail.personalizations[0] = new pepipost.Personalizations();
  newEmail.personalizations[0].to = [];
  newEmail.personalizations[0].to[0] = new pepipost.EmailStruct();
  newEmail.personalizations[0].to[0].name = 'Wild Spirit Admin';
  newEmail.personalizations[0].to[0].email = process.env.EMAILTO;

  const emailController = pepipost.MailSendController;
  return emailController.createGeneratethemailsendrequest(newEmail);
}

module.exports = router;