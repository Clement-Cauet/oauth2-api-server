/**
 * @file user_model.js
 * @description This file is used to create the User model.
 * 
 * @module models/user_model
 *
 * @param {*} sequelize 
 * @returns
 */

module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');

    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    });

    return User;
};
