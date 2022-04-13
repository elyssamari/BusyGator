/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 * This File contains the routes of the categories.
 */
const express = require('express');
const categoryController = require('../controllers/category.controller');
const router = express.Router();

router.get('/getAllCategories', categoryController.getAllCategories);

module.exports = router;