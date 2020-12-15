module.exports = {
    async up(knex) {
        return knex.schema.createTable('attendance', table => {
            table.increments('id');
            table.string('user_id');
            table.integer('lesson_id').notNullable().references('id').inTable('lesson');
            table.datetime('created_at', {
                precision: 6
            }).defaultTo(knex.fn.now(6));
        });
    },

    async down(knex) {
        return knex.schema.dropTable('attendance');
    }
}