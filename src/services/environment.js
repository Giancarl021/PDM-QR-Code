const dotenv = require('dotenv');
const { randomBytes } = require('crypto');

module.exports = function () {
    dotenv.config();
    global.refreshTokens = {};
    global.auth = {
        expires: Number(process.env.TOKEN_TTL) || 3600,
        secret: process.env.AUTH_SECRET || randomBytes(Math.floor((Math.random() * 24) + 16)).toString('hex')
    };

    global.qr = {};
}