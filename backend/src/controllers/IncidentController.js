const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        return response.json({id})
    },

    async index(request, response){
        const data = await connection('incidents').select('*');
    
        return response.json(data);    
    }
}