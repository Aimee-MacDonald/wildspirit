const express = require('express');
const app = express();
require("dotenv").config();
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const pepipost = require('pepipost');

const api = require(path.join(__dirname, "/routes/api"));

const LoginRequest = require(path.join(__dirname, '/dbmodels/LoginRequest'));

mongoose.connect(process.env.DBURL, {useNewUrlParser: true, useUnifiedTopology: true});

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

pepipost.Configuration.apiKey = process.env.EMAILKEY;

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
  if(req.body.email === process.env.EMAILTO){
    const newLoginRequest = new LoginRequest({timestamp: new Date().getTime()});
    newLoginRequest.save(err => {
      if(err){
        res.redirect('/login');
      } else {
        let newEmail = new pepipost.Send();

        newEmail.from = new pepipost.From();
        newEmail.from.email = process.env.EMAILFROM;
        newEmail.from.name = 'Wild Spirit Website';
        newEmail.subject = 'Admin Login Request';

        newEmail.content = [];
        newEmail.content[0] = new pepipost.Content();
        newEmail.content[0].type = pepipost.TypeEnum.HTML;
        newEmail.content[0].value = `
          <p>You just requested to login to the Wild Spirit website</p>
          <p>Please click the link below to login</p>
          <a href=${process.env.BASEURL}/mailLogin?id=${newLoginRequest._id}&ts=${newLoginRequest.timestamp}>Login Link</a>
        `;

        newEmail.personalizations = [];
        newEmail.personalizations[0] = new pepipost.Personalizations();
        newEmail.personalizations[0].to = [];
        newEmail.personalizations[0].to[0] = new pepipost.EmailStruct();
        newEmail.personalizations[0].to[0].name = 'Wild Spirit Admin';
        newEmail.personalizations[0].to[0].email = process.env.EMAILTO;

        const emailController = pepipost.MailSendController;
        const emailPromise = emailController.createGeneratethemailsendrequest(newEmail);

        emailPromise.then(response => {
          res.status(200).send("<h1>Check your mail</h1>");
        }).catch(error => {
          res.status(500).json("Internal Server Error");
        });
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
      
      if(!!doc){
        const deltaMinutes = (new Date().getTime() - req.query.ts) / 60000;

        if(deltaMinutes < 30){
          req.login(req.query.id, err => {
            if(err){
              res.redirect('/login');
            } else {
              res.redirect('/admin');
            }
          });
        } else {
          res.redirect('/login');
        }
      } else {
        res.redirect('/login');
      }
    }
  });
});

app.get('/logout', (req, res) => {
  req.logout();

  LoginRequest.deleteMany({}, err => {
    if(err){
      console.log('Unable to remove all Login Requests');
    }
  });

  res.redirect('/');
});

passport.serializeUser(function(uid, done){
  done(null, uid);
});

passport.deserializeUser(function(uid, done){
  done(null, uid);
});

app.listen(process.env.PORT, () => console.log(`Server Listening on Port: ${process.env.PORT}`));