/*
 * FILE: listing.controller.js
 * 
 * AUTHOR(S): Aaron Carlson, Siqi Guo, Vishal Ramanand Sharma,
 * Samantha Saxton-Getty, Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the controller of the listings.
 */

const { connection } = require('../databaseConnect');
const fs = require('fs');
var mime = require('mime-types');

const getAllListings = async (req, res) => {
    try {
        connection.query('SELECT * from product where approved = 1', (err, results) => {
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
    } catch (error) {
        res.status(500).json(error);
    }
};

const getListingById = async (req, res) => {
    try {
        let productId = req.query[0];
        connection.query(`SELECT * from product where product.product_id=${productId}`, (err, results) => {
            const resultElement = results[0];
            const resultObj = {
                ...resultElement,
                image_thumbnail: `/thumbnails/${resultElement.image_thumbnail}`,
                image: `/images/${resultElement.image}`
            }
            res.send(resultObj);
            if (err) throw err
        });
    } catch (error) {
        res.status(500).json(error);
    }
};


const getListingByFilter = async (req, res) => {
    try {
        const { categoryId = "", searchText = "", min = "", max = "" } = req.query;
        let totalCount = 0;
        connection.query(`select count(*) as totalCount 
        from product where approved = 1;`, (err, res) => {
            totalCount = res[0].totalCount
        });
        if (categoryId !== "" && searchText === "") {
            connection.query(`SELECT * from product where approved = 1 and product.category=${categoryId}`, (err, results) => {
                let newResults = [];
                for (let index = 0; index < results.length; index++) {
                    const element = results[index];
                    if (returnMinMaxFilter(min, max, element)) {
                        const obj = {
                            ...element,
                            image_thumbnail: `/thumbnails/${element.image_thumbnail}`,
                            image: `/images/${element.image}`
                        }
                        newResults.push(obj);
                    }
                };
                res.send({
                    totalCount,
                    results: newResults
                });
                if (err) throw err
            });
        } else if (categoryId === "" && searchText !== "") {
            console.log(searchText)
            connection.query(`SELECT * FROM product WHERE approved = 1 and (product.title LIKE "%${searchText}%" OR product.description LIKE "%${searchText}%");`, (err, results) => {
                let newResults = [];
                for (let index = 0; index < results.length; index++) {
                    const element = results[index];
                    console.log(returnMinMaxFilter(min, max, element))
                    if (returnMinMaxFilter(min, max, element)) {
                        const obj = {
                            ...element,
                            image_thumbnail: `/thumbnails/${element.image_thumbnail}`,
                            image: `/images/${element.image}`
                        }
                        newResults.push(obj);
                    }
                };
                res.send({
                    totalCount,
                    results: newResults
                });
                if (err) throw err
            });
        } else if (categoryId !== "" && searchText !== "") {
            connection.query(`SELECT * FROM product WHERE approved = 1 and product.category=${categoryId} AND (product.title LIKE "%${searchText}%" OR product.description LIKE "%${searchText}%");`, (err, results) => {
                let newResults = [];
                for (let index = 0; index < results.length; index++) {
                    const element = results[index];
                    if (returnMinMaxFilter(min, max, element)) {
                        const obj = {
                            ...element,
                            image_thumbnail: `/thumbnails/${element.image_thumbnail}`,
                            image: `/images/${element.image}`
                        }
                        newResults.push(obj);
                    }
                };
                res.send({
                    totalCount,
                    results: newResults
                }); if (err) throw err
            });
        } else {
            connection.query('SELECT * from product where approved = 1', (err, results) => {
                let newResults = [];
                for (let index = 0; index < results.length; index++) {
                    const element = results[index];
                    if (returnMinMaxFilter(min, max, element)) {
                        const obj = {
                            ...element,
                            image_thumbnail: `/thumbnails/${element.image_thumbnail}`,
                            image: `/images/${element.image}`
                        }
                        newResults.push(obj);
                    }
                };
                res.send({
                    totalCount,
                    results: newResults
                });
                if (err) throw err
            });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

const returnMinMaxFilter = (min, max, obj) => {
    if (min !== "" && max !== "") {
        if (obj.price >= parseInt(min) && obj.price <= parseInt(max)) return true;
        else return false;
    } else if (min === "" && max !== "") {
        if (obj.price <= parseInt(max)) return true;
        else return false;
    } else if (min !== "" && max === "") {
        if (obj.price >= parseInt(min)) return true;
        else return false;
    } else return true;
}

const createListing = async (req, res) => {
    try {
        const { title = "", category = "", price = "", location = "", description = "", sellerID = "" } = req.body;
        const { imageFile = "" } = req.files;
        let totalCount = 0;
        connection.query(`select count(*) as totalCount from product;`, (err, res) => {
            totalCount = res[0].totalCount + 1;
        });
        connection.query(`SELECT * from product where approved = 1;`, (err, countResult) => {
            const fileName = title.trim().toLowerCase().replace(/ /g, "_") + "." + mime.extension(imageFile.mimetype);
            let baseSQL = "INSERT INTO product (seller_id, category, location, title, description, image, image_thumbnail, price, date_created) VALUES (?, ?, ?, ?, ?, ?, ?, ?, now());";
            connection.query(baseSQL, [sellerID, parseInt(category), parseInt(location), title, description, (totalCount + '_' + fileName), (totalCount + '_thumbnail_' + fileName), parseInt(price)], (err, results) => {
                if (err) throw err
                else {
                    fs.writeFileSync(`./uploads/images/${totalCount + "_" + fileName}`, imageFile.data)
                    fs.writeFileSync(`./uploads/thumbnails/${totalCount + '_thumbnail_' + fileName}`, imageFile.data)
                    res.status(200);
                }
            });
        });
    } catch (error) {
        res.status(500).json(error)
    }
};

module.exports = {
    getAllListings,
    getListingById,
    getListingByFilter,
    createListing
};