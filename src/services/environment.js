const dotenv = require('dotenv');
const { randomBytes } = require('crypto');

module.exports = function () {
    dotenv.config();
    global.refreshTokens = {};
    global.auth = {
        expires: process.env.TOKEN_TTL || 3600,
        secret: randomBytes(Math.floor((Math.random() * 24) + 16)).toString('hex')
    };
}