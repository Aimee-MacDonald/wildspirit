const express = require('express');
const app = express();
require("dotenv").config();
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const nodemailer = require('nodemailer');

const api = require(path.join(__dirname, "/routes/api"));

const LoginRequest = require(path.join(__dirname, '/dbmodels/LoginRequest'));

mongoose.connect(process.env.DBURL, {useNewUrlParser: true, useUnifiedTopology: true});

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, '../../dist')));
app.use("/api", api);

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.status(200).render('index');
});

app.get('/admin', (req, res) => {
  if(req.isAuthenticated()){
    res.status(200).render('admin');
  } else {
    res.redirect('/login');
  }
});

app.get('/login', (req, res) => {
  res.status(200).render('login');
});

app.post('/requestLogin', (req, res) => {
  if(req.body.email === process.env.MAILUSER){
    const newLoginRequest = new LoginRequest({timestamp: Date.now()});
    newLoginRequest.save(err => {
      if(err){
        res.redirect('/login');
      } else {
        const mailOptions = {
          'from': process.env.MAILUSER,
          'to': process.env.MAILUSER,
          'subject': 'WSW Login Request',
          'text': `WSW Login Request`,
          'html': `
                    <p>You just requested to login to the Wild Spirit website</p>
                    <p>Please click the link below to login</p>
                    <a href=${process.env.BASEURL}/mailLogin?id=${newLoginRequest._id}>Login Link</a>
                  `
        }

        sendEmail(mailOptions);
        res.status(200).send("<h1>Check your mail</h1>");
      }
    })
  } else {
    res.status(200).send("<h1>Check your mail</h1>");
  }
});

app.get('/mailLogin', (req, res) => {
  LoginRequest.findById(req.query.id, (err, doc) => {
    if(err){
      res.redirect('/login');
    } else {
      req.login(req.query.id, err => {
        if(err){
          res.redirect('/login');
        } else {
          res.redirect('/admin');
        }
      });
    }
  });
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

passport.serializeUser(function(uid, done){
  done(null, uid);
});

passport.deserializeUser(function(uid, done){
  done(null, uid);
});

app.listen(process.env.PORT, () => console.log(`Server Listening on Port: ${process.env.PORT}`));

function sendEmail(mailoptions){
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAILUSER,
      pass: process.env.MAILPASS
    }
  });

  transporter.sendMail(mailoptions, (err, info) => {
    if(err){
      console.log('Failed to send email.');
    }
  });
}