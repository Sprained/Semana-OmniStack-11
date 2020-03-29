const con = require('../database/conn');

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization;

        const incidents = await con('incidents').where('ong_id', ong_id).select('*');

        return response.json(incidents);
    }
}