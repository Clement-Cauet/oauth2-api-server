/**
 * @file auth.js
 * @description Middleware to authenticate the user using Google OAuth2.0
 * 
 * @module middleware/auth
 * 
 * @requires dotenv
 * @requires passport
 * @requires google-auth-library
 * @requires passport-http-bearer
 * 
 * @exports passport.authenticate
 * 
 * @function passport.authenticate
 * 
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Callback function
 */

require('dotenv').config();

const passport = require('passport');
const { OAuth2Client } = require('google-auth-library');
const { Strategy: BearerStrategy } = require('passport-http-bearer');

const CLIENT_ID = process.env.CLIENT_ID;

const client = new OAuth2Client(CLIENT_ID);

passport.use(new BearerStrategy(
    function (token, done) {
        client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        })
        .then((ticket) => {
            const payload = ticket.getPayload();
            return done(null, payload);
        })
        .catch((error) => {
            return done(error);
        });
    }
));

module.exports = function(req, res, next) {
    passport.authenticate('bearer', { session: false }, (error, user, info) => {
        if (error) {
            return res.status(400).json({ message: error.message });
        }

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized'});
        }

        req.user = user;
        next();
    })(req, res, next);
};