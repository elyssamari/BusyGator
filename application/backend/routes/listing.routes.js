/*
 * FILE: listing.routes.js
 * 
 * AUTHOR(S): Aaron Carlson, Siqi Guo, Vishal Ramanand Sharma,
 * Samantha Saxton-Getty, Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the routes of the listings.
 */

const express = require('express');
const listingController = require('../controllers/listing.controller');
const router = express.Router();

router.get('/getAllListings', listingController.getAllListings);
router.get('/getListingById', listingController.getListingById);
router.get('/getListingByFilter', listingController.getListingByFilter);
router.post('/createListing', listingController.createListing);

module.exports = router;