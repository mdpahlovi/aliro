import axios from "axios";
import { loadProducts, productsLoadingError } from "../../action/actionCreators";

export const loadProductsData = () => {
    return async (dispatch, getState) => {
        try {
            const res = await axios.get(`/api/products`);
            if (res.data.length) {
                dispatch(loadProducts(res.data));
            }
        } catch (error) {
            dispatch(productsLoadingError());
        }
    };
};
