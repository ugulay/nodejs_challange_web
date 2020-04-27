import { config } from '../helper/config';
import axios from 'axios';

//import authHeader from './auth-header';

const API_URL = config.apiURL + '/hotel/';

class HotelService {

    async getHotelsByName(name) {
        let result = await axios.get(API_URL + 'getHotelsByName/' + name);
        return result.data;
    }

    async getAll() {
        let result = await axios.get(API_URL + 'getAll');
        return result.data;
    }

    async addHotel(hotelData) {

        let data = JSON.stringify({
            title: hotelData.title,
            description: hotelData.description,
            location: hotelData.location
        })

        let result = await axios.post(API_URL + 'create', data, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        return result.data;
    }

}

export default new HotelService();