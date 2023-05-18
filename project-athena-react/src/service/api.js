import axios from 'axios';

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`https://jbb9mv51.api.sanity.io/v2021-10-21/assets/files/production`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}