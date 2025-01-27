const initialState = {
    payment: [],
    loading: false,
    error: null
}

export const paymentReducer = (state = initialState, action) => {

    switch (action.type) {

        case CREATE_PAYMENT_REQUEST:
            return { ...state, loading: true, error: null };

        case CREATE_PAYMENT_SUCCESS:
            return { ...state, loading: false, error: null, payment: action.payload };

        case CREATE_PAYMENT_FAILURE:
            return { ...state, loading: false, error: action.payload }

        case UPDATE_PAYMENT_REQUEST:
            return { ...state, loading: true, error: null };

        case UPDATE_PAYMENT_SUCCESS:
            return { ...state, loading: false, error: null, payment: action.payload };

        case UPDATE_PAYMENT_FAILURE:
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }   
