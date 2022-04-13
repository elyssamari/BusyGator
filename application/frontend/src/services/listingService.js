/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 * This File contains the services of the listing.
 */
import axios from 'axios';

export const getAllListings = () => {
  return axios.get('/listing/getAllListings');
};

export const getListingByFilter = (searchParams) => {
  return axios.get('/listing/getListingByFilter', { params: searchParams });
};
