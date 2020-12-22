const connection = require('../database/connection');

module.exports = async function (request, response) {
    const { username } = request.token;
    const {
        token
    } = request.params;

    if (!token) {
        return response.status(400).json({
            error: 'Missing token parameter'
        });
    }

    if (!qr[token]) {
        return response.status(400).json({
            error: 'Invalid token'
        })
    }

    if (qr[token].expires <= Date.now()) {
        delete qr[token];

        return response.status(400).json({
            error: 'Token expired'
        });
    }

    const [row] = await connection('attendance')
        .where('user_id', username)
        .andWhere('lesson_id', qr[token].lessonId)
        .select(1);

    if (row) {
        return response.status(400).json({
            error: 'Attendance already confirmed'
        });
    }

    try {
        await connection('attendance')
            .insert({
                user_id: username,
                lesson_id: qr[token].lessonId
            });
    } catch (err) {
        return response.status(400).json({
            error: 'Database error: ' + err.message
        });
    }

    return response.json({
        status: 'Attendance confirmed'
    });
}