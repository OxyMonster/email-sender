const express = require('express');
const app = express();
const emailRoute = require('./routes/email');
const cors = require('cors');
const bodyParser = require('body-parser');

// * * * Server • • •
const server = app.listen(8081, function () {
       var port = server.address().port

       console.log("Lomtagora app is listening at ->", port)
});


// * * * Middleware * * *
app.use( cors() );
app.use( bodyParser.urlencoded({extended: true}) );
app.use(bodyParser.json());

// * * * EMAIL ROUTE  * * *
app.use('/email', emailRoute);
