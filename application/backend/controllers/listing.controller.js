/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 * This File contains the controller of the listings.
 */
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
        let totalCount = 0;
        connection.query(`select count(*) as totalCount 
        from product;`, (err, res) => {
            totalCount = res[0].totalCount
        });
        if (categoryId !== "" && searchText === "") {
            connection.query(`SELECT * from product where product.category=${categoryId}`, (err, results) => {
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
            connection.query(`SELECT * FROM product WHERE product.title LIKE "%${searchText}%" OR product.description LIKE "%${searchText}%";`, (err, results) => {
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
                res.send({totalCount,
                    results: newResults});
                if (err) throw err
            });
        } else if (categoryId !== "" && searchText !== "") {
            connection.query(`SELECT * FROM product WHERE product.category=${categoryId} AND (product.title LIKE "%${searchText}%" OR product.description LIKE "%${searchText}%");`, (err, results) => {
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
                res.send({totalCount,
                    results: newResults}); if (err) throw err
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
                res.send({totalCount,
                    results: newResults});
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