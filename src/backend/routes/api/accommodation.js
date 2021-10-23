const express = require('express')
const router = express.Router()
const path = require('path')
const cloudinary = require('cloudinary').v2

const Accommodation = require(path.join(__dirname, '../../dbmodels/Accommodation'))

router.get('/', (req, res) => {
  Accommodation.find({}, (error, docs) => {
    if(error) {
      res.status(500).json('Internal Server Error')
    } else {
      res.status(200).json(docs)
    }
  })
})

router.post('/', (req, res) => {
  if(req.isAuthenticated){
    if(req.body._id === 'new'){
      const newAccommodation = new Accommodation({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
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
          doc.price = req.body.price

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
    res.status(403).json('Forbidden')
  }
})

router.post('/addImage', (req, res) => {
  if(req.isAuthenticated()){
    if(req.files){
      const file = req.files.roomImage

      cloudinary.uploader.upload(file.tempFilePath, (error, result) => {
        if(error){
          res.status(500).json('Internal Server Error')
        } else {
          Accommodation.findById(req.body.roomId, (error, doc) => {
            if(error){
              res.status(500).json('Internal Server Error')
            } else {
              doc.images = [
                ...doc.images,
                {
                  srcLink: result.secure_url,
                  imgID: result.public_id,
                  altText: req.body.imgAlt,
                  order: doc.images.length
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

router.post('/removeImage', (req, res) => {
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

router.post('/remove', (req, res) => {
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
          res.status(201).json('Deleted')
        }
      })
    }
  })
})

module.exports = router