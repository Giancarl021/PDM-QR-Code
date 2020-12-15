const connection = require('../database/connection');

module.exports = async function (request, response) {
    const { username } = request.token;
    const rows = await connection('subject')
        .join('subject_user', 'subject_id', '=', 'subject.id')
        .join('user', 'user.username', '=', 'subject_user.user_id')
        .where('user.username', '=', username)
        .select('subject.name');

    const subjects = rows.map(row => row.name);

    return response.json(subjects);
}