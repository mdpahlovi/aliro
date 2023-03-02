import { ADD_PRODUCT, DELETE_PRODUCT, LOAD_PRODUCTS, PRODUCTS_LOADING, PRODUCTS_LOADING_ERROR } from "../action/actionTypes";

const initialState = {
    card: [],
    products: { loading: false, data: [], error: false },
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: { ...state.products, data: [...state.products.data, action.payload] },
            };
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
        case DELETE_PRODUCT:
            const rest_products = state.products.data.filter((product) => product._id !== action.payload);
            return {
                ...state,
                products: { ...state.products, data: rest_products },
            };
        default:
            return state;
    }
};
