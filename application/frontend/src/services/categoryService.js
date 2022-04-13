/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 * This File contains the services of the categories.
 */
import axios from 'axios';

export const getAllCategories = () => {
  return axios.get('/category/getAllCategories');
};
