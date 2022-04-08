const { connection } = require('../databaseConnect');

const getAllListings = async (req, res) => {
    try {
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
    } catch (error) {
        res.status(500).json(error);
    }
};


const getListingByFilter = async (req, res) => {
    try {
        const { categoryId = "", searchText = "" } = req.query;
        if (categoryId !== "" && searchText === "") {
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
    } catch (error) {
        res.status(500).json(error);
    }
};


module.exports = {
    getAllListings,
    getListingByFilter
};