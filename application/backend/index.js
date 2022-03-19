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
        connection.query('SELECT * from category', (err, results) => {
            res.send(results);
            if (err) throw err
        });
    } catch (error) {

    }
});

app.get('/getAllLocations', (req, res) => {
    try {
        connection.query('SELECT * from location', (err, results) => {
            res.send(results);
            if (err) throw err
        });
    } catch (error) {

    }
});

app.get('/getListing', (req, res) => {
    const { categoryId = "", searchText = "" } = req.query;
    if (categoryId === "" && searchText === "") {
        connection.query('SELECT * from product', (err, results) => {
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
        connection.query(`SELECT * from product where product.category=${categoryId}`, (err, results) => {
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
        connection.query(`SELECT * FROM product WHERE product.title LIKE "%${searchText}%" OR product.description LIKE "%${searchText}%";`, (err, results) => {
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
        connection.query(`SELECT * FROM product WHERE product.category=${categoryId} AND (product.title LIKE "%${searchText}%" OR product.description LIKE "%${searchText}%");`, (err, results) => {
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