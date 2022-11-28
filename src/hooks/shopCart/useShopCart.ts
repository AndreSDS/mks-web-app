import { useDispatch } from "react-redux";
import { useShopCartSelector } from "./useShopCartSelector";
import { addProduct, removeProduct, toggleCart, deleteProduct } from "../../context/shopCart-slice";
import { IProduct } from "../../interfaces/IProduct";

export function useShopCart() {
    const dispatch = useDispatch();
    const shopCartProducts = useShopCartSelector(state => state.shopCart);

    const addProductToCart = (product: IProduct) => {
        dispatch(addProduct(product));
    };

    const removeProductFromCart = (productId: number) => {
        dispatch(removeProduct(productId));
    };

    const openShopCart = () => {
        dispatch(toggleCart());
    };

    const deleteProductFromCart = (productId: number) => {
        dispatch(deleteProduct(productId));
    };

    return { shopCartProducts, addProductToCart, removeProductFromCart, openShopCart, deleteProductFromCart };
}