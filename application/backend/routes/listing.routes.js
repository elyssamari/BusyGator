const express = require('express');
const listingController = require('../controllers/listing.controller');
const router = express.Router();

router.get('/getAllListings', listingController.getAllListings);
router.get('/getListingByFilter', listingController.getListingByFilter);

module.exports = router;