/**
 * @file user_controller.js
 * @description This file is used to manage user requests.
 * 
 * @module controllers/user_controller
 * 
 * @api {get} /users Get all users
 * @apiName GetUsers
 * 
 * @apiGroup User
 */

const { User } = require('../models');

exports.getUsers = async (req, res) => {
    await User.findAll()
    .then((users) => {
        res.status(200).json(users);
    })
    .catch((err) => {
        res.status(500).json({ error: err });
    });
};