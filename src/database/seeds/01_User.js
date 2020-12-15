const bcrypt = require('bcrypt');

const admin = {
    username: process.env.ADMIN_USERNAME || 'admin',
    password: bcrypt.hashSync(process.env.ADMIN_PASSWORD || 'changeme', Math.floor(Math.random() * 8)),
    is_professor: true
}

const student = {
    username: process.env.STUDENT_USERNAME || 'student',
    password: bcrypt.hashSync(process.env.STUDENT_PASSWORD || 'changeme', Math.floor(Math.random() * 8)),
    is_professor: false
}

module.exports = {
    async seed(knex) {
        await knex('user').insert([
            admin,
            student
        ]);
    }
}