/*
 * FILE: listingService.js
 * 
 * AUTHOR(S): Siqi Guo, Vishal Ramanand Sharma, Samantha Saxton-Getty,
 * Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the services of the listing.
 */

import axios from 'axios';

export const getAllListings = () => {
  return axios.get('/listing/getAllListings');
};

export const getListingByFilter = (searchParams) => {
  return axios.get('/listing/getListingByFilter', { params: searchParams });
};
