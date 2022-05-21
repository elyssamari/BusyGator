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

const getUserById = async (req, res) => {
    try {
        let userId = req.query[0];
        connection.query(`SELECT * from user where user.user_id=${userId}`, (err, results) => {
            res.send(results[0]);
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
            res.send(results);
            if (err) throw err;
        });
    } catch (error) {
        res.status(500).json(error)
    }
};

const checkCredentials = async (req, res) => {
    try {
        const { email = "", password = "" } = req.body;
        const baseSQL = `SELECT * from user where user.email="${email}";`;
        connection.query(baseSQL, (err, results) => {
            if (err) throw err
            if (results.length) {
                const result = results[0];
                bcrypt.compare(password, result.password, (err, bcryptResult) => {
                    if (bcryptResult) {
                        res.send({ userId: result.user_id, firstName: result.first_name, lastName: result.last_name });
                    } else {
                        res.send({
                            message:"Incorrect Password",
                            userId: null
                        })
                    }
                })
            } else {
                res.send({
                    message:"Email not found",
                    userId: null
                })
            }


        });
    } catch (error) {
        res.status(500).json(error)
    }
};


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    checkCredentials
};