const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');
const port = 3000;

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(port, () => console.log('Server Running'));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_EMAIL_USER,
    pass: process.env.NODEMAILER_EMAIL_PASSWORD,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});

router.post('/contact', async (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: 'athaykat@gmail.com',
    subject: 'Contact Form Submission - Portfolio',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  try {
    const info = await contactEmail.sendMail(mail);
    console.log(info);
    res.json({ code: 200, status: 'Message Sent' });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});


// const express = require('express');
// const router = express.Router();
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// const port = 3000;

// // server used to send send emails
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use('/', router);
// app.listen(port, () => console.log('Server Running'));
// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAIL_PASS);

// const contactEmail = nodemailer.createTransport("SMTP", {
//   service: "Outlook365",
//   host: "smtp.office365.com",
//   port: "587",
//   tls: {
//     ciphers: "SSLv3",
//     rejectUnauthorized: false,
//   },
//   auth: {
//     user: "koderkat@outlook.com",
//     pass: "PlayaDelCarmen1!",
//   },
// });
// let info = await nodemailer.createTransport.sendMail({
//   from: "koderkat@outlook.com", // sender address
//   to: to, // list of receivers
//   subject: subject, // Subject line
//   html: html, // html body
// });
//   // service: 'gmail',
//   // auth: {
//   //   user: process.env.NODEMAILER_EMAIL_USER,
//   //   pass: process.env.NODEMAILER_EMAIL_PASSWORD,
//   // },
//   // authMethod: 'login',
// });

// // const contactEmail = nodemailer.createTransport({
// //   service: 'gmail',
// //   auth: {
// //     user: process.env.EMAIL_USER,
// //     pass: process.env.EMAIL_PASS,
// //   },
// // });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Ready to Send');
//   }
// });

// router.post('/contact', (req, res) => {
//   const name = req.body.firstName + req.body.lastName;
//   const email = req.body.email;
//   const message = req.body.message;
//   const phone = req.body.phone;
//   const mail = {
//     from: name,
//     to: 'athaykat@gmail.com',
//     subject: 'Contact Form Submission - Portfolio',
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Phone: ${phone}</p>
//            <p>Message: ${message}</p>`,
//   };
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json(error);
//     } else {
//       res.json({ code: 200, status: 'Message Sent' });
//     }
//   });
// });
