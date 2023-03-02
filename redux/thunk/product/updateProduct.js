import axios from "axios";
import { updateProduct } from "../../action/actionCreators";

export const updateProductData = (id, data) => {
    return async (dispatch, getState) => {
        try {
            const res = await axios.patch(`/api/products/${id}`, data);
            if (res.data.acknowledge) {
                dispatch(updateProduct(id, data));
            }
        } catch (error) {
            console.log(error.message);
        }
    };
};
