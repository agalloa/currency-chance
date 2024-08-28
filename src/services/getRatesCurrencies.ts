import axios from "axios";

const apiUrl = `${process.env.REACT_APP_EXCHANGERATE_API_URL}`;
const apiKey = process.env.REACT_APP_EXCHANGERATE_API_KEY;

export const getRatesCurrencies = async () => {

    const url = `${apiUrl}/${apiKey}/latest/COP`;

    try {
        const response = await axios.get(url);
        console.log(response.data);

        return response.data;
    } catch (error) {
        console.error("Fetching exchange rate data failed:", error);
        throw error;
    }
}