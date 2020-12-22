const connection = require('../database/connection');
const {
    uid
} = require('rand-token');

const qrCodeTTL = Number(process.env.QR_CODE_TTL) || 180;

module.exports = async function (request, response) {
    const {
        username
    } = request.token;

    const [ { is_professor } ] = await connection('user')
        .where('username', username)
        .select('is_professor');    

    if (!is_professor) {
        return response.status(401).json({
            error: 'Unauthorized'
        });
    }

    const {
        subject
    } = request.params;
    const {
        title
    } = request.query;

    if (!subject) {
        return response.status(400).json({
            error: 'Missing subject query parameter'
        });
    }

    if (!title) {
        return response.status(400).json({
            error: 'Missing title query parameter'
        });
    }

    let lessonId;

    const [ row ] = await connection('user')
        .join('subject_user', 'subject_user.user_id', 'user.username')
        .join('subject', 'subject.id', 'subject_user.subject_id')
        .where('subject_user.user_id', username)
        .andWhere('subject_user.subject_id', subject)
        .select(1);

    if(!row) {
        return response.status(400).json({
            error: 'Invalid subject'
        });
    }

    try {
        [ lessonId ] = await connection('lesson')
            .insert({
                user_id: username,
                subject_id: subject,
                identifier: title
            }, 'id');
    } catch (err) {
        return response.status(400)
            .json({
                error: 'Database error: ' + err.message
            });
    }

    let id;

    do {
        id = uid(8);
    } while (qr[id]);

    const expires = new Date(Date.now() + qrCodeTTL * 1000);

    qr[id] = {
        lessonId,
        expires
    };

    return response.json({
        code: id,
        expires: expires.toISOString()
    });
}