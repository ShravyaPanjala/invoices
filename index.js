var express = require('express');
var app = express();
var config = require('./config/config.js');
var bodyParser = require('body-parser')
var Router = require('./Routers/router.js');
var mongoose = require('mongoose');
mongoose.connect(config.mongourl, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(Router);
app.listen(config.port, function () {
    console.log("Server Running in 4000 port");
});