/*
 * FILE: user.routes.js
 * 
 * AUTHOR(S): Aaron Carlson, Siqi Guo, Vishal Ramanand Sharma,
 * Samantha Saxton-Getty, Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the routes of the users.
 */

const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

router.get('/getAllUsers', userController.getAllUsers);
router.get('/getUserById', userController.getUserById);
router.get('/createUser', userController.createUser);
router.post('/userLogin', userController.checkCredentials);

module.exports = router;