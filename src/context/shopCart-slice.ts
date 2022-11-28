import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../interfaces/IProduct';

export interface IShopCartProduct extends IProduct {
    quantity: number;
}

export interface IShopCartState {
    products: IShopCartProduct[],
    totalPrice: number,
    isCartOpen: boolean,
}

const initialState: IShopCartState = {
    products: [],
    totalPrice: 0,
    isCartOpen: false,
}

export const shopCartSlice = createSlice({
    name: 'shopCart',
    initialState,
    reducers: {
        addProduct: (state: IShopCartState, action: PayloadAction<IProduct>) => {
            const product = action.payload;
            const productExists = state.products.find((item) => item.id === product.id);

            if (productExists) {
                productExists.quantity += 1;
            } else {
                state.products.push({
                    ...product,
                    quantity: 1,
                });
            }

            state.totalPrice += Number(product.price);
        },
        removeProduct: (state: IShopCartState, action: PayloadAction<number>) => {
            const productId = action.payload;
            const productExists = state.products.find((item) => item.id === productId);

            if (productExists) {
                productExists.quantity -= 1;
                state.totalPrice -= Number(productExists.price);

                if (productExists.quantity === 0) {
                    state.products = state.products.filter((item) => item.id !== productId);
                }
            }

            if(!state.products.length) {
                state.isCartOpen = !state.isCartOpen;
            }
        },
        deleteProduct: (state: IShopCartState, action: PayloadAction<number>) => {
            const productId = action.payload;
            const productExists = state.products.find((item) => item.id === productId);

            if (productExists) {
                state.totalPrice -= Number(productExists.price) * productExists.quantity;
                state.products = state.products.filter((item) => item.id !== productId);
            }

            if(!state.products.length) {
                state.isCartOpen = !state.isCartOpen;
            }
            
        },
        toggleCart: (state: IShopCartState) => {
            state.isCartOpen = !state.isCartOpen;
        }
    }
});

export const { addProduct, removeProduct, toggleCart, deleteProduct } = shopCartSlice.actions;
export const shopCartReducer = shopCartSlice.reducer;