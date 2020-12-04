var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* GET home page. */
// router.get('/contact', function (req, res, next) {
//     res.render('contact', { title: 'Express-contact' });
// });
router.post('/contact/subscribe', function (req, res) {
   
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'crystaleum.tmm@gmail.com',
            pass: 'ttptlstxwmvjduky'
        }
        
    });
 let formSubmittedEmail = req.body.email;
   if(formSubmittedEmail == undefined ){
      return;
      }
   if(formSubmittedEmail == null){
      return;
      }
   if(formSubmittedEmail == ""){
      return;
      }
    var mailOption = {
        from: 'Crystaleum Official <crystaleum.tmm@gmail.com>', // sender address
        to: 'etxsub.ou4jbg@zapiermail.com, crystaleum.tmm@gmail.com, electronerodev@gmail.com', // receivers address
        subject: 'New Crystaleum Subscription from: '+req.body.email, // subject added to sheet
        text: 'The following subscriber has requested contact and/or reply from the Crystaleum team', // text body
        html: '<p>Crystaleum Subscription:</p><ul><li>' +req.body.email+ '</li>' + '</ul>'
    }
    transporter.sendMail(mailOption, function (error, info) {
        console.log(info);
        if (error) {
            console.log(error);
            res.redirect('/');
        }else{        
            consol.log('Message Sent');
            res.redirect('/');
        }
    });
    res.redirect('/');
});

router.post('/contact/send', function (req, res) {
   
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'crystaleum.tmm@gmail.com',
            pass: 'ttptlstxwmvjduky'
        }
        
    });

    let formSubmittedEmail = req.body.email;
    let formSubmittedName = req.body.name;
    let formSubmittedMessage = req.body.message;
   if(formSubmittedEmail == undefined || formSubmittedName == undefined || formSubmittedMessage == undefined){
      return;
      }
   if(formSubmittedEmail == null || formSubmittedName == null || formSubmittedMessage == null){
      return;
      }
   if(formSubmittedEmail == "" || formSubmittedName == "" || formSubmittedMessage == ""){
      return;
      }
    let sendFormToStaff = 'etxsub.ou4jbg@zapiermail.com, crystaleum.tmm@gmail.com, electronerodev@gmail.com';

    var mailOption = {
        from: '' + formSubmittedName + ' <' + formSubmittedEmail + '>', // sender address
        to: sendFormToStaff, // staff addresses
        subject: 'Crystaleum Form Submission from: '+formSubmittedEmail, // email in subject
        text: formSubmittedMessage, // text body to the left, and HTML body below
        html: '<p>Crystaleum Form Submission:</p><ul>Name: <li>' + formSubmittedName + '</li>Email: <li>' + formSubmittedEmail + '</li>Message: <li>' + formSubmittedMessage + '</li></ul>'
    }
    transporter.sendMail(mailOption, function (error, info) {
        console.log(info);
        if (error) {
            console.log(error);
            res.redirect('/');
        }else{        
            consol.log('Message Sent');
            res.redirect('/');
        }
    });
    res.redirect('/');
});

module.exports = router;

