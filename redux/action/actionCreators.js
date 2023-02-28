import { LOAD_PRODUCTS } from "./actionTypes";

export const loadProduct = (data) => {
    return {
        type: LOAD_PRODUCTS,
        payload: data,
    };
};
