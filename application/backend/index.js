require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const port = 3001;
const { connection } = require('./databaseConnect');


const locationRouter = require('./Routes/location.routes');
const listingRouter = require('./Routes/listing.routes');
const categoryRouter = require('./Routes/category.routes');

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
connection.connect();

// Routes for Hosting Static portion of the application
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.use('/images/', express.static("uploads/images"));
app.use('/thumbnails/', express.static("uploads/thumbnails"));


// App Routes
app.use('/location',locationRouter);
app.use('/category',categoryRouter)
app.use('/listing',listingRouter);


// Default Route for serving Index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'))
});

app.listen(port, () => console.log('Backend is running on port ', port));
module.exports = app;