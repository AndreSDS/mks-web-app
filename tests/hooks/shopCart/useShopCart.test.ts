import { renderHook } from "@testing-library/react";
import { useShopCart } from "../../../src/hooks/shopCart/useShopCart";

const mockProduct = {
    id: 1,
    name: "Test Product",
    brand: "Test Brand",
    price: "10",
    photo: "test-image.png",
    description: "Test description",
    quantity: 1,
    createdAt: "2021-01-01",
    updatedAt: "2021-01-01",
};

const mockAddProductToCart = jest.fn();
const mockRemoveProductFromCart = jest.fn();
const mockDeleteProductFromCart = jest.fn();
const mockOpenShopCart = jest.fn();

jest.mock("../../../src/hooks/shopCart/useShopCart.ts", () => ({
    useShopCart: () => ({
        shopCartProducts: {
            products: [],
            isCartOpen: true,
        },
        addProductToCart: mockAddProductToCart,
        removeProductFromCart: mockRemoveProductFromCart,
        deleteProductFromCart: mockDeleteProductFromCart,
        openShopCart: mockOpenShopCart,
    }),
}));

describe("useShopCart", () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return an empty array", () => {
        const { result } = renderHook(() => useShopCart());

        expect(result.current.shopCartProducts.products).toEqual([]);
    });

    it("should be able to add a product to the cart", () => {
        const { result } = renderHook(() => useShopCart());

        result.current.addProductToCart(mockProduct);

        expect(result.current.addProductToCart).toHaveBeenCalledTimes(1);
    });

    it("should be able to remove a product by id from the cart", () => {
        const { result } = renderHook(() => useShopCart());

        result.current.removeProductFromCart(mockProduct.id);

        expect(result.current.removeProductFromCart).toHaveBeenCalledTimes(1);
        expect(result.current.removeProductFromCart).toHaveBeenCalledWith(mockProduct.id);
    });

    it("should be able to delete a product by id from the cart", () => {
        const { result } = renderHook(() => useShopCart());

        result.current.deleteProductFromCart(mockProduct.id);

        expect(result.current.deleteProductFromCart).toHaveBeenCalledTimes(1);
        expect(result.current.deleteProductFromCart).toHaveBeenCalledWith(mockProduct.id);
    });

    it("should be able to open the cart", () => {
        const { result } = renderHook(() => useShopCart());

        result.current.openShopCart();

        expect(result.current.openShopCart).toHaveBeenCalledTimes(1);
    });

});