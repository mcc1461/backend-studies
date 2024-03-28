"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
/*
    $ cp .env-sample .env
    $ npm init -y
    $ npm i express dotenv mongoose express-async-errors
    $ npm i morgan swagger-autogen swagger-ui-express redoc-express
    $ mkdir logs
    $ nodemon
    $ npm i nodemailer multer
*/
const express = require('express')
const app = express()

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require('dotenv').config()
const PORT = process.env?.PORT || 8000

// asyncErrors to errorHandler:
require('express-async-errors')

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json())

// Logger:
app.use(require('./src/middlewares/logger'))

// Auhentication:
app.use(require('./src/middlewares/authentication'))

// findSearchSortPage / res.getModelList:
app.use(require('./src/middlewares/queryHandler'))

/* ------------------------------------------------------- */
// EMAIL:
// https://www.nodemailer.com/
// https://www.npmjs.com/package/nodemailer
// https://ethereal.email/   //FAKE MAIL SERVER FOR TESTING

const nodemailer = require('nodemailer')

// create test fake account:
// nodemailer.createTestAccount().then((data)=> console.log(data)) // !!! It will return a fake account info.
/* ------------------------------------------------------- *
{
    user: 'xhfiq2i77advdzhm@ethereal.email',
    pass: 'mu2w1vG7W4CJKCbxWC',
    smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
    imap: { host: 'imap.ethereal.email', port: 993, secure: true },
    pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
    web: 'https://ethereal.email'
  }
/* ------------------------------------------------------- *
const transporter = nodemailer.createTransport({
    // SMTP:
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, //SSL or TLS
    auth: {
        user: 'xhfiq2i77advdzhm@ethereal.email',
        pass: 'mu2w1vG7W4CJKCbxWC',
    }
})
/* ------------------------------------------------------- *

// console.log(transporter)
    // SEND EMAIL:
    transporter.sendMail({
        from: 'xhfiq2i77advdzhm@ethereal.email',
        to: '61zigana@gmail.com',
        subject: 'Test Email',
        text: 'Hello World',  // Alternative: html: '<b>Hello World</b>' 
        html: '<b>Hello World</b> <p>How are you? </p>'
    // }, (err, success) => {
    //     if(err) console.log(err)
    //     else console.log(success)
    // }   )
    }, (err, success) => {
        success ? console.log("SUCCESS", success) : console.log("ERROR", err)
    }   )
    
/* ------------------------------------------------------- */

// GMAIL (Goggle Mail) SMTP:   (NODEMAILER makes the required settings for gmail automatically)
// https://myaccount.google.com/lesssecureapps
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '61zigana@gmail.com',
        pass: "xbut udzo megq qqqu"  // This pass is taken from Google 2 factors authentication app.
        //! For yandex mail, you should use the normal password of your mail account.
    }
})
// 
// transporter.sendMail({
//     // from: '61zigana@gmail.com',
//     to: '61zigana@gmail.com, qadiradamson@gmail.com',    // Multiple Emails
//     subject: 'Test Email',
//     text: 'Hello World',  // Alternative: html: '<b>Hello World</b>'
//     html: '<b>Hello World</b> <p>How are you? </p>'
// }, (err, success) => {
//     success ? console.log("SUCCESS", success) : console.log("ERROR", err)
// }
// )



/* ------------------------------------------------------- */





// Routes:

// routes/index.js:
app.use('/', require('./src/routes/'))

// HomePath:
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to PIZZA API',
        docs: {
            swagger: "/documents/swagger",
            redoc: "/documents/redoc",
            json: "/documents/json",
        },
        user: req.user,
    })
})

/* ------------------------------------------------------- */

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, () => console.log('http://127.0.0.1:' + PORT))

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.