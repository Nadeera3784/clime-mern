import axios from 'axios';
import AuthService from '@/services/Auth';
import AppConstants from '@/constants/AppConstants';

const { getToken } = AuthService();

const http = axios.create({
    baseURL: 'http://127.0.0.1:3030/api/v1',
})
http.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(AppConstants.AUTH_TOKEN)}`;

http.interceptors.response.use(function (response) {
    return Promise.resolve(response);
}, function (error) {
    return Promise.reject(error);
});

http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default http;