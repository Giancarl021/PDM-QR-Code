module.exports = {
    async seed(knex) {
        await knex('subject').insert([{
                name: 'Programação para Dispositivos Móveis'
            }
        ]);
    }
}