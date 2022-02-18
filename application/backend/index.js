const express = require('express');
const app = express();
const path = require('path');
const { connection } = require('./databaseConnect');
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.static(path.join(__dirname, 'build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});
app.listen(3000, () => console.log('Example app is listening on port 3000.'));