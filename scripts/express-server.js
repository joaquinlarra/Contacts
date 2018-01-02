'use strict';

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser'),
  path = require('path');


app.use(express.static(path.join(__dirname,"../dist")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('../routes/listing.route.js'); //importing route
routes(app); //register the route


app.listen(port);


console.log("---------------------------------------------");
console.log('RESTful API server started on port ' + port);
console.log("---------------------------------------------");