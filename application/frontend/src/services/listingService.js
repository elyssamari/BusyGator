import axios from 'axios';

export const getAllListings = () => {
  return axios.get('/listing/getAllListings');
};

export const getListingByFilter = (searchParams) => {
  return axios.get('/listing/getListingByFilter', { params: searchParams });
};
