/**
 * @file db_config.js
 * @description This file is used to connect to the database and export the connection object.
 * 
 * @module config/db_config
 * 
 * @requires dotenv
 * @requires sequelize
 * 
 * @exports sequelize
 * @exports DB_HOST
 * @exports DB_PORT
 */

require('dotenv').config();
const { Sequelize } = require('sequelize');

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || '5432';

const sequelize = new Sequelize('postgres://postgres:postgres@' + DB_HOST + ':' + DB_PORT + '/postgres', {
    dialect: 'postgres',
});

sequelize.authenticate()
    .then(() => { 
        console.log('Database connected...');
    })
    .catch((err) => { 
        console.log('Error: ' + err); 
    });

module.exports = {
    sequelize,
    DB_HOST,
    DB_PORT
};