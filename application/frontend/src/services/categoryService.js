/*
 * FILE: categoryService.js
 * 
 * AUTHOR(S): Siqi Guo, Vishal Ramanand Sharma, Samantha Saxton-Getty,
 * Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the services of the categories.
 */

import axios from 'axios';

export const getAllCategories = () => {
  return axios.get('/category/getAllCategories');
};
