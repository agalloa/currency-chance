import axios from 'axios';

const apiUrl = `${process.env.REACT_APP_XE_API_URL}/currencies`;
const accountId = process.env.REACT_APP_XE_ACCOUNT_ID;
const apiKey = process.env.REACT_APP_XE_API_KEY;

export const getAllCurrencies = async () => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(`${accountId}:${apiKey}`)}`
    };
    try {
        const response = await axios.get(apiUrl, { headers });
        return response.data;
    } catch (error) {
        console.error('Error fetching conversion:', error);
        throw error;
    }
}