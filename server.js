const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const server = app.listen(8000);
const mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/dist/blackbelt'));

require('./server/config/database.js');
require('./server/config/routes.js')(app);
