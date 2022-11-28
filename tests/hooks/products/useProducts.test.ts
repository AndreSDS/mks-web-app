import { useProducts } from '../../../src/hooks/products/useProducts';

describe('useProducts', () => {
    it('should return products', async () => {
        const { getProductsData } = useProducts();
        const products = await getProductsData();

        expect(products.length).toBe(6);
    });
});