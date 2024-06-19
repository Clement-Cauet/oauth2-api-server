/**
 * @file server.js
 * @description This file is used to create the server.
 * 
 * @module server
 *
 * Required External Modules
 * @requires dotenv
 * @requires express
 * @requires body-parser
 * @requires ./routes
 * @requires ./middleware/auth
 * @requires ./models
 */

require('dotenv').config();

const express       = require('express');
const bodyParser    = require('body-parser');
const router        = require('./routes');
const auth          = require('./middleware/auth');
const { sequelize } = require('./models');

const app = express(); 

const PORT = process.env.SERVER_PORT || 3000; 

app.use(bodyParser.json());
app.use(router);

app.listen(PORT, () => { 
    console.log('Server running on port', PORT); 
}); 