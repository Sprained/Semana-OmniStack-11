const con = require('../database/conn');

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const ongs = await con('ongs').where('id', id).select('name').first();

        if(!ongs){
            return response.status(400).json({ error: 'Não foi encontrado uma ONG com esse id' });
        }

        return response.json(ongs);
    }
}