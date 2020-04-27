import { config } from '../helper/config';
import axios from 'axios';

import authHeader from './auth-header';

const API_URL = config.apiURL + '/user/';

class UserService {

    getPublicContent() {
        //NOT IMPLEMENTED
        return axios.get(API_URL + 'all');
    }

    getUserBoard() {
        //NOT IMPLEMENTED
        return axios.get(API_URL + 'user', { headers: authHeader() });
    }

    getModeratorBoard() {
        //NOT IMPLEMENTED
        return axios.get(API_URL + 'mod', { headers: authHeader() });
    }

    getAdminBoard() {
        //NOT IMPLEMENTED
        return axios.get(API_URL + 'admin', { headers: authHeader() });
    }

}

export default new UserService();