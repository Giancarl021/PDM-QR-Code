module.exports = {
    async up(knex) {
        return knex.schema.createTable('user', table => {
            table.string('username').primary();
            table.string('password').notNullable();
            table.boolean('is_professor').notNullable();
        });
    },

    async down(knex) {
        return knex.schema.dropTable('user');
    }
}