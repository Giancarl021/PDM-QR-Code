const connection = require('../database/connection');

module.exports = async function (request, response) {
    const { username } = request.token;
    const subjects = await connection('subject')
        .join('subject_user', 'subject_id', '=', 'subject.id')
        .join('user', 'user.username', '=', 'subject_user.user_id')
        .where('user.username', '=', username)
        .select('subject.name', 'subject.id');

    return response.json(subjects);
}