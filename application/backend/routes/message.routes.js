/*
 * FILE: message.routes.js
 * 
 * AUTHOR(S): Aaron Carlson
 *
 * PURPOSE: This file contains the routes of the messages.
 */

const express = require('express');
const messageController = require('../controllers/message.controller');
const router = express.Router();

router.get('/getAllMessages', messageController.getAllMessages);
router.get('/getMessagesById', messageController.getMessagesById);

module.exports = router;