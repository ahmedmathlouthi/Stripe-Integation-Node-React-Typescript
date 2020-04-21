import { typedAction } from "../helpers";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { RootState } from "..";
import { sampleProducts } from "../../data/sampleProducts";

export const setProducts = (products: Product[]) => {
    return typedAction("products/SET_PRODUCTS", products);
};
export const requestProducts = () => {
    return typedAction("products/SET_PRODUCTS_REQUEST");
}
export const setProductsFailure = () => {
    return typedAction("products/SET_PRODUCTS_FAILURE");
};

export const addToCart = (product: Product, quantity: number) => {
    return typedAction("products/ADD_TO_CART", { product, quantity });
};

export const loadProducts = () => {
    return (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
        setTimeout(() => {
            dispatch(
                setProducts([...getState().products.products, ...sampleProducts])
            );
        }, 500);
    };
};