/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 * This File contains the controller of the locations.
 */
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