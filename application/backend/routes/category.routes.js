/*
 * FILE: category.routes.js
 * 
 * AUTHOR(S): Siqi Guo, Vishal Ramanand Sharma, Samantha Saxton-Getty,
 * Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the routes of the categories.
 */

const express = require('express');
const categoryController = require('../controllers/category.controller');
const router = express.Router();

router.get('/getAllCategories', categoryController.getAllCategories);

module.exports = router;