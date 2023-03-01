import axios from "axios";
import { loadProducts } from "../../action/actionCreators";

export const loadProductsData = () => {
    return async (dispatch, getState) => {
        const res = await axios.get("http://localhost:3000/api/products");
        if (res.data.length) {
            dispatch(loadProducts(res.data));
        }
    };
};
