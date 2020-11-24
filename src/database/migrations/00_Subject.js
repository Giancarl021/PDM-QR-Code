module.exports = {
    async up(knex) {
        return knex.schema.createTable('subject', table => {
            table.increments('id').primary();
            table.string('name').unique().notNullable();
        });
    },

    async down(knex) {
        return knex.schema.dropTable('subject');
    }
}