import { ADD_PRODUCT, DELETE_PRODUCT, LOAD_PRODUCTS, PRODUCTS_LOADING, PRODUCTS_LOADING_ERROR, UPDATE_PRODUCT } from "./actionTypes";

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

export const addProduct = (data) => {
    return {
        type: ADD_PRODUCT,
        payload: data,
    };
};
export const deleteProduct = (data) => {
    return {
        type: DELETE_PRODUCT,
        payload: data,
    };
};
export const updateProduct = (id, data) => {
    return {
        type: UPDATE_PRODUCT,
        payload: { id, data },
    };
};
