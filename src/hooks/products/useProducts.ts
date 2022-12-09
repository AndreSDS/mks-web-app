import axios from "axios";

const productsUrl = "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=6&sortBy=id&orderBy=DESC";

export function useProducts() {
    const getProductsData = async () => {
        try {
            const response = await axios.get(productsUrl, {
                headers: {
                    'mode': 'no-cors',
                    'withCredentials': 'true',
                    'credentials': 'same-origin',
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                withCredentials: false,
            });

            return response.data.products;
        } catch (error) {
            console.log({ error });
        }
    }

    return { getProductsData };
};