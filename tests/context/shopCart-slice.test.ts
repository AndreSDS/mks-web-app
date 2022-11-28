import {
    shopCartSlice,
    addProduct,
    removeProduct,
    toggleCart,
    deleteProduct,
} from "../../src/context/shopCart-slice";

describe("shopCartSlice", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should add a product to the cart", () => {
        const initialState = {
            products: [],
            totalPrice: 0,
            isCartOpen: false,
        };

        const action = addProduct({
            id: 1,
            name: "test 1",
            price: "10",
            photo: "test.jpg",
            description: "test",
            quantity: 1,
            createdAt: "2021-01-01",
            updatedAt: "2021-01-01",
            brand: "test"
        });

        const newState = shopCartSlice.reducer(initialState, action);

        expect(newState.products.length).toBe(1);
        expect(newState.totalPrice).toBe(10);
    });

    it("should increase the quantity of a product in the cart", () => {
        const initialState = {
            products: [{
                id: 1,
                name: "test 1",
                price: "10",
                photo: "test.jpg",
                description: "test",
                quantity: 1,
                createdAt: "2021-01-01",
                updatedAt: "2021-01-01",
                brand: "test"
            }],
            totalPrice: 10,
            isCartOpen: false,
        };

        const action = addProduct({
            id: 1,
            name: "test 1",
            price: "10",
            photo: "test.jpg",
            description: "test",
            quantity: 1,
            createdAt: "2021-01-01",
            updatedAt: "2021-01-01",
            brand: "test"
        });

        const newState = shopCartSlice.reducer(initialState, action);

        expect(newState.products[0].quantity).toBe(2);
        expect(newState.totalPrice).toBe(20);
    });

    it("should remove a product from the cart", () => {
        const initialState = {
            products: [
                {
                    id: 1,
                    name: "test 1",
                    price: "10",
                    photo: "test.jpg",
                    description: "test",
                    quantity: 1,
                    createdAt: "2021-01-01",
                    updatedAt: "2021-01-01",
                    brand: "test",
                },
            ],
            totalPrice: 10,
            isCartOpen: false,
        };

        const action = removeProduct(1);

        const newState = shopCartSlice.reducer(initialState, action);

        expect(newState.products.length).toBe(0);
        expect(newState.totalPrice).toBe(0);
    });

    it("should delete a product from the cart", () => {
        const initialState = {
            products: [
                {
                    id: 1,
                    name: "test 1",
                    price: "10",
                    photo: "test.jpg",
                    description: "test",
                    quantity: 1,
                    createdAt: "2021-01-01",
                    updatedAt: "2021-01-01",
                    brand: "test",
                },
            ],
            totalPrice: 10,
            isCartOpen: false,
        };

        const action = deleteProduct(1);

        const newState = shopCartSlice.reducer(initialState, action);

        expect(newState.products.length).toBe(0);
        expect(newState.totalPrice).toBe(0);
    });

    it("should toggle the cart", () => {
        const initialState = {
            products: [],
            totalPrice: 0,
            isCartOpen: false,
        };

        const action = toggleCart();

        const newState = shopCartSlice.reducer(initialState, action);

        expect(newState.isCartOpen).toBe(true);
    });
});
