const express = require('express')
const router = express.Router()
const path = require('path')

const Quote = require(path.join(__dirname, '../../dbmodels/Quote.js'))

router.get('/getRandom', (req, res) => {
  Quote.find({}, (error, docs) => {
    if(error){
      res.status(500).json('Internal Server Error')
    } else {
      res.status(200).json(docs[Math.floor(Math.random() * docs.length)])
    }
  })
})

router.get('/getAll', (req, res) => {
  Quote.find({}, (error, docs) => {
    if(error){
      res.status(500).json('Internal Server Error')
    } else {
      res.status(200).json(docs)
    }
  })
})

router.post('/post', (req, res) => {
  if(req.isAuthenticated()){
    const newQuote = new Quote({
      quoteText: req.body.quote
    })

    newQuote.save(error => {
      if(error){
        res.status(500).json('Internal Server Error')
      } else {
        res.status(201).json('Created')
      }
    })
  } else {
    res.status(403).json('Forbidden')
  }
})

router.post('/delete', (req, res) => {
  if(req.isAuthenticated()){
    Quote.deleteOne({_id: req.body.quoteID}, error => {
      if(error){
        res.status(500).json('Internal Server Error')
      } else {
        res.status(201).json('Deleted')
      }
    })
  } else {
    res.status(403).json('Forbidden')
  }
})

module.exports = router