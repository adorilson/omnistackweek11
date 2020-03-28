const generateUniqueId = require('../utils/generateUniqueid');

const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;

        const id = generateUniqueId();

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        console.log(name, email, whatsapp, city, uf, id);

        return response.json({id});
    },


    async index(request, response){
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    }
}
