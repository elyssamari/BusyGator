const express = require('express');
const app = express();
const { connection } = require('./databaseConnect');
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get('/', (req, res) => {
    res.send('Successful response.');
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));