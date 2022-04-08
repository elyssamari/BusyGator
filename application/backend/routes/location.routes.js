const express = require('express');
const locationController = require('../controllers/location.controller');
const router = express.Router();

router.get('/getAllLocations', locationController.getAllLocations);

module.exports = router;