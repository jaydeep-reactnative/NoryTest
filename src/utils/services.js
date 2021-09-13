import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://dog.ceo/api/breed',
  timeout: 5000,
});
