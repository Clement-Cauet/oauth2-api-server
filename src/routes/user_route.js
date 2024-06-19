/**
 * @file user_route.js
 * @description This file is used to manage the user routes.
 * 
 * @module routes/user_route
 * 
 * @requires express
 * @requires ../controllers/user_controller
 * 
 * @exports router
 */
const express = require('express');
const UserController = require('../controllers/user_controller'); 

const router = express.Router();

router.get('/', UserController.getUsers);

module.exports = router;