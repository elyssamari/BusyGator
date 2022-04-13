/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 * This File contains the services of the locations.
 */
import axios from 'axios';

export const getAllLocations = () => {
  return axios.get('/location/getAllLocations');
};
