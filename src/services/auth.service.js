import { config } from '../helper/config';
import axios from 'axios';
import jwt_decoder from 'jwt-decode';

const API_URL = config.apiURL + '/user/';

class AuthService {

    login(user) {
        return axios
            .post(API_URL + 'login', {
                email: user.email,
                password: user.password
            })
            .then(response => {

                if (response.data.success == true && response.data.token) {

                    var token = response.data.token;
                    var userData = jwt_decoder(token);

                    localStorage.setItem('user', JSON.stringify(userData));
                    localStorage.setItem('token', token);
                    return { token: token, jwt: userData };
                } else {
                    throw new Error('Auth Failed');
                }


            });
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API_URL + 'register', {
            email: user.email,
            password: user.password
        });
    }

}

export default new AuthService();