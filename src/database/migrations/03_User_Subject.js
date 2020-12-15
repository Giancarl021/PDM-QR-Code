module.exports = {
    async up(knex) {
        return knex.schema.createTable('subject_user', table => {
            table.increments('id').primary();
            table.integer('subject_id').notNullable().unsigned().references('id').inTable('subject');
            table.string('user_id').notNullable().references('username').inTable('user');
        });
    },

    async down(knex) {
        return knex.schema.dropTable('subject_user');
    }
}