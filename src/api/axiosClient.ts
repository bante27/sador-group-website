import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: 'https://your-backend-api.com/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});