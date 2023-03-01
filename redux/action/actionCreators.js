import { LOAD_PRODUCTS, PRODUCTS_LOADING, PRODUCTS_LOADING_ERROR } from "./actionTypes";

export const productsLoading = () => {
    return {
        type: PRODUCTS_LOADING,
        payload: true,
    };
};

export const loadProducts = (data) => {
    return {
        type: LOAD_PRODUCTS,
        payload: data,
    };
};

export const productsLoadingError = () => {
    return {
        type: PRODUCTS_LOADING_ERROR,
        payload: true,
    };
};
