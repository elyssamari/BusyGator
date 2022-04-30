/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 * This File contains the routes of the users.
 */
const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

router.get('/getAllUsers', userController.getAllUsers);

module.exports = router;