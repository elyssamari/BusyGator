/*
 * FILE: user.routes.js
 * 
 * AUTHOR(S): Siqi Guo, Vishal Ramanand Sharma, Samantha Saxton-Getty,
 * Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the routes of the users.
 */

const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

router.get('/getAllUsers', userController.getAllUsers);

module.exports = router;