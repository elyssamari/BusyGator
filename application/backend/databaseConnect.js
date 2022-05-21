/*
 * FILE: databaseConnect.js
 * 
 * AUTHOR(S): Aaron Carlson, Siqi Guo, Vishal Ramanand Sharma,
 * Samantha Saxton-Getty
 *
 * PURPOSE: This file contains the connection to the database.
 */

const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'DB_BusyGator'
});

module.exports = { connection }