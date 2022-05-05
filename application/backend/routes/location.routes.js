/*
 * FILE: location.routes.js
 * 
 * AUTHOR(S): Siqi Guo, Vishal Ramanand Sharma, Samantha Saxton-Getty,
 * Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the routes of the locations.
 */

const express = require('express');
const locationController = require('../controllers/location.controller');
const router = express.Router();

router.get('/getAllLocations', locationController.getAllLocations);

module.exports = router;