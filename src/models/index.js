/**
 * @file index.js
 * @description This file is used to import all the models and export them as a single object.
 * 
 * @module models/index
 * 
 * @requires ../config
 * 
 * @exports User
 */

const { sequelize } = require('../config');

const User = require('./user_model')(sequelize);

sequelize.sync();

module.exports = {
    User,
};