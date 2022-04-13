/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 * This File contains the routes of the listings.
 */
const express = require('express');
const listingController = require('../controllers/listing.controller');
const router = express.Router();

router.get('/getAllListings', listingController.getAllListings);
router.get('/getListingByFilter', listingController.getListingByFilter);

module.exports = router;