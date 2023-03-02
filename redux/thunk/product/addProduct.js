import axios from "axios";
import { addProduct } from "../../action/actionCreators";

export const addProductData = (data) => {
    return async (dispatch, getState) => {
        try {
            const res = await axios.post(`/api/products`, data);
            if (res.data.acknowledge) {
                dispatch(addProduct(data));
            }
        } catch (error) {
            console.log(error.message);
        }
    };
};
