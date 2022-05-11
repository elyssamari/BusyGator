/*
 * FILE: userService.js
 *
 * AUTHOR(S): Aaron Carlson, Siqi Guo, Vishal Ramanand Sharma,
 * Samantha Saxton-Getty, Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the services of the users.
 */

import axios from 'axios';

export const getAllUsers = () => {
  return axios.get('/user/getAllUsers');
};

export const createUser = (userInfo) => {
  return axios.get('/user/createUser', { params: userInfo });
};