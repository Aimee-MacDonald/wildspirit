const express = require('express')
const router = express.Router()
const cloudinary = require("cloudinary").v2;

const ExploreCategory = require('../../dbmodels/ExploreCategory')

router.get('/categories', (req, res) => {
  ExploreCategory.find({}, (error, docs) => {
    if(error){
      res.status(500).json("Internal Server Error")
    } else {
      if(docs.length < 1){
        res.status(404).json("Not Found")
      } else {
        res.status(200).json(docs)
      }
    }
  })
})

router.post('/option', (req, res) => {
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

router.post('/deleteOption', (req, res) => {
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

router.post('/deleteCategory', (req, res) => {
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

module.exports = router