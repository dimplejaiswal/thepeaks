import axios from 'axios';
import { API_KEY, baseURL, timeout } from './config';

export default axios.create({
    baseURL,
    timeout,
    params: {
        'api-key': API_KEY,
    },
});
