const express = require('express');
const app = express();
require("dotenv").config();
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const pepipost = require('pepipost');
const fileupload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;

const apiRoute = require(path.join(__dirname, "/routes/api"));
const authRoute = require(path.join(__dirname, "/routes/auth"));
// cookieParser
// session
// passport.initialize
// passport.session
// app.router
mongoose.connect(process.env.DBURL, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

pepipost.Configuration.apiKey = process.env.EMAILKEY;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(fileupload({
  useTempFiles: true
}));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

app.use(express.static(path.join(__dirname, '../../dist')));
app.use("/api", apiRoute);
app.use('/auth', authRoute);

app.get('/', (req, res) => {
  res.status(200).render('index');
});

app.get('/admin', (req, res) => {
  if(req.isAuthenticated()){
    res.status(200).render('admin');
  } else {
    res.redirect('/auth/login');
  }
});

passport.serializeUser(function(uid, done){
  done(null, uid);
});

passport.deserializeUser(function(uid, done){
  done(null, uid);
});

app.listen(process.env.PORT, () => console.log(`Server Listening on Port: ${process.env.PORT}`));