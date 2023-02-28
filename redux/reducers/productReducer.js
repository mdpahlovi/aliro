const initialState = {
    card: [],
    products: { loading: true, data: [], error: false },
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
