/**
 * @file index.js
 * @description This file is used to manage all routes.
 * 
 * @module routes/index
 * 
 * @requires express
 * @requires ../middleware/auth
 * @requires ./user_route
 * 
 * @exports router
 */

const express   = require('express');
const router    = express.Router();
const auth      = require('../middleware/auth');

// Importez vos routeurs ici
const user_route = require('./user_route');

router.use(auth);

// Utilisez vos routeurs ici
router.use('/users', user_route);

// Gestion des erreurs 404
router.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

module.exports = router;