/*
 * FILE: locationService.js
 *
 * AUTHOR(S): Siqi Guo, Vishal Ramanand Sharma, Samantha Saxton-Getty,
 * Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the services of the locations.
 */

import axios from 'axios';

export const getAllLocations = () => {
  return axios.get('/location/getAllLocations');
};
