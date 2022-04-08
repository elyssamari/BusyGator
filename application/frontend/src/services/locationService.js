import axios from 'axios';

export const getAllLocations = () => {
  return axios.get('/location/getAllLocations');
};
