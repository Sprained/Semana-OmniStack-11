const con = require('../database/conn');
const generateUniqueId = require('../utils/genrateUniqueId');

module.exports = {
    async index (request, response) {
        const ongs = await con('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = generateUniqueId();

        await con('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
};