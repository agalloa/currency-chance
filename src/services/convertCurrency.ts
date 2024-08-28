import axios from 'axios';

const apiUrl = `${process.env.REACT_APP_EXCHANGERATE_API_URL}`;
const apiKey = process.env.REACT_APP_EXCHANGERATE_API_KEY;

export const convertCurrency = async (baseCurrency: string, targetCurrency: string, amount: number) => {
    const url = `${apiUrl}/${apiKey}/pair/${baseCurrency}/${targetCurrency}/${amount}`;

    try {
        const response = await axios.get(url);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching conversion data:", error);
        throw error;
    }
}
