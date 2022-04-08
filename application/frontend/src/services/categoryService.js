import axios from 'axios';

export const getAllCategories = () => {
  return axios.get('/category/getAllCategories');
};
