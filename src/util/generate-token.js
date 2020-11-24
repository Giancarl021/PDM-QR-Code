const { uid } = require('rand-token');
const jwt = require('jsonwebtoken');

module.exports = function (params = {}) {
    return {
        bearerToken: jwt.sign(params, auth.secret, {
            expiresIn: auth.expires
        }),
        expiresIn: auth.expires,
        refreshToken: uid(256)
    }
}