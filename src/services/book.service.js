import { config } from '../helper/config';
import axios from 'axios';

//import authHeader from './auth-header';

const API_URL = config.apiURL + '/book/';

class BookService {

    async getAll() {
        try {
            let result = await axios.get(API_URL + 'getAll');
            return result.data;
        } catch (e) {
            return e;
        }
    }

    async addBook(hotelData, bookData) {

        try {
            let data = JSON.stringify({
                hotel: hotelData._id,
                date_start: bookData.date_start,
                date_end: bookData.date_end,
                persons: bookData.persons,
                room: bookData.room,
                contact: bookData.contact
            })

            let result = await axios.post(API_URL + 'create', data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            return result.data;

        } catch (e) {

            return e;

        }
    }

    async update(bookData, newData) {

        try {

            let data = JSON.stringify({ data: bookData, newData: newData })

            let result = await axios.put(API_URL + 'update', data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            return result.data;

        } catch (e) {
            return e;
        }
    }

}

export default new BookService();