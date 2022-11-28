import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../interfaces/IProduct';

export interface IProductState {
    products: IProduct[];
}

const initialState: IProductState = {
    products: [],
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state: IProductState, action: PayloadAction<IProduct[]>) => {
            const { payload } = action;
            state.products = action.payload;
        }
    }
})

export const { setProducts } = productSlice.actions;
export const productReducer = productSlice.reducer;