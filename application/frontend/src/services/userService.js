/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 * This File contains the services of the users.
 */
import axios from 'axios';

export const getAllUsers = () => {
    return axios.get('/user/getAllUsers');
};
