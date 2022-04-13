/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 * This File contains the routes of the locations.
 */
const express = require('express');
const locationController = require('../controllers/location.controller');
const router = express.Router();

router.get('/getAllLocations', locationController.getAllLocations);

module.exports = router;