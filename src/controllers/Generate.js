const connection = require('../database/connection');

module.exports = async function (request, response) {
    const { username,  } = request;
    await connection('lesson')
        .insert([
            
        ]);

    return {

    };
}