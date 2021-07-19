const express = require("express");
const router = express.Router();
const axios = require('axios');
const path = require('path');
const pepipost = require('pepipost');
const cloudinary = require("cloudinary").v2;

pepipost.Configuration.apiKey = process.env.EMAILKEY;

const Accommodation = require(path.join(__dirname, '../dbmodels/Accommodation.js'));
const Event = require(path.join(__dirname, '../dbmodels/Event.js'));
const ExploreCategory = require("../dbmodels/ExploreCategory");

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
  if(req.isAuthenticated){
    if(req.body._id === 'new'){
      const newAccommodation = new Accommodation({
        title: req.body.title,
        description: req.body.description,
        images: []
      })

      newAccommodation.save(err => {
        if(err){
          res.status(500).json('Database Error')
        } else {
          res.status(201).json('Created')
        }
      })
    } else {
      Accommodation.findById(req.body._id, (err, doc) => {
        if(err){
          res.status(500).json('Database Error')
        } else {
          doc.title = req.body.title
          doc.description = req.body.description

          doc.save(err => {
            if(err){
              res.status(500).json('Database Error')
            } else {
              res.status(200).json('Updated')
            }
          })
        }
      })
    }
  } else {
    res.status(403).json('Forbidden');
  }
})

router.post('/addAccommodationImage', (req, res) => {
  if(req.isAuthenticated()){
    if(req.files){
      const file = req.files.roomImage

      cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
        if(err){
          res.status(500).json("Internal Server Error")
        } else {
          Accommodation.findById(req.body.roomId, (error, doc) => {
            if(error){
              res.status(500).json("Internal Server Error")
            } else {
              doc.images = [
                ...doc.images,
                {
                  srcLink: result.secure_url,
                  imgID: result.public_id,
                  altText: req.body.imgAlt
                }
              ]

              doc.save(er => {
                if(er){
                  res.status(500).json('Database Error')
                } else {
                  res.status(201).json('Created')
                }
              })
            }
          })
        }
      })
    }
  } else {
    res.status(403).json('Forbidden')
  }
})

router.post('/removeAccommodationImage', (req, res) => {
  if(req.isAuthenticated()){
    cloudinary.api.delete_resources(req.body.imageId, error => {
      if(error){
        res.status(500).json('Internal Server Error')
      } else {
        Accommodation.findById(req.body.roomId, (err, doc) => {
          if(err){
            res.status(500).json('Database Error')
          } else {
            doc.images = doc.images.filter(image => image.imgID !== req.body.imageId)
            doc.save(er => {
              if(er){
                res.status(500).json('Database Error')
              } else {
                res.status(200).json('Updated')
              }
            })
          }
        })
      }
    })
  } else {
    res.status(403).json('Forbidden')
  }
})

router.post('/removeAccommodation', (req, res) => {
  Accommodation.findById(req.body.roomId, (error, doc) => {
    if(error){
      res.status(500).json('Database Error')
    } else {
      doc.images.forEach(image => {
        cloudinary.api.delete_resources(image.imgID, error => {
          if(error) res.status(500).json('Internal Server Error')
        })
      })

      Accommodation.deleteOne(doc, error => {
        if(error){
          res.status(500).json('Internal Server Error')
        } else {
          res.status(201).json('Deleted');
        }
      })
    }
  })
})

router.post('/event', (req, res) => {
  if(req.isAuthenticated()){
    if(req.body._id === 'new'){
      const file = req.files.APLSImg;

      cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
        if(err){
          res.status(500).json("Internal Server Error");
        } else {
          const newEvent = new Event({
            imgURL: result.secure_url,
            imageID: result.public_id,
            imgAlt: req.body.APLSImgAlt,
            title: req.body.APLSTitle,
            subtitle: req.body.APLSSubtitle,
            description: req.body.APLSDescription
          });

          newEvent.save(error => {
            if(error){
              res.status(500).json('Database Error');
            } else {
              res.status(201).json('Created');
            }
          });
        }
      });
    } else {
      if(!!req.files){
        const file = req.files.APLSImg

        Event.findById(req.body._id, (err, doc) => {
          if(err){
            res.status(404).json('Not Found')
          } else {
            cloudinary.api.delete_resources(doc.imageID, error => {
              if(error){
                res.status(500).json('Internal Server Error')
              } else {
                cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
                  if(err){
                    res.status(500).json('Internal Server Error')
                  } else {
                    doc.imgAlt = req.body.APLSImgAlt
                    doc.title = req.body.APLSTitle
                    doc.subtitle = req.body.APLSSubtitle
                    doc.description = req.body.APLSDescription
                    doc.imgURL = result.secure_url
                    doc.imageID = result.public_id
                    
                    doc.save(error => {
                      if(error){
                        res.status(500).json('Database Error')
                      } else {
                        res.status(201).json('Updated')
                      }
                    })
                  }
                })
              }
            })
          }
        })
      } else {
        Event.findById(req.body._id, (err, doc) => {
          if(err){
            res.status(500).json('Database Error')
          } else {
            doc.imgAlt = req.body.APLSImgAlt
            doc.title = req.body.APLSTitle
            doc.subtitle = req.body.APLSSubtitle
            doc.description = req.body.APLSDescription
  
            doc.save(error => {
              if(error){
                res.status(500).json('Database Error')
              } else {
                res.status(201).json('Updated')
              }
            })
          }
        })
      }
    }
  } else {
    res.status(403).json('Forbidden');
  }
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

router.post('/removeEvent', (req, res) => {
  if(req.isAuthenticated()){
    Event.findById(req.body.eventID, (err, doc) => {
      if(err){
        res.status(404).json("Not Found");
      } else {
        cloudinary.api.delete_resources(doc.imageID, err => {
          if(err){
            res.status(500).json("Internal Server Error");
          } else {
            Event.deleteOne({_id: req.body.eventID}, err => {
              if(err){
                res.status(500).json("Internal Server Error");
              } else {
                res.status(200).json('OK');
              }
            });
          }
        });
      }
    });
  } else {
    res.status(403).json('Forbidden');
  }
});

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

router.post('/addExploreCategory', (req, res) => {
  if(req.isAuthenticated()){
    const newExploreCategory = new ExploreCategory({
      name: req.body.categoryName,
      options: []
    });

    newExploreCategory.save(error => {
      if(error){
        res.status(500).json("Internal Server Error");
      } else {
        res.status(201).json('Created');
      }
    });
  } else {
    res.status(403).json('Forbidden');
  }
});

router.post('/addExploreOption', (req, res) => {
  if(req.isAuthenticated()){
    const file = req.files.image;

    cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
      if(err){
        res.status(500).json("Internal Server Error");
      } else {
        ExploreCategory.findOneAndUpdate({name: req.body.category}, {$push: {options: {
          name: req.body.name,
          description: req.body.description,
          imageURL: result.secure_url,
          imageID: result.public_id,
          links: [
            {
              title: req.body.linkOneTitle,
              URL: req.body.linkOneURL
            }, {
              title: req.body.linkTwoTitle,
              URL: req.body.linkTwoURL
            }, {
              title: req.body.linkThreeTitle,
              URL: req.body.linkThreeURL
            }
          ]
        }}}, (error, response) => {
          if(error){
            res.status(500).json("Internal Server Error");
          } else {
            res.status(201).json('Created');
          }
        });
      }
    });
  } else {
    res.status(403).json('Forbidden');
  }
});

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
      subject: `Event Enquiry - ${enquiryDetails.name}`,
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