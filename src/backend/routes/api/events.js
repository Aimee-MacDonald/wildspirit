const express = require('express')
const router = express.Router()
const path = require('path')
const cloudinary = require('cloudinary').v2

const Event = require(path.join(__dirname, '../../dbmodels/Event.js'))

router.get('/', (req, res) => {
  Event.find({}, (err, docs) => {
    if(err){
      res.status(500).json('Internal Server Error')
    } else if(docs.length < 1) {
      res.status(404).json('Not Found')
    } else {
      res.status(200).json(docs)
    }
  })
})

router.post('/add', (req, res) => {
  if(req.isAuthenticated()){
    if(req.body._id === 'new'){
      const file = req.files.APLSImg

      cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
        if(err){
          res.status(500).json('Internal Server Error')
        } else {
          const newEvent = new Event({
            imgURL: result.secure_url,
            imageID: result.public_id,
            imgAlt: req.body.APLSImgAlt,
            title: req.body.APLSTitle,
            subtitle: req.body.APLSSubtitle,
            description: req.body.APLSDescription,
            linkText: req.body.APLSLinkText,
            linkURL: req.body.APLSLinkURL
          })

          newEvent.save(error => {
            if(error){
              res.status(500).json('Database Error')
            } else {
              res.status(201).json('Created')
            }
          })
        }
      })
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
                    doc.linkText = req.body.APLSLinkText
                    doc.linkURL = req.body.APLSLinkURL
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
            doc.linkText = req.body.APLSLinkText
            doc.linkURL = req.body.APLSLinkURL
  
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
    res.status(403).json('Forbidden')
  }
})

router.post('/remove', (req, res) => {
  if(req.isAuthenticated()){
    Event.findById(req.body.eventID, (err, doc) => {
      if(err){
        res.status(404).json('Not Found')
      } else {
        cloudinary.api.delete_resources(doc.imageID, err => {
          if(err){
            res.status(500).json('Internal Server Error')
          } else {
            Event.deleteOne({_id: req.body.eventID}, err => {
              if(err){
                res.status(500).json('Internal Server Error')
              } else {
                res.status(200).json('OK')
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

module.exports = router