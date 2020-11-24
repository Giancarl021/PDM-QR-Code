const connection = require('../database/connection');

module.exports = async function (request, response) {
    
    await connection('lesson')
        .insert([
            
        ]);
}