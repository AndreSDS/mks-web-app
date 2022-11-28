import axios from "axios";

const productsUrl = "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=6&sortBy=id&orderBy=DESC";

export function useProducts() {
    const getProductsData = async () => {
        try {
            const response = await axios.get(productsUrl);

            return response.data.products;
        } catch (error) {
            console.log({ error });
        }
    }

    return { getProductsData };
};