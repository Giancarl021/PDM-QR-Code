module.exports = {
    async up(knex) {
        return knex.schema.createTable('subject_professor', table => {
            table.increments('id').primary();
            table.integer('subject_id').notNullable().unsigned().references('id').inTable('subject');
            table.string('user_id').notNullable().references('username').inTable('professor');
        });
    },

    async down(knex) {
        return knex.schema.dropTable('subject_professor');
    }
}