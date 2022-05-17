/*
 * FILE: messageService.js
 *
 * AUTHOR(S): Aaron Carlson
 *
 * PURPOSE: This file contains the services of the messages.
 */

import axios from 'axios';

export const getAllMessages = () => {
  return axios.get('/message/getAllMessages');
};

export const getMessagesById = (userId) => {
  return axios.get('/message/getMessagesById', { params: userId });
};
