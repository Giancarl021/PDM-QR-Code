module.exports = {
    async up(knex) {
        return knex.schema.createTable('student', table => {
            table.string('username').primary();
            table.string('password').notNullable();
        });
    },

    async down(knex) {
        return knex.schema.dropTable('student');
    }
}