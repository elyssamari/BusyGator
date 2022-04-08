const { connection } = require('../databaseConnect');

const getAllLocations = async (req, res) => {
    try {
        connection.query('SELECT * from location', (err, results) => {
            res.send(results);
            if (err) throw err
        });
    } catch (error) {
        res.status(500).json(error)
    }
};

module.exports = {
    getAllLocations,
};