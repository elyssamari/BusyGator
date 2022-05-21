/*
 * FILE: databaseConnect.js
 * 
 * AUTHOR(S): Aaron Carlson, Siqi Guo, Vishal Ramanand Sharma,
 * Samantha Saxton-Getty
 *
 * PURPOSE: This file contains the connection to the database.
 */
// always use constants for db connection with double qouteas
// see its ruunning , just set tables name or hit any route using postman
const HOST = "localhost"
const PORT = 3307
const USER = "root"
const DATABASE = "DB_BusyGator"

const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: HOST,
    port: PORT,
    user: USER,
    database: DATABASE
});

module.exports = { connection }