const express = require('express');
const app = express();
const path = require('path');
const port = 3001;
const { connection } = require('./databaseConnect');
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.use('/images/', express.static("uploads/images"));
app.use('/thumbnails/', express.static("uploads/thumbnails"));

connection.connect();

app.get('/getAllCategories', (req, res) => {
    try {
        connection.query('SELECT * from CATEGORY', (err, results) => {
            res.send(results);
            if (err) throw err
        });
    } catch (error) {

    }
});

app.get('/getAllLocations', (req, res) => {
    try {
        connection.query('SELECT * from LOCATION', (err, results) => {
            res.send(results);
            if (err) throw err
        });
    } catch (error) {

    }
});

app.get('/getListing', (req, res) => {
    const { categoryId = "", searchText = "" } = req.query;
    if (categoryId === "" && searchText === "") {
        connection.query('SELECT * from PRODUCT', (err, results) => {
            let newResults = [];
            for (let index = 0; index < results.length; index++) {
                const element = results[index];
                const obj = {
                    ...element,
                    image_thumbnail: `/thumbnails/${element.image_thumbnail}`,
                    image: `/images/${element.image}`
                }
                newResults.push(obj);
            };
            res.send(newResults);
            if (err) throw err
        });
    } else if (categoryId !== "" && searchText === "") {
        connection.query(`SELECT * from PRODUCT where PRODUCT.category=${categoryId}`, (err, results) => {
            let newResults = [];
            for (let index = 0; index < results.length; index++) {
                const element = results[index];
                const obj = {
                    ...element,
                    image_thumbnail: `/thumbnails/${element.image_thumbnail}`,
                    image: `/images/${element.image}`
                }
                newResults.push(obj);
            };
            res.send(newResults);
            if (err) throw err
        });
    } else if (categoryId === "" && searchText !== "") {
        connection.query(`SELECT * FROM PRODUCT WHERE PRODUCT.title LIKE "%${searchText}%" OR PRODUCT.description LIKE "%${searchText}%";`, (err, results) => {
            let newResults = [];
            for (let index = 0; index < results.length; index++) {
                const element = results[index];
                const obj = {
                    ...element,
                    image_thumbnail: `/thumbnails/${element.image_thumbnail}`,
                    image: `/images/${element.image}`
                }
                newResults.push(obj);
            };
            res.send(newResults);
            if (err) throw err
        });
    } else {
        connection.query(`SELECT * FROM PRODUCT WHERE PRODUCT.category=${categoryId} AND (PRODUCT.title LIKE "%${searchText}%" OR PRODUCT.description LIKE "%${searchText}%");`, (err, results) => {
            let newResults = [];
            for (let index = 0; index < results.length; index++) {
                const element = results[index];
                const obj = {
                    ...element,
                    image_thumbnail: `/thumbnails/${element.image_thumbnail}`,
                    image: `/images/${element.image}`
                }
                newResults.push(obj);
            };
            res.send(newResults); if (err) throw err
        });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'))
});
app.listen(port, () => console.log('Backend is running on port ', port));