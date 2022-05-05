/*
 * FILE: category.controller.js
 * 
 * AUTHOR(S): Siqi Guo, Vishal Ramanand Sharma, Samantha Saxton-Getty,
 * Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the controller of the categories.
 */
 
const { connection } = require('../databaseConnect');

const getAllCategories = async (req, res) => {
    try {
        connection.query('SELECT * from category', (err, results) => {
            res.send(results);
            if (err) throw err
        });
    } catch (error) {
        res.status(500).json(error)
    }
};

module.exports = {
    getAllCategories,
};