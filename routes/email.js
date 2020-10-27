const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

// * * *  POST * * * *

router.post('', (req, res, next) => {

  const fullName = req.body['fullName'];
  const phone = req.body['phone'];
  const address = req.body['address'];
  const amountTonas = req.body['amountTonas'];
  const totalPrice = req.body['totalPrice'];

// * * * NODEMAILER FOR GMAIL AUTH * * *
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,

    auth: {
      user: process.env['EMAIL'],
      pass: process.env['PASSWORD']
    }
  });

// * * * SET EMAIL OPTIONS * * *
  let mailOptions = {
    from: process.env['EMAIL'],
    to: process.env['EMALTO'],
    subject: 'შეკვეთა',
    text: `
      სახელი გვარი: ${fullName},
      ტელეფონი: ${phone},
      სახელი: ${address},
      რაოდენობა (ტონაში): ${amountTonas},
      ფასი ${totalPrice} ლარი

    `
  }
// * * * * SEND EMAIL * * * * *
  transporter.sendMail( mailOptions, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({ success: true, msg: 'Mail sent' });

      }
  })
})


module.exports = router;
