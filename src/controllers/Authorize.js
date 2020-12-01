const bcrypt = require('bcrypt');
const generateToken = require('../util/generate-token');
const connection = require('../database/connection');

module.exports = async function (request, response) {
    const { username, password } = request.body;

    if (!username) {
        return response.status(400).json({
            error: 'Missing username'
        });
    }

    let rows = await connection('professor')
        .select('*')
        .where('username', username);

    let type = 'professor';

    if (!rows.length) {
        rows = await connection('student')
            .select('*')
            .where('username', username);

        type = 'student';

        if (!rows.length) {
            return response.status(400).json({
                error: 'An user with this username does not exists'
            });
        }
    }

    const user = rows[0].username;

    const result = bcrypt.compareSync(password, rows[0].password);

    if (!result) {
        return response.status(400).json({
            error: 'Wrong password'
        });
    }

    const { bearerToken, expiresIn, refreshToken } = generateToken({
        username: user
    });

    refreshTokens[refreshToken] = { username, password };

    return response.status(200).json({
        user,
        type,
        bearer_token: bearerToken,
        expires_in: expiresIn,
        refresh_token: refreshToken
    });
}