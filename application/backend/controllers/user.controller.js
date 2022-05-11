/*
 * FILE: user.controller.js
 * 
 * AUTHOR(S): Aaron Carlson, Siqi Guo, Vishal Ramanand Sharma,
 * Samantha Saxton-Getty, Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the controller of the users.
 */

const { connection } = require('../databaseConnect');
var bcrypt = require('bcrypt');

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

const createUser = async (req, res) => {
    try {
        const { email = "", firstName = "", lastName = "", password = "" } = req.query;
        let hashedPassword = bcrypt.hashSync(password, 12);
        let baseSQL = "INSERT INTO user (first_name, last_name, email, password, date_created) VALUES (?, ?, ?, ?, now());";
        connection.query(baseSQL, [firstName, lastName, email, hashedPassword], (err, results) => {
            if (err) throw err
        });
    } catch (error) {
        res.status(500).json(error)
    }
};

module.exports = {
    getAllUsers,
    createUser
};