var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var contactUsRoutes = require('./routes/contact-us');

var appRoutes = require('./routes/app');
var app = express();
var mailer = require('express-mailer');
var router = express.Router();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//configure express mail and setup default mail data
mailer.extend(app, {
    from: 'no-reply@example.com',
    host: 'smtp.gmail.com', // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
    auth: {
        user: 'oneagleswingsinc.jk@gmail.com',
        pass: 'oneagleswingsinc'
    }
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

app.post('/contact-us', function (req, res, next) {
    app.mailer.send('email', {
        to: 'oneagleswingsinc.jk@gmail.com', // REQUIRED. This can be a comma delimited string just like a normal email to field.
        subject: req.body.subject, // REQUIRED.
        message: req.body.message,
        name: req.body.name,
        email: req.body.email,
        otherProperty: 'Other Property' // All additional properties are also passed to the template as local variables.
    },
        function (err) {
        if (err) {
            // handle error
            console.log(err);
            res.send('There was an error sending the email');
            return;
        }
        //res.send('Email Sent');
    });

    app.mailer.send('email-to-sender', {
        to: req.body.email, // REQUIRED. This can be a comma delimited string just like a normal email to field.
        subject: 'Thankyou for contacting us!', // REQUIRED.
        name: req.body.name,
        message: 'We will get back to you shortly.',
        otherProperty: 'Other Property' // All additional properties are also passed to the template as local variables.
    }, function (err) {
        if (err) {
            // handle error
            console.log(err);
            res.send('There was an error sending the email');
            return;
        }
        res.send('Email sent!!')
    });
});


//app.use('/contact-us', contactUsRoutes);
app.use('/', appRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('index');
});

module.exports = app;
