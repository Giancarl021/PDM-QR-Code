module.exports = {
    async up(knex) {
        return knex.schema.createTable('lesson', table => {
            table.increments('id').primary();
            table.integer('subject_id').notNullable().unsigned().references('id').inTable('subject');
            table.string('user_id').notNullable().references('username').inTable('user');
            table.string('identifier').notNullable();
            table.datetime('created_at', {
                precision: 6
            }).defaultTo(knex.fn.now(6));
        });
    },

    async down(knex) {
        return knex.schema.dropTable('lesson');
    }
}