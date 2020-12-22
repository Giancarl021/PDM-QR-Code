const connection = require('../database/connection');

module.exports = async function (request, response) {
    const { lessonId } = request.params;

    const students = (await connection('attendance')
        .where('lesson_id', lessonId)
        .select('user_id')).map(e => e.user_id);

    return response.json(students);
}