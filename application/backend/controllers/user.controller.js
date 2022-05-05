/*
 * FILE: user.controller.js
 * 
 * AUTHOR(S): Siqi Guo, Vishal Ramanand Sharma, Samantha Saxton-Getty,
 * Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the controller of the users.
 */

const { connection } = require('../databaseConnect');

const getAllUsers = async (req, res) => {
    try {
        connection.query('SELECT * from user', (err, results) => {
            res.send(results);
            if (err) throw err
        });
    } catch (error) {
        res.status(500).json(error)
    }
};

module.exports = {
    getAllUsers,
};