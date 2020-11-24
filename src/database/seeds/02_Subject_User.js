module.exports = {
    async seed(knex) {
        await knex('subject_user').insert([
            {
                user_id: 'admin',
                subject_id: 1
            }
        ]);
    }
}