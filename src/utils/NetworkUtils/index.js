import axios from 'axios';

export const axios_instance = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Pragma: 'no-cache',
  },
});
