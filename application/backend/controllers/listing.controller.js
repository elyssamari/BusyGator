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
        const { categoryId = "", searchText = "", min = "", max = "" } = req.query;
        if (categoryId !== "" && searchText === "") {
            connection.query(`SELECT * from product where product.category=?`, [categoryId], (err, results) => {
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
                res.send(newResults);
                if (err) throw err
            });
        } else if (categoryId === "" && searchText !== "") {
            connection.query(`SELECT * FROM product WHERE product.title LIKE "%?%" OR product.description LIKE "%?%";`, [searchText], (err, results) => {
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
                res.send(newResults);
                if (err) throw err
            });
        } else if (categoryId !== "" && searchText !== "") {
            console.log()
            connection.query(`SELECT * FROM product WHERE product.category=? AND (product.title LIKE "%?%" OR product.description LIKE "%?%");`, [categoryId, searchText, searchText], (err, results) => {
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
                res.send(newResults); if (err) throw err
            });
        } else {
            connection.query('SELECT * from product', (err, results) => {
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
                res.send(newResults);
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


module.exports = {
    getAllListings,
    getListingByFilter
};