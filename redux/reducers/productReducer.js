import { LOAD_PRODUCTS, PRODUCTS_LOADING, PRODUCTS_LOADING_ERROR } from "../action/actionTypes";

const initialState = {
    card: [],
    products: { loading: false, data: [], error: false },
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS_LOADING:
            return {
                ...state,
                products: { ...state.products, loading: true },
            };
        case LOAD_PRODUCTS:
            return {
                ...state,
                products: { ...state.products, loading: false, data: action.payload },
            };
        case PRODUCTS_LOADING_ERROR:
            return {
                ...state,
                products: { loading: false, data: [], error: true },
            };
        default:
            return state;
    }
};
