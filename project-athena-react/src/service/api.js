import axios from 'axios';
import * as dotenv from 'dotenv'
dotenv.config();

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${process.env.API_URI}/files`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}