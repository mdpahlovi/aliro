import axios from "axios";
import { deleteProduct } from "../../action/actionCreators";

export const deleteProductData = (id) => {
    return async (dispatch, getState) => {
        try {
            const res = await axios.delete(`/api/products/${id}`);
            if (res.data.acknowledge) {
                dispatch(deleteProduct(id));
            }
        } catch (error) {
            console.log(error.message);
        }
    };
};
