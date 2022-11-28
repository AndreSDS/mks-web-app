import {configureStore} from '@reduxjs/toolkit';
import { productReducer } from './products-slice';
import { shopCartReducer } from './shopCart-slice';

export const store = configureStore({
    reducer: {
        products: productReducer,
        shopCart: shopCartReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
