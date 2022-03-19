const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'DB_BusyGator'
});

module.exports = { connection }