/*
 * FILE: listingService.js
 *
 * AUTHOR(S): Aaron Carlson, Siqi Guo, Vishal Ramanand Sharma,
 * Samantha Saxton-Getty, Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the services of the listing.
 */

import axios from 'axios';
var FormData = require('form-data');

export const getAllListings = () => {
  return axios.get('/listing/getAllListings');
};

export const getListingById = (listingId) => {
  return axios.get('/listing/getListingById', { params: listingId });
};

export const getListingByFilter = (searchParams) => {
  return axios.get('/listing/getListingByFilter', { params: searchParams });
};

export const createListing = (listingInfo) => {
  const formData = new FormData();
  formData.append('imageFile', listingInfo.image);
  formData.append('category', listingInfo.category);
  formData.append('description', listingInfo.description);
  formData.append('location', listingInfo.location);
  formData.append('price', listingInfo.price);
  formData.append('sellerID', listingInfo.sellerID);
  formData.append('title', listingInfo.title);
  console.log([...formData.values()]);
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  return axios.post('/listing/createListing', formData, config);
};
