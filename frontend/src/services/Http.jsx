import axios from 'axios';

import AuthService from '@/services/Auth';
import AppConstants from '@/constants/AppConstants';

const { getToken , removeToken} = AuthService();

const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

http.interceptors.request.use(async function (config) {
    const token = await getToken(AppConstants.AUTH_TOKEN);
    if (token) {
        config.headers.common['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

http.interceptors.response.use(function (response) {
    return Promise.resolve(response);
}, function (error) {
    if(error.response.status === 401){
        removeToken(AppConstants.AUTH_TOKEN);
        location.reload();
    }
    return Promise.reject(error);
});

http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default http;