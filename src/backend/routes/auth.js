const express = require("express");
const router = express.Router();
const path = require('path');
const pepipost = require('pepipost');

const LoginRequest = require(path.join(__dirname, '../dbmodels/LoginRequest'));

router.get('/login', (req, res) => {
  res.status(200).render('login');
});

router.post('/requestLogin', (req, res) => {
  if(req.body.email === process.env.EMAILTO){
    const newLoginRequest = new LoginRequest({timestamp: new Date().getTime()});
    newLoginRequest.save(err => {
      if(err){
        res.redirect('/auth/login');
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
          <a href=${process.env.BASEURL}/auth/mailLogin?id=${newLoginRequest._id}&ts=${newLoginRequest.timestamp}>Login Link</a>
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

router.get('/mailLogin', (req, res) => {
  LoginRequest.findById(req.query.id, (err, doc) => {
    if(err){
      res.redirect('/auth/login');
    } else {
      
      if(!!doc){
        const deltaMinutes = (new Date().getTime() - req.query.ts) / 60000;

        if(deltaMinutes < 30){
          req.login(req.query.id, err => {
            if(err){
              res.redirect('/auth/login');
            } else {
              res.redirect('/auth/admin');
            }
          });
        } else {
          res.redirect('/auth/login');
        }
      } else {
        res.redirect('/auth/login');
      }
    }
  });
});

router.get('/logout', (req, res) => {
  req.logout();

  LoginRequest.deleteMany({}, err => {
    if(err){
      console.log('Unable to remove all Login Requests');
    }
  });

  res.redirect('/');
});

module.exports = router;